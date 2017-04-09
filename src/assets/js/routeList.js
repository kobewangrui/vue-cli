export default {
    data(){
        // const query = Object.assign({},this.$route.query);
        // //初始化线路类型
        // if((typeof query.groupWay)==='string'){
        //     query.groupWay=[query.groupWay]
        // }else{
        //     query.groupWay=Object.assign([],this.$route.query.groupWay)
        // }
        // //初始化出行方式
        // if((typeof query.traffic)==='string'){
        //     query.traffic=[query.traffic]
        // }else{
        //     query.traffic=Object.assign([],this.$route.query.traffic)
        // }
        // // 初始化行程天数
        // if((typeof query.days)==='string'){
        //     query.days=[query.days]
        // }else{
        //     query.days=Object.assign([],this.$route.query.days)
        // }
        // //初始化排序
        // if((typeof query.sort)==='string'){
        //     query.sort=[query.sort]
        // }else{
        //     query.sort=Object.assign([],this.$route.query.sort)
        // }
        // //初始化特价
        // if((typeof query.IS_SPECIAL)==='string'){
        //     query.IS_SPECIAL=[query.IS_SPECIAL]
        // }else{
        //     query.IS_SPECIAL=Object.assign([],this.$route.query.IS_SPECIAL)
        // }
        // //初始化即时确认
        // if((typeof query.IMMEDIATELY_PAY)==='string'){
        //     query.IMMEDIATELY_PAY=[query.IMMEDIATELY_PAY]
        // }else{
        //     query.IMMEDIATELY_PAY=Object.assign([],this.$route.query.IMMEDIATELY_PAY)
        // }
        // //初始化出团日期
        // if((typeof query.travelTimeStart)==='string'){
        //     query.travelTimeStart=[query.travelTimeStart]
        // }else{
        //     query.travelTimeStart=Object.assign([],this.$route.query.travelTimeStart)
        // }
        // //初始化回团日期
        // if((typeof query.travelTimeEnd)==='string'){
        //     query.travelTimeEnd=[query.travelTimeEnd]
        // }else{
        //     query.travelTimeEnd=Object.assign([],this.$route.query.travelTimeEnd)
        // }
        // //初始化价格区间开始
        // if((typeof query.priceStart)==='string'){
        //     query.priceStart=[query.priceStart]
        // }else{
        //     query.priceStart=Object.assign([],this.$route.query.priceStart)
        // }
        // //初始化价格区间结束
        // if((typeof query.priceEnd)==='string'){
        //     query.priceEnd=[query.priceEnd];
        // }else{
        //     query.priceEnd=Object.assign([],this.$route.query.priceEnd)
        // }
        // //初始化当前页
        // if((typeof query.pageIndex)==='string'){
        //     query.pageIndex=[query.pageIndex];
        //     console.log("if")
        // }else{
        //     console.log("else")
        //     console.log(this.pageIndex)
        //     query.pageIndex=Object.assign([],this.$route.query.pageIndex)
        // }
        return{
            routes:[],

            pagiNate:{
                pageIndex:0,
                pageMaxIndex:10
            },
            query:{},
            calendarShow:false,
            start:'2016-12-25',
            end:'2016-12-29',
            priceStarts:'',
            priceEnds:'',
            routeData:[],
            product:{
                title:"产品类型",
                type:"groupWay",
                filterType:[
                    {
                        name:"跟团",
                        arg:"PACKAGED"
                    },
                    {
                        name:"地接",
                        arg:"LOCAL"
                    },
                    {
                        name:"半自助",
                        arg:"HALF_SELF"
                    },
                    {
                        name:"自助",
                        arg:"ALL_SELF"
                    },
                    {
                        name:"邮轮",
                        arg:"CRUISES"
                    },
                    {
                        name:"自驾",
                        arg:"DRIVE_SELF"
                    },
                    {
                        name:"其他",
                        arg:"TYPEOTHER"
                    }
                ]
            },
            traffic:{
                title:"出行方式",
                type:"traffic",
                filterType:[
                    {
                        name:"飞机",
                        arg:"PLAIN"
                    },
                    {
                        name:"火车",
                        arg:"TRAIN"
                    },
                    {
                        name:"大巴",
                        arg:"BUS"
                    },
                    {
                        name:"单飞单卧",
                        arg:"SOLOFLY"
                    },
                    {
                        name:"其他",
                        arg:"TRAFFICOTHER"
                    }
                ]
            },
            days:{
                title:"行程天数",
                type:"days",
                filterType:[
                    {
                        name:"1-2天",
                        arg:"ONE"
                    },
                    {
                        name:"3-5天",
                        arg:"THREE"
                    },
                    {
                        name:"6-8天",
                        arg:"SIX"
                    },
                    {
                        name:"9天以上",
                        arg:"NINE"
                    }
                ]
            },
            list:{
                productList:{}
            },
            productSign:'',
            trafficSign:'',
            daysSign:''
        }
    },
    mounted(){
        this.routeData = this.$route.query.groupWay;
        this.priceStarts = this.$route.query.priceStart;
        this.priceEnds = this.$route.query.priceEnd;
    },
    beforeMount(){
        this.fetchData()
    },
    watch:{
        "$route.query":{
            handler:function(){
                this.fetchData()
            },
            deep:true
        },
        "query":{
            handler:function(){
                this.$router.push({path:'/product',query:Object.assign({},this.query)})
                // $.get('/rest/market/market/marketShows',this.query,(resp)=>{
                //     this.list = resp;
                // })
            },
            deep: true
        }
    },
    methods:{
        fetchData:function(){
            // console.warn(this.$route.query.routeCategroy)
            // $.post('/rest/product/route/onSale',{routeCategroy:this.$route.query.routeCategroy},(resp)=>{
            //     console.warn(resp.data)
            //     this.routes=resp.data
            //     this.paginate=resp.paginate
            // })
        },
        clear(item){
            this.query[item]=[];
        },
        dateSubmit(){
            this.query.travelTimeStart = this.start;
            this.query.travelTimeEnd = this.end;
        },
        priceSubmit(){
            this.query.priceStart = this.priceStarts;
            this.query.priceEnd = this.priceEnds;
        },
        calendarToggle(){
            if(this.calendarShow){
                this.calendarShow = false;
            }else{
                this.calendarShow = true;
            }
        }
    },
    components:{
        "calendar":require('components/calendar.vue'),
        "page":require('components/page.vue')
    }
}