// qq 邮箱授权码 zffmfsqhqwjccbdd
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user : 'wangtao425012251@qq.com',
    pass : 'zffmfsqhqwjccbdd'
 
  }
  });
  var mailOptions = {
    from: 'wangtao425012251@qq.com', // 发送者
    to: '425012251@qq.com,skymrwt@gmail.com', // 接受者,可以同时发送多个,以逗号隔开
    subject: 'Bolg updated(wangtao.plus)', // 标题
    //text: 'Hello world', // 文本
    html: `<h2>www.wangtao.plus 更新提示</h2><h3>
    <a href="https://www.wangtao.plus">
    自动更新完成</a></h3>` 
  };
 
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
 
    console.log('发送成功');
  });