<style src="assets/css/calendar.css" scoped></style>
<template>
    <div class="doubleCalendar" v-show="calenarHide">
        <div class="calendar leftCalendar">
            <p class="headDate">
                <span class="prevMonth" @click="prevMonth"> < </span>
                <span>{{curYear}}年{{curMonth}}月</span>
            </p>
            <ul class="week">
                <li v-for="i in week">{{i}}</li>
            </ul>
            <table class="table">
                <tr v-for="item in days">
                    <td v-for="key in item" :class="{'active':new Date().getDate() == key}" @click="propsDate(key)">{{key}}</td>
                </tr>
            </table>
        </div>
        <div class="calendar rgihtCalendar">
            <p class="headDate">
                <span>{{curYear2}}年{{curMonth2}}月</span>
                <span class="nextMonth" @click="nextMonth"> > </span>
            </p>
            <ul class="week">
                <li v-for="i in week">{{i}}</li>
            </ul>
            <table class="table">
                <tr v-for="item in days2">
                    <td v-for="key in item" :class="{'active':new Date().getDate() == key}" @click="propsDate(key)">{{key}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script src="assets/js/calendar.js"></script>
