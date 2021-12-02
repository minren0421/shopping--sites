<template>
     <div class="container">
         <my-header></my-header>
        <!-- 麵包屑 -->
        <div>
            <ul class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/Index">首頁</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link to="/productlist">收藏品</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link to="">收藏詳情</router-link>
                </li>
            </ul>
        </div>
        <!-- 商品詳情 -->
        <div>
            <div class="detail row" v-for="(content,i) of contents" :key="i">
                <div class="detail-img col-6">
                    <img :src="content.img" >
                </div>
                <div class="col-6">
                    <div class="details">
                        <u><a href="#" v-text="content.title"></a></u>
                        <h6 v-text="content.lname"></h6>
                        <div class="notice">
                            <span>
                                {{content.detail}}
                            </span>
                        </div>
                        <p class="price"><s style="font-size: 15px;color: #797979;">${{content.price}}</s>${{content.discount}}</p> 
                    </div>
                    <div class="shopp" 
                    >
                        <img src="../assets/img/10.png" @click="addcart" :data-lid="content.lid"
                        :data-lname="content.lname" :data-price="content.price" :data-img="content.img">
                    </div>
                </div>
            </div>
        </div>
         <!-- 頁尾 -->
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
    props:["lid"],
    created(){
       this.axios.get("/details",{params:{lid:this.lid}}).then((res)=>{
        //    console.log(res.data);
           this.contents = res.data;
       })
    },
    methods:{
        addcart(event){
            let lid = event.target.dataset.lid;
            let lname = event.target.dataset.lname;
            let price = event.target.dataset.price;
            let img = event.target.dataset.img;
            this.axios.get("/productdata/addcart",{params:{lid,lname,price,img}}).then((res)=>{
                console.log(res) 
                           
            })
        }
    }
}
</script>
<style scoped>
    .container{
        max-width:100%;
        padding:0;
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
    .detail{
            
            display: flex;
            justify-content: space-between;
            width: 970px;
            margin-left: 15%;
        }
        .detail-img{
            
            width: 670px;
            height: 570px;
        }
        .detail img{
            width: 100%;
        }
        .details{
            
            padding: 20px;
            border-bottom: 2px solid #ddd;
            height: 370px;
        }
        .details a{
            color: #333;
        }
        .details h6{
            margin: 5px 0;
            font-size: 20px;
        }
        .details .notice{
            color: #797979;
            margin-top: 30px;
        }
        .details p{
         color: #f23e0c;   
         font-size: 35px;
         
        }
        .shopp{
            width:200px;
            height: auto;
            margin-top: 20px;
            
        }
        .shopp:hover img{
            opacity: 0.5;
            width:100%
        }
</style>