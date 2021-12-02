<template>
        <div class="container">
            <my-header></my-header>
            <div>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">首頁</a>
                    </li>
                </ul>
            </div>
            <!-- 輪播 -->
            <div class="carouselhead" >
                <div class="carousel" data-ride="carousel" id="lunbo">
                    
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/img/11.png" class="w-100">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/img/16.png" class="w-100">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/img/18.png" class="w-100">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/img/20.png" class="w-100">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/img/22.png" class="w-100">
                        </div>
                    </div>
                    <!-- 2.左右箭頭 -->
                    <a data-slide="prev" href="#lunbo" class="carousel-control-prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a  data-slide="next" href="#lunbo" class="carousel-control-next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                    <!-- 3.輪播指示器 -->
                    <ul class="carousel-indicators">
                        <li class="active" data-slide-to="0" data-target="#lunbo"></li>
                        <li data-slide-to="1" data-target="#lunbo"></li>
                        <li data-slide-to="2" data-target="#lunbo"></li>
                        <li data-slide-to="3" data-target="#lunbo"></li>
                        <li data-slide-to="4" data-target="#lunbo"></li>
                    </ul>
                </div>
            </div>
            <div>
                 <p class="productname"> BE＠RBRICK 熱門收藏品</p>
            </div>
            <!-- 熱門商品 -->
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
            contents:[]
        }
    },
    created(){
        this.axios.get('/productdata/product').then((res)=>{
            console.log(res)
            this.contents = res.data;
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

    /* 輪播 */
.carousel-control-prev,
.carousel-control-next {
    width:4%;
    height: 20%;
    background-color: #aaa;
    border-radius: 0.5rem;
    top:40%;
}
.carousel-indicators li{
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 0.7rem;
    background-color: #fff;
}
.carousel-indicators .active{
    background-color: #0aa1ed;
}
.carouselhead .carousel-item>img{
    display: block;
    width: 100%;
    height: 450px;
} 

/* 熱門商品 */
.productname{
    margin: 20px;
    margin-left: 50px;
    border-bottom: 2px solid #aaa;
    padding: 10px;
}

    .collection{
            width: 1200px;
            display: flex;
            flex-wrap: wrap;
            margin: auto;
            box-sizing: border-box;
        }
        .collection-list{
            width: 17%;
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