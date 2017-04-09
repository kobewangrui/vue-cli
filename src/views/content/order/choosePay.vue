<style lang="css" src="assets/css/choosePay.css" scoped></style>
<template>
    <div class="container">
      <progress-status status="b"></progress-status>
      <div class="orderDetail">
          <p>
              <span class="title">订单编号：</span>589478632
              <span class="title titles">产品名称：</span>昆明+丽江+大理 6日 团队游
          </p>
          <p>应付金额：<span>￥273540 </span>元</p>
          <p>请您在提交订单后2小时内完成支付，负责订单会自定取消</p>
      </div>
      <div class="payMethod">
          <p class="navTitle">支付方式</p>
          <div class="chooseMethod">
              <input id="personal" type="radio" name="pay" value="CBPAY" v-model="payMethod">     
              <label for="personal" class="personal"></label>
              <label for="personal" class="labelImg">
                  <img :src="require('assets/image/personal.png')" alt="">
              </label>
              <input id="corporate" type="radio" name="pay" value="ENTERPRISE_UNIONPAY" v-model="payMethod">
              <label for="corporate" class="corporate"></label>
              <label for="corporate" class="labelImgs">
                  <img :src="require('assets/image/corporate.png')" alt="">
              </label>
              <span class="payMethodDiscrib">个人网银为个人账户，企业银联为对公账户，请谨慎选择。</span>
          </div>
          <div class="chooseBank">
              <div class="card-table">
                <p class="bankName">
                    <span>选择银行</span>
                    <input type="text" :value="currentBank" readonly="true">
                    <button class="resetChoose" v-if="payLimit" @click="reset">重新选择</button>
                </p>
                <div class="toggle-outer" v-if="talbeBank">
                    <span class="toggle-table" @click="savingShow" :class="{'currentTable':credit}">储蓄卡</span>
                    <span class="toggle-table" @click="creditShow" :class="{'currentTable':saving}">信用卡</span>
                </div>
              </div>
              <div class="saving-fill bank_icon" v-if="saving">
                <ul>
                    <li v-for="item in savingCard" :value="item.text" @click="payBank(item)" :class="{'currentBank':currentBank==item.text}"><span :class="'bank_' + item.id"></span></li>
                </ul>
              </div>
              <div class="credit-card bank_icon" v-if="credit">
                <ul>
                    <li v-for="item in creditCard" :value="item.text" @click="payBank(item)" :class="{'currentBank':currentBank==item.text}"><span :class="'bank_' + item.id"></span></li>
                </ul>
              </div>
              <div class="payDetail" v-if="payLimit">
                <table>
                    <tr>
                        <td>单笔限额</td>
                        <td>每日限额</td>
                        <td>每月限额</td>
                        <td>安全认证方式</td>
                        <td>备注</td>
                    </tr>
                    <tr v-for="(item,$index) in backDataAll[currentId]">
                        <td>{{item.single}}</td>
                        <td>{{item.everyday}}</td>
                        <td>{{item.monthly}}</td>
                        <td>
                            <p>{{item.security}}</p>
                            <p><a :href="item.help">(如何办理？)</a></p>
                        </td>
                        <td v-if="$index == 0" :rowspan="backDataAll[currentId].length">{{item.remark}}</td>
                    </tr>
                </table>
            </div>
          </div>
          <button @click="payDetail" class="immediatelyPay">立即支付</button>
          <form id="pay" action="/order/success" method="get">
              <input type="hidden" name="orderId" v-model="$route.query.orderId"/>
              <input type="hidden" name="payMethod" v-model="payMethod"/>
              <input type="hidden" name="bankCode" v-model="currentId"/>
          </form>
      </div>
    </div>
</template>
<script src="assets/js/choosePay.js"></script>

