/*顶部tab栏切换*/
/*获取按钮*/
$(function(){
    $('.nav-con li').hover(function(){
    var num=$(this).index();
    $(this).css('color','orange').siblings().css('color','#4c4c4c');
    $(".tab-con div").eq(num).stop().show().siblings().stop().hide();
    $('.tab').stop().slideDown();
    },function(){
        $(this).css('color','#4c4c4c');
    })
    $('.tab').on('mouseleave',function(){
        $(this).stop().slideUp()
    })
    $('.nav-con li').eq(7).off();
    $('.nav-con li').eq(8).off();
    $('.nav-con li').eq(7).hover(function(){
        $('.tab').stop().slideUp();
        $(this).css('color','orange');
    },function(){
        $(this).css('color','#4c4c4c');
    })
    $('.nav-con li').eq(8).hover(function(){
        $('.tab').stop().slideUp();
        $(this).css('color','orange');
    },function(){
        $(this).css('color','#4c4c4c');
    })
})
/*new-con 高亮效果*/
$('.new-con li:eq(0)>.p').hover(function(){
    $(this).siblings().fadeTo(400,0.6);
    console.log($(this));

},function(){
    $(this).siblings().fadeTo(400,1)
})
/*电视区域tab栏切换*/
$(function(){
    $('.main-con .tv2').hide();
    $('.main-con .tv2').eq(0).show();
    $('.tv-title .btn i').mouseenter(function(){
        var num=$(this).index();
        $(this).css({color:' #ef6000',borderBottom:' 2px solid #ef6000'}).siblings().css({color:'#424242',borderBottom:'none'});
        $('.main-con .tv2').eq(num).show().siblings('.tv2').hide();
    })
})
/*智能区域切换*/
$(function(){
    $('.main-con .brow').hide();
    $('.main-con .brow').eq(0).show();
    $('.brow-title p i').on('mouseenter',function(){
        var num=$(this).index();
        $('.main-con .brow').eq(num).show().siblings('.brow').hide();
    })
})
/*搭配区域的切换*/
$(function(){
    $('.main-con .match').hide();
    $('.main-con .match').eq(0).show();
    $('.main-con .match-title i').mouseenter(function(){
        var num=$(this).index();
        $('.main-con .match').eq(num).show().siblings('.match').hide();
    })
})
/*配件区域的切换*/
$(function(){
    $('.main-con .parts').hide();
    $('.main-con .parts').eq(0).show();
    $('.main-con .parts-title i').mouseenter(function(){
        var num=$(this).index();
        $('.main-con .parts').eq(num).show().siblings('.parts').hide();
    })
})
/*周边区域的切换*/
$(function(){
    $('.main-con .rim').hide();
    $('.main-con .rim').eq(0).show();
    $('.main-con .rim-title i').on('mouseenter',function(){
        var num=$(this).index();
        $('.main-con .rim').eq(num).show().siblings('.rim').hide();
    })
})
/*轮播图区域的Tab栏切换*/
$(function(){
    $('.banner-con .nav-box .nav-content .matter').hide();
    $('.banner-con .nav-box .nav-btn li').on('mouseenter',function(){
        var num=$(this).index();
        $(this).addClass('deng').siblings().removeClass('deng');
        $('.banner-con .nav-box .nav-content .matter').eq(num).show().siblings().hide();
    })
    $('.banner-con .nav-box').on('mouseleave',function(){
        $('.matter').hide();
    })
    $('.nav-box .nav-content').on('mouseleave',function(){
        $('.matter').hide();
    })
})
/*点击回到顶部*/
$(function(){
    $('.tool-bar .top,body').on('click',function(){
        $('html').animate({scrollTop:0},1000,'linear')
    })
})








