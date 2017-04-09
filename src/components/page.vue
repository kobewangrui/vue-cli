<style lang="css" src="assets/css/page.css" scoped></style>
<template>
    <div class="page">
        <div class="pageNav">{{paginate.pageIndex+1}}/{{paginate.pageMaxIndex+1}}页</div>
        <router-link class="prevPage" :to="{path:$route.path,query:Object.assign({},$route.query,{pageIndex:paginate.pageIndex-1>0?paginate.pageIndex-1:0})}"></router-link>
        <ul>
            <router-link tag="li" :to="{path:$route.path,query:Object.assign({},$route.query,{pageIndex:paginate.pageIndex})}">{{paginate.pageIndex+1}}</router-link>
            <!--<li v-if="pageCount<7" v-for="i in pageCount" :class="{'active':i == pageIndex}" @click="curPage(i)">{{i}}</li>
            <li v-if="pageCount>=7" v-for="i in pageCount" :class="{'active':i == pageIndex}" @click="curPage(i)" v-show="i==4?i='......':(i==pageIndex-2?i='......':(i==1||i==2||i==3||i==pageCount-2||i==pageCount-1||i==pageCount||i==pageIndex||i==pageIndex-1||i==pageIndex+1))">{{i}}</li>
            <li v-if="pageCount>=7" v-for="i in pageCount" :class="{'active':i == pageIndex}" @click="curPage(i)" v-show="pageIndex>4?(i==1)">{{i}}</li>        -->
        </ul>
        <router-link class="nextPage" :to="{path:$route.path,query:Object.assign({},$route.query,{pageIndex:paginate.pageIndex+1<paginate.pageMaxIndex?paginate.pageIndex+1:paginate.pageMaxIndex})}"></router-link>        
    </div>
</template>
<script src="assets/js/page.js"></script>