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
        calendar_data: {},
        hideCalendar: true,
        title: '',
        is_cover: false
    },
    onLoad: function(res) {
        var that = this;
        app.PubSub.subscribe('/selecttag', function(event, index) {
            if (index !== undefined) {
                that.setData({
                    selectTagIndex: index
                });
            }
        });
        var calendar = new Calendar(this, function(date) {
            that.setData({
                date: date
            })
        });
        this.setData({
            date: calendar.getCurrentSelectDate()
        })
    },

    onShow() {
        /*        this.setData({
                    date: this.getCurrentDay()
                });*/
        // this.initLunarDate();
    },
    bindAddTagTap() {
        wx.navigateTo({
            url: '../tag/tag?index=' + this.data.selectTagIndex
        });
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
    bindreplayTypePickerChange(e) {
        this.setData({
            replayTypeIndex: e.detail.value
        });
    },
    switchChange(e){
        this.setData({
           is_cover : e.detail.value
        });
    },
    bindSaveInfo() {
        if (!this.data.title) {
            wx.showModal({
                title: '标题不能为空',
                showCancel: false
            });
            return;
        }

        var data = {
            title: this.data.title,
            datetime: this.data.date,
            is_cover: this.data.is_cover,
            replay_type: this.data.replayTypeIndex,
            event_type: this.data.selectTagIndex
        };
        var list = wx.getStorageSync('_list_');
        if (list) {
            list = JSON.parse(list)
        } else {
            list = []
        }
        if(data.is_cover){
            list.forEach(function(item){
                item.is_cover = false;
            });
        }
        list.push(data);
        wx.setStorage({
            key: '_list_',
            data: JSON.stringify(list),
            success: function(res) {
                console.log(res);
                wx.showModal({
                    title: '保存成功',
                    showCancel: false,
                    success: function(res) {
                        if (res.confirm) {
                            wx.navigateBack();
                        }
                    }
                });
            },
            fail: function(res) {
                wx.showModal({
                    title: '保存失败',
                    showCancel: false
                });
            }
        });
    },
    bindTitleInput(e) {
        this.data.title = e.detail.value;
    },
    toggleCalendar() {
        this.setData({
            hideCalendar: !this.data.hideCalendar
        })
    }
});