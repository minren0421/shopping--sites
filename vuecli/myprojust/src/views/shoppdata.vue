<template>
    <div>
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
            <h3>資料填寫</h3>
        </div>
        <!--  -->
        <div class="data">
            <div>
                <img src="../assets/img/51.png" style="width: 20px;" >
                請填寫以下資訊
            </div>
            <div class="datawrite">
                <div>
                    <span>*姓名</span><input type="text">
                </div>
                <div>
                    <span>*手機</span><input type="text">
                </div>
                <div>
                    <span>*信箱</span><input type="text">
                </div>
                <div>
                    <span>*地址</span><input type="text">
                </div>
            </div>
             <div>
                    <input type="checkbox">若本人後續辦理退貨作業，同意由MiTCH代為處理銷售憑證例如：發票處理或銷貨折讓
                </div>
                <div>
                    <input type="checkbox">我已詳閱並同意 MiTCH電子商務約定條款
                </div>
        </div>
        <!-- 總計頁尾 -->
        <div class="total">
            <div class="total-list row">
                <div class="col-3 totalproduct">共0件商品</div>
                <div class="col-2">
                    <span>原價</span>
                    <p>$8800</p>
                </div>
                <div class="col-2">
                    <span>折扣</span>
                    <p>$8800</p>
                </div>
                <div class="col-2">
                    <span>合計</span>
                    <p>$8800</p>
                </div>
                <div class="col-3 next-list">
                    <div class="nextdiy">
                        確認
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .shopptop{
            width: 960px;
            height: 80px;
            margin: auto;
            display: flex;
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
        .shopptop .two{
            border-top:2px solid #000;
            color: #000;
        }
        .shopp h3{
            width: 960px;
            text-align: center;
            margin: auto;
            height: 70px;
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
        /* 資料填寫 */
        .data{
            width: 960px;
            margin: auto;
            background-color: #fbfbfb;
        }
        .datawrite div{
            text-align: left;
            padding-left: 30%;
            margin: 10px 0;
           
        }
        .datawrite input{
            margin-left: 20px;
            padding: 5px;
        }
        .nextdiy{
            width: 220px;
            height: 30px;
            background:rgba(51,51,51,1) ;
            font-size: 20px;
            text-align: center;
            border-radius: 5px;
            color: #ddd;
            margin-left: 50px;
            transition:.5s;
            
        }
        .nextdiy:hover{
            opacity: 0.7;
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
</style>

