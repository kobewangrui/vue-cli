<style lang="css" src="assets/css/confirmOrder.css" scoped></style>
<template>
    <div class="container">
      <!--<pay-progress></pay-progress>-->
      <div class="order-detail">
        <form action="" id="orderSubmit" method="get">
          <div class="group">
            <p class="group-title">订单信息</p>
            <div class="group-content">
                <span>
                  <span class="title">产品名称：</span>
                  <span>昆明+大理+丽江6日团队游</span>
                </span>
                <span class="right">
                  <span class="title">产品类别：</span>
                    <span class="type after-group">跟团</span>
                    <span class="type ground">地接</span>
                    <span class="type self">自助</span>
                    <span class="type self">半自助</span>
                    <span class="type liner">邮轮</span>
                    <span class="type drive-self">自驾</span>
                </span>
            </div>
            <div class="group-content">
                <span>
                  <span class="title">产品编号：</span>
                  <span>589478632</span>
                </span>
                <span class="right">
                  <span class="title">往返交通：</span>
                  <span>飞机</span>
                </span>
            </div>
            <div class="group-content">
                <span>
                  <span class="title">出发地：</span>
                  <span>西安</span>
                </span>
                <span class="right">
                  <span class="title">即时交易：</span>
                  <span>是</span>
                </span>
            </div>
            <div class="group-content  border-line">
                <span class="title">旅程天数：</span>
                <span>6天</span>
            </div>
            <div class="group-content">
                <span>
                  <span class="title">人数：</span>
                  <span class="number">
                    <span @click="reduceAdult">-</span><input type="text" v-model="adultNumber" number><span @click="addAdult">+</span>成人
                    </span>
                  <span class="number children">
                    <span @click="reduceChildren">-</span><input type="text" v-model="childrenNumber" number><span @click="addChildren">+</span>儿童
                  </span>
                </span>
                <span class="right">
                  <span class="title">出团日期：</span>
                  <span class="date"><input type="text"></span>
                </span>
            </div>
            <div class="group-content last-line">
                <span>
                  <span class="title">结算价：</span>
                  <span><span class="singlePrice">{{adultPrice}}</span> /成人</span>
                  <span class="children"><span class="singlePrice">{{childrenPrice}}</span> /儿童</span>
                </span>
                <span class="right">
                  <span class="title">总价：</span>
                  <span>共计<span class="allPrice">{{countPrice}}</span><span class="unit">元</span></span>
                </span>
            </div>
          </div>
          <div class="group connect">
            <p class="group-title">联系人信息</p>
            <div class="connect-group">
              <label for="contacts" class="must">联系人：</label>
              <input type="text" id="contacts" name="contacts">
              <label for="phoneNumber" class="must">手机：</label>
              <input type="text" id="phoneNumber" name="phoneNumber">
              <label for="call">固话：</label>
              <input type="text" id="call" name="call">
            </div>
            <div class="connect-group">
              <label for="email" class="emailSub">邮箱：</label>
              <input type="text" id="email" class="emailSubInput" placeholder="为了能及时收到相关信息，请您填写正确的邮箱">
              <label class="tecentSub" for="tecentQQ">QQ：</label>
              <input type="text" id="tecentQQ" class="">
            </div>
          </div>
          <div class="group traveller">
            <p class="group-title">游客信息</p>
            <div class="traveller-table">
              <span class="toggle-table" @click="fillShow" :class="{'currentTable':upload}">手动填写</span>
              <span class="toggle-table" @click="uploadShow" :class="{'currentTable':fill}">附件上传</span>
              <span class="right-intro-upload" :class="{'fillColor':fill}">如果有整理好的名单，可以选择附件上传则无需手动填写。</span>
            </div>
            <div class="upload" v-if="upload">
              <div class="upload-btn" href="javascript:void(0);">
                <span>点击上传</span>
                <span>+</span>
              </div>
              <span class="upload-intro">最多上传一个附件，支持WORD、EXCEL及JPG格式。</span>
            </div>
            <div class="exit-fill" v-if="fill">
                <div class="fill-adult" v-for="i in adultNumber">
                  <table>
                    <tr>
                      <td>游客{{i}}：</td>
                      <td><label class="must" :for="'cnName'+i">中文姓名</label></td>
                      <td>
                        <input type="text" :id="'cnName'+i" name="cnName" class="langest-input" placeholder="证件的中文姓名">
                      </td>
                      <td><label class="must" :for="'enName1'+i">英文姓名</label></td>
                      <td>
                        <input type="text" :id="'enName1'+i" name="enName1" placeholder="姓（拼音或英文）" class="lang-input">
                        <input type="text" name="enName2" placeholder="名（拼音或英文）" class="lang-input margin15">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="adult">成人</span>
                        </td>
                      <td>国籍</td>
                      <td>中国大陆</td>
                      <td><label :for="'cardName'+i" class="must">证件号</label></td>
                      <td class="cardList">
                        <input type="text" class="shorter-input" name="cardName2" readonly="true" v-model="passCard" @click="cardListHide">
                        <span class="cardUl" @click="cardListHide"></span>
                        <ul class="passCardList" v-if="cardListShow">
                          <li v-for="item in cardList" @click="choosepassCard(item)">{{item.name}}</li>
                        </ul>
                        <input :id="'cardName'+i" name="cardName" type="text" class="langer-input margin15">
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><label class="must">性别</label></td>
                      <td>
                        <input :id="'man'+i" type="radio" name="sex">
                        <label :for="'man'+i" class="man"></label>
                        <label :for="'man'+i">男</label>

                        <input :id="'woman'+i" type="radio" name="sex">
                        <label :for="'woman'+i" class="woman"></label>
                        <label :for="'woman'+i">女</label>
                      </td>
                      <td><label class="must" :for="'connectNumber' +i">联系电话</label></td>
                      <td>
                        <input class="langest-input" :id="'connectNumber'+i" name="connectNumber" type="text">
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><label class="must" :for="'bornDate'+i">出生日期</label></td>
                      <td>
                        <input type="text" :id="'bornDate'+i" name="bornDate" class="short-input">
                      </td>
                      <td :for="'personCard'+i">身份证号</td>
                      <td>
                        <input :id="'personCard'+i" class="langest-input" type="text" placeholder="方便匹配信息">
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="fill-children" v-for="i in childrenNumber">
                  <table>
                    <tr>
                      <td>游客{{i}}：</td>
                      <td><label class="must" :for="'cnNamec'+i">中文姓名</label></td>
                      <td>
                        <input type="text" :id="'cnNamec'+i" name="cnName" class="langest-input" placeholder="证件的中文姓名">
                      </td>
                      <td><label class="must" :for="'enName1c'+i">英文姓名</label></td>
                      <td>
                        <input type="text" :id="'enName1c'+i" name="enName1" placeholder="姓（拼音或英文）" class="lang-input">
                        <input type="text" :id="'enName2c'+i" name="enName2" placeholder="名（拼音或英文）" class="lang-input margin15">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="children">儿童</span>
                        </td>
                      <td>国籍</td>
                      <td>中国大陆</td>
                      <td><label :for="'cardNamec'+i" class="must">证件号</label></td>
                      <td class="cardListC">
                        <input type="text" class="shorter-input" name="cardName2" readonly="true" v-model="passCard" @click="cardListHide">
                        <span class="cardUl" @click="cardListHide"></span>
                        <ul class="passCardListC" v-if="cardListShow">
                          <li v-for="item in cardList" @click="choosepassCard(item)">{{item.name}}</li>
                        </ul>
                        <input :id="'cardName2c'+i" name="cardName" type="text" class="langer-input margin15">
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><label class="must">性别</label></td>
                      <td>
                        <input :id="'manc'+i" type="radio" name="sexc">
                        <label :for="'manc'+i" class="man"></label>
                        <label :for="'manc'+i">男</label>

                        <input :id="'womanc'+i" type="radio" name="sexc">
                        <label :for="'womanc'+i" class="woman"></label>
                        <label :for="'womanc'+i">女</label>
                      </td>
                      <td><label class="must" :for="'connectNumberc'+i">联系电话</label></td>
                      <td>
                        <input class="langest-input" :id="'connectNumberc'+i" name="connectNumber" type="text">
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><label class="must" :for="'bornDatec'+i">出生日期</label></td>
                      <td>
                        <input type="text" :id="'bornDatec'+i" name="bornDate" class="short-input">
                      </td>
                      <td>身份证号</td>
                      <td>
                        <input class="langest-input" type="text" placeholder="方便匹配信息">
                      </td>
                    </tr>
                  </table>
                </div>
            </div>
          </div>
          <div class="group remarks">
            <p class="group-title">备注信息</p>
            <textarea></textarea>
            <button type="submit" class="submit-btn">提交订单</button>
          </div>
        </form>
      </div>
    </div>
</template>
<script src="assets/js/submitOrder.js"></script>