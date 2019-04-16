var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);
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
// 用户增加文章
router.post('/add', (req, res) => {
    var sql = $sql.article.add;
    var params = req.body;
    console.log("用户增加文章",params);
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
module.exports = router;