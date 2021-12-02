<template>
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
</template>
<script>
export default {
    
}
</script>
<style scoped>
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

</style>

