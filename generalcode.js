$(document).ready(function main(){
    $(".stylechange").click(function change(event){
        let background = '"'+event.target.data-stylemode-background+'"';
        let color = '"'+event.target.data-stylemode-color+'"'
        $("body").css("background-color",background);
        $("body").css("color", color );
    });

});