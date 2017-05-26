//index.js
//获取应用实例
var app = getApp();
var data = require('../../data/javascript.data');
var systemInfo = wx.getSystemInfoSync();
Page({
    data: {
        motto: 'Hello World',
        windowWidth: systemInfo.windowWidth
    },
    //事件处理函数
    showObjectDetail: function(event) {
        wx.navigateTo({
            url: '../detail/detail?categeryid=' + event.currentTarget.dataset.categeryid + '&parentid=' + event.currentTarget.dataset.parentid
        })
    },
    onShow(){
        this.setData({
            list: data.data
        });
    },
    onLoad: function() {
        console.log('onLoad')
        var that = this;
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    }
})