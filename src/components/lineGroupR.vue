<style lang="css" src="assets/css/index.css" scoped></style>
<template>
    <div class="line-right">
        <p class="line-right-title">{{categroy[routeCategroy].title}}</p>
        <ul>
            <template v-for="(item,$index) in 10">
                <router-link :to="{path:'/product',query:{routeCategroy:url}}" tag="li" v-if="$index<3">
                    <div class="hot-line-img">
                        <img :src="require('assets/image/2.jpg')">
                        <span class="lineHotNumber">{{$index + 1}}</span>
                    </div>
                    <div class="hot-line-discribe">
                        <p class="ellipsis">速度了速度加快立法精神了肯定</p>
                        <p>众信假期</p>
                        <p>
                            <span>销量 ：8</span>
                            <span>￥1000</span>
                        </p>
                    </div>
                </router-link>
                <router-link v-else class="hot-after" :to="{path:'/product',query:{routeCategroy:url}}" tag="li">
                    <span>{{$index + 1}}</span>
                    <span class="ellipsis">喀什酱豆腐立刻就是打开垃圾分厘卡时间</span>
                </router-link>
            </template>
        </ul>
        <router-link :to="{path:'/product',query:{routeCategroy:url}}" tag="p">查看更多 ></router-link>
    </div>
</template>
<script>    
export default {
    props:[
        "routeCategroy"
    ],
    data(){
        return{            
            url:undefined,
            categroy:{
                NEARBY:{
                    title:'周边热销',
                },
                INLAND:{
                    title:'国内热销'
                },
                OVERSEAS:{
                    title:'出境热销'
                }
            }
        }
    },
    beforeMount(){
        // $.post('/rest/product/route/onSale',{pageSize:5,routeCategroy:this.routeCategroy},(resp)=>{
        //     this.routes=resp.data
        // })
    },
    created(){
        switch(this.routeCategroy){
            case 'NEARBY':
                this.url = 'NEARBY';
                break;
            case 'INLAND':
                this.url = 'INLAND';
                break;
            case 'OVERSEAS':
                this.url = 'OVERSEAS';
                break;
        }
    }
}
</script>