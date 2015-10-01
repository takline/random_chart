
    $("#example tbody tr").click( function () {

            
        if ($(this).hasClass('row_selected'))
                {
                $(this).removeClass('row_selected'); 
                $(this).addClass('row_hovered');
                chart.unload();
                current_oppt_id='';

                document.getElementById("oppt_header").innerHTML =''
               for(var i = 0; i < fields.length; i++)
               {
                   fields[i].disabled = true;
               }
             document.getElementById("comments").disabled = true;

            $(document).ready(function() {$('#product_select').multiselect('disable');});

                }
        else {
            $("#example tbody tr").removeClass('row_selected');
            $(this).removeClass('row_hovered');
            $(this).addClass('row_selected');
            current_oppt_id=table.cell('.row_selected', 0).data();

        $(document).ready(function() {$('#product_select').multiselect('enable');});
            document.getElementById("oppt_header").innerHTML = "Update info for Opportunity ID "+table.cell('.row_selected', 0).data();
            

               for(var i = 0; i < fields.length; i++)
               {
                   fields[i].disabled = false;
               }
       document.getElementById("comments").disabled = false;

          chart.load({
            columns: [
            [ 'Revenue'  ,
            final_data_chart[table.cell('.row_selected', 0).data()][0] ,
             final_data_chart[table.cell('.row_selected', 0).data()][1], 
            final_data_chart[table.cell('.row_selected', 0).data()][2], 
            final_data_chart[table.cell('.row_selected', 0).data()][3], 
            final_data_chart[table.cell('.row_selected', 0).data()][4], 
            final_data_chart[table.cell('.row_selected', 0).data()][5], 
            final_data_chart[table.cell('.row_selected', 0).data()][6], 
            final_data_chart[table.cell('.row_selected', 0).data()][7],
             final_data_chart[table.cell('.row_selected', 0).data()][8],
            final_data_chart[table.cell('.row_selected', 0).data()][9],
            final_data_chart[table.cell('.row_selected', 0).data()][10],
            final_data_chart[table.cell('.row_selected', 0).data()][11],
            final_data_chart[table.cell('.row_selected', 0).data()][12],
            final_data_chart[table.cell('.row_selected', 0).data()][13],
            final_data_chart[table.cell('.row_selected', 0).data()][14],
            final_data_chart[table.cell('.row_selected', 0).data()][15],
            final_data_chart[table.cell('.row_selected', 0).data()][16],
            final_data_chart[table.cell('.row_selected', 0).data()][17],
            final_data_chart[table.cell('.row_selected', 0).data()][18]
             ] 
             ,['Goal', 
             final_data_chart[table.cell('.row_selected', 0).data()][9] , 
           // 100,
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9], 
             final_data_chart[table.cell('.row_selected', 0).data()][9]
             ] ],
            type:'area-spline',
            types: {
                  Goal: 'line'
                },
    point: {
        show: false
    },
            colors: {
                  Revenue: '#003a6f',
                  Goal: '#a12830',
                  pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']

                },
            });
    }
    });

    $("#example tbody tr").on('mouseover',function(event) { 
        if ($(this).hasClass('row_selected'))
        {}
        else
            {
              $(this).addClass('row_hovered');
            }
    });

    $("#example tbody tr").on('mouseleave',function(event) {        
        $(this).removeClass('row_hovered');
    });

