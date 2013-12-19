
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


		a1.onclick = clicked(a1);
		a2.onclick = clicked(a2);
		a3.onclick = clicked(a3);
		b1.onclick = clicked(b1);
		b2.onclick = clicked(b2);
		b3.onclick = clicked(b3);
		c1.onclick = clicked(c1);
		c2.onclick = clicked(c2);
		c3.onclick = clicked(c3);

		enemy_clicked(c2);
	}

	function clicked(_id){
		return function(){_id.style.background="red";_id.onclick=""};
	}

	function enemy_clicked(_id){
		_id.style.background="blue";
		_id.onclick="";
	}