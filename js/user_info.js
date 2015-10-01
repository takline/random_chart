var user=kl.get_eID().toUpperCase();
//var user='XGL470';
var source_kl="https://pulse.kdc.capitalone.com/people/"+user+"/avatar/80.png";
var name=kl.get_name();
var source_kl= "https://pulse.kdc.capitalone.com/people/"+'xgl470'+"/avatar/80.png"
document.getElementById("avatar_img").src = source_kl;

document.getElementById("user_name").innerHTML = name;



$('.dropdown-menu input').click(function(e) {
        e.stopPropagation(); //This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes.
    });

bootstrap_alert_corner = function() {}
bootstrap_alert_corner.warning = function(message) {
            $('#alert_placeholder_corner').html('<div class="alert alert-success"  role="alert" ><a class="close" data-dismiss="alert">x</a><span>'+message+'</span></div>')
        }
bootstrap_alert_corner.warning_bad = function(message) {
            $('#alert_placeholder_corner').html('<div class="alert alert-danger"  role="alert" ><a class="close" data-dismiss="alert">x</a><span>'+message+'</span></div>')
        }


$('#submit_corner').on('click', function() {


var n3 = $('#comments_corner').val();
if (
    n3
    )
{
    var currentTime = new Date().toJSON();
            bootstrap_alert_corner.warning(
                'Thanks for the feedback!'
                )
            kl.create_txt(
                'comments'+'|'+$('#comments_corner').val()+'|'+kl.get_eID()+'|'+currentTime
                ,kl.get_eID()+Math.floor(Date.now() / 1000)
                ,1220554388);
}
else
{

bootstrap_alert_corner.warning_bad(
"No comments to submit"    )

}
$("#alert_placeholder_corner").fadeTo(2000, 500).slideUp(500, function(){
    $("#alert_placeholder_corner").alert('close');
});
});