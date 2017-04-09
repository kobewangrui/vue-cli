export default {
    data(){
        return{
            query:{
                "currentQuestion":""
            },
            "isShow":true,
            "actTit":"0",
            "questionList":[
                    {
                        "tit":"什么是收客系统？",
                        "ctt":"<p>收客系统是盖丫平台为组团社提供的面向游客端的直销平台。可从同业平台导入产品，也可自主发布产品，直接面向游客展示，游客也可直接进行查看及购买。</p>"
                    },
                    {
                        "tit":"如何导入/上架产品？",
                        "ctt":"<p>1.在产品管理-采购线路，选择所需要的合作商。</p><img src='/resource/image/help/image037.png'><p>2.客户管理-合作商页面，添加合作商，进行采购。</p><img src='/resource/image/help/image038.png'><p>在B2B交易平台，选择相应的线路产品点击进入详情，点击加入收客系统。</p><img src='/resource/image/help/image039.png'>"
                    },
                    {
                        "tit":"游客购买产品相关",
                        "ctt":"<p>第一步：根据网站域名或者二维码进入网站，在首页或者列表页面选择所需要的线路产品。</p><img style='width:300px;height:550px;' src='/resource/image/help/image040.png'><img style='width:300px;height:550px;' src='/resource/image/help/image041.png'><p>第二步：选择出游时间及填写相关游客信息，并提交订单。</p><img style='width:300px;height:550px;' src='/resource/image/help/image042.png'><img style='width:300px;height:550px;' src='/resource/image/help/image043.png'><p>第三步：确认支付。</p>"
                    },
                    {
                        "tit":"设置移动版网站",
                        "ctt":"<p>第一步：在网页设置-首页设置，对首页轮播线路、热门景点、热门线路进行设置。</p><img src='/resource/image/help/image044.png'><p>第二步：点击轮播线路、热门线路，跳出选择线路弹出框进行线路选择设置。</p><img src='/resource/image/help/image045.png'>"
                    }
                ]
            }
    },
    methods:{
        act(index){
            this.actTit = index;
            this.isShow = false;
            this.query.currentQuestion = "question"+index;
            this.$router.push({
                    path:'/help/helpCenterRG',
                    query:this.query
            });
        },
        close(){
            this.isShow = true;
            this.query=[];
            this.$router.push({
                    path:'/help/helpCenterRG',
                    query:this.query
            });
        },
        keepCurrentQuestion(){
            var questionId = "#" + this.$route.query.currentQuestion;
            $(questionId).click();
        }
    },
    mounted(){
        this.keepCurrentQuestion();
    },
    components:{
        "helpTop":require("components/helpTop.vue"),
        "helpLeft":require("components/helpLeftZ.vue")
    }
}