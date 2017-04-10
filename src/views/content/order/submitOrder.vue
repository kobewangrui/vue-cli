<style lang="css" src="assets/css/confirmOrder.css" scoped></style>
<template>
    <div class="container">
      <progress-status status="a"></progress-status>
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
                  <span>{{$route.query.productId}}</span>
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
                  <span class="date"><input type="text" readonly="true" v-model="$route.query.date"></span>
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
            <div class="upload" v-show="upload">
              <div class="fileList">
                <p v-for="i in 3">1231456.doc</p>
              </div>            
              <div class="upload-btn" href="javascript:void(0);" id="uploader">
                  <span>点击上传</span>
                  <span>+</span>
              </div>
              <span class="upload-intro">最多上传一个附件，支持WORD、EXCEL及JPG格式。</span>
            </div>
            <div class="exit-fill" v-show="fill">
                <div class="fill-adult" v-for="(item,$index) in adult">
                  <table>
                    <tr>
                      <td>游客{{$index+1}}：</td>
                      <td><label class="must" :for="'cnName'+$index">中文姓名</label></td>
                      <td>
                        <input type="text" v-model="item.chinaName" :id="'cnName'+$index" name="cnName" class="langest-input" placeholder="证件的中文姓名">
                      </td>
                      <td><label class="must" :for="'enName1'+$index">英文姓名</label></td>
                      <td>
                        <input type="text" v-model="item.englistName" :id="'enName1'+$index" name="enName1" placeholder="姓（拼音或英文）" class="lang-input">
                        <input type="text" v-model="item.englistName2" name="enName2" placeholder="名（拼音或英文）" class="lang-input margin15">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="adult">成人</span>
                        </td>
                      <td>国籍</td>
                      <td>中国大陆</td>
                      <td><label :for="'cardName'+$index" class="must">证件号</label></td>
                      <td class="cardList">
                        <input type="text" class="shorter-input cardToggleC" name="cardName2" readonly="true" v-model="passCard">
                        <span class="cardUl"></span>
                        <ul class="passCardList">
                          <li v-for="i in cardList" @click="choosepassCard(i)">{{i.name}}</li>
                        </ul>
                        <input :id="'cardName'+$index" v-model="item.cardNumber" name="cardName" type="text" class="langer-input margin15">
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><label class="must">性别</label></td>
                      <td>
                        <input :id="'man'+$index" type="radio" sign="sex" :name="'sex'+$index" v-model="item.sex" value="1">
                        <label :for="'man'+$index" class="man"></label>
                        <label :for="'man'+$index">男</label>

                        <input :id="'woman'+$index" type="radio" sign="sex" :name="'sex'+$index"  v-model="item.sex" value="2">
                        <label :for="'woman'+$index" class="woman"></label>
                        <label :for="'woman'+$index">女</label>
                      </td>
                      <td><label class="must"  :for="'connectNumber'+$index">联系电话</label></td>
                      <td>
                        <input class="langest-input" v-model="item.phone" :id="'connectNumber'+$index" name="connectNumber" type="text">
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><label class="must"  :for="'bornDate'+$index">出生日期</label></td>
                      <td>
                        <input type="text" v-model="item.bornDate" :id="'bornDate'+$index" name="bornDate" class="short-input">
                      </td>
                      <td :for="'personCard'+$index">身份证号</td>
                      <td>
                        <input v-model="item.idCard" :id="'personCard'+$index" class="langest-input" type="text" placeholder="方便匹配信息">
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="fill-children" v-for="(item,$index) in child">
                  <table>
                    <tr>
                      <td>游客{{$index+1}}：</td>
                      <td><label class="must" :for="'cnNamec'+$index">中文姓名</label></td>
                      <td>
                        <input type="text" v-model="item.chinaName" :id="'cnNamec'+$index" name="cnName" class="langest-input" placeholder="证件的中文姓名">
                      </td>
                      <td><label class="must" :for="'enName1c'+$index">英文姓名</label></td>
                      <td>
                        <input type="text" v-model="item.englishName" :id="'enName1c'+$index" name="enName1" placeholder="姓（拼音或英文）" class="lang-input">
                        <input type="text" v-model="item.englistName2" :id="'enName2c'+$index" name="enName2" placeholder="名（拼音或英文）" class="lang-input margin15">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class="children">儿童</span>
                        </td>
                      <td>国籍</td>
                      <td>中国大陆</td>
                      <td><label :for="'cardNamec'+$index" class="must">证件号</label></td>
                      <td class="cardListC">
                        <input type="text" class="shorter-input cardToggle" name="cardName2" readonly="true" v-model="passCard">
                        <span class="cardUl"></span>
                        <ul class="passCardListC">
                          <li v-for="i in cardList" @click="choosepassCard(i)">{{i.name}}</li>
                        </ul>
                        <input :id="'cardName2c'+$index" v-model="item.cardNumber" name="cardName" type="text" class="langer-input margin15">
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><label class="must">性别</label></td>
                      <td>
                        <input :id="'manc'+$index" type="radio" sign="sex" :name="'sexc'+$index" v-model="item.sex" value="1">
                        <label :for="'manc'+$index" class="man"></label>
                        <label :for="'manc'+$index">男</label>

                        <input :id="'womanc'+$index" type="radio" sign="sex" :name="'sexc'+$index"  v-model="item.sex" value="2">
                        <label :for="'womanc'+$index" class="woman"></label>
                        <label :for="'womanc'+$index">女</label>
                      </td>
                      <td><label class="must" :for="'connectNumberc'+$index">联系电话</label></td>
                      <td>
                        <input class="langest-input" v-model="item.phone" :id="'connectNumberc'+$index" name="connectNumber" type="text">
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><label class="must" :for="'bornDatec'+$index">出生日期</label></td>
                      <td>
                        <input type="text" v-model="item.idCard" :id="'bornDatec'+$index" name="bornDate" class="short-input">
                      </td>
                      <td>身份证号</td>
                      <td>
                        <input class="langest-input" v-model="item.bornDate" type="text" placeholder="方便匹配信息">
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