$(document).ready(function main(){
try{
    let stdstyle = cookie.get("stylemode");
    let lastbuttonused = "#"+stdstyle+"button"
    let 
}
catch(err){
    let lastbuttonused= "#stylelightbutton" ;
}
    $(".wikisite").attr("id",stdstyle);


    $(".stylechange").click(function change(){
        let classtoadd = $(this).attr("data-attrvalue");
        let objectaffected = $(this).attr("data-object");
        let attrbute = $(this).attr("data-attr");
        let buttonused = "#"+classtoadd+"button"
        $(objectaffected).attr(attrbute,classtoadd);
        //https://stackoverflow.com/questions/1424981/how-can-i-remove-all-css-classes-using-jquery-javascript
       //https://www.w3schools.com/jquery/jquery_css_classes.asp
       $(lastbuttonused).attr("src","./recources/selctor_field.png")
       $(buttonused).attr("src", "./recources/selector_field-select.png")
       console.log("pressed")
       lastbuttonused = buttonused;
       cookie.set("stylemode",classtoadd)
    });

});
