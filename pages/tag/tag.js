
Page({
    data: {
        tagData:[{
            tag_id: 1,
            tag_name: '爱情',
            icon: 'love2.png'
        },{
            tag_id: 2,
            tag_name: '生日',
            icon: 'bir.png'
        },{
            tag_id: 3,
            tag_name: '节日',
            icon: 'fes.png'
        },{
            tag_id: 4,
            tag_name: '学习',
            icon: 'study2.png'
        },{
            tag_id: 5,
            tag_name: '工作',
            icon: 'work.png'
        },{
            tag_id: 6,
            tag_name: '生活',
            icon: 'live.png'
        },{
            tag_id: 7,
            tag_name: '事件',
            icon: 'cal1.png'
        }],
        selectIndex: 0
    },
    onLoad: function(res) {

    },
    onShow() {

    },
    selectTag(e){
        var id = e.target.dataset.id;
        this.setData({
            selectIndex: id - 1
        });
        setTimeout(function () {
            wx.navigateBack();
        }, 300);
    }
});