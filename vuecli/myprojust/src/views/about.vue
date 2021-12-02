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
                    <a href="">關於</a>
                </li>
            </ul>
        </div>
        <!-- 內容介紹 -->
        <div class="about">
            <div class="about-img">
                <img src="../assets/img/11.png" >
            </div>
            <div>
                <p class="">
                BE@RBRICK是什麼?BE@RBRICK（ベアブリック）庫柏力克熊(又稱為積木熊) 是日本玩具公司Medicom Toy於2001年開發推出的方塊型小熊公仔。當年適逄泰迪熊誕生100週年，於是以泰迪熊為靈感的「BE@RBRICK」便誕生了。「BE@RBRICK」積木熊的身體構造由頭、身體、臀等９個部分組成，經常與世界各地的藝術家和動畫、電影等展開合作，推出不同設計的作品。
                不少愛好者可能會疑問Bearbrick怎麼買？哪裡買？如果你喜歡蒐集「BE@RBRICK」 ，那麼您可以瀏覽日本官方商店和樂天店購買最新的款式，如果想尋找限量款式，可以前往日本YAHOO拍賣、樂天市場或AMAZON等商店逛逛，說不等能便宜入手稀有的款式喔！ZenMarket提供多種寄送方法，台灣、香港或者澳門的粉絲也可以輕鬆入手喜愛的款式！
                </p>
            </div>
        </div>
        <div>
        <div class="footer">
            <div class="footeritem">
                <ul class="footerlist">
                    <h6>IFCHIC.COM</h6>
                    <li>關於我們</li>
                    <li>合作聯盟</li>
                    <li>服務條款</li>
                    <li>隱私政策</li>
                </ul>
                <ul class="footerlist">
                    <h6>我的帳戶</h6>
                    <li>我的最愛</li>
                    <li>個人資料</li>
                    <li>我的地址</li>
                    <li>訂單紀錄</li>
                </ul>
                <ul class="footerlist">
                    <h6>遞送服務</h6>
                    <li>運送資訊</li>
                    <li>退換貨說明</li>
                    <li>追蹤訂單</li>
                </ul>
                <ul class="footerlist">
                    <h6>客服中心</h6>
                    <li>聯絡我們</li>
                    <li>Tel:(886)2-2699-3383</li>   
                </ul>
                <ul class="footerlist">
                    <li><img src="../assets/img/38.png" style="width: 100px;height: 100px;"></li>
                </ul>
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
.container{
    max-width:100%;
    padding:0;
    
}
 /* 頁尾樣式 */
.footer{
    margin-top: 60px;
    padding: 20px;
    background: #f1f1f1;
    border-top: 1px solid #ddd;
    width: 100%;
    height: 200px;
    display: block;
}
.footer .footerlist li{
   
    list-style: none;
    display: block;
    color: #999;
    font-size: 12px;
    margin-left: 5px;
}
.footer h6{
    font-size: 14px;
    color: #666;
    font-weight: lighter;
    line-height: 28px;
}
.footeritem{
    
    display: flex;
    justify-content: center;
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

.container .about{
            margin-left: 15%;
            margin-top: 0px;
        }
        .about{
            width: 970px;
            height: auto;
            
        }
        .about img{
            max-width: 100%;
            
        }
        .about p{
            max-width: 100%;
            padding: 0 40px;
            font-size: 14px;
            text-indent: 28px;
            margin: 10px 0;
            line-height: 30px;
        }
        
</style>