export default{
    data () {
        return {
            keywords:this.$route.query.keys,
            path:"/product",
            "curSrh":"线路",
            "hide":false,
            "items":["线路","签证","商家"]
        }
    },
    mounted(){
        let _self=this
        this.clickOtherHide();
        $("#search").submit(function(){
            _self.$router.push({path:_self.path,query:{keywords:_self.keys,routeCategroy:undefined}})
            return false
        })
    },
    methods:{
        showSlide(){
            if(this.hide===false){
                this.hide = true;
            }
        },
        hideSlide(clickName){
            if(this.hide===true){
                this.hide = false;
                this.curSrh = clickName;
            }
        },
        clickOtherHide(){
            var _this = this;
            $(document).on("click",function(e){
                if($(e.target).parents(".Wline").length === 0){
                    _this.hide = false;
                }
            })
        }
    }
}