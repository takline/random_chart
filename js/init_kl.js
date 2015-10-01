var db = { 
    init: function() {
        var visitor = kl.get_basic_info();
        if (visitor) { db.set('visitor', function() { return visitor; }); }
        else { db.set('visitor', function() { return kl.get_basic_info(); }); }
    },        
    set: function(key, val) { db[key] = val; },
    get: function(key) { return db[key]; },
    setLocal: function(key, val) { me.setLocal(key, val, db.settings); },
    getLocal: function(key) { return me.getLocal(key, db.settings); },
    settings: {eid: "jfe868", app_id : "1178120335", app_name: "cross_sell", sam_prefix: "xs", dp_id : "1207660208"},
    app_name : function() { return db.settings.app_name; },
    visitor: function() { return {}; },
    sendSam: function(data) { me.sendSam(data, db.settings, db.visitor()); }, 
    current_date: function() { var d = new Date(); return d.toJSON().slice(0,d.toJSON().indexOf('T')); },
    current_time: function() { var d = new Date(); return d.toJSON(); },
    current_state: {},
    current_view: function() { return db['current_state']['view']; },
    current: function(data) { 
      var response;
      if ( _.isArray(db[data]) ) { response = db.search(data, {wcis_id: db.current_acct}); }
      else if ( _.isFunction(db[data]) ) { response = db[data].apply(undefined, arguments); }
      else if ( _.isObject(db[data]) ) { response =  db[data][db.current_acct]; }
      else { response = _.has(db, data) ? db[data] : undefined; }
      return response;
    },
    acct_view: "",
    selectedFrom: "",
    set_state: function(view, context) { 
        db['current_state'] = {view: view, context: context};
        Templates[view](context);
    }, 
    get_state: function() { return db['current_state']; },
    save_state: function() { me.setLocal('current_state', {view: view, context: context}, db['settings']); },
    load_state: function() {  
        var state = me.getLocal('current_state', db['settings']); 
        db.set_state.apply(undefined, _.values(state)); },
    refresh_state: function() {  db.set_state.apply(null, _.values(db.current_state)); },
    search: function(item, cond) { return _.where(db.get(item), cond); },
    rl_db: {},
    products : [],
    filter_box: {},
    filters : [],
    sort_box: {},
    sorts: [],
    sort : "",
    dproducts : [],
    notes : [],
    indices: {},
    eid_selected: [],

	intellixList : [],
	submitLogins : function() {
		var packet = [];
		for (var i = 0; i < db.intellixList.length; i++) {
			var row = db.intellixList[i];
			var oid = row.USER_OID;
			if ($("#intellixLoginOID_" + oid)[0].checked) {
				var name = (row.LAST_NAME == "" && row.FIRST_NAME == "") ? "N/A" : row.LAST_NAME + ", " + row.FIRST_NAME;
				var email = (row.EMAIL == "") ? "N/A" : row.EMAIL;
				packet.push({
					WCIS_ID : row.wcis_id,
					MIGRATION_WCIS_ID : row.to_wcis_id_lvl,
					CUST_NM : row.CUST_NM,
					SUBMITTER_EID : db.visitor().eid.toLowerCase(),
					SUBMITTER_NAME : db.visitor().full_name,
					SUBMITTER_EMAIL : db.visitor().email,
					SUBMISSION_SELECTION : oid,
					LOGIN_NAME : name,
					LOGIN_ID : row.LOGIN_ID,
					LOGIN_EMAIL : email
				});
			}
		}

		if (!_.isEmpty(packet)) {
			me.sendSam(me.escp(packet), {sam_prefix: "xi", dp_id : db.settings.dp_id} , db.visitor());
			Alerts('intellix_logins');
		}
	},

    results: function() { return filtered(db.rl_db, db.filters); },
    sorted: function() { return sorted(); },
    presults: function() { return {}; },
    custom: function(accts) { db.set_state('select_rl', accts); },
    make_index: function (data_set, key) { 
      var ind = _.reduce(db[data_set], function(c, v, i) { 
        _.has(c, v[key]) ? c[v[key]].push(i) : c[v[key]] = [i];
        return c;
      }, {});
      //Can easily make this a data_set, key index lookup so we can index on multiple columns
      //db.indices[data_set][key] = ind;
      db.indices[data_set] = ind;
    },
    //This is also easy to change to a generic data, key, value join
    eid_join: function (data_set, eid) {
      //Change to function(data_set, key, value) {
      var rls = me.mapVal(db.search('eid_mapping', {eid: eid}), 'wcis_id');
      //instead of {eid: eid}, _.object([[kev, value]])
      var joined = _.reduce(rls, function(c, v) { 
        var r = db.indices[data_set][v];
        //db.indices[data_set][key][v];
        _.each(r, function(i) { c.push(db[data_set][i]); });
        return c;
      }, []);
      return joined;
    }, 
    eid_results: function(data, eids) { 
      var eids = eids || db.eid_selected;
      //May be smarter to index on eid? unsure...
      if (eids) { 
        if (!_.has(db.indices, data)) { db.make_index(data, 'wcis_id'); }
        return me.mapcat(function(v) { return _.map(db.eid_join(data, v.eid), function(o) { o['eid'] = v.display; return o; }); }, eids);
      }
      else { return []; }
    },
    sorted_eid: function(data, key) {
		return sortData([{sortType: 'Text, Ascending', criteria: 'RNK_ORDER'}, {sortType: 'Text, Descending', criteria: 'crtd'}], db.eid_results(data));
    },


	
};