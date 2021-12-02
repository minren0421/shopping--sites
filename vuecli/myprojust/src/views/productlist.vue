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
                    <a href="">收藏品</a>
                </li>
            </ul>
        </div>
        <!-- 收藏品 -->
        <div class="collection" >
            <div class="collection-list" v-for="(content,item) of contents" :key="item">
                <router-link :to="`/detail/${content.lid}`" class="collection-item">
                    
                    <img :src="content.img">
                    <b v-text="content.title"></b>
                    <p v-text="content.lname"></p>
                    <a href="#" class="colora" style="text-decoration: none;">${{content.discount}}</a>
                </router-link>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            contents:[],
            
        }
    },
    created(){
        this.axios.get("/productdata/product").then((res)=>{
            this.contents = res.data;
            console.log(res)
            
        })
    }
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

    .collection{
            width: 960px;
            display: flex;
            flex-wrap: wrap;
            margin: auto;
        }
        .collection-list{
            width: 200px;
            margin: 20px 5px;
            height: auto;
            font-size: 14px;
            line-height: 15px;
            margin: 15px ;
        }
        .collection-list img{
            width: 100%;
            border-bottom: 1px solid #ddd;
        }
        
        .collection-item{
            font-size: 14px;
            color: black;
            text-decoration: none;
        }
        .collection-list p{
            font-size: 14px;
            line-height: 15px;
            margin: 0;
        }
        .colora{
            color: #F2310C;
            text-decoration: none;
        }
        .collection-list .collection-item:hover {
            color:#000; 
            text-decoration:none; 
            cursor:pointer;  
        }
</style>