
// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(id , username , password) values (0, ?, ?)',
        get: 'SELECT * from user where username = ? and password = ?',
        delete: 'delete from user where username = ?',
        update: 'update user set password =? where username=?'
    },
    userData: {
        add: 'insert into userData(uid , accountType , financeName,financeInfo,financeImgUrl,province,city,field,operatorName,operatorID,operatorImgUrl,operatorTel,operatorEmail,operatorRelation,assistInfo) values (?, ?, ?,?,?,?,?,?,?,?,?, ?, ?,?,?)',
        get: 'SELECT * from userData where uid = ?',
        // delete :'delete from user where username = ?',
        // update:'update user set password =? where username=?'
    },
    article: {
        add: 'insert into article(articleID , uid , title , content , coverImgUrl , type) values (0, ? , ?, ?, ? , ? )',
        getAlls: 'SELECT * from article where uid = ?',
        get: 'SELECT * from article where uid = ? and articleID = ?',
        delete: 'delete from article where uid = ? and articleID = ?',
        update: 'update article set title = ? ,content = ?,coverImgUrl = ?,type = ? where uid = ? and articleID = ?'
    }
}

module.exports = sqlMap;