export default{
    data(){
        return{
            week:["日","一","二","三","四","五","六"],
            curYear:'',
            curMonth:'',
            curDay:'',
            rows:'',
            days:[],
            todayDate:'',
            calenarHide:true
        }
    },
    props:[
        'inputDate1'
    ],
    mounted(){
        var date=new Date;
        this.todayDate=date;
        this.getCurDate();
        this.getcurMonthDays(this.curYear,this.curMonth);
        //绘制当月日历
        this.days = this.init(this.curYear,this.curMonth);
    },
    methods:{
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
                        result.push("");
                    }
                }
                for(var i=1;i<=maxDay;i++){
                    result.push(new Date(year,month,-maxDay+i).getDate());
                }
                // 凑够6个周
                if(parseInt(result.length/7)<6){
                    var i=1;
                    while(i){
                        result.push("");
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
        // 日期传给父组件input
        propsDate(day){
            this.calenarHide = false;
            this.inputDate1 = this.curYear+"-"+this.curMonth+"-"+day;
        }
    },
}