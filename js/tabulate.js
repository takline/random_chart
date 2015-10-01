function tabulate(data, columns, table_name) {
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
        var total_list = [];
        var new_row = 0;
        var old_row = 0;

var revenue='Revenue2';
    
    // create a row for each object in the data
    var rows = tbody.selectAll("tr")
        .data(data)
        .enter()
        .append("tr")
            .attr('class', function(d,i){ return "col_" + i; })
        .on("click", function mouseOver(d, i){
                        if (i==total_list[total_list.length]) {
                               // d3.select(this).style({"background-color": "white"});
                               // selected_rows.splice(selected_rows.indexOf(i), 1);
                              //  chart.unload();
                                } 
                        else {          
                                        $.get('./js/data/oppt_data.csv', function(data) {
                                        var rows = data.split("\n");
                                        var final_data=[]
                                        rows.forEach( function getvalues(ourrow) {
                                            var columns = ourrow.split(",");
                                            if (d.oppt_id==(columns[0].replace(/['"]+/g, ''))) {
                                                final_data.push(columns);
                                            }

                                            })
                                       // if (d.oppt_id==final_data[0][0]
                                            chart.load({
                                            columns: [ [revenue, final_data[0][1], final_data[0][2], final_data[0][3], final_data[0][4], final_data[0][5], final_data[0][6], final_data[0][7], final_data[0][8], final_data[0][9]] ,['Goal', final_data[0][10], final_data[0][10], final_data[0][10], final_data[0][10], final_data[0][10], final_data[0][10], final_data[0][10], final_data[0][10], final_data[0][10]  ] ],
                                            type:'bar',
                                            types: {
                                                  Goal: 'line'
                                                }
                                            });
                                    });
                                        total_list.push(i);
                                        d3.selectAll("tr").style({"background-color": function(g,j) {
                                                                                    if (j-1 === i){
                                                                                       return "LightGray";
                                                                                     }
                                                                                    else {
                                                                                       return "white";
                                                                                     }
                                                                                 }});
                                       // d3.select(this).style({"background-color": "LightGray"});
                                        selected_rows=[i];
                                        total_list.push(i);
                                        var fields = document.getElementById("drop_down").getElementsByTagName('*');
                                                for(var i = 0; i < fields.length; i++)
                                                {
                                                    fields[i].disabled = false;
                                                }
                                        document.getElementById("comments").disabled = false;
                                        
                            }
                    })
;
                

    // create a cell in each row for each column
    var cells = rows.selectAll("td")
        .data(function(row) {
            return columns.map(function(column) {
                return {column: column, value: row[column]};
            });
        })
        .enter()
        //.append(function(d) { if (d.column=='comments') {return document.createElement('input');} else {return  document.createElement('td');} })
        .append('td')
       // .on("input", function() {'something'})
        .attr("style", "font-family: Courier") // sets the font style
            .html(function(d) { return d.value; })
          ;



 // d3.selectAll("input")
 //     .on("change", change);


 //   function change() {
 //   var value = this.value;
//    revenue=value;
//  };
    
    return table_name;
}