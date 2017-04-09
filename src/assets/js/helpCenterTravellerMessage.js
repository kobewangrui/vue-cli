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
                        "tit":"为什么要建立在线游客信息管理？",
                        "ctt":"<p>帮助组团社建立在线游客信息库，方便在线查询分析游客数据。</p>"
                    },
                    {
                        "tit":"如何添加新游客？",
                        "ctt":"<p>在填写订单时，选择手动填写游客信息，系统会自动录入游客相关信息至后台，可对该信息再次进行编写。也可在管理后台－游客信息－新增游客，填写相关游客信息。<img src='/resource/image/help/image036.png'></p>"
                    },
                    {
                        "tit":"编辑/删除游客信息？",
                        "ctt":"如需更新游客信息或删除游客信息可在列表处，准确选择游客信息后进行编辑或者删除。"
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
                    path:'/help/helpCenterTM',
                    query:this.query
            });
        },
        close(){
            this.isShow = true;
            this.query=[];
            this.$router.push({
                    path:'/help/helpCenterTM',
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