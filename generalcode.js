
$(document).ready(function main(){

    
    let lastbuttonused;
    let stdstyle

    stdstyle = Cookies.get("stylemode");
    lastbuttonused = "#"+stdstyle+"button" 


if(stdstyle== undefined){
    lastbuttonused= "#stylelightbutton" ;
    stdstyle =  "stylelight";
    console.log("no cokie")
}
    $(".wikistylesite").attr("id",stdstyle);
    $(".selectorimg").attr("src","./recources/selctor_field.png")
    $(lastbuttonused).attr("src","./recources/selector_field-select.png")


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
       Cookies.set("stylemode",classtoadd)
    });
});
