export default{
    data(){
        return{
            query:{
                "currentQuestion":""
            },
            "isShow":true,
            "actTit":"0",
            "questionList":[
                    {
                        "tit":"搜索产品",
                        "ctt":"<p>在搜索框选择线路，输入要目的地搜索进入搜索结果页面。</p><img src='assets/image/help/image018.png'>"
                    },
                    {
                        "tit":"搜索商家品牌",
                        "ctt":"<p>在搜索框选择商家进行搜索，或直接在菜单栏点击商家进行搜索。</p><img src='assets/image/help/image019.png'>"
                    },
                    {
                        "tit":"购买线路产品",
                        "ctt":"<p>1.搜索并选择好自己准备要购买的产品，选择出发日期确定价格，点击［立即购买］</p><img src='assets/image/help/image020.png'><p>2.填写订单。填写游客信息时如已有准备好的游客名单，可直接选择上传无需手动填写。确认订单无误后提交订单。</p><img src=assets/image/help/image021.png'><img src='assets/image/help/image022.png'><p>3.提交订单后可直接支付。如与供应商有商议过订单结算价，可在供应商修改过订单价格后再进行支付。非即时交易产品在提交订单后需等待供应商进行确认后才可进行支付。</p><img src='assets/image/help/image026.png'><p>4.支付方式分个人账户和对公账户，请选择相应支付方式进行支付。因各行政策原因，支付额度存在差别，请仔细查看相关额度，以免给您的交易带来不便。</p><img src='assets/image/help/image024.png'><img src='assets/image/help/image025.png'>"
                    },
                    {
                        "tit":"购买签证产品",
                        "ctt":"<p>1.搜索并选择好自己准备要购买的产品，点击［立即购买］</p><img src='assets/image/help/image027.png'><p>2.填写并提交订单。</p><img src='assets/image/help/image028.png'><img src='assets/image/help/image029.png'><p>3.提交订单后可直接支付。签证产品不存在是否即时交易。完成支付后订单完成，我们已在第一时间通知供应商确认此次交易，并由供应商主动联系您。</p><img src='assets/image/help/image030.png'><img src='assets/image/help/image031.png'>"
                    },
                    {
                        "tit":"什么是即时交易？",
                        "ctt":"<p>发布线路时，供应商需选择是否即时交易。即时交易是指组团社提交订单后无需供应商进行确认就可直接支付，支付成功后会有相应短信提示，订单为有效订单，订单状态为已确认。如选择非即时交易，供应商需在组团社提交订单后（有相应短信提示）对订单进行确认，此时订单状态为待确认。确认后订单状态为待支付，组团社才可对订单进行支付。也可因特殊原因拒绝订单并取消订单，订单为无效订单，订单状态为交易关闭。</p>"
                    },
                    {
                        "tit":"支付方式及支付额度",
                        "ctt":"<b>1.个人账户</b><p>目前个人账户支付方式为网银在线。因政策相关不同银行提供最大支付额度也各不相同，请您仔细察看。网银在线支付需您自备U盾，以保障您的支付安全。个人账户到账时间为T+2工作日，请您予以理解。如您是供应商，需绑定收款个人收款账户。如已经产生交易时，您尚未绑定收款账户，则款项由本平台暂缓清分，同时我们会在第一时间通知您绑定收款账户。</p><b>2.对公账户</b><p>目前对公账户支付方式为银联在线。大额支付需您使用U盾，以保障您的支付安全。对公账户清分及到账时间为1星期，本平台绝无积压账款，因政策相关目前无法做到即时清分，请您予以相信与理解。如您是供应商，需绑定收款对公收款账户。如已经产生交易时，您尚未绑定收款账户，则款项由本平台暂缓清分，同时我们会在第一时间通知您绑定收款账户。</p><b>1.手续费</b><p>单日单笔收取手续费2元。对公和个人账户不相连，需分别收取。手续费为银行清分结算收取，本平台暂时对用户在线支付进行手续费补贴，请您予以理解。</p>"
                    },
                    {
                        "tit":"购买尾单特价产品",
                        "ctt":"<p><span>购买尾单特价产品</span></p><p>尾单特价是由供应商进行发布设置的低于正常价格的促销产品。购买流程与正常产品购买流程一样，但所有特价产品都属于非即时交易产品，需要供应商确认订单。</p><img src='assets/image/help/image032.png'>"
                    },
                    {
                        "tit":"购买定制产品",
                        "ctt":"<p>定制产品是由供应商主动为您提供的唯一产品，只有您可以进行购买，且为即时交易产品无需供应商再次确认。产品内容需提前与供应商进行沟通。在管理后台－同业信息中可查看到供应商为您定制的产品。定制产品在您支付成功后状态为完成，您可以在订单管理页面查看订单进度。</p>"
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
                    path:'/help/helpCenterSP',
                    query:this.query
            });
        },
        close(){
            this.isShow = true;
            this.query="";
            this.$router.push({
                    path:'/help/helpCenterSP',
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