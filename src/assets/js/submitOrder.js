export default{
    data(){
        return{
            childrenNumber:1,
            adultNumber:1,
            adultPrice:1234,
            childrenPrice:4321,
            countPrice:"",
            toggleTable:"",
            upload:true,
            fill:false,
            passCard:"护照",
            cardList:[
                {
                    "name":"护照",
                    "arg":"passport"
                },
                {
                    "name":"港澳通行证",
                    "arg":"HkandMCPass"
                },
                {
                    "name":"台湾通行证",
                    "arg":"TWPass"
                }
            ],
            adult:[
                {
                    chinaName:undefined,
                    englistName:undefined,
                    englistName2:undefined,                    
                    cardName:undefined,
                    cardNumber:undefined,
                    sex:undefined,
                    phone:undefined,
                    idCard:undefined,
                    bornDate:undefined
                }
            ],
            child:[
                {
                    chinaName:undefined,
                    englistName:undefined,
                    englistName2:undefined,                    
                    cardName:undefined,
                    cardNumber:undefined,
                    sex:undefined,
                    phone:undefined,
                    idCard:undefined,
                    bornDate:undefined
                }
            ]
        }
    },
    created(){
        this.countPrice = this.childrenPrice + this.adultPrice;
    },
    mounted(){
        this.a();
        this.clickOtherHide();
        this.validateForm();
        this.uploaders();
        $(".webuploader-pick").removeClass("webuploader-pick");
        // this.cardToggles();
    },
    methods:{
        uploaders(){
            var uploader = WebUploader.create({
                // swf文件路径
                // swf: 'path_of_swf/Uploader.swf',
                // 文件接收服务端。
                server: 'http://webuploader.duapp.com/server/fileupload.php',
                // 选择文件的按钮。可选。
                // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                pick: '#uploader',
                // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
                resize: false
            });
        },
        validateForm(){
            $("#orderSubmit").validate({
                rules:{
                    contacts:"required",
                    phoneNumber:"required",
                    cnName:"required",
                    enName1:"required",
                    enName2:"required",
                    cardName:"required",
                    cardName2:"required",
                    sex:"required",
                    connectNumber:"required",
                    bornDate:"required"
                },
                errorPlacement: function(error, element) {//隐藏验证消息
                },
                submitHandler:function(form){
                    //此处应该提交订单数据
                    window.location.href = 'order/pay'
                    return false
                }    
            })
        },
        addChildren(){
            this.childrenNumber++;
            this.child.push({
                chinaName:undefined,
                englistName:undefined,
                englistName2:undefined,                    
                cardName:undefined,
                cardNumber:undefined,
                sex:undefined,
                phone:undefined,
                idCard:undefined,
                bornDate:undefined
            })
            this.countPrice = this.childrenNumber * this.childrenPrice + this.adultNumber * this.adultPrice;
        },
        addAdult(){
            this.adultNumber++;
            this.adult.push({
                chinaName:undefined,
                englistName:undefined,
                englistName2:undefined,                    
                cardName:undefined,
                cardNumber:undefined,
                sex:undefined,
                phone:undefined,
                idCard:undefined,
                bornDate:undefined
            })
            this.countPrice = this.childrenNumber * this.childrenPrice + this.adultNumber * this.adultPrice;
        },
        reduceChildren(){
            if(this.childrenNumber > 1){
                this.childrenNumber--;
                this.child.pop({
                    chinaName:undefined,
                    englistName:undefined,
                    englistName2:undefined,                    
                    cardName:undefined,
                    cardNumber:undefined,
                    sex:undefined,
                    phone:undefined,
                    idCard:undefined,
                    bornDate:undefined
                })
                this.countPrice = this.childrenNumber * this.childrenPrice + this.adultNumber * this.adultPrice;
            }
        },
        reduceAdult(){
            if(this.adultNumber > 1){
                this.adultNumber--;
                this.adult.pop({
                    chinaName:undefined,
                    englistName:undefined,
                    englistName2:undefined,                    
                    cardName:undefined,
                    cardNumber:undefined,
                    sex:undefined,
                    phone:undefined,
                    idCard:undefined,
                    bornDate:undefined
                })
                this.countPrice = this.childrenNumber * this.childrenPrice + this.adultNumber * this.adultPrice;
            }
        },
        fillShow(){
            this.fill = true;
            this.upload = false;
        },
        uploadShow(){
            this.fill = false;
            this.upload = true;
        },
        choosepassCard(name){
            this.passCard = name.name;
        },
        clickOtherHide(){
            var _this = this;
            $(document).on("click",function(e){
                if($(e.target).parents(".cardList").children("input,.cardUl").length === 0){
                }
            })
        },
        a(){
            //解决多个name值jquery validate不能验证的问题
            if ($.validator) {
                $.validator.prototype.elements = function () {
                    var validator = this,
                        rulesCache = {};
        
                    // select all valid inputs inside the form (no submit or reset buttons)
                    return $(this.currentForm)
                    .find("input, select, textarea")
                    .not(":submit, :reset, :image, [disabled]")
                    .not(this.settings.ignore)
                    .filter(function () {
                        if (!this.name && validator.settings.debug && window.console) {
                            console.error("%o has no name assigned", this);
                        }
                        //注释这行代码
                        // select only the first element for each name, and only those with rules specified
                        //if ( this.name in rulesCache || !validator.objectLength($(this).rules()) ) {
                        //    return false;
                        //}
                        rulesCache[this.name] = true;
                        return true;
                    });
                }
            }            
        },
        cardToggles(){
            $(".cardList").on("click",".cardToggle",function(){
                $(this).closest(".cardList").find(".passCardList").slideToggle(300)
            })
        }
    },
    components:{
        "progress-status":require("components/progress.vue")
    }
}