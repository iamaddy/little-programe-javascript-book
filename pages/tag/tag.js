var data = require('../tag_data');
var app = getApp();

Page({
    data: {
        tagData: data,
        selectIndex: 0
    },
    onLoad: function(res) {
        var index = res.index || 0;
        this.setData({
            selectIndex: +index
        });
    },
    onShow() {

    },
    selectTag(e){
        var id = e.target.dataset.id;
        this.setData({
            selectIndex: id - 1
        });
        app.PubSub.publish('/selecttag', this.data.selectIndex);
        setTimeout(function () {
            wx.navigateBack();
        }, 300);
    }
});