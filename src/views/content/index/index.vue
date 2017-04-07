<style lang="css" src="assets/css/index.css" scoped></style>
<template>
    <div class="container">
        <div class="outer">
            <div class="left-nav">
                <ul>
                    <li v-for="(item,$key) in route">
                        <p>
                            <span>{{$key}}</span>
                            <span>></span>
                        </p>
                        <p class="routeShow">
                            <span v-for="i in item.showRoute">{{i}}</span>
                        </p>
                        <div class="hover-show">
                            <div class="group" v-for="(list,$key) in item.list">
                                <p class="title"><span></span>{{$key}}</p>
                                <div class="city">
                                <!--<router-link :to="/mall" :tag="span" v-for="city in list" class="hot">{{city}}</router-link>-->
                                    <span v-for="city in list" class="hot">{{city}}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="right-nav">
                <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img :src="require('assets/image/swiper1.jpg')">
                            </div>
                            <div class="swiper-slide">
                                <img :src="require('assets/image/swiper2.jpg')">
                            </div>
                            <div class="swiper-slide">
                                <img :src="require('assets/image/swiper3.jpg')">
                            </div>
                            <div class="swiper-slide">
                                <img :src="require('assets/image/swiper4.jpg')">
                            </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-white"></div>
                        <div class="swiper-button-prev swiper-button-white"></div>
                        <div class="swiper-button-next swiper-button-white"></div>
                    </div>
                <div class="show-img">
                    <img :src="require('assets/image/1.jpg')">
                    <img :src="require('assets/image/2.jpg')">
                    <img :src="require('assets/image/3.jpg')">
                </div>
            </div> 
        </div>
        <!--<div class="line">
            <line-group-l routeCategroy="NEARBY"></line-group-l>
            <line-group-r routeCategroy="NEARBY"></line-group-r>
        </div>
        <div class="line middle">
            <line-group-l routeCategroy="INLAND"></line-group-l>
            <line-group-r routeCategroy="INLAND"></line-group-r>
        </div>
        <div class="line">
            <line-group-l routeCategroy="OVERSEAS"></line-group-l>
            <line-group-r routeCategroy="OVERSEAS"></line-group-r>
        </div>-->
    </div>
</template>
<script src="assets/js/index.js"></script>