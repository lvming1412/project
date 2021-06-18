
 $(document).ready(function(){
        /*点击提交按钮发起登录请求*/
        $('.container .box1 .box2 .one button').on('click',function(){
            var username=$('.one input[type=text]').val();
            var password=$('.one input[type=password]').val();
            if(!username||!password){
              layer.msg('账号密码不能为空');
              return false;
            }

            $.ajax({
                url:'../php/login.php',
                data:{"username":username,"password":password},
                dataType:'json',
                success:function(res){
                    if(res['status']==1){
                      layer.load(2);
                      setTimeout(function(){
                        layer.closeAll('loading');
                        $(location).attr('href','../pages/index.html');
                        localStorage.setItem('username',username);
                      }, 2000);
                      setTimeout(function(){
                        layer.msg('登录成功');
                      },1000)
                     
                    }else if(res['status']==0){
                      layer.msg('密码错误');
                    }
                }
            })
            return false;
        })
        /*点击注册发起注册请求*/
        $('.container .box1 .box2 .two button').on('click',function(){
            var username=$('.two #name').val();
            var password=$('.two #psw').val();
            var password2=$('.two #confirm').val();
            if(password2!==password){
              layer.msg('两次密码不一致');
              return false;
            }
            if(!username||!password){
              layer.msg('请填写注册信息');
              return false;
            }

            $.ajax({
              url:'../php/register.php',
              data:{
                "username":username,
                "password":password,
              },
              type:'post',
              dataType:"json",
              success:function(res){
                if(res['status']==1){
                  layer.load(2);
                  setTimeout(function(){
                   layer.closeAll('loading');
                   window.location.href='../pages/login.html';
                  }, 2000);
                  setTimeout(function(){
                    layer.msg('注册成功');
                   },1000)
                } else if(res['meta']['status']==2){
                  layer.msg('用户名已存在');
                }
              },
            })
            return false;
          })

          /*登录注册切换*/
          $('.container .nav span').eq(0).addClass('on');
          $('.container .nav span').on('click',function(){
            $(this).addClass('on').siblings('span').removeClass();
            var num=$(this).index();
            var width=$('.container .box1').width();
            $('.container .box1 .box2').animate({'left':-num*width})
          })

 });



