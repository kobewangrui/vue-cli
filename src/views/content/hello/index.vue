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
</style>
<template>
  <div>
      <!--<p class="a">hello-index.vue</p>-->
      <!--<img class="aa" :src="require('assets/logo.png')">-->
      <!--{{s}}-->
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