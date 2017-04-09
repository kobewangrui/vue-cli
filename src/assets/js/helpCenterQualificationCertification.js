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
                        "tit":"入驻供应商需要哪些资质？",
                        "ctt":"<p>入驻供应商需上传企业文本资质。分别是营业执照号及图片格式文件，经营许可证号及图片格式文件或备案登记证号及图片格式文件（两种文件二选一即可），旅行社责任保险单图片格式文件。您可以通过手机拍照快速获取文件图片，但需图片清晰可辨。</p><img src='/resource/image/help/image054.png'><p>需上传当前负责人的身份信息。（需提供负责人身份证复印件图片）</p><img src='/resource/image/help/image055.png'>"
                    },
                    {
                        "tit":"供应商需要注意哪些？",
                        "ctt":"<p>1.未认证的供应商无法发布查看相关产品，点击认证或进入管理后台在账户管理－资质认证中上传资质信息。</p><img style='width:450px;height:160px;display:block;margin:0 auto;' src='/resource/image/help/image056.png'><p>2.绑定手机号码，可快速接收业务短信及方便组团社（买家）联系您。</p><img style='width:450px;height:280px;display:block;margin:0 auto;' src='/resource/image/help/image057.png'><p>3.完善品牌信息，可查看和修改注册企业的详细信息，方便商家联系浏览，修改完善后点击“ 确认保存”。可在管理后台－资料信息－品牌资料中进行设置。</p><img src='/resource/image/help/image058.png'><p>4.个人资料认证，上传当前负责人的身份信息。您可以另外设置登陆账号用于您快捷登陆。</p><img src='/resource/image/help/image059.png'>"
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
                    path:'/help/helpCenterQC',
                    query:this.query
            });
        },
        close(){
            this.isShow = true;
            this.query.currentQuestion = undefined;
            this.$router.push({
                    path:'/help/helpCenterQC',
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