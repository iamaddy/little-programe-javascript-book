//logs.js
var util = require('../../utils/util.js');
var AllData = require('../../data/javascript.data').data;

Page({
    data: {

    },
    onLoad: function(res) {
        var data = this.getObjectByCategeryId(res.parentid, res.categeryid);

        data = this.getMethodByName(data, res.name);

        data.parameter = this.replaceBr(data.parameter);
        data.returns = this.replaceBr(data.returns);

        this.setData({
            object: data
        });

        wx.setNavigationBarTitle({title: data.name});
    },
    replaceBr(str){
        return str.replace(/。/g, '。\n');
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
    getMethodByName(data, name){
        if(!data) return {};
        var methods = data.methods;
        for (var i = methods.length - 1; i >= 0; i--) {
            if(methods[i].name === name){
                return methods[i];
            }
        };
        return {};
    }
});