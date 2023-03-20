var Links = {
    setColor : function(color) {
        var alist = document.querySelectorAll('a');
        var i =0;
        while( i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}

var Body = {
    setColor : function(color){ 
        document.querySelector('body').style.color = color;
    },       /*객체는 각 property 사이에 콤마가  필요함*/
    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color ;
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body'); 
    if (self.value=== 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('red');
    }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}