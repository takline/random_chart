


var fields = document.getElementById("drop_down").getElementsByTagName('*');
for(var i = 0; i < fields.length; i++)
{
    fields[i].disabled = true;
}
document.getElementById("comments").disabled = true;
document.getElementById("submit").disabled = true;
document.getElementById("aanum").disabled = true;
document.getElementById("wcis_id").disabled = true;






$('.dropdown-menu a').on('click', function(){    
    $(this).parent().parent().prev().html($(this).html() + '<span class="caret"></span>');    
})


document.getElementById("oppt_header").innerHTML = "Update info for Opportunity ID ";


//$('#myAlert').alert("close");
bootstrap_alert = function() {}
bootstrap_alert.warning = function(message) {
            $('#alert_placeholder').html('<div class="alert alert-success"  role="alert" ><a class="close" data-dismiss="alert">x</a><span>'+message+'</span></div>')
        }
bootstrap_alert.warning_bad = function(message) {
            $('#alert_placeholder').html('<div class="alert alert-danger"  role="alert" ><a class="close" data-dismiss="alert">x</a><span>'+message+'</span></div>')
        }


$('#submit').on('click', function() {

var n = $('.dropdown-menu a').html().length;
var n2 = $('#product_select').val();
var n3 = $('#comments').val();
if (
     n2 && n>0 && n3
    )
{
    $('#example tbody tr.row_selected').addClass('submitted');
  //  $tt.find('tbody tr.active').removeClass('active info');
    var currentTime = new Date().toJSON();
            bootstrap_alert.warning(
                'Thanks! We received your submission! Please allow up to 60 minutes to process.'
                )
            kl.create_txt(
                current_oppt_id+'|'+$('.dropdown-menu a').html()+'|'+$('#product_select').val()+'|'+$('#wcis_id').val()+'|'+$('#aanum').val()+'|'+$('#comments').val()+'|'+kl.get_eID()+'|'+currentTime
                ,kl.get_eID()+Math.floor(Date.now() / 1000)
                ,1220554388);
updated_opps.push(current_oppt_id);
}
else
{

bootstrap_alert.warning_bad(
"Please fill out all required fields"    )

}

$("#alert_placeholder").fadeTo(2000, 500).slideUp(500, function(){
    $("#alert_placeholder").alert('close');
});

});





