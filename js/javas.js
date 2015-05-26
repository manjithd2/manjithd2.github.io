
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

	function clr (){
	var scr = document.getElementById('screen');
		scr.value="";	
	}

	
