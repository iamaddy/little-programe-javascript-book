
var TAG_DATA = require('../tag_data');
var app = getApp();
var Calendar = require('../cal/calendar');
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
        calendar_data: {

        }
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
        new Calendar('1', this);
    },
    
    onShow() {
        this.setData({
            date: this.getCurrentDay()
        });
        // this.initLunarDate();
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