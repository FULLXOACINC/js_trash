/**
 * Created by alex on 29.11.16.
 */
var pos ={
    x:50,
    y:50
};
var windSlider;
$(function() {
    $("#cool").css({'backgroundImage': 'url('+$("#map").val()+')'});
    $("#map").css({'backgroundImage': 'url('+$("#map").val()+')'});

    $( "#slider" ).slider({
        value: 50
    });



    $('#cool').svg({onLoad: function () {}});

    $( "#time" ).val(1);
    $("#wind").val(0);
    $("#wind_val").text(5);


    $( "#slider" ).slider().bind({

        slidechange : function(event,ui) {

            var rad =$( "#slider" ).slider("value");
            $("#wind_val").text(rad/10);
            var svg=$('#cool').svg("get");

            svg.clear();
            var dig=-1;
            var Hz;
            if(rad/10>2){
                dig=45;
                Hz=0.4;
            }

            if(rad/10>=1.1&&rad/10<=2){
                dig=90;
                Hz=0.6;
            }

            if(rad/10>=0.6&&rad/10<1.1){
                dig=180;
                Hz=1.2;
            }
            rad*=$( "#time" ).val();
            if(dig==-1){
                svg.circle(pos.x-10 ,pos.y-10, rad*10, {fill: 'none', stroke: 'red', strokeWidth: 1});
                for(var i=0;i<360;i=i+3){
                    x2=rad*10*(Math.cos((windSlider.getValue()-90-dig/2+i)*Math.PI/180))+pos.x-10;
                    y2=rad*10*(Math.sin((windSlider.getValue()-90-dig/2+i)*Math.PI/180))+pos.y-10;
                    svg.path(d="M "+(pos.x-10)+" "+(pos.y-10)+"  "+x2+" "+y2+"", {stroke: 'red', opacity:".4",strokeWidth: 2,fill:"transparent"});



                }
                return true;
            }


            var x1=rad*10*(Math.cos((windSlider.getValue()-90+dig/2)*Math.PI/180))+pos.x-10;
            var x2=rad*10*(Math.cos((windSlider.getValue()-90-dig/2)*Math.PI/180))+pos.x-10;
            var y1=rad*10*(Math.sin((windSlider.getValue()-90+dig/2)*Math.PI/180))+pos.y-10;
            var y2=rad*10*(Math.sin((windSlider.getValue()-90-dig/2)*Math.PI/180))+pos.y-10;

            svg.path(d="M  "+x1+","+y1+","+(pos.x-10)+","+(pos.y-10)+","+x2+","+y2 , {fill: 'none',opacity:".4", stroke: 'red', strokeWidth: 2});
            for(var i=0;i<dig;i=i+Hz){
                x2=rad*10*(Math.cos((windSlider.getValue()-90-dig/2+i)*Math.PI/180))+pos.x-10;
                y2=rad*10*(Math.sin((windSlider.getValue()-90-dig/2+i)*Math.PI/180))+pos.y-10;
                svg.path(d="M "+(pos.x-10)+" "+(pos.y-10)+"  "+x2+" "+y2+"", {stroke: 'red', opacity:".4",strokeWidth: 2,fill:"transparent"});



            }
        }


    });

    windSlider=$('#windSlider').CircularSlider({
        min : 0,
        max: 359,
        value : 0,
        animate: false,
        labelSuffix: "°",
        slide: function(ui, value) {
            var val=$('#windSlider .jcs-value').html().slice(0,$('#windSlider .jcs-value').html().length-1);
            val=parseInt(val);
            var rad =$( "#slider" ).slider("value");
            var svg=$('#cool').svg("get");

            svg.clear();
            var dig=-1;
            var Hz;
            if(rad/10>2){
                dig=45;
                Hz=0.4;
            }

            if(rad/10>=1.1&&rad/10<=2){
                dig=90;
                Hz=0.6;
            }

            if(rad/10>=0.6&&rad/10<1.1){
                dig=180;
                Hz=1.2;
            }
            rad*=$( "#time" ).val();
            if(dig==-1){
                svg.circle(pos.x-10 ,pos.y-10, rad*10, {fill: 'none', stroke: 'red', strokeWidth: 1});
                for(var i=0;i<360;i=i+3){
                    x2=rad*10*(Math.cos((val-90-dig/2+i)*Math.PI/180))+pos.x-10;
                    y2=rad*10*(Math.sin((val-90-dig/2+i)*Math.PI/180))+pos.y-10;
                    svg.path(d="M "+(pos.x-10)+" "+(pos.y-10)+"  "+x2+" "+y2+"", {stroke: 'red', opacity:".4",strokeWidth: 2,fill:"transparent"});



                }
                return true;
            }


            var x1=rad*10*(Math.cos((val-90+dig/2)*Math.PI/180))+pos.x-10;
            var x2=rad*10*(Math.cos((val-90-dig/2)*Math.PI/180))+pos.x-10;
            var y1=rad*10*(Math.sin((val-90+dig/2)*Math.PI/180))+pos.y-10;
            var y2=rad*10*(Math.sin((val-90-dig/2)*Math.PI/180))+pos.y-10;

            svg.path(d="M  "+x1+","+y1+","+(pos.x-10)+","+(pos.y-10)+","+x2+","+y2 , {fill: 'none',opacity:".4", stroke: 'red', strokeWidth: 2});
            for(var i=0;i<dig;i=i+Hz){
                x2=rad*10*(Math.cos((val-90-dig/2+i)*Math.PI/180))+pos.x-10;
                y2=rad*10*(Math.sin((val-90-dig/2+i)*Math.PI/180))+pos.y-10;
                svg.path(d="M "+(pos.x-10)+" "+(pos.y-10)+"  "+x2+" "+y2+"", {stroke: 'red', opacity:".4",strokeWidth: 2,fill:"transparent"});



            }

        }


    });


});


$(document).mousedown(function( event ) {
    $("#cool").css({'backgroundImage': 'url('+$("#map").val()+')'});
    $("#map").css({'backgroundImage': 'url('+$("#map").val()+')'});
    if ($('#cool').is( ":hover" ) ) {
        pos.x=event.pageX-$('#cool').position().left+8;
        pos.y=event.pageY-$('#cool').position().top+10;
        var rad =$( "#slider" ).slider("value");
        var svg=$('#cool').svg("get");
        svg.clear();
        var dig=-1;
        var Hz;
        if(rad/10>2){
            dig=45;
            Hz=0.4;
        }

        if(rad/10>=1.1&&rad/10<=2){
            dig=90;
            Hz=0.6;
        }

        if(rad/10>=0.6&&rad/10<1.1){
            dig=180;
            Hz=1.2;
        }
        rad*=$( "#time" ).val();
        if(dig==-1){
            svg.circle(pos.x-10 ,pos.y-10, rad*10, {fill: 'none', stroke: 'red', strokeWidth: 1});
            for(var i=0;i<360;i=i+3){
                x2=rad*10*(Math.cos((windSlider.getValue()-90-dig/2+i)*Math.PI/180))+pos.x-10;
                y2=rad*10*(Math.sin((windSlider.getValue()-90-dig/2+i)*Math.PI/180))+pos.y-10;
                svg.path(d="M "+(pos.x-10)+" "+(pos.y-10)+"  "+x2+" "+y2+"", {stroke: 'red', opacity:".4",strokeWidth: 2,fill:"transparent"});



            }
            return true;
        }


        var x1=rad*10*(Math.cos((windSlider.getValue()-90+dig/2)*Math.PI/180))+pos.x-10;
        var x2=rad*10*(Math.cos((windSlider.getValue()-90-dig/2)*Math.PI/180))+pos.x-10;
        var y1=rad*10*(Math.sin((windSlider.getValue()-90+dig/2)*Math.PI/180))+pos.y-10;
        var y2=rad*10*(Math.sin((windSlider.getValue()-90-dig/2)*Math.PI/180))+pos.y-10;

        svg.path(d="M  "+x1+","+y1+","+(pos.x-10)+","+(pos.y-10)+","+x2+","+y2 , {fill: 'none',opacity:".4", stroke: 'red', strokeWidth: 2});
        for(var i=0;i<dig;i=i+Hz){
            x2=rad*10*(Math.cos((windSlider.getValue()-90-dig/2+i)*Math.PI/180))+pos.x-10;
            y2=rad*10*(Math.sin((windSlider.getValue()-90-dig/2+i)*Math.PI/180))+pos.y-10;
            svg.path(d="M "+(pos.x-10)+" "+(pos.y-10)+"  "+x2+" "+y2+"", {stroke: 'red', opacity:".4",strokeWidth: 2,fill:"transparent"});
        }

    }


});
