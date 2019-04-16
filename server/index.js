// node 后端服务器


// node 后端服务器
 
const userApi = require('./api/userApi');
const articleApi =require('./api/articleApi');
// -- elupload控件上传接口处理
const dataBaseOperate = require('./dataBaseOperate');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const ueditor = require('ueditor');
const ueditorConfig = require("./public/nodejs/config.json")
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 
// 后端api路由
// -- 处理用户信息
app.use('/api/user', userApi);
// -- 处理文章
app.use('./api/article',articleApi);
// -- 处理ueditor
app.use('/api/ueditor', ueditor(path.join(__dirname,'public'),function(req,res){
    // -- 获取上传文件类型，表示客服端上传
    if (req.query.action === 'uploadimage') {
        var foo = req.ueditor;
        var imgname = req.ueditor.filename;
        var img_url = '/images/ueditor/';
        //你只要输入要保存的地址 。保存操作交给ueditor来做
        res.ue_up(img_url); 
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = '/images/ueditor/';
        // 客户端会列出 dir_url 目录下的所有图片
        res.ue_list(dir_url); 
    }
    // 客户端发起其它请求
    else {
        res.setHeader('Content-Type', 'application/json');
        // res.redirect('/nodejs/config.json');
        res.json(ueditorConfig);
    }}))
    //处理静态文件 todo
// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, 'public/')));
/* body-parser是一个HTTP请求体解析的中间件
 * 使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体
 * */
/* 以application/json格式解析数据 */
app.use(bodyParser.json());
/* 以application/x-www-form-urlencoded格式解析数据 */
app.use(bodyParser.urlencoded({ extended: false }));

/* 设置静态资源目录 */
app.use('/serverImage', express.static(path.join(__dirname, 'serverImage')));

app.use('/api', dataBaseOperate);

// 监听端口
app.listen(3000);

console.log('success listen at port:3000......');