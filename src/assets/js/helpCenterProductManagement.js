    export default{
        data(){
            return{
                query:{
                    "currentQuestion":undefined
                },
                "isShow":true,
                "actTit":"0",
                "questionList":[
                        {
                            "tit":"如何发布新的线路产品？",
                            "ctt":"<p>进入后台—产品管理—线路，设置线路名称、团期、类型、行程天数、提前报名天数、出发地-目的地、往返交通、即时交易与否（非即时交易提交订单后需供应商进行确认才可进行付款）、行程内容、线路特色、费用明细等内容。</p><img src='/resource/image/help/image060.png'><p>确认填写无误之后，点击确认发布按钮，发布这条线路，或者将其保存草稿。</p><img src='/resource/image/help/image061.png'><p>即时交易：选择及时交易，买家能够直接进行订单的支付购买。</p><img src='/resource/image/help/image062.png'>"
                        },
                        {
                            "tit":"如何发布新的签证产品？",
                            "ctt":"<p>目前签证业务仅对平台合作商开通，详情请拨打客服电话029-89324721。</p><p>1.进入后台—产品管理—线路，设置签证名称、送签地、价格、签证类型、签证有效期、可停留天数、办理时常、入境次数、受理范围、退款说明、是否免签、预订须知、签证材料等内容。</p><img src='/resource/image/help/image064.png'><p>2.确认信息无误后点击“确认发布”按钮，或者将其保存为草稿。</p><img src='/resource/image/help/image063.png'>"
                        },
                        {
                            "tit":"如何发布尾单特价产品？",
                            "ctt":"<p>当前仅支持在已发布的线路团期中设置尾单特价。</p><p>1.在产品管理－线路列表页面，选择您所需要设置的线路产品，点击编辑。</p><img src='/resource/image/help/image065.png'><p>2.打开右上角的尾单特价开关，选择相应的团期进行设置，一条线路仅可设置一个尾单特价团期。</p><img src='/resource/image/help/image068.png'><img src='/resource/image/help/image066.png'>"
                        },
                        {
                            "tit":"什么是即时交易？",
                            "ctt":"<p>发布线路时，供应商需选择是否即时交易。即时交易是指组团社提交订单后无需供应商进行确认就可直接支付，支付成功后会有相应短信提示，订单为有效订单，订单状态为已确认。如选择非即时交易，供应商需在组团社提交订单后（有相应短信提示）对订单进行确认，此时订单状态为待确认。确认后订单状态为待支付，组团社才可对订单进行支付。也可因特殊原因拒绝订单并取消订单，订单为无效订单，订单状态为交易关闭。</p>"
                        },
                        {
                            "tit":"如何下架/删除产品？",
                            "ctt":"<p>下架/删除产品：进入后台管理—产品管理—线路，对当前线路可以进行下架编辑。要删除产品需先下架。</p><img src='/resource/image/help/image065.png'>"
                        },
                        {
                            "tit":"如何发布定制产品？",
                            "ctt":"<p>如您与组团社有沟通，需单独为组团社定制唯一产品</p><p>1.在产品管理－线路－定制线路。定制线路为即时交易产品，无需您再次确认。</p><img src='/resource/image/help/image067.png'><p>2.点击定制线路按钮，发布定制线路，或者保存为草稿。</p><img src='/resource/image/help/image069.png'>"
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
                        path:'/help/helpCenterPM',
                        query:this.query
                });
            },
            close(){
                this.isShow = true;
                this.query.currentQuestion = undefined;
                this.$router.push({
                        path:'/help/helpCenterPM',
                        query:this.query.currentQuestion
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
        "helpLeft":require("components/helpLeftG.vue")
        }
    }