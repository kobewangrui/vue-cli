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
                        "tit":"线路订单流程及状态",
                        "ctt":"<img src='/resource/image/help/image033.png'><p>待确认：非即时交易线路，在组团社提交订单后供应商尚未对订单进行确认时。</p><p>待支付：组团社成功提交订单后尚未支付时。非即时交易在供应商确认订单后订单为待支付状态。</p><p>已确认：在组团社支付成功后，订单为有效订单时。</p><p>完成：在团期结束后，订单状态为完成。组团社可对此次交易作出评价。</p><p>关闭：在支付前，供应商和组团社都有权力取消订单。此时订单为无效订单，可删除。</p><p>退款中：组团社在支付成功后，如遇游客无法出行，可申请退款。</p>"
                    },
                    {
                        "tit":"签证订单流程及状态",
                        "ctt":"<img src='/resource/image/help/image034.png'><p>待支付：组团社在成功提交签证订单后为支付时。</p><p>完成：组团社成功支付订单，交易完成。</p><p>关闭：在支付前，供应商和组团社都有权力取消订单。此时订单为无效订单，可删除。</p>"
                    },
                    {
                        "tit":"怎么修改订单价格？",
                        "ctt":"<p>在组团社支付前，如有提前沟通，供应商同意修改订单价格，可在供应商修改价格后再进行支付。</p>"
                    },
                    {
                        "tit":"线路订单为什么要在2小时内完成支付？",
                        "ctt":"<p>旅游度假线路产品有很高的即时性，未确保准确保障各方利益，所以需要买家在提交订单或确认订单后2小时内完成支付，否则订单自动关闭。为您带来的不便敬请见谅。</p>"
                    },
                    {
                        "tit":"评价订单",
                        "ctt":"<p>订单完成后，组团可以对此次交易进行评价。</p><img src='/resource/image/help/image035.png'></p>"
                    },
                ]
            }
    },
    methods:{
        act(index){
            this.actTit = index;
            this.isShow = false;
            this.query.currentQuestion = "question"+index;
            this.$router.push({
                    path:'/help/helpCenterOM',
                    query:this.query
            });
        },
        close(){
            this.isShow = true;
            this.query.currentQuestion = undefined;
            this.$router.push({
                    path:'/help/helpCenterOM',
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
        "helpLeft":require("components/helpLeftZ.vue")
    }
}