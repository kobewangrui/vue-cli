<style lang="css" src="assets/css/index.css" scoped></style>
<template>
    <div class="line-left">
        <div class="line-title">
            <span>{{categroy[routeCategroy].title}}</span>
            <span>
                <router-link  tag="span"  :to="{path:'/product',query:{keywords:item}}" v-for="item in categroy[routeCategroy].hots">{{item}}<i></i></router-link>
                <span class="hot">更多></span>
            </span>
        </div>
        <div class="product-show">
             <router-link tag="div" :to="{path:'/product/route/detail',query:{productId:'cp10000'}}" v-for="(item,$index) in 12" :class="{'first':$index == 0}" :key="item.id">
                    <template v-if="$index%2==0">
                        <span class="TAC">TAC</span>
                    </template>
                    <template v-else>
                        <span class="spicial">特价</span>
                    </template>
                <img :src="require('assets/image/1.jpg')" alt="线路展示">
                <p class="ellipsis">昆达利撒发射点发射点发生十分士大夫</p>
                <p>
                <!--<span class="original-price">原价：￥1231</span>-->
                    <template v-if="$index!=0">
                        <span>余量：8</span>
                    </template>
                    <template v-else>
                        <span>陕中旅雁塔路分公司</span>
                    </template>
                    <span>￥12313</span>
                </p>
            </router-link>
        </div>
    </div>
</template>
<script>    
export default{
    props:[
        "routeCategroy"
    ],
    data(){
        return{
            categroy:{
                NEARBY:{
                    title:'周边线路',
                    hots:['北京','上海','广州','深圳']
                },
                INLAND:{
                    title:'国内线路',
                    hots:['北京','上海','广州','深圳']
                },
                OVERSEAS:{
                    title:'出境线路',
                    hots:['北京','上海','广州','深圳']
                }
            }
        }
    },
    beforeMount(){
        // $.post('/rest/product/route/onSale',{pageSize:12,routeCategroy:this.routeCategroy},(resp)=>{
        //     this.routes=resp.data
        // })
    }
}
</script>