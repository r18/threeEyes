
	var squares = [] ;

	function main(){
		alert("hogehoge");
		var a1 = document.getElementById("1-1");
		var a2 = document.getElementById("1-2");
		var a3 = document.getElementById("1-3");
		var b1 = document.getElementById("2-1");
		var b2 = document.getElementById("2-2");
		var b3 = document.getElementById("2-3");
		var c1 = document.getElementById("3-1");
		var c2 = document.getElementById("3-2");
		var c3 = document.getElementById("3-3");

		squares = [a1,a2,a3,b1,b2,b3,c1,c2,c3];


		a1.onclick = clicked(a1);
		a2.onclick = clicked(a2);
		a3.onclick = clicked(a3);
		b1.onclick = clicked(b1);
		b2.onclick = clicked(b2);
		b3.onclick = clicked(b3);
		c1.onclick = clicked(c1);
		c2.onclick = clicked(c2);
		c3.onclick = clicked(c3);

		enemy_clicked(c1);
	}
	function eval(){
		if(point0 + point1 + point2 == 30){
			alert("you win");
		}else if(point0 + point1 + point2 == 3){
			alert("enemy win");
		}
	}
	
	function check(){
		if(squares[0].style.background == "red"){
			var point0 = 10;
		}else if(suqares[0].style.background == "blue"){
			var point0 = 1;
		}else{
			var point0 = 0;
		}
		if(squares[1].style.background == "red"){
			var point1 = 10;
		}else if(suqares[1].style.background == "blue"){
			var point1 = 1;
		}else{
			var point1 = 0;
		}
		if(squares[2].style.background == "red"){
			var point2 = 10;
		}else if(suqares[2].style.background == "blue"){
			var point2 = 1;
		}else{
			var point2 = 0;
		}
		if(squares[3].style.background == "red"){
			var point3 = 10;
		}else if(suqares[3].style.background == "blue"){
			var point3 = 1;
		}else{
			var point3 = 0;
		}
		if(squares[4].style.background == "red"){
			var point4 = 10;
		}else if(suqares[4].style.background == "blue"){
			var point4 = 1;
		}else{
			var point4 = 0;
		}
		if(squares[5].style.background == "red"){
			var point5 = 10;
		}else if(suqares[5].style.background == "blue"){
			var point5 = 1;
		}else{
			var point5 = 0;
		}
		if(squares[6].style.background == "red"){
			var point6 = 10;
		}else if(suqares[6].style.background == "blue"){
			var point6 = 1;
		}else{
			var point6 = 0;
		}
		if(squares[8].style.background == "red"){
			var point8 = 10;
		}else if(suqares[8].style.background == "blue"){
			var point8 = 1;
		}else{
			var point8 = 0;
		}
		
	}

	function clicked(_id){
		return function(){
			_id.style.background="red";
			_id.onclick="";
			var enemySq = squares[Math.floor(Math.random()*9)];
			while(enemySq.onclick == null){
				console.log(enemySq.id);
				enemySq = squares[Math.floor(Math.random()*9)];

			}
			enemy_clicked(enemySq);

		};
	}

	function enemy_clicked(_id){
		_id.style.background="blue";
		_id.onclick="";
	}