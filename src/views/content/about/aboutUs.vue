<style lang="css" src="assets/css/about.css" scoped></style>
<template>
    <div class="container">
        <about-scoll></about-scoll>
        <div class="content-right">
            <img :src="require('assets/image/swiper1.jpg')">
            <div class="title">关于我们</div>
            <div>
                <p>
                    科比·布莱恩特（Kobe Bryant），1978年8月23日出生于美国宾夕法尼亚州费城，前美国职业篮球运动员，司职得分后卫/小前锋（锋卫摇摆人），绰号“黑曼巴”，
                    整个NBA生涯（1996年-2016年）一直效力于NBA洛杉矶湖人队，是前NBA球员乔·布莱恩特的儿子。 
                </p>
                <p>
                    科比是NBA最好的得分手之一，生涯赢得无数奖项，突破、投篮、罚球、三分球他都驾轻就熟，几乎没有进攻盲区，单场比赛81分的个人纪录就有力地证明了这一点。
                    除了疯狂的得分外，科比的组织能力也很出众，经常担任球队进攻的第一发起人。另外科比还是联盟中最好的防守人之一，贴身防守非常具有压迫性。
                </p>
                <p>
                    2016年4月14日，科比·布莱恩特在生涯最后一场主场对阵爵士的常规赛后宣布退役。
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  components: {
    'aboutScoll': require('./aboutLeft.vue')
  }
}
</script>