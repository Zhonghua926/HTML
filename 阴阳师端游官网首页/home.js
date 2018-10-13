
  /*
    图片轮播
  */
  lunbo();
  function lunbo(){
  	var pic = document.getElementsByClassName('picture')[0];
  	var small = pic.getElementsByTagName('div')[0];
  	var ul = pic.getElementsByTagName('ul')[0];
  	var li = ul.getElementsByTagName('li');

  	small.style.transition = '1s';
  	var i = 1;
	var width = 250;
	var str = li[0];
	function moveSmall(){
		small.style.transition = '1s';
		small.style.left = -width*i+'px';
		str.style.backgroundColor = 'pink';
		if(i>0&&i<=2){
			str = li[i];
		}else if(i==3){
			str = li[0];
		}
		str.style.backgroundColor = 'orange';
		i++;
		if(i == 4){
			i = 0;
			small.style.left = -width*i+'px';
		}
		var time = setTimeout(moveSmall,2000);
		small.onmouseover = function(){
			clearTimeout(time);
		}
		small.onmouseout = function(){
			setTimeout(moveSmall,2000);
		}
	}
	setTimeout(moveSmall,0);
	for(var j = 0; j < li.length; j++){
		li[j].atr = j;
		li[j].onclick = function(){
			str.style.backgroundColor = 'pink';
			str = this;
			str.style.backgroundColor = 'orange';
			small.style.left = -width*this.atr+'px';
			i = this.atr;
		}
	}
  }