window.onload=function(){
	var t = document.getElementById('del');
	var scr= document.getElementById('screen');
			var timer;
			t.addEventListener('mousedown',function(){
				timer = setTimeout(function(){
							scr.value="";
				},500)
			},false);
			
			t.addEventListener('mouseup',function(){
				clearTimeout(timer);
			},false);
}


function disp(no){
			
	var scr = document.getElementById('screen');

		if (no == '=') {
			var e = eval(scr.value);
			scr.value = e;

		}

		else {
			
    		scr.value+=no;

		}
}

function del () {
	var scr = document.getElementById('screen');
	scr.value = scr.value.slice(0,-1);
}


	
