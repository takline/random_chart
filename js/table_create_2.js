// Get the data
d3.csv("qtr_stats.csv", function(error, data) {
    data.forEach(function(d) {
        d.oppt_id = d.oppt_id;
        d.tmso = d.tmso;
        d.clsd_dt = +d.clsd_dt;
        d.pass_miss = d.pass_miss;
    });

    var statsToPlot = [];

    d3.selectAll("tr[chosen='true']")
        .each(function(d) { statsToPlot.push(d.oppt_id); });

        
// render the table
 var peopleTable = tabulate(data, ["oppt_id", "tmso", "clsd_dt", "pass_miss"], table_1);
 

});