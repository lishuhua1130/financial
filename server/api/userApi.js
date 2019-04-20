var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
const fs = require('fs');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username, params.password], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/getUser', (req, res) => {
    var sql = $sql.user.get;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username, params.password], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/delUser', (req, res) => {
    var sql = $sql.user.delete;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/updateUser', (req, res) => {
    var sql = $sql.user.update;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.password, params.username], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

// 增加用户资料接口
router.post('/addUserData', (req, res) => {
    var sql = $sql.userData.add;
    var params = req.body;
    // -- 对象转数据
    let paramsArray = Object.keys(params).map(key => params[key]);
    conn.query(sql, paramsArray, function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/getUserDate', (req, res) => {
    var sql = $sql.userData.get;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.uid], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/delUserDate', (req, res) => {
    var sql = $sql.user.delete;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/updateUserDate', (req, res) => {
    var sql = $sql.user.update;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.password, params.username], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
// 用户增加文章
router.post('/addArticle', (req, res) => {
    var sql = $sql.article.add;
    var params = req.body;
    console.log("用户增加文章");
    let fileUrl = '../server/public/article/' + params.title + '.txt';
    fs.writeFile(fileUrl, params.content,function(error){
        if(error){
            console.log('写入失败',error)
        }else{
            params.content = 'http://localhost:3000/public/article/'+ params.title + '.txt';
            let paramsArray = Object.keys(params).map(key => params[key]);
            conn.query(sql, paramsArray, function (err, result) {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    jsonWrite(res, result);
                }
            })
        }
    });
});
router.post('/getAlls', (req, res) => {
    var sql = $sql.article.getAlls;
    var params = req.body;
    console.log("用户增加文章");
    conn.query(sql, [params.uid], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/get', (req, res) => {
    var sql = $sql.article.get;
    var params = req.body;
    console.log("用户获取文章");
    conn.query(sql, [params.uid,params.articleID], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/delete', (req, res) => {
    var sql = $sql.article.get;
    var params = req.body;
    console.log("用户删除文章");
    conn.query(sql, [params.uid,params.articleID], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/update', (req, res) => {
    var sql = $sql.article.get;
    var params = req.body;
    console.log("用户更新文章，具体再实现", params);
});
module.exports = router;