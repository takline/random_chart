// Get the data
d3.csv("qtr_stats.csv", function(error, data) {
	csv = csv.filter(function(row) {
        return row['Class'] == 'Second Class' || row['Class'] == 'First Class';
    })
    data.forEach(function(d) {
        d.oppt_id = d.oppt_id;
        d.tmso = d.tmso;
        d.clsd_dt = +d.clsd_dt;
        d.pass_miss = d.pass_miss;
    });

// render the table
 var peopleTable = tabulate(data, ["oppt_id", "tmso", "clsd_dt", "pass_miss"], table_1);
 

});