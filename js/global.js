// 添加地址跳转
$('.add-address').click(function () {
    location.href = './addAddress.html'
})
// 保存地址
$('#add-address').click(function () {
    var name = $('#name').val()
    var mobile = $('#mobile').val()
    var location = $('#location').val()
    var dz = $('#dz').val()
    if (name!=''){
        if (mobile!=''){
            if (location!=''){
                layer.open({
                    content: '保存成功'
                    ,skin: 'msg'
                    ,time: 2 //2秒后自动关闭
                });

                setTimeout(function () {
                    history.go(-1)
                },900)
            } else{
                layer.open({
                    content: '地址不能为空'
                    ,skin: 'msg'
                    ,time: 2 //2秒后自动关闭
                });
            }
        } else{
            layer.open({
                content: '手机号不能为空'
                ,skin: 'msg'
                ,time: 2 //2秒后自动关闭
            });
        }
    } else{
        layer.open({
            content: '姓名不能为空'
            ,skin: 'msg'
            ,time: 2 //2秒后自动关闭
        });
    }
})
//加入购物车
$('.add-car').click(function () {
    layer.open({
        content: '已加入购物车'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
})
//立即购买
$('.add-buy').click(function () {
    location.href = './order.html'
})
//提交订单
$('#goodSubmit').click(function () {
    location.href = './submitOrder.html'
})
//支付方式
var pay = ''
//选择支付方式
$('.pay-item').click(function () {
    //获取点击的元素给其添加样式，讲其兄弟元素的样式移除
    $(this).addClass("active").siblings().removeClass("active");
    pay = $(this).data('pay')
})
$('.sub-pay').click(function () {
    if (pay == "wx"){
        layer.open({
            content: '微信支付'
            ,skin: 'msg'
            ,time: 2 //2秒后自动关闭
        });
    } else if (pay == "alipay"){
        layer.open({
            content: '花呗支付'
            ,skin: 'msg'
            ,time: 2 //2秒后自动关闭
        });
    }else{
        layer.open({
            content: '请选择支付方式'
            ,skin: 'msg'
            ,time: 2 //2秒后自动关闭
        });
    }
})