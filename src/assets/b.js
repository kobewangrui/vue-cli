export default{
    data(){
        return{
            s:'aaaaaaaa',
            imgShow:true
        }
    },
    mounted(){
        // console.log(swiper)
        // $('.a').click(function(){
        //     $('.aa').slideToggle(100)
        // })
        this.swiper()


        
    },
    methods:{
        //轮播图
        swiper(){
            new Swiper('.swiper-container', {
                autoplay:1000,
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
        },
        imgToggle(){
            this.imgShow = !this.imgShow;
            // if(this.imgShow === false){
            //     this.imgShow = true
            // }else{
            //     this.imgShow = false
            // }
        }
    }
}