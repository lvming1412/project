$(function(){
    /*大按钮控制小按钮全选*/
    $('.checkAll .b').change(function () {
        $('.list-box .check .s').prop('checked', $(this).prop('checked'));
        if ($(this).prop('checked')) {
            //给整行添加高亮色
            $('.list-box .check .s').parents('.list-box').addClass('on');
            //更新小计的价格
            $('.list-box .check .s').each(function(i,ele){
                var p=$(ele).parent().siblings('.col-price').html();
                p=parseInt(p);
                var num=$(ele).parent().siblings('.col-num').find('.num').val();
                $(ele).parent().siblings('.col-total').html(num*p+"元");
                getSum();
            })

                    /*更新已选择的价格*/    
                    $('.footer-con .left span em').html($('.list-box .check .s:checked').length);
 
        } else {
            //给整行移出高亮色
            $('.list-box .check .s').parents('.list-box').removeClass('on');
             //更新小计的价格
            $('.list-box .col-total').html('0元');
            getSum();
             //更新已选择的数量
            $('.footer-con .list-pay .left em').html('0')
        }
    })
        /*小按钮控制大按钮全选*/

        $('.main-con').on('change','.list-box .check .s',function(){
        /*更新已选择的价格*/    
            $('.footer-con .left span em').html($('.list-box .check .s:checked').length);

            if ($('.list-box .check .s:checked').length == $('.list-box .check .s').length) {
                $('.checkAll .b').prop('checked', true);
            }
            if($('.list-box .check .s:checked').length ==0){
                $('.checkAll .b').prop('checked', false);
            }
            if ($(this).prop('checked')) {
                //增加高亮色并更新小计
                $(this).parents('.list-box').addClass('on');
                var p=$(this).parent().siblings('.col-price').html();
                p=parseInt(p);
                var num=$(this).parent().siblings('.col-num').find('.num').val();
                $(this).parent().siblings('.col-total').html(num*p+"元");
                getSum();
            } else {
                //移出高亮色并更新小计
                $(this).parents('.list-box').removeClass('on');
                $(this).parent().siblings('.col-total').html('0元');
                getSum();
            }

        })

            //点击按钮增加数量并更新小计

            $('.main-con').on('click','.add',function(){

                var n = $(this).siblings('.num').val();
                n++;
                $(this).siblings('.num').val(n);
                var p = $(this).parent().siblings('.col-price').html();
                p = p.split('元')[0];
                $(this).parent().siblings('.col-total').html((n * p).toFixed(2)+'元');
                getSum();

            })

             //点击按钮减少数量并更新小计

             $('.main-con').on('click','.red',function(){
                var n = $(this).siblings('.num').val();
                if (n == 1) {
                    return false
                }
                n--;
                $(this).siblings('.num').val(n);
                var p = $(this).parent().siblings('.col-price').html();
                p = p.split('元')[0];
                $(this).parent().siblings('.col-total').html( (n * p).toFixed(2)+'元');
                getSum();

             })

                   //用户改变表单值统计总价

                   $('.main-con').on('change','.num',function(){

                    var n = $(this).val();
                    var p = $(this).parent().siblings('.col-price').text();
                    p = p.split('元')[0];
                    $(this).parent().siblings('.col-total').text((n * p).toFixed(2)+'元');
                    getSum();

                   })

                //计算总计和总额
                getSum();
                function getSum() {
                    var a = 0;//统计总数
                    var b = 0;//统计总价格
                    $('.num').each(function (i, ele) {
                        a += parseInt($(ele).val());
                        $('.footer-con .left span i').html(a);
                    })
                    $('.list-box .col-total').each(function (i, ele) {
                        var p = parseInt($(ele).html());
                        b += p;
                        $('.footer-con .right span em').html(b.toFixed(2));
                    })
                }
            //点击删除当前这行的商品
            $('.main-con').on('click','.action',function(){
                var that=$(this);
                layer.confirm('确定删除吗？', {
                    btn: ['确定','取消'] //按钮
                  }, function(){

                    that.parents('.list-box').remove();
                    getSum();

                    layer.msg('删除成功', {icon: 1});
                  }, function(){
                    layer.msg('已取消', {
                    });
                  });

                if($('.list-box').length==0){
                    //更新总价
                    $('.footer-con .right span em').html(0.00);
                    //更新已选择的数量
                    $('.footer-con .list-pay .left em').html('0');
                    //更新总数量
                    $('.footer-con .list-pay .left i').html(0.00);
                    $('.checkAll .b').prop('checked',false);
                    $('.main-con .empty-carts').show();
                }
            })

            /*判断用户是否登录*/
            var uname=localStorage.getItem('username');
            if(uname){
                $('.header-con ul .uname').html('尊贵的'+uname);
            }

            /*动态添加商品*/

           
                $('.list-menu .menu-con .li .btn').on('click',function(){
                    var p=$(this).siblings('.price').html();
                    p=parseInt(p);
                    var uname=$(this).siblings('.title').html();
                    var pic=$(this).siblings('img').prop('src');
                    var arr=[{p:p,uname:uname,pic:pic}];
                    localStorage.setItem('data',JSON.stringify(arr));
                    var goods=localStorage.getItem('data');
                    if(goods){
                        var newGoods=`<div class="list-box">
                        <div class="check"><input type="checkbox" name="all" id="" class="s"></div>
                        <div class="col-img"><img src="${ JSON.parse(goods)[0].pic}" alt=""></div>
                        <div class="col-name">${ JSON.parse(goods)[0].uname}</div>
                        <div class="col-price">${JSON.parse(goods)[0].p}元</div>
                        <div class="col-num">
                            <a href="javascript:;" class="red">-</a>
                            <input type="text" value="1" class="num">
                            <a href="javascript:void(0);" class="add">+</a>
                        </div>
                        <div class="col-total">0元</div>
                        <div class="action"><img src="../login-images/cc.png" alt=""></div>
                    </div>`;
                    $('.main-con .list-head').after(newGoods);
                    $('.main-con .empty-carts').hide();
                    }else{
                        $('.main-con .empty-carts').show();
                    }
                    layer.msg('添加购物车成功');
                })

                /*点击前往购物区*/
                $('.main-con').on('click','#goshop',function(){
                    $('html').animate({scrollTop:750},1000,'linear');
                })
            
})