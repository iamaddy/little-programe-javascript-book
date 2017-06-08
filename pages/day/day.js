
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
                lastDays: that.getDayDiff(item),
                is_cover: item.is_cover
            })
        });
        this.data.commonDataList.sort(function(a, b){
            return a.lastDays - b.lastDays
        });
        this.setCover();
        this.setData({
            commonDataList: this.data.commonDataList
        });
    },
    setCover(){
        var list = this.data.commonDataList;
        var item;
        for(var i = 0; i < list.length; i++){
            if(list[i].is_cover){
                item = list[i];
            }
        }
        result = item || list[0];
        this.setData({
            title: result.title,
            lastDay: result.lastDays,
            dateStr: result.dateStr
        });
    },
    getDayDiff(item){
        var m_str = item.datetime.month;
        if(m_str < 10){
            var m_str = '0' + m_str;
        }
        var d_str = item.datetime.day;
        if(d_str < 10){
            var d_str = '0' + d_str;
        }
        var time = item.datetime.year + '-' + m_str + '-' + d_str;

        item.replay_type = +item.replay_type;

        if(item.replay_type === 0){
            return Date_diff.getDayDiff(time)
        }else if(item.replay_type === 1){
            return Date_diff.yearDiff(time)
        }else if(item.replay_type === 2){
            return Date_diff.monthDiff(time)
        }else{
            return Date_diff.weeklyDiff(time)
        }
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