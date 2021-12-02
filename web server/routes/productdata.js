const express=require('express');
const pool = require('../pool.js')
var productdata=express.Router();
const  uuid  =  require ( 'uuid' ) ; 




// 獲取數據庫資料
productdata.get('/product',(req,res)=>{
    pool.query("select * from productdata",(err,result)=>{
        // 獲取當前id
        // let id = result[0].lid;
        // 保存到session對象中

        if(err) throw err;
        res.send(result);
    })

});

// 獲取session uid
productdata.get("/addcart",(req,res)=>{
    // console.log(req.session)
    let uid = req.session.uid
    let lid = req.query.lid;
    let price = req.query.price;
    let lname = req.query.lname;
    let img = req.query.img
    console.log(uid);
    if(!uid){
        // console.log("Get New uid");
        req.session.uid = uuid.v4();
        uid = req.session.uid;
    }
    
    pool.query("SELECT id FROM shoppdata WHERE useruuid=? AND lid=?",[uid,lid],(err,result)=>{
        if(err)throw err;
        // console.log(result)
        if(result==0){
            var sql = `INSERT INTO shoppdata VALUES(null,${lid},${price},1,'${lname}','${uid}','${img}')`;    
        }else{
            var sql = `UPDATE shoppdata SET count=count+1 WHERE useruuid='${uid}' AND lid=${lid}`;
        }
        pool.query(sql,(err,result)=>{
            if(err)throw err;
            if(result.affectedRows>0){
                res.send({code:1,msg:"添加成功"});
            }else{
                res.send({code:0,msg:"添加失敗"});
            }
        })
    })
        
    
})

// 查詢指定用戶購物車訊息
productdata.get('/carts',(req,res)=>{
    let uid = req.session.uid;
    if(!uid){
        res.send({code:-1,msg:'請先加入商品'})
        return;
    }
    let sql = 'SELECT id,lname,price,img,count FROM shoppdata WHERE useruuid = ?';
    pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:'查詢成功',data:result})
    });

})

// 刪除購物車表裡的數據
// http://127.0.0.1:3000/deleteitem?id=1
productdata.get('/deleteitem',(req,res)=>{
    let uid = req.session.uid;
    if(!uid){
        res.send({code:-1,msg:'請先加入商品'})
        return;
    }
    let id = req.query.id;
    let sql = 'DELETE FROM shoppdata WHERE id = ?';
    pool.query(sql,[id],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:'刪除成功'});
        }else{
            res.send({code:-1,msg:'刪除失敗'});
        }
    })
    
})


// 刪除多個購物車數據
productdata.get('/deleteitems',(req,res)=>{
    let id = req.query.id;
    let sql = `DELETE FROM shoppdata WHERE id IN (${id})`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:'刪除成功'});
        }else{
            res.send({code:-1,msg:'刪除失敗'});
        }
    })
})


// 確定訂單
productdata.get('/checkoutlist',(req,res)=>{
    let list = req.query.list;
    let productid = req.query.productid;
    let count = req.query.count;
    let sql=`INSERT INTO orderlist VALUES(null,${list},${productid},${count})`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:'插入成功'});
        }else{
            res.send({code:-1,msg:'插入失敗'});
        }
    })
})

module.exports=productdata;