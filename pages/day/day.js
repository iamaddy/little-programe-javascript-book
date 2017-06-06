
var util = require('../../utils/util.js');
var TAG_DATA = require('../tag_data');
var Date_diff = require('date_diff');

var windowHeight = wx.getSystemInfoSync().windowHeight;

Page({
    data: {
        commonDataList: [],
        scrollHeight: windowHeight,
        minHeight: windowHeight - 310
    },
    onLoad: function(res) {
        
    },
    onShow(){
        this.data.commonDataList = [];
        var list = wx.getStorageSync('_list_');
        if(list){
            list = JSON.parse(list)
        }else{
            list = []
        }
        var that = this;
        list.forEach(function(item){
            that.data.commonDataList.push({
                title: item.title,
                dateStr: item.datetime.name,
                icon: that.getIconbyType(item.event_type),
                lastDays: Date_diff.weeklyDiff(item.datetime.year + '-' + item.datetime.month + '-' + item.datetime.day)
            })
        });
        this.setData({
            commonDataList: this.data.commonDataList
        });
    },
    getIconbyType(type){
        for(var i = 0; i < TAG_DATA.length; i++){
            if(TAG_DATA[i].tag_id - 1 === +type){
                return TAG_DATA[i].icon;
            }
        }
    },
    bindAddDayTap: function () {
        wx.navigateTo({
            url: '../add/add'
        })
    },
    onShareAppMessage: function() {
        var that = this;
        return {
            title: 'xxxxxxx',
            desc: 'xxxxxwsww',
            path: '/pages/day/day',
            cancel() {},
            complete() {},
            success: function() {
                
            }
        }
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