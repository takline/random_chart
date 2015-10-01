var current_oppt_id='';
var data_dir='';
//var data_dir='';


function fileExists(url) {
    if(url){
        var req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.send();
        return req.status==200;
    } else {
        return false;
    }
}
if (fileExists('../data/'+user+'opp_data.csv'))
{
    data_dir='../data/'+user+'opp_data.csv'
}
else {

    data_dir='../data/opp_data.csv'

}

$.get(data_dir, function(data) {


    var rows = data.split(/\r\n|\n/);
    var final_data_chart=[];
    var final_data_table=[];

rows.forEach( function getvalues(ourrow) {


    var columns = ourrow.split('|');

    final_data_table.push(columns.slice(0,7));
    //new_thing=columns.slice(7,16);
    //new_thing.unshift("'Revenue'");
    //new_thing.push(columns.slice(15,16));
    final_data_chart[columns.slice(0,1)]=columns.slice(12,32);
   // console.log(final_data_table);

})



$(document).ready(function() {
    var lastIdx = null;
    var table=$('#example').DataTable( {
        "iDisplayLength": 10,
      //  "scrollCollapse": true,
        "pagingType": "numbers",
        stateSave: true,
         responsive: true,
        "scrollY": "420px",
        data: final_data_table,
        columns: [
            { title: "Opportunity ID" },
            { title: "OPPT_NM" },
            { title: "CLSD_DT" },
            { title: "Deal Size" },
            { title: "TMSO" },
            { title: "WCIS_REL_ID" },
            { title: "WCIS_REL_NM" }
        ]
        ,
        "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
                var sDirectionClass;
                if 
                    (updated_opps.indexOf(aData[0]) > -1)
                    {
                        $(nRow).addClass( 'submitted' );
                    }
 
            }
    } );



    $('#example').on( 'page.dt',   function () {
          $("#product_select").multiselect("clearSelection");
        $("#product_select").multiselect( 'refresh' );
         $("#comments").val('');
         $("#wcis_id").val('');
         $("#aanum").val('');

     chart.unload();
  $("#example tbody tr").removeClass('row_selected');
    current_oppt_id='';

                document.getElementById("oppt_header").innerHTML =''
    var fields = document.getElementById("drop_down").getElementsByTagName('*');
for(var i = 0; i < fields.length; i++)
{
    fields[i].disabled = true;
}
             document.getElementById("comments").disabled = true;

            $(document).ready(function() {$('#product_select').multiselect('disable');});
       document.getElementById("submit").disabled = true;
                    document.getElementById("aanum").disabled = true;
document.getElementById("wcis_id").disabled = true;
     } )


    $('#example tbody').on('click', 'tr', function () {
          $("#product_select").multiselect("clearSelection");
        $("#product_select").multiselect( 'refresh' );
         $("#comments").val('');
         $("#wcis_id").val('');
         $("#aanum").val('');
         $('.dropdown-menu').removeClass('active');

        var data = table.row( this ).data();
        current_row=$(this);
    if ($(this).hasClass('row_selected'))
                {
            $(this).removeClass('row_selected'); 
                $(this).addClass('row_hovered');
                chart.unload();
                current_oppt_id='';

                document.getElementById("oppt_header").innerHTML =''
    var fields = document.getElementById("drop_down").getElementsByTagName('*');
        for(var i = 0; i < fields.length; i++)
        {
            fields[i].disabled = true;
        }
             document.getElementById("comments").disabled = true;
             document.getElementById("aanum").disabled = true;
document.getElementById("wcis_id").disabled = true;

            $(document).ready(function() {$('#product_select').multiselect('disable');});

        chart.unload();
       document.getElementById("submit").disabled = true;

 

 
    }
else {
  $("#example tbody tr").removeClass('row_selected');
            $(this).removeClass('row_hovered');
            $(this).addClass('row_selected');
            current_oppt_id=table.cell('.row_selected', 0).data();

        $(document).ready(function() {$('#product_select').multiselect('enable');});
            document.getElementById("oppt_header").innerHTML = "Update info for Opportunity ID "+table.cell('.row_selected', 0).data();
            

    var fields = document.getElementById("drop_down").getElementsByTagName('*');
for(var i = 0; i < fields.length; i++)
{
    fields[i].disabled = false;
}
       document.getElementById("comments").disabled = false;
       document.getElementById("submit").disabled = false;
       document.getElementById("aanum").disabled = false;
document.getElementById("wcis_id").disabled = false;

                  chart.load({
            columns: [
            [ 'Revenue'  ,
            final_data_chart[data[0]][0] ,
             final_data_chart[data[0]][1], 
            final_data_chart[data[0]][2], 
            final_data_chart[data[0]][3], 
            final_data_chart[data[0]][4], 
            final_data_chart[data[0]][5], 
            final_data_chart[data[0]][6], 
            final_data_chart[data[0]][7],
             final_data_chart[data[0]][8],
            final_data_chart[data[0]][9],
            final_data_chart[data[0]][10],
            final_data_chart[data[0]][11],
            final_data_chart[data[0]][12],
            final_data_chart[data[0]][13],
            final_data_chart[data[0]][14],
            final_data_chart[data[0]][15],
            final_data_chart[data[0]][16],
            final_data_chart[data[0]][17],
            final_data_chart[data[0]][18]
             ] 
             ,['Goal', 
             final_data_chart[data[0]][19] , 
           // 100,
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19], 
             final_data_chart[data[0]][19]
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
    $('#submit').click( function () {
       // table.row('.row_selected').remove().draw( false );

       $(this).addClass('submitted');
})

}
    } );


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


} );

} );