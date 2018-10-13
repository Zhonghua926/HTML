  
  var oName = document.getElementsByClassName('name')[0];
  var otoName = document.getElementsByClassName('toName')[0];
  var oNameAlert = document.getElementsByClassName('nameAlert')[0];
  var arr = [0,0,0,0,0,0];
  oName.onblur = function(){
     var nameReg = /^[a-zA-Z]\w{7,13}$/;
     if(!nameReg.test(this.value)){
      otoName.style.display = "block";
      oNameAlert.innerHTML = "请输入首位为字母，只包含数字、字母下划线的8到14位用户名";
      arr[0] = 0;
    }else{
      otoName.style.display = "none";
      arr[0] = 1;
    }
  }

  var oEmail =document.getElementsByClassName('email')[0];
  var otoEmail = document.getElementsByClassName('toEmail')[0];
  var oEmailAlert = document.getElementsByClassName('emailAlert')[0];
  oEmail.onblur = function(){
     var emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
     if(!emailReg.test(this.value)){
      otoEmail.style.display = "block";
      oEmailAlert.innerHTML = "请输入合法的邮箱";
      arr[1] = 0;
    }else{
      otoEmail.style.display = "none";
      arr[1] = 1;
    }
  }
  
  var oremail =document.getElementsByClassName('remail')[0];
  var otoremail = document.getElementsByClassName('toremail')[0];
  var oremailAlert = document.getElementsByClassName('remailAlert')[0];
  oremail.onblur = function(){
     var remailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
     if(!remailReg.test(this.value)){
      otoremail.style.display = "block";
      oremailAlert.innerHTML = "请输入合法的邮箱";
      arr[2] = 0;
    }else{
        if(oremail.value == oEmail.value){
          otoremail.style.display = "none";
          arr[2] = 1;
        }
        else{
          oremailAlert.innerHTML = "验证失败，与前面输入不一致";
          arr[2] = 0;
        }
    }
  }

  var opsd =document.getElementsByClassName('psd')[0];
  var otopsd = document.getElementsByClassName('topsd')[0];
  var opsdAlert = document.getElementsByClassName('psdAlert')[0];
  opsd.onblur = function(){
     var psdReg = /^[a-zA-Z]\w{5,17}$/;
     if(!psdReg.test(this.value)){
      otopsd.style.display = "block";
      opsdAlert.innerHTML = "以字母开头，长度在6~18之间，只能包含字符、数字和下划线";
      arr[3] = 0;
    }else{
      otopsd.style.display = "none";
      arr[3] = 1;
    }
  }

  var opsd_s =document.getElementsByClassName('psd_s')[0];
  var otopsd_s = document.getElementsByClassName('topsd_s')[0];
  var opsd_sAlert = document.getElementsByClassName('psd_sAlert')[0];
  opsd_s.onblur = function(){
      if(opsd_s.value == opsd.value){
        otopsd_s.style.display = "none";
        arr[4] = 1;
      }
      else{
        otopsd_s.style.display = "block";
        opsd_sAlert.innerHTML = "与前面密码输入不一致";
        arr[4] = 0;
      }
  }

  var oPsdShow  = document.getElementById('lb3');
  oPsdShow.onclick = function(){
    if(this.checked){
       opsd.type = "text";
       opsd_s.type = "text";
    }else{
       opsd.type = "password";
       opsd_s.type = "password";
    }
   
  }

  var oSure  = document.getElementById('lb4');
  oSure.onclick = function(){
     if(this.checked){
        arr[5] = 1;
     }else{
        arr[5] = 0;
     }
  }


  var oSubmit = document.getElementById('submit2');
  oSubmit.onclick = function(){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
       count+=arr[i];
    }
    if(count != 6){
      alert("无法提交！");
      return false;
    }else{
      return true;
    }
  }