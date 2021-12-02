const express = require('express');
const bodyParser=require('body-parser')
const productdata = require('./routes/productdata.js')
const detail = require('./routes/detail.js')
const cors=require("cors");
const session = require("express-session")


// 創建web服務器
let app = express();
// 監聽端口
app.listen(3000);
// 使用中間件 靜態托管到public
app.use(express.static('public'));
// 使用body-parser中間件
app.use(bodyParser.urlencoded({
    extended:false
}));

// 配置允許訪問地址跨域
app.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true //每個請求是否驗證
}))

// 配置session  
app.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}))


// 統一為每個請求先修改響應頭


// 使用路由器，掛載
app.use('/productdata' ,productdata);
app.use('/details',detail);



