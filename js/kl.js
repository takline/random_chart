/*! kl.js */

(function(window, undefined) {
	kl = {
		'containing' : function() {
			var paths = location.pathname;
			var obj_ids = paths.slice(paths.indexOf('fetch/') + 6, paths.lastIndexOf('/')).split('/');
			var files = _.invert(kl.get_folders(obj_ids[obj_ids.length - 2]));
			var folder = obj_ids.slice(-1);
			return [folder, files[folder]];
		},

		'create_txt' : function(data, name, objID, next, path) {
			var doc_text = JSON.stringify(data);
			var textfield = '<input type="HIDDEN" name="textfield" value=\'' + doc_text + '\'>';
			myForm = make_kl_form();
			$(myForm).append('<input type="hidden" name="func" value="ll">');
			$(myForm).append('<input type="hidden" name="objType" value="145">');
			$(myForm).append('<input type="hidden" name="objAction" value="create2">');
			$(myForm).append('<input type="hidden" name="parentId" value="' + objID + '">');
			$(myForm).append('<input type="hidden" name="nextURL" value="'+ next +'">');
			$(myForm).append('<input type="hidden" id="name" name="name" value="' + name + '">');
			$(myForm).append(textfield);
			$(myForm).append('<input type="HIDDEN" id="classification_form_name" name="classification_form_name" value="CreateForm">');
			$(myForm).append('<input type="HIDDEN" name="multiClass" value="0">');
			$(myForm).append('<input type="HIDDEN" name="funcAccess" value="true">');
			$(myForm).append('<input type="HIDDEN" name="IsRMGroup" value="false">');
			$(myForm).append('<input type="HIDDEN" name="provFuncAccess" value="true">');
			$(myForm).append('<input type="HIDDEN" name="selectRSIfromSearch" value="yes">');
			$(myForm).append('<input type="HIDDEN" name="RsiFormName" value="CreateForm">');
			$(myForm).append('<input type="HIDDEN" name="InheritRequired" value="0">');
			$(myForm).append('<input type="HIDDEN" name="CREATE_Required" value="1">');
			$(myForm).append('<input type="HIDDEN" name="CREATE_Edited" value="1">');
			$(myForm).append('<input type="HIDDEN" name="CREATE_CacheID" value="0">');
			$(myForm).append('<input type="HIDDEN" name="CREATE_VerNum" value="0">');
			$(myForm).append('<input type="HIDDEN" name="CTT_ID" value="' + objID + '">');
			$(myForm).append('<input type="HIDDEN" name="CTT_PathSaved" value="'+ path +'">');
			submit_to_kl(myForm);
		},

		'create_dir' : function(name, objID) {
			var request_token = kl.get_secure_token(objID, 'create');
			var form = make_kl_form();
			var inputs = [
				'<input type="hidden" name="func" value="ll">',
				'<input type="hidden" name="objType" value="0">',
				'<input type="hidden" name="objAction" value="create2">',
				'<input type="hidden" name="parentId" value="' + objID  + '">',
				'<input type="hidden" name="nextURL" value="/kl/livelink.exe">',
				'<input type="HIDDEN" name="secureRequestToken" value="'+ request_token +'">',
				'<input class="valueEditable multilingual" type="text" id="name" name="name" value="' + name  + '" size="40" maxlength="248">',
				'<input type="HIDDEN" id="classification_form_name" name="classification_form_name" value="CreateForm">',
				'<input type="HIDDEN" name="funcAccess" value="true">',
				'<input type="HIDDEN" name="provFuncAccess" value="true">',
				'<input type="HIDDEN" name="InheritRequired" value="0">',
				'<input type="HIDDEN" name="CREATE_Required" value="0">',
				'<input type="HIDDEN" name="CREATE_Edited" value="0">',
				'<input type="HIDDEN" name="CREATE_ChangeCacheID" value>',
				'<input type="HIDDEN" name="CREATE_CacheID" value="0">',
				'<input type="HIDDEN" name="CREATE_VerNum" value="0">',
				'<input type="HIDDEN" name="CTT_ID" value="' + objID + '">',
				'<input type="HIDDEN" name="CTT_PathSaved" value="'+ name +'">'
			];
			_.each(inputs, function(i) { $(form).append(i); });
			return submit_to_kl(form);
		},

		'copy_item' : function(item_id, to_id, to_name) {
			var request_token = kl.get_secure_token(item_id, 'copy');
			var form = make_kl_form();
			var inputs = [
				'<input type="HIDDEN" name="func" value="ll">',
				'<input type="HIDDEN" name="objAction" value="copy2">',
				'<input type="HIDDEN" name="objID" value="'+ item_id +'">',
				'<input type="HIDDEN" name="nextURL" value="/kl/livelink.exe">',
				'<input type="HIDDEN" name="secureRequestToken" value="'+ request_token +'">',
				'<input class="valueEditable multilingual" type="text" name="DEST_NAME" id="DEST_NAME" value="'+ to_name +'" size="40" maxlength="255">',
				'<input type="HIDDEN" name="DEST_ID" value="'+ to_id +'">',
				'<input type="HIDDEN" name="COPY_Required" value="0">',
				'<input type="HIDDEN" name="COPY_Edited" value="0">',
				'<input type="HIDDEN" name="DEST_PathSaved" value="">',
				'<input type="HIDDEN" name="COPY_CacheID" value="0">',
				'<input type="RADIO" name="CopyOption" id="CopyOption" value="0" checked>',
				'<input type="RADIO" name="RMClassInherit" id="RMClassInherit" value="true" checked="">'
			];
			add_inputs(form, inputs);
			return submit_to_kl(form);
		},

		'upload_file' : function(where, name, file_input) {
			var request_token = kl.get_secure_token(item_id, 'copy');
			var form = make_kl_form();
			var inputs = [
				'<input type="hidden" name="objType" value="144">',
				'<input type="hidden" name="objAction" value="create2">',
				'<input type="hidden" name="parentId" value="' + where +'">',
				'<input type="hidden" name="nextURL" value="/kl/livelink.exe">',
				'<input id="creationTypeEx" title="Existing" type="RADIO" name="creationType" checked value="Ex">',
				file_input,
				'<input class="valueEditable" type="file" id="versionFile" name="versionFile">',
				'<input type="HIDDEN" name="uponCreate" value="nextURL">',
				'<input class="valueEditable multilingual" type="text" id="name" name="name" value="'+ name +'">',
				'<input type="HIDDEN" id="classification_form_name" name="classification_form_name" value="CreateForm">',
				'<input type="HIDDEN" name="multiClass" value="0">',
				'<input type="HIDDEN" name="funcAccess" value="true">',
				'<input type="HIDDEN" name="IsRMGroup" value="false">',
				'<input type="HIDDEN" name="provFuncAccess" value="true">',
				'<input type="HIDDEN" name="InheritRequired" value="0">',
				'<input type="HIDDEN" name="CREATE_Required" value="1">',
				'<input type="HIDDEN" name="CREATE_Edited" value="0">',
				'<input type="HIDDEN" name="CREATE_CacheID" value="0">',
				'<input type="HIDDEN" name="CREATE_VerNum" value="0">'
			];
			add_inputs(form, inputs);
			return submit_to_kl(form);
		},

		'delete' : function(item_id, item_name) {
			var request_token = kl.get_secure_token(item_id, 'delete');
			var form = make_kl_form();
			var inputs = [
				'<INPUT TYPE="HIDDEN" NAME="func" VALUE="ll">',
				'<INPUT TYPE="HIDDEN" NAME="objAction" VALUE="delete2">',
				'<INPUT TYPE="HIDDEN" NAME="objID" VALUE="'+ item_id  +'">',
				'<INPUT TYPE="HIDDEN" NAME="nextURL" VALUE="/kl/livelink.exe">',
				'<INPUT TYPE="HIDDEN" NAME="secureRequestToken" VALUE="'+ request_token +'">',
				'<INPUT TYPE="HIDDEN" NAME="DEST_NAME" ID="DEST_NAME" VALUE="'+ item_name +'">'
			];
			add_inputs(form, inputs);
			return submit_to_kl(form);
		},

		'move' : function(item_id, to_id, to_name) {
			var request_token = kl.get_secure_token(item_id, 'move');
			var form = make_kl_form();
			var inputs = [
				'<input type="HIDDEN" name="func" value="ll">',
				'<input type="HIDDEN" name="objAction" value="move2">',
				'<input type="HIDDEN" name="objID" value="'+ item_id +'">',
				'<input type="HIDDEN" name="nextURL" value="/kl/livelink.exe">',
				'<input type="HIDDEN" name="secureRequestToken" value="'+ request_token +'">',
				'<input type="text" name="DEST_NAME" id="DEST_NAME" value="'+ to_name +'">',
				'<input type="HIDDEN" name="DEST_ID" value="'+ to_id +'">',
				'<input type="HIDDEN" name="DEST_PathSaved" value="">',
				'<input type="radio" name="inheritPermOption" id="inheritPermOption" value="true" checked>',
				'<input type="HIDDEN" name="MOVE_Required" value="1">',
				'<input type="HIDDEN" name="MOVE_Edited" value="0">',
				'<input type="HIDDEN" name="MOVE_CacheID" value="0">',
				'<input type="RADIO" name="MoveOption" id="MoveOption" value="0" checked>',
				'<input type="RADIO" name="RMClassInherit" id="RMClassInherit" value="true" checked>'
			];
			add_inputs(form, inputs);
			return submit_to_kl(form);
		},

		'get_secure_token' : function(objID, act) {
			var action = act || 'create';
			if (_.indexOf(['create', 'delete', 'copy', 'move'], action) != -1) {
				var token;
				var url = {
					'create' : function(objID) {
						return 'https://knowledgelink.kdc.capitalone.com/kl/livelink.exe?func=ll&objType=0&objAction=create&parentId=' + objID + '&nextURL=a';
					},
					'copy' : function(objID) {
						return 'https://knowledgelink.kdc.capitalone.com/kl/livelink.exe?func=ll&objId=' + objID + '&objAction=copy&nexturl=a'
					},
					'move' : function(objID) {
						return 'https://knowledgelink.kdc.capitalone.com/kl/livelink.exe?func=ll&objId=' + objID + '&objAction=move&nexturl=a'
					},
					'delete' : function(objID) {
						return 'https://knowledgelink.kdc.capitalone.com/kl/livelink.exe?func=ll&objId=' + objID + '&objAction=delete&nexturl=a'
					}
				};
				$.ajax({
					'url' : url[action](objID),
					'async' : false,
					'error' : function() {
						console.log(arguments);
					},
					'success' : function(data) {
						var start = data.indexOf('Token');
						var end = data.indexOf('>', start);
						token = data.slice(start + 14, end - 1);
					}
				});
				return token;
			}
			else {
				return "Invalid Action";
			}
		},

		'get_folders' : function(objID) {
			var folders;
			$.ajax({
			'url' : 'https://knowledgelink.kdc.capitalone.com/kl/livelink.exe?func=ll&objId=' + objID,
			'async' : false,
			'success' : function(data) {
				var start = data.indexOf("DataStringToVariables");
				var end = data.indexOf(")' );", start);
				var these_folders = _.reduce(
					$.parseJSON(data.slice(start+26, end))['myRows'],
					function(memo, value) {
						memo[value['name']] = value['dataId'];
						return memo;
					},
					{}
				);
				folders = these_folders;
			}
			});
			return folders;
		},

		'get_eID' : function() {
			var eID;
			$.ajax({
				type : "get",
				'url' : 'https://knowledgelink.kdc.capitalone.com/kl/livelink.exe?func=ll&objtype=142&objaction=browse',
				'async' : false,
				'success' : function(data) {
					var start = data.indexOf("login");
					var end = data.indexOf("}", start);
					eID = data.slice(start+8, end-1);
				}
			});
			return eID;
		},

		'get_name' : function() {
			var eID;
			$.ajax({
				type : "get",
				'url' : 'https://knowledgelink.kdc.capitalone.com/kl/livelink.exe?func=ll&objtype=142&objaction=browse',
				'async' : false,
				'success' : function(data) {
					var start = data.indexOf("firstName");
					var end = data.indexOf(",", start);
					first = data.slice(start+12, end-1);
					start = data.indexOf("lastName");
					end = data.indexOf(",", start);
					last = data.slice(start+11, end-1);
					name= first+ " " + last;
				}
			});
			return name;
		},

		'get_basic_info' : function() {
			var info = {};
			$.ajax({
				'url' : 'https://knowledgelink.kdc.capitalone.com/kl/livelink.exe?func=ll&objtype=142&objaction=browse',
				'async' : false,
				'success' : function(data) {
					var start = data.indexOf("login");
					var end = data.indexOf("}", start);
					info['eid'] = data.slice(start+8, end-1);
					start = data.indexOf("email");
					end = data.indexOf(",", start);
					info['email'] = data.slice(start+8, end-1);
					start = data.indexOf("firstName");
					end = data.indexOf(",", start);
					info['first_name'] = data.slice(start+12, end-1);
					start = data.indexOf("lastName");
					end = data.indexOf(",", start);
					info['last_name'] = data.slice(start+11, end-1);
					info['full_name'] = info['first_name'] + " " + info['last_name'];
					start = data.indexOf("ID");
					end = data.indexOf(",", start);
					info['kl_id'] = data.slice(start+5, end);
					start = data.indexOf("DataStringToVariables");
					end = data.indexOf(")' );", start);
					var folders = _.reduce(
						$.parseJSON(data.slice(start+26, end))['myRows'],
						function(memo, value) {
							memo[value['name']] = value['dataId'];
							return memo;
						},
						{}
					);
					info['home_folders'] = folders;
					info['framework'] = _.has(folders, 'framework');
					if (_.has(folders, 'framework')) {
						info['fw_id'] = folders['framework'];
					}
				}
			});
			return info;
		},

		'extract' : function(data, key) {
			var options = {
				'folders' : function() {
					var start = data.indexOf("DataStringToVariables");
					var end = data.indexOf(")' );", start);
					return _.reduce(
						$.parseJSON(data.slice(start+26, end))['myRows'],
						function(memo, value) {
							memo[value['name']] = value['dataId'];
							return memo;
						},
						{}
					);
				},

				'eID' : function() {
					var start = data.indexOf("login");
					var end = data.indexOf("}", start);
					return data.slice(start+8, end-1);
				},

				'secure_token' : function() {
					var start = data.indexOf("Token");
					var end = data.indexOf(">", start);
					return data.slice(start + 14, end - 1);
				}
			};
			return _.result(options[key]);
		}
	};

	make_kl_form = function() {
		var myForm = document.createElement("form");
		myForm.method="post";
		myForm.name = "CreateForm";
		myForm.id = "CreateForm";
		myForm.action = "/kl/livelink.exe";
		myForm.enctype = "multipart/form-data";
		return myForm;
	};

	add_inputs = function add_inputs(form, inputs) {
		_.each(inputs, function(i) { $(form).append(i); });
		return form;
	};

	submit_to_kl = function(form) {
		var this_data  = $(form).serialize();
		var return_data;
		/*
		$.ajax({
			url : '/kl/livelink.exe',
			type : 'POST',
			data : this_data,
			async : false,
			success : function(data) {
				return_data = data;
			}
		});
		*/
		$.post('/kl/livelink.exe', this_data, function(data) { return_data = data; });
		return return_data;
	}

	/*
	submit_to_kl = function(form) {
		document.body.appendChild(form);
		form.submit();
	};
	*/

	window.kl = kl;
})(window);

