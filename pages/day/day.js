
var util = require('../../utils/util.js');

var windowHeight = wx.getSystemInfoSync().windowHeight;
Page({
    data: {
        commonDataList: [{
            user: {
                nick_name: 'addyxu',
                head_img_url: '../img/birthday.png'
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
                head_img_url: '../img/love.png'
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
                head_img_url: '../img/gift.png'
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
                head_img_url: '../img/birthday.png'
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
                head_img_url: '../img/love.png'
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
                head_img_url: '../img/birthday.png'
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
            },
            hero_score:{
                score: '99'
            } 
        },{
            user: {
                nick_name: 'addyxu',
            },
            hero_score:{
                score: '99'
            } 
        }],
        scrollHeight: windowHeight,
        minHeight: windowHeight - 310
    },
    onLoad: function(res) {
        
    },
    bindAddDayTap: function () {
        wx.navigateTo({
            url: '../add/add'
        })
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