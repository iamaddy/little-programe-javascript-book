
var TAG_DATA = require('../tag_data');
var app = getApp();
var Lunar = require('../cal/date');
var MAX_LUNAR_YEAY = 2499;
var MIN_LUNAR_YEAY = 1900;

Page({
    data: {
        replayTypeArr: [{
            id: 0,
            name: '不重复'
        }, {
            id: 1,
            name: '每年'
        }, {
            id: 2,
            name: '每月'
        }, {
            id: 3,
            name: '每周'
        }],
        replayTypeIndex: 0,
        selectTagIndex: 0,
        tag_data: TAG_DATA,
        selectDateType: 1
    },
    onLoad: function(res) {
        var that = this;
        app.PubSub.subscribe('/selecttag', function(event, index){
            if(index !== undefined){
                that.setData({
                    selectTagIndex: index
                });
            }
        });
    },
    changeTab(e){
        this.setData({
            selectDateType: +e.target.dataset.tap
        });
    },
    initLunarDate(){
        var year = [];
        for(var i = MIN_LUNAR_YEAY; i < MAX_LUNAR_YEAY; i++){
            year.push({
                id: i,
                name: i + Lunar.cyclical(i % 60)
            });
        }
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();

        this.setData({
            years: year
        });

        this.getMonths(y);

        this.getDayNum(y, m);

        this.setData({
            value: [y - MIN_LUNAR_YEAY, m, d]
        })
    },
    getMonths(y){
        var month = [];
        var c1 = '一|二|三|四|五|六|七|八|九|十|冬|腊'.split('|');
        for(var i = 0 ; i < 12; i++){
            month.push({
                id: i,
                name: c1[i] + '月'
            })
        }
        var num = Lunar.getLeapMonth(y);
        if(num){
            month.splice(num - 1, 0, {id: num - 1, name: c1[num - 1] + '月'});
        }

        this.setData({
            month: month
        });
    },
    changeDate(e){
        var value = e.detail.value;
        var year = MIN_LUNAR_YEAY + value[0];

        this.getMonths(year);
        this.getDayNum(year, value[1]);
    },
    getDayNum(y, m){
        var days = [];
        var num = Lunar.getDaysByLunarMonth(y, m);
        for(var i = 0; i < num; i++){
            days.push({
                i: i,
                name: i
            })
        }
        this.setData({
            days : days
        })
    },
    onShow() {
        this.setData({
            date: this.getCurrentDay()
        });
        this.initLunarDate();
    },
    bindAddTagTap(){
        wx.navigateTo({
            url: '../tag/tag?index=' + this.data.selectTagIndex
        })
    },
    getCurrentDay() {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        if (day < 10) {
            day = '0' + day.toString();
        }
        if (month < 10) {
            month = '0' + month.toString();
        }

        return year + '-' + month + '-' + day;
    },
    bindreplayTypePickerChange(e){
        this.setData({
          replayTypeIndex: e.detail.value
        });
    },
    bindSaveInfo(){

    }
});

/*
    datetime:
    title
    nongli
    eventType
    typeName
    is_first
    replayType
*/