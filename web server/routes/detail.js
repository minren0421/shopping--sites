const express=require('express');
const req = require('express/lib/request');
const pool = require('../pool.js')
var router=express.Router();





// 獲取商品詳情
router.get("/",(req,res)=>{
    var lid=req.query.lid;
    var output={
      product:{}
    }
    if(lid!==undefined){
      var sql1=`select * from productdata where lid=?`;
      pool.query(sql1,[lid],(err,result)=>{
        if(err) throw(err);
        output.product=result[0];
        // console.log(output);
        res.send(result);
      })
    }else{
      res.send(output);
    }
  })

    

module.exports=router;