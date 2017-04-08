require('swiper')
export default{
    data(){
        return{
            popShow:false,
            week:["日","一","二","三","四","五","六"],
            curYear:'',
            curMonth:'',
            curDay:'',
            days:[],
            todayDate:'',
            calenarHide:true,
            productId:'cp100900',
            user:'ssaa',
            colllection:'',
            imgScroll:{},
            listIntro:{},
            downList:[],
            downUrlList:[],


            route:{
                content:[]
            },
            selectedPeriod:null
        }
    },
    beforeMount(){
        $.ajax({
                type:"post",
                url:"/rest/product/route/one",
                data:{productId:this.$route.query.productId},
                async:false,
                success:(resp)=>{
                    this.route = resp.data;
                }
        })
        // $.get('/rest/market/market/cover',{productId:this.productId},(resp)=>{
        //     this.imgScroll = resp.coverUrl;
        // });
        // $.get('/rest/market/market/productCollect',{productId:this.productId,userId:this.userId},(resp)=>{
        //     this.colllection = resp.result;
        // });
        // $.get('/rest/market/market/marketShows',{productId:this.productId},(resp)=>{
        //     this.listIntro = resp.productList.dataList;
        //     for(var i=0; i<this.listIntro.length; i++){
        //         if(this.listIntro[i].PRODUCT_ID === this.productId){
        //             var downList = this.listIntro[i].ATTACHMENT_NAME.split('*')
        //             downList.pop();
        //             this.downList = downList;
        //             var downUrlList = this.listIntro[i].ATTACHMENT.split('*')
        //             downUrlList.pop();
        //             this.downUrlList = downUrlList;
        //         }
        //     }
        // })
    },
    mounted(){
        this.navPosition();
        this.leftNavPosition();
        this.activeList();
        this.daysTop();
        var date=new Date;
        this.todayDate=date;
        this.getCurDate();
        this.getcurMonthDays(this.curYear,this.curMonth);
        //绘制当月日历
        this.days = this.init(this.curYear,this.curMonth);
    },
    updated(){
        this.imgSwiper();
        // this.activeDate();
        this.clickNav();
    },
    methods:{
        popChange(){
            this.popShow = true;
        },
        popHide(){
            this.popShow = false
        },
        navPosition(){
            $(document).scroll(function(){
                if(document.body.scrollTop >= 1045){
                    $(".routeDetail .table").addClass("tableFixed");
                    $(".tableReserve,.tableConnect").css("display","block");
                }else{
                    $(".routeDetail .table").removeClass("tableFixed");
                    $(".tableReserve,.tableConnect").css("display","none");
                }
            })
        },
        leftNavPosition(){
            $(document).scroll(function(){
                if(document.body.scrollTop >= 1010){
                    $(".daysNavOuter").addClass("daysNavOuterPosition");
                }else{
                    $(".daysNavOuter").removeClass("daysNavOuterPosition");
                }
            })
        },
        activeList(){
            $(".table>a:first").addClass("active");
            $(".table>a").on("click",function(){
                $(".table>a").removeClass("active");
                $(this).addClass("active");
            })
        },
        daysTop(){
            $(document).on("scroll",function(){
                var daysSign = $(".tripContent .daysNumber");
                for(var i=0; i<daysSign.length; i++){
                    var topPosition = daysSign.eq(i).offset().top;
                    if( topPosition === 1280+350*i && document.body.scrollTop >= 1010 ){
                        $(".daysNavOuter").children(".navDays"+i).click();
                    }
                }
            })
        },
        clickNav(){
            $(".daysNavOuter>.daysNav").click(function(){
                $(".daysNavOuter>.daysNav").removeClass("daysNavActive");
                $(this).addClass("daysNavActive");
            })
        },
                //获取当前年、月、日
        getCurDate(){
            var date = new Date();
            this.curYear = date.getFullYear();
            this.curMonth = date.getMonth()+1;
            this.curDay = date.getDate();
        },
        //获取某年某月总天数
        getcurMonthDays(year,month){
            var allDays = new Date(year,month,0).getDate()
            return allDays
        },
        init(calendarY,calendarM){
            var ARRAY=[],obj=[],j=0;
            this.daysArray=this.makeCalendar(calendarY,calendarM);
            for(var i=0;i<7;i++){
                this.daysArray.pop();
            }
            if((this.todayDate.getFullYear()>this.currentYear)||(this.todayDate.getFullYear()==this.currentYear&&(this.todayDate.getMonth()+1)>=this.currentMonth)){
                this.retreat=false;
            }else{
                this.retreat=true;
            }
            for(var i=0;i<=this.daysArray.length;i++){
                if(i%7==0&&i!=0){
                    obj[j]=ARRAY;
                    ARRAY=[];
                    j++;
                }
                ARRAY.push(this.daysArray[i]);
            }
            return obj;
        },
        makeCalendar(year,month){
                var maxDay=this.getcurMonthDays(year,month);
                var firstDayOfWeek=new Date(year,month,-(maxDay-1)).getDay();
                var result=[];
                //判断本月第一天是否为星期天
                if(firstDayOfWeek>0){
                    for(var i=firstDayOfWeek;i>0;i--){
                        result.push(new Date(year,month,-maxDay-i).getDate());
                    }
                }
                for(var i=1;i<=maxDay;i++){
                    result.push(new Date(year,month,-maxDay+i).getDate());
                }
                // 凑够6个周
                if(parseInt(result.length/7)<6){
                    var i=1;
                    while(i){
                        result.push(new Date(year,month,i++).getDate());
                        if(parseInt(result.length/7)>=6)
                            break;
                    }
                }
                return result;
        },
        //上个月
        prevMonth(){
            this.curMonth--;
             if(this.curMonth <= 0){
                 this.curMonth = 12;
                 this.curYear -= 1;
             }
            this.days = this.init(this.curYear,this.curMonth);
        },
        //下个月
        nextMonth(){
            this.curMonth++;
             if(this.curMonth > 12){
                 this.curMonth = 1;
                 this.curYear += 1;
             }
            this.days = this.init(this.curYear,this.curMonth);
        },
        //选中当前日期
        activeDate(item){
            const period=this.route.period().find((ele,index)=>{
                if(new Date(ele.date).format('yyyy-MM-dd')==new Date(item).format('yyyy-MM-dd'))
                    return ele
                else
                    return false
            })
            if(period!=undefined){
                this.selectedPeriod=period
                $(".calendar .table td").removeClass("active");
                $("#"+item).addClass("active");
            }
        },
        imgSwiper(){
            var mySwiper = new Swiper('.swiper-container', {
                autoplay:true,
                speed:2000,
                direction: 'vertical',
                loop: true,
                effect: 'fade',
                pagination: '.swiper-pagination',
                paginationClickable :true,
                paginationType:'bullets',
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            })        
        }
    }
}