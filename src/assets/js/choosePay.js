var bankData = require("assets/js/bankData.json");
export default{
    data(){
        return{
            payMethod:"CBPAY",
            toggleTable:"",
            saving:true,
            credit:false,
            bankDataAll:"",
            payLimit:false,
            currentBank:"中国工商银行",
            currentId:"1025",
            talbeBank:true,      
            savingCard:[
                {text:'中国工商银行',id:'1025'},
                {text:'中国建设银行',id:'1051'},
                {text:'中国银行',id:'104'},
                {text:'中国农业银行',id:'103'},
                {text:'交通银行',id:'3407'},
                {text:'中国邮政储蓄银行',id:'3230'},
                {text:'招商银行',id:'3080'},
                {text:'中信银行',id:'313'},
                {text:'上海浦东发展银行',id:'314'},
                {text:'兴业银行',id:'309'},
                {text:'中国民生银行',id:'305'},
                {text:'中国光大银行',id:'312'},
                {text:'平安银行',id:'307'},
                {text:'上海银行',id:'326'},
                {text:'华夏银行',id:'311'},
                {text:'北京银行',id:'310'},
                {text:'广东发展银行',id:'3061'},
                {text:'恒丰银行',id:'344'},
                {text:'北京农商银行',id:'335'},
                {text:'重庆农商银行',id:'342'},
                {text:'渤海银行',id:'317'},
                {text:'上海农村商业银行',id:'343'},
                {text:'南京银行',id:'316'},
                {text:'宁波银行',id:'302'},
                {text:'杭州银行',id:'324'},
                {text:'成都银行',id:'336'},
                {text:'厦门银行',id:'401'},
                {text:'浙江稠州银行',id:'403'},
                {text:'贵州农信',id:'404'},
                {text:'陕西信合',id:'402'},
                {text:'青岛银行',id:'3341'}
            ],
            creditCard:[
                {text:'中国工商银行',id:'1027'},
                {text:'中国建设银行',id:'1054'},
                {text:'中国银行',id:'106'},
                {text:'中国农业银行',id:'1031'},
                {text:'交通银行',id:'3011'},
                {text:'中国邮政储蓄银行',id:'3231'},
                {text:'招商银行',id:'308'},
                {text:'中信银行',id:'3131'},
                {text:'上海浦东发展银行',id:'3141'},
                {text:'兴业银行',id:'3091'},
                {text:'中国民生银行',id:'3051'},
                {text:'中国光大银行',id:'3121'},
                {text:'平安银行',id:'3071'},
                {text:'上海银行',id:'3261'},
                {text:'华夏银行',id:'3112'},
                {text:'北京银行',id:'3101'},
                {text:'广东发展银行',id:'306'},
                {text:'宁波银行',id:'303'},
                {text:'杭州银行',id:'3241'},
                {text:'浙江稠州银行',id:'4031'},
                {text:'青岛银行',id:'334'}
            ]
        }
    },
    created(){
    },
    mounted(){
        this.backDataAll = bankData;
    },
    methods:{
        savingShow(){
            this.saving = true;
            this.credit = false;
            this.currentBank = "";
        },
        creditShow(){
            this.saving = false;
            this.credit = true;
            this.currentBank = "";
        },
        payBank(cur){
            this.currentBank = cur.text;
            this.currentId = cur.id;
        },
        payDetail(){
            $("#pay").submit()
            if(this.currentBank !== ""){
                this.saving = false;
                this.credit = false;
                this.talbeBank = false;
                this.payLimit = true;
            }
        },
        reset(){
            this.currentId = "1025";
            this.saving = true;
            this.talbeBank = true;
            this.payLimit = false;
        }
    },
    components:{
        // "pay-progress":require("components/payProgress.vue")
    }
}