const mysql = require('mysql');

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1234",
    port : "3306",
    database : "nwconduct",
    dateStrings : 'date'
})
//
exports.allMembers = function(callback){
    connection.query('SELECT * FROM member ORDER BY no DESC;',(err, results, fields) => {
        if(err) throw err;
        callback(results);
    });
}
//회원가입 멤버추가
exports.insertMember = function(newId,newPsw,newName,number,phone,mail,mailing,sms,adress, callback){
    connection.query(`INSERT INTO member(id,psw,name,phone,mobile,mail,mailing,sms,adrs) VALUES('${newId}','${newPsw}','${newName}','${number}','${phone}','${mail}','${mailing}','${sms}','${adress}')`), (err, result) => {
        if(err) throw err;
        callback();
    }
}
//로그인
exports.login = function(userId,userPsw, callback){
    connection.query(`SELECT * FROM member WHERE id = '${userId}' AND psw = ${userPsw}`,(err, result, fields) => {
        if(err)throw err;
        if(result.length > 0){
            result = true;
            callback(result);
        }else{
            result = false;
            callback();
        }
    });
}


/*
//검색
exports.search_process = function(seachbox, searchText, callback){
    if(seachbox == 'txt'){
        connection.query(`SELECT * FROM status WHERE description LIKE "%${searchText}%" ORDER BY no DESC;`,(err, rows, fields) => {
            if(err) throw err;
            callback(rows);
        });
    }else if(seachbox == 'title'){
        connection.query(`SELECT * FROM status WHERE title LIKE "%${searchText}%" ORDER BY no DESC;`,(err, rows, fields) => {
            if(err) throw err;
            callback(rows);
        });
    }else if(seachbox == '' || seachbox == undefined || seachbox == null){
        connection.query('SELECT * FROM status ORDER BY no DESC;',(err, rows, fields) => {
            if(err) throw err;
            callback(rows);
        }); 
    }
}


//페이지추가
exports.insertMemo = function(title,description,upload, callback){
    //파일유무 확인
    if(upload !== undefined){
    connection.query(`INSERT INTO status(title,description,upload,day,hit) VALUES('${title}','${description}','${upload}',now(),'0')`, (err, result) => {
        if(err) throw err;
        callback();
    });
    }else{
        connection.query(`INSERT INTO status(title,description,upload,day,hit) VALUES('${title}','${description}',1,now(),'0')`, (err, result) => {
            if(err) throw err;
            callback();
        });
    }
 }
//리스트페이지이동
 exports.page = function(no, callback){
    //조회수 추가(근데 왜 새로고침 아니면 확인 불가인지?)
    connection.query(`UPDATE status set hit=hit+1 WHERE no = ${no}`,(err, result) => {
        connection.query(`SELECT * FROM status WHERE no=?`,[no],(err, result) => {
            if(err) {
                throw err;}
            callback(result);
        });
    });
 }

 //리스트수정페이지
 exports.update = function(no, callback){
    connection.query(`SELECT * FROM status WHERE no=?`,[no],(err, row, fields) => {
        if(err) {
            throw err;}
        callback(row);
    });
 }
 //리스트수정작업
 exports.update_process = function(no, title, description, callback){
    connection.query(`UPDATE status set title = "${title}", description = "${description}" WHERE no = ${no}`, (err, result) => {
        if(err) throw err;
        callback();
    });
 }

 //리스트삭제
 exports.delete = function(no, callback){
    connection.query(`DELETE FROM status WHERE no = ${no}`,(err, result) => {
        if(err) throw err;
        callback();
    });
 }
*/


