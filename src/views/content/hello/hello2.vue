<style scoped>
</style>
<template>
    <div>
    <router-link to="/">返回首页</router-link>
    <div id="uploader-img">
        <div id="fileList" class="uploader-list"></div>
        <div id="filePicker">选择图片</div>
    </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            }
        },
        mounted(){
            // 初始化Web Uploader
            WebUploader.create({

                // 选完文件后，是否自动上传。
                auto: true,

                // swf文件路径
                swf: '/resources/lib/webuploader/Uploader.swf',

                // 文件接收服务端。
                server: 'http://webuploader.duapp.com/server/fileupload.php',

                // 选择文件的按钮。可选。
                // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                pick: '#filePicker',
                duplicate:true,
                // 只允许选择图片文件。
                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/jpg,image/jpeg,image/png'
                }
            })
        }
    }
</script>