$('.login').click(function () {
    let mobile = $('#mobile').val();
    let yzm = $('#yzm').val();
    if (mobile != ''){
        if (yzm != ''){
            location.href = './index.html'
        } else {
            layer.open({
                content: '请填写验证码'
                ,skin: 'msg'
                ,time: 2 //2秒后自动关闭
            });
        }
    } else {
        layer.open({
            content: '手机号不能为空'
            ,skin: 'msg'
            ,time: 2 //2秒后自动关闭
        });
    }
})
$('.title').click(function () {
    layer.open({
        content: '已发送验证码'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
})

$('.login-o').click(function () {
    location.href = './login.html'
    layer.open({
        content: '已退出登录'
        ,skin: 'msg'
        ,time: 2 //2秒后自动关闭
    });
})