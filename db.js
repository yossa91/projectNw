const mysql = require('mysql');

const connection = mysql.createConnection({
    host : "us-cdbr-east-05.cleardb.net",
    user : "b9ec100646d261",
    password : "7d2cb632",
    port : "3306",
    database : "heroku_49b42ca63042fa9",
    dateStrings : 'date'
})
//메인
exports.getAllMemos = function(callback){
    connection.query('SELECT * FROM status ORDER BY no DESC;',(err, rows, fields) => {
        if(err) throw err;
        callback(rows);
    });
}

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
    if(upload != undefined || upload != null || upload != ''){
    connection.query(`INSERT INTO status(title,description,upload,day,hit) VALUES('${title}','${description}','${upload}',now(),'0')`, (err, result) => {
        if(err) throw err;
        callback();
    });
    }else{
        connection.query(`INSERT INTO status(title,description,day,hit) VALUES('${title}','${description}',now(),'0')`, (err, result) => {
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



