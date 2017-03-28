<style src="assets/a.css" scoped></style>
<style scoped>
  p{
    color:#fff;  
  }
  .swiper-slide,
  .swiper-container{
    width:200px;
    height:100px;
  }
.aa{
    transition: all .3s ease;
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
<template>
  <div>
      <router-link to="/">返回首页</router-link>
      <p class="a" @click="imgToggle">hello-index.vue</p>
      <transition name="fade">  
        <img class="aa" :src="require('assets/logo.png')" v-if="imgShow" v-transition>
      </transition>
      {{s}}
      <!-- Swiper -->
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
              <div class="swiper-slide">Slide 4</div>
              <div class="swiper-slide">Slide 5</div>
              <div class="swiper-slide">Slide 6</div>
              <div class="swiper-slide">Slide 7</div>
              <div class="swiper-slide">Slide 8</div>
              <div class="swiper-slide">Slide 9</div>
              <div class="swiper-slide">Slide 10</div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
      </div>
  </div>
</template>
<script src="assets/b.js"></script>