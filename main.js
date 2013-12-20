
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
		var result = [];
		result.push(checkSum(0,1,2));
		result.push(checkSum(3,4,5));
		result.push(checkSum(6,7,8));
		result.push(checkSum(0,3,6));
		result.push(checkSum(1,4,7));
		result.push(checkSum(2,5,8));
		result.push(checkSum(0,4,8));
		result.push(checkSum(2,4,6));
		for(var i=0; i<8; i++){
			if(result[i] == 30){
				alert("You win!!");
			}
			if(result[i] == 3){
				alert("You lose!!");
			}
		}			
	}

	function checkSum(a,b,c){
		return check(a)+check(b)+check(c);
	}

	function check(i){
		if(squares[i].style.background == "none repeat scroll 0% 0% red"){
			return 10;
		}else if(squares[i].style.background == "none repeat scroll 0% 0% blue"){
			return 1;
		}else{
			return  0;
		}

	}

	function clicked(_id){
		return function(){
			_id.style.background="red";
			_id.onclick="";

			eval();
			var enemySq = squares[Math.floor(Math.random()*9)];
			while(enemySq.onclick == null){
				console.log(enemySq.id);
				enemySq = squares[Math.floor(Math.random()*9)];

			}
			enemy_clicked(enemySq);
			eval();
		};
	}

	function enemy_clicked(_id){
		_id.style.background="blue";
		_id.onclick="";
	}