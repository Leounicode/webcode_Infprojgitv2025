$(document).ready(function main(){
    $(".stylechange").click(function change(){
        let classtoadd = $(this).attr("data-stylemode");
        let objectaffected = $(this).attr("data-object");
        $(objectaffected).attr('id',classtoadd);
        //https://stackoverflow.com/questions/1424981/how-can-i-remove-all-css-classes-using-jquery-javascript
       //https://www.w3schools.com/jquery/jquery_css_classes.asp
        
    });

});