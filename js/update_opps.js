var updated_opps=[];
$.get('../data/daily_updates.txt', function(data) {


    var rows = data.split(/\r\n|\n/);
 rows.forEach( function getvalues(ourrow) {

	str = ourrow.replace(/"/g, "");
    updated_opps.push(str);

})
})