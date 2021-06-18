// 判断用户是否登录--判断localStorage中会否存在username的值
$(function(){
  var name=localStorage.getItem('username');
  var login=document.querySelector('.header-con ol');
  if(name){
    var str=` <li class="name">${name}</li>
    <li class="out">退出</li>
    <li><a href="#">消息通知</a></li>
    <li class=car><a href="">购物车</a></li>`;
    login.innerHTML=str;
  }
  //退出功能
  login.addEventListener('click',function(e){
    e=e||window.event;
    var target=e.target;
    if(target.className=='out'){
      layer.confirm('你确定要退出吗？',
      {
        btn:['确定','取消']
      },
      function(){
        // 删除localStorage
      localStorage.removeItem('username');
        login.innerHTML =`<li class="signin"><a href="../pages/login.html">登录</a></li>
        <li class="signup"><a href="../pages/login.html">注册</a></li>
        <li><a href="#">消息通知</a></li>
        <li class="car"><a href="#">购物车</a></li>`;
        layer.msg('退出成功',{icon:1,time:500})
      },
      function(){
        layer.msg('已取消',{icon:1,time:500})
        return false;
      }
      )

    }
  })
})

/*点击购物车判断用户是否登录*/
$(function(){
  var name=localStorage.getItem('username');
var login=document.querySelector('.header-con .login');
login.addEventListener('click',function(e){
  e=e||window.event;
  var target=e.target||e.srcElement;
  if(target.className=='car'){
      if(!name){
          layer.alert('亲，请登录', {
              time: 5*1000
              ,success: function(layero, index){
                var timeNum = this.time/1000, setText = function(start){
                  layer.title((start ? timeNum : --timeNum) + ' 秒后关闭', index);
                };
                setText(!0);
                this.timer = setInterval(setText, 1000);
                if(timeNum <= 0) clearInterval(this.timer);
              }
              ,end: function(){
                clearInterval(this.timer);
                window.location.href='../pages/login.html';
              }
            });
      }else{
          window.location.href='../pages/cart.html';
      }
  }
})
})


