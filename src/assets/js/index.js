export default {
    data(){
        return{
            positionTop:0,
            route:{
                "热门线路":{
                    "showRoute":["马尔代夫","三亚","巴厘岛"],
                    "list":{
                        "国内":["三亚","天涯海角","海口","亚龙湾"],
                        "出境":["巴厘岛","迪拜","台北","马尔代夫","巴黎","首尔","洛杉矶","毛里求斯","沙巴","冲绳","留尼汪岛","塞班","长滩岛","关岛"]
                    }
                },
                "周边线路":{
                    showRoute:["延安","成都","平遥","汉中"],
                    "list":{
                        "城市":["延安","咸阳","晋中","焦作","商洛","安康","临汾","洛阳","运城","晋城","三门峡","临潼","太原","汉中","铜川","郑州","开封","宝鸡"],
                        "景点":["兵马俑","华山","华清池","法门寺","秦陵地宫","枣园","杨家岭","壶口瀑布","钟鼓楼","西安明城墙","大雁塔广场","大雁塔","临潼骊山","半坡遗址","大明宫遗址","平遥古城","云台山","壶口瀑布","金丝峡","神农架","阆中古城","秦岭","关山牧场","五老峰","大唐芙蓉园","汤峪","杨家岭","翠华山","黄帝陵","碑林","乾陵"]
                    }
                },
                "国内线路":{
                    showRoute:["杭州","九寨沟","丽江","成都"],
                    "list":{
                        "海南":["三亚","天涯海角","海口","叶龙湾"],
                        "云南":["香格里拉","昆明","丽江","西双版纳","大理"],
                        "四川":["成都","九寨沟","黄龙","峨眉山风景","都江堰","稻城亚丁"],
                        "北京":["天安门","故宫","八达岭长城","天坛","颐和园"],
                        "内蒙古":["满丽洲","阿尔山","呼伦贝尔","赤峰","乌兰浩特","鄂尔多斯"],
                        "广西":["桂林","涠洲岛","阳朔县","北海","漓江"],
                        "福建":["厦门","鼓浪屿","武夷山","永定土楼","云水谣古镇"],               
                        "西藏":["拉萨","林芝","日喀则"]
                    }
                },
                "出境线路":{
                    showRoute:["台湾","泰国","法国","马来西亚"],
                    "list":{
                        "马来西亚":["吉隆坡","马六甲","热浪岛","槟城","刁曼岛"],
                        "新加坡":["圣淘沙","花芭山","关丹"],
                        "韩国":["首尔","济州岛","釜山","仁川","庆州"],
                        "英国":["伦敦","爱丁堡","约克","曼彻斯特","伯明翰"],
                        "泰国":["普吉岛","曼谷","清迈","芭堤雅","清莱"],
                        "法国":["普罗旺斯","巴黎","里昂","马赛","波尔多"],
                        "荷兰":["阿姆斯特丹","海牙","鹿特丹","阿姆斯福尔特","代尔夫特"],
                        "瑞士":["日内瓦","苏黎世","卢塞恩","采尔马特","因特拉肯"],
                        "希腊":["爱琴海","雅典","圣托里尼岛","奥林匹亚","米科诺斯岛"]
                    }
                },
                "邮轮":{
                    showRoute:["马尔代夫","黄石公园"],
                    "list":{
                        "国内":["世纪游轮","长江黄金系列邮轮","大美三峡游轮","美国维多利亚系列游轮","长海游轮","总统游轮"],
                        "国际":["皇家加勒比邮轮","歌诗达邮轮","天海邮轮","美国公主邮轮","海达路德邮轮","丽星邮轮","迪士尼邮轮","夸克邮轮","星梦邮轮","冠达邮轮","荷美邮轮","大洋邮轮","水晶邮轮"]
                    }
                },
                "签证":{
                    showRoute:["韩国","日本","泰国","马来西亚"],
                    "list":{
                        "亚洲":["新加坡","韩国","老挝","越南","新加坡","马来西亚","成都","意大利","大理","三亚","成都","意大利"],
                        "欧洲":["意大利","西班牙","荷兰","丹麦","瑞典","芬兰"],
                        "美洲":["美国","加拿大","古巴","巴西","阿根廷","秘鲁"],
                        "大洋洲":["新西兰","澳大利亚"]
                    }
                },
                "景点":{
                    showRoute:["都江堰","九寨沟"],
                    "list":{
                        "国内":["淮海路","上海大剧院","滨江大道","静安寺","仙水岩","千岛湖","大明湖","东山岛","南普陀寺","太姥山","九曲溪","蓬莱水城","普陀山","九华山","红枫湖","黄果树大瀑布","井冈山","甘露寺","天柱山","琅琊山","孔府","太清宫","龙游石窟","净月潭","水观音亭","天一阁","东方明珠"],
                        "出境":["印度泰姬陵","马来西亚双子塔","死海","下龙湾","沙巴岛","芭提雅","韩国景福宫","长隆欢乐世界","苏梅岛","柬埔寨金边","耶路撒冷","长滩岛","巴黎圣母院","凡尔赛宫","巴黎凯旋门","威尼斯水城","罗马万神殿","美国五角大楼","尼亚加拉大瀑布","夏威夷","纽约中央公园","埃及金字塔","阿斯旺水坝","南非太阳城"]
                    }
                }
            }
        }
    },
    mounted(){
        this.imgSwiper();
    },
    components:{
        "line-group-r":require('components/lineGroupR.vue'),
        "line-group-l":require('components/lineGroupL.vue')
    },
    methods:{
        showCity(positionTop){
            var ele = document.getElementsByClassName("hover-show")[0];
                ele.style.top=positionTop+'px';
                ele.style.display="block";
        },
        hideCity(){
            var ele = document.getElementsByClassName("hover-show")[0];
                ele.style.display="none";
        },
        imgSwiper(){
            var swiper = new Swiper('.swiper-container', {
                autoplay:true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                effect: 'cube',           
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                parallax: true,
                speed: 2000,
                loop:true,
                autoplayDisableOnInteraction:false,
            }) 
        }
    }
}