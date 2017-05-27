var util = require('../../utils/util.js');
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
        years:[1,2,3,4,5],
        months:[1,2,3,4,5],
        days:[1,2,3,4,5]
    },
    onLoad: function(res) {

    },
    onShow() {
        this.setData({
            date: this.getCurrentDay()
        });
    },
    bindAddTagTap(){
        wx.navigateTo({
            url: '../tag/tag'
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