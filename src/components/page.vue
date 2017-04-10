<style lang="css" src="assets/css/page.css" scoped></style>
<template>
    <div class="page">
        <div v-show="false">
            {{
                $route.query.pageIndex = parseInt($route.query.pageIndex)
            }}
        </div>
        <div class="pageNav">{{paginate.pageIndex+1}}/{{paginate.pageMaxIndex+1}}页</div>
        <router-link class="prevPage" :to="{path:$route.path,query:Object.assign({},$route.query,{pageIndex:$route.query.pageIndex-1>0?$route.query.pageIndex-1:0})}"></router-link>
        <ul>
            <router-link 
                tag="li" 
                :key="index.id" 
                v-for="index in paginate.pageMaxIndex+1" 
                :to="{path:$route.path,query:Object.assign({},$route.query,{pageIndex:index-1})}"
                v-show="$route.query.pageIndex+1==index || $route.query.pageIndex+1==index+1 || $route.query.pageIndex+1==index+2 || $route.query.pageIndex+1==index+3 || $route.query.pageIndex+1==index-1 || $route.query.pageIndex+1==index-2 || $route.query.pageIndex+1==index-3"
                :class="{'active':$route.query.pageIndex+1 == index}"
                >{{index}}</router-link>
        </ul>
        <router-link class="nextPage" :to="{path:$route.path,query:Object.assign({},$route.query,{pageIndex:$route.query.pageIndex+1<paginate.pageMaxIndex?$route.query.pageIndex+1:paginate.pageMaxIndex})}"></router-link>   
    </div>
</template>
<script src="assets/js/page.js"></script>