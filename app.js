const express = require('express');
const app = express();
const sqlite3 = require("sqlite3");
var ABC = "";
app.use(express.static('public'));
//支出ページへの遷移---------------------------------------------------
app.get('/', (req, res) => {
res.sendFile(__dirname + '/public/calendar.html');
});
//------------------------------------------------------------------
app.get('/outgolist', (req, res) => {
    res.sendFile(__dirname + '/public/outgolist.html');
    });
const db = new sqlite3.Database("./test.db");
db.serialize(() => {
    // db.run("drop table if exists members");
    db.run("create table if not exists members(id integer primary key,ymd,member,name,yen,kosuu)");
    db.each("select * from members", (err, row) => {
        console.log(`${row.name}${row.member} ${row.yen} ${row.kosuu}`);
    });
    db.all("select * from members", (err, rows) => {
        ABC = rows;
    });
    db.get("select count(*) from members", (err, count) => {
        console.log(count);
    })
});

app.get('/1234', (req, res) => res.json(ABC));

app.get('/touroku', func1);
function func1(req, res){
//console.logはなんの値が入っているのかテスト的に確認したいから書いているので、最終的には消してよい
console.log(req.query.ymd)
console.log(req.query.member)
console.log(req.query.name)
console.log(req.query.yen)
console.log(req.query.kosuu)
//DBで登録
//サーバー側でクエリストリングを取得する書きかた↓
var getDate=req.query.ymd;
var getMember=req.query.member;
var getGoods=req.query.name;
var getYen=req.query.yen;
var getKosuu=req.query.kosuu;

db.serialize(() => {
    // db.run("drop table if exists members");
    db.run("create table if not exists members(id integer primary key,ymd,member,name,yen,kosuu)");
    db.run("insert into members(ymd,member,name,yen,kosuu) values(?,?,?,?,?)", getDate,getMember,getGoods,getYen,getKosuu);
    db.each("select * from members", (err, row) => {
        console.log(`${row.ymd} ${row.member} ${row.name} ${row.yen} ${row.kosuu}`);
    });
    db.all("select * from members", (err, rows) => {
        console.log(JSON.stringify(rows));
        ABC = rows;
    });
    db.get("select count(*) from members", (err, count) => {
        console.log(count["count(*)"]);
    })
});
res.sendFile(__dirname + '/public/outgo.html');
}

app.get('/yearmonthwatch', watch);
function watch(req, res){
//console.logはなんの値が入っているのかテスト的に確認したいから書いているので、最終的には消してよい
console.log(req.query.ymd)
//DBで登録
//サーバー側でクエリストリングを取得する書きかた↓
var getDate=req.query.ymd;
db.serialize(() => {
    // db.run("drop table if exists members");
    db.each("select * from members", (err, row) => {
        console.log(`${row.ymd} ${row.member} ${row.name} ${row.yen} ${row.kosuu}`);
    });
    db.all("select * from members", (err, rows) => {
        console.log(JSON.stringify(rows));
        ABC = rows;
    });
    db.get("select count(*) from members", (err, count) => {
        console.log(count["count(*)"]);
    })
});
}

//支出ページへの遷移---------------------------------------------------
app.get('/outgo', (req, res) => {
  res.sendFile(__dirname + '/public/outgo.html');
  });

//収入ページへの遷移---------------------------------------------------
app.get('/income', (req, res) => {
    res.sendFile(__dirname + '/public/income.html');
    });
//ホーム画面への遷移---------------------------------------------------    
app.get('/homegamen', (req, res) => {
        res.sendFile(__dirname + '/public/homegamen.html');
        });
app.listen(3000, () => {
console.log("connect");
});

//データベースの初期化---------------------------------------------------
app.get('/syokika', func2);
function func2 (req, res){
    db.serialize(() => {
       db.run("drop table if exists members");
       ABC = "";
    });
    
    res.sendFile(__dirname + '/public/homegamen.html')
};

//月別詳細検索画面への遷移---------------------------------------------------
app.get('/month', (req, res) => {
    res.sendFile(__dirname + '/public/month.html');
    });