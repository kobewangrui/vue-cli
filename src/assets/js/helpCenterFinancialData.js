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
                        "tit":"发票",
                        "ctt":"<p>盖丫旅行网为同业分销平台，组团社向供应商进行购买行为属于双方交易范畴，盖丫旅行网为第三方交易平台，无责任和义务向双方提供相关交易发票。供应商向盖丫旅行网申请发票类型为服务费发票，金额按照系统实际产生的服务费金额计算，若需开具其他类型发票，请与我们的工作人员联系。联系电话：029-89324721</p>"
                    },
                    {
                        "tit":"绑定交易账户",
                        "ctt":"<p>供应商需绑定收款账户。请至少绑定一个个人账户及一个对公账户。 可绑定多个账户，但只有默认收款账户可接收款项。请谨慎操作。</p><p>第一步：在财务管理－交易账户，点击添加账户。</p><img src='/resource/image/help/image046.png'><p>第二步：按照添加账户页面要求填写信息。请仔细核对信息和选择账户类型。</p><img src='/resource/image/help/image047.png'><p>第三步：确认。默认第一个账户为收款账户，如需调整请按当前提示操作。</p><img src='/resource/image/help/image048.png'>"
                    },
                    {
                        "tit":"如何查看交易明细",
                        "ctt":"<p>在财务管理－交易明细中可查看详细的交易记录。</p><img src='/resource/image/help/image049.png'>"
                    },
                    {
                        "tit":"关于交易退款",
                        "ctt":"<p>目前不支持线上退款，如需退款请您及时联系供应商。给您带来的不便敬请谅解。我们随后会尽快完善。</p>"
                    },
                    {
                        "tit":"支付方式及各大行的支付额度限制是多少？",
                        "ctt":"<p>1.个人账户</p><p>目前个人账户支付方式为网银在线。因政策相关不同银行提供最大支付额度也各不相同，请您仔细察看。网银在线支付需您自备U盾，以保障您的支付安全。个人账户到账时间为T+2工作日，请您予以理解。如您是供应商，需绑定收款个人收款账户。如已经产生交易时，您尚未绑定收款账户，则款项由本平台暂缓清分，同时我们会在第一时间通知您绑定收款账户。</p><p>2.对公账户</p><p>目前对公账户支付方式为银联在线。大额支付需您使用U盾，以保障您的支付安全。对公账户清分及到账时间为1星期，本平台绝无积压账款，因政策相关目前无法做到即时清分，请您予以相信与理解。如您是供应商，需绑定收款对公收款账户。如已经产生交易时，您尚未绑定收款账户，则款项由本平台暂缓清分，同时我们会在第一时间通知您绑定收款账户。</p><p>3.手续费</p><p>单日单笔收取手续费2元。对公和个人账户不相连，需分别收取。</p><p>手续费为银行清分结算收取，本平台暂时对用户在线支付进行手续费补贴，请您予以理解。</p><img src='/resource/image/help/image050.png'>"
                    },
                    {
                        "tit":"数据统计",
                        "ctt":"<p>1.交易额</p><p>统计您的产品交易额。分别统计产品类型及分类。</p><img src='/resource/image/help/image051.png'><p>2.订单量</p><p>统计您的产品订单量。分别统计产品类型及分类。</p><img src='/resource/image/help/image052.png'><p>3.出行人数</p><p>统计出行人数。分别统计产品类型及分类，同时区分成人及儿童。</p><img src='/resource/image/help/image053.png'>"
                    }
                ]
            }
    },    
    mounted(){
        this.keepCurrentQuestion();
    },
    methods:{
        act(index){
            this.actTit = index;
            this.isShow = false;
            this.query.currentQuestion = "question"+index;
            this.$router.push({
                    path:'/help/helpCenterFD',
                    query:this.query
            });
        },
        close(){
            this.isShow = true;
            this.query.currentQuestion = undefined;
            this.$router.push({
                    path:'/help/helpCenterFD',
                    query:this.query.currentQuestion
            });
        },
        keepCurrentQuestion(){
            var questionId = "#" + this.$route.query.currentQuestion;
            $(questionId).click();
        }
    },
    components:{
        "helpTop":require("components/helpTop.vue"),
        "helpLeft":require("components/helpLeftZ.vue")
    }
}