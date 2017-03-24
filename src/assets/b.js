export default{
    data(){
        return{
            s:'aaaaaaaa'
        }
    },
    mounted(){
        // console.log(swiper)
        $('img').click(function(){
            // $('').slideToggle(100)
            alert()
        })
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
        }
    }
}