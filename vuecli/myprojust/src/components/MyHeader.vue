<template>
    <div>
        <div class="tophead">
            <img  class="headimg" src="../assets/img/23.png" >
            <div class="serach">
                <input  type="text">
            </div>
        </div>
            <!-- 導航欄 -->
        <nav class="menu">
            <div class="menulist">
                <span><router-link to="/">首頁</router-link></span>
                <span><router-link to="/about">關於</router-link></span>
                <span><router-link to="/productlist">收藏品</router-link></span>
                <span><router-link to="/shopp">購物車</router-link></span>
            </div>
        </nav>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /* 頁頭樣式 */
body{
    padding-bottom: 100px;

}
.tophead{
    border-bottom: 2px solid #000;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
}
.headimg{
    width: 150px;
    height: 90px;
    margin-left: 50px;
    
}
.serach{
    margin-top: 30px;
}
/* 導航欄 */

.menu{
    background-color: #ddd;
      
}
.menu a{
    text-decoration: none;
    color: #000;
    display: inline-block;
    padding: 10px 40px;
    font-size: 15px;
}

.menulist{
    margin-left: 100px;
}
.menu a:hover{
    background-color: #fff;
    border-radius: 10px 10px 0 0;
}
</style>



