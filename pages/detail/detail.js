//logs.js
var util = require('../../utils/util.js');
var AllData = require('../../data/javascript.data').data;

var syntaxWidth = wx.getSystemInfoSync().windowWidth - 42;
Page({
    data: {

    },
    onLoad: function(res) {
        var data = this.getObjectByCategeryId(res.parentid, res.categeryid);
        data.parameter = this.replaceBr(data.parameter);
        data.returns = this.replaceBr(data.returns);

        this.setData({
            object: data,
            syntaxWidth: syntaxWidth
        });

        wx.setNavigationBarTitle({title: data.name});

        this.data.parentid = res.parentid;
        this.data.categeryid =  res.categeryid;
    },
    replaceBr(str){
        return str.replace(/。/g, '。\n\n');
    },
    getObjectByCategeryId(parentid, categeryid) {
        var data;
        for(var j = 0; j < AllData.length; j++){
            data = AllData[j];
            if(data.parentid === +parentid){
                for (var i = 0; i < data.data.length; i++) {
                    if (data.data[i].categeryid === +categeryid) {
                        return data.data[i];
                    }
                }
            }
        }
        return {};
    },
    showMethod(event){
        wx.navigateTo({
            url: '../method/method?name=' + event.currentTarget.dataset.name + '&categeryid=' + this.data.categeryid + '&parentid=' + this.data.parentid
        })
    }
});