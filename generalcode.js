
$(document).ready(function main(){
    let startinverse = Cookies.get("styleinvers")


    let stdstyle = Cookies.get("stylemode");
    let lastbuttonused = "#"+stdstyle+"button" 


if(stdstyle == undefined && startinverse== undefined){
    lastbuttonused= "#stylelightbutton" ;
    stdstyle =  "stylelight";
    console.log("no cokie")
    startinverse ="styledark"
}
    $(".wikistylesite").attr("id",stdstyle);
    $(".selectorimg").attr("src","./recources/selctor_field.png")
    $(lastbuttonused).attr("src","./recources/selector_field-select.png")
    $(".visfooter").attr("id", startinverse)


    $(".stylechange").click(function change(){
        let classtoadd = $(this).attr("data-attrvalue");
        let objectaffected = $(this).attr("data-object");
        let attrbute = $(this).attr("data-attr");
        let attrinverse = $(this).attr("data-inverse")
        let buttonused = "#"+classtoadd+"button"
        $(".visfooter").attr(attrbute,attrinverse)
        $(objectaffected).attr(attrbute,classtoadd);
        //https://stackoverflow.com/questions/1424981/how-can-i-remove-all-css-classes-using-jquery-javascript
       //https://www.w3schools.com/jquery/jquery_css_classes.asp
       $(lastbuttonused).attr("src","./recources/selctor_field.png")
       $(buttonused).attr("src", "./recources/selector_field-select.png")
       console.log("pressed")
       lastbuttonused = buttonused;
       Cookies.set("stylemode",classtoadd)
       Cookies.set("styleinvers",attrinverse)
    });
    $("#hrefmain").click(function jumpback() {
        window.location = "./index.html"
    })
});
