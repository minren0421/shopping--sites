<template>
    <div class="container">
        <my-header></my-header>
        <!-- 麵包屑 -->
        <div>
            <ul class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="">首頁</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="">購物車</a>
                </li>
            </ul>
        </div>
        <!-- 購物車 -->
        <div class="shopp">
            <div class="shopptop">
                <div class="shopptopitem one">1.購物車</div>
                <div class="shopptopitem two">2.資料填寫</div>
            </div>    
            <h3>購物車</h3>
            <div class="shoppcenter row">
                <input type="checkbox" id="selectall" @click="selectall" class="global">全選<button class="delglo" @click="deleteitems">刪除全部</button>
                <div class="col-4">商品資訊</div>
                <div class="col-2">價格</div>
                <div class="col-2">數量</div>
                <div class="col-2">合計</div>
            </div>
            <div class="shoppproduct " v-for="(item,i) of list" :key="i">
                <div class="shoppimg">
                    <input type="checkbox" v-model="item.cb">
                    <div class="shoppimg-img">
                        <img :src="item.img" >
                    </div>
                    <p><b>BE@RBRICK/庫柏力克熊</b><br>{{item.lname}}</p>
                </div>
                <div class="shopp-item">
                    <p>${{item.price}}</p>
                </div>
                <div class="shopp-item">
                    <button @click="change(i, 1)">+</button>
                    <span>{{item.count}}</span>
                    <button @click="change(i, -1)">-</button>
                </div>
                <div class="shopp-item"><p>${{item.count*item.price}}</p></div>
                <b class="shopp-item" @click="deleteitem" :data-id="item.id">X</b>
            </div>
        </div>
        <!-- 折扣碼 -->
        <div class="discountlist row">
            <div class="col-6"></div>
            <div class="discount col-6">
                <h6>折扣券代碼 PROMO CODE</h6>
                <input type="text"> <img src="../../public/img/08.png" >
            </div>
        </div>
        <!-- 總計頁尾 -->
        <div class="total">
            <div class="total-list row">
                <div class="col-3 totalproduct">共{{productcount}}件商品</div>
                <div class="col-2">
                    <span>原價</span>
                    <p>${{total}}</p>
                </div>
                <div class="col-2">
                    <span>折扣</span>
                    <p>$0</p>
                </div>
                <div class="col-2">
                    <span>合計</span>
                    <p>${{total}}</p>
                </div>
                <div class="col-3" @click="checkout">
                    <img src="../../public/img/09.png">
                </div>
            </div> 
        </div>
    </div>
</template>

<script>


export default {
    data(){
        return{
            list:[],
            productcount:0,
            
        }
    },
    created(){
        this.loadmore();
    },
    methods:{
        loadmore(){
            this.axios.get('/productdata/carts').then((res)=>{
                // this.list = res.data.data;
                // 創建循環 
                let rows = res.data.data;
                for(let item of rows){
                    item.cb = false ; 
                }
                this.list = rows;
                console.log(this.list);
                this.productcount = this.list.length
            })
            
        },
        deleteitem(event){
            let id = event.target.dataset.id;
            if(confirm("確定刪除此商品?"))
            this.axios.get('/productdata/deleteitem',{params:{id}}).then((res)=>{
                alert("刪除成功");
                this.loadmore(); //調用刷新頁面
            })
        },
        change(loc, i){
            let n = this.list[loc].count ;
            n +=i;
            n<1 && (n=1)
            this.list[loc].count = n;
        },
        deleteitems(){
            if(confirm("確定刪除此商品?")){ 
                let id = "";
                for(let item of this.list){
                    if(item.cb){
                        id+=item.id+",";
                    }
                }
                // 去除最後一個的逗號
                id = id.slice(0,-1);
                if(id==""){
                    alert("請選擇需要刪除的商品");
                    return;
                }
                this.axios.get('/productdata/deleteitems',{params:{id}}).then((res)=>{
                    if(res.data.code==-1){
                        alert('刪除失敗');
                    }else{
                        alert('刪除成功');                        
                        // $("#selectall" ).prop( "checked", false );
                        
                        document.getElementById("selectall").checked = false;
                        this.loadmore();    

                    }

                })
            }
            
        },
        selectall(event){
            let cb = event.target.checked;
            for(let item of this.list){
                item.cb = cb;
            }
        },
        checkout(){
           
        
        }
        
    },
    computed:{
        total(){
            let total=0;
            for(let item of this.list){
                total+=item.price*item.count
            }
            return total;
        }
    }
}
</script>
<style scoped>
        .delglo{
           margin-left: 10px;
        }
        .container{
            max-width:100%;
            padding:0;
            padding-bottom: 100px;
        }
     .shopp .shopptop{
            width: 960px;
            height: 80px;
            display: flex;
            margin: auto;
            justify-content: center;
        }
        .shopptopitem{
            width: 30%;
            text-align: center;
            padding: 10px 0;
            border-top:2px solid #ccc;
            margin-left: 2px;
            border-radius: 0 2px 2px 0;
            font-size: 14px;
            font-weight: bold;
            border-top: 2px solid #eee;
            color: #ccc;
        }
        .shopptop .one{
            border-top:2px solid #000;
            color: #000;
        }
        .shopp h3{
            width: 960px;
            text-align: center;
            margin: auto;
            height: 70px;
        }
        .shoppcenter{
            width: 1200px;
            margin: auto;
            display: flex;
            border-bottom: 2px solid #ccc;
            
        }
        .shoppcenter div{
            text-align: right;
            
        }

        /*  */
        .shoppproduct{
            width: 1200px;
            margin: auto;
        }
        .shoppimg{
           
            width: 600px;
            height: 200px;
            display: flex;
            
        }
        .shoppimg-img {
            width: 160px;
        }
        .shoppimg-img img{
            width: 100%;
        }
        .shoppimg p{
            display: inline-block;
            margin-top: 30px;
        }
        .shoppproduct{
            width: 1200px;
            margin: auto;
            display: flex;
            border-bottom: 2px solid #ccc;
        }
        .shoppproduct div+div{
            
            width: 200px;
            justify-content: center;
        }
        .shopp-item{
            text-align: center;
            top: 0;
            bottom: 0;
            margin: auto;
        }
        /* 總計頁尾*/
        .total-list{
            width: 100%;
            height: 60px;
            display: flex;
            box-sizing: border-box;
            text-align: center;
            align-items: center;
            
        }
        .total-list div {
            height: 50px;
            border-right: 2px solid #ccc;
            position: relative;
            margin-top: 10px;
            
        }
        .total-list span{
            position: absolute;
            left: 20px;
            color: #797979;
            font-size: 12px;
        }
        .total-list p{
            position: absolute;
            right: 10px;
            top: 20px;
        }
        .totalproduct{
            text-align: left;
            padding: 10px 50px;
            
        }
        .total{
            border-top: 1px solid #ccc;
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: #fff;
            margin-top: 100px;
        }
        body{
            padding-bottom: 100px;
        }
        /* 麵包屑 */
        .breadcrumb-item + .breadcrumb-item::before{
            content:'>';
            color: #aaa;
        }
        .breadcrumb{
            background-color: #fff;
            font-size: 10px ;
            margin-left: 30px;
            margin-bottom: 0;
        }
        .breadcrumb-item a{
            color:#aaa
        }
        /* 折扣碼 */
        .discountlist{
            margin-top: 100px;
        }
        .discount{
            margin-top: 50px;
            border-left: 2px solid #aaa;
        }
</style>