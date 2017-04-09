export default{
    data(){
        return{
        }
    },
    props:[
        'paginate'
    ],
    // methods:{
    //     curPage(item){
    //         this.pageIndex = item;
    //     },
    //     prevPage(){
    //         if(this.pageIndex <= 2){
    //             $(".page>.prevPage").css("pointer-events","none");
    //         }else{
    //             this.pageIndex--;
    //         }
    //     },
    //     nextPage(){
    //         if(this.pageIndex >= this.pageCount){
    //             $(".page>.nextPage").css("pointer-events","none");
    //         }else{
    //             this.pageIndex++;
    //         }
    //     },
    //     currentPage(){
    //         if(this.pageIndex===1 && this.pageCount>6){
    //             $(".page>ul>li").eq(4).text("......").css("display","inline-block");
    //         }
    //     }
    // }
}