function tabulate2(data, columns, table_name) {
    var table_name = d3.select("body").append("table")
            .attr("style", "margin-left: 250px"),
        thead = table_name.append("thead"),
        tbody = table_name.append("tbody");

    // append the header row
    thead.append("tr")
        .selectAll("th")
        .data(columns)
        .enter()
        .append("th")
            .text(function(column) { return column; });
            
        var selected_rows = [];

    
    // create a row for each object in the data
    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
            .attr("rowstat", function(d) { return d.oppt_id; })
            .attr("chosen", false)
        .append("tr")
;
                

    // create a cell in each row for each column
    var cells = rows.selectAll("td")
        .data(function(row) {
            return columns.map(function(column) {
                return {column: column, value: row[column]};
            });
        })
        .enter()
        .append("td")
        .attr("style", "font-family: Courier") // sets the font style
            .html(function(d) { return d.value; });
    
    return table_name;
}