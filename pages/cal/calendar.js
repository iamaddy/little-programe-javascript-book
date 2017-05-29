String.prototype.parseToArray = function(bit, s) {
    var ret = this.split(s || "|");
    return bit ? function(l, n){
        for(; l--;) ret[l] = parseInt(ret[l], bit);
        return ret;
    }(ret.length) : ret;
}

var map = {

    //公历天数集合
    days: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

    //公历节日
    feast: {
        "1-1": "元旦节",
        "2-14": "情人节",
        "3-5": "雷锋日",
        "3-8": "妇女节",
        "3-12": "植树节",
        "3-15": "消费日",
        "4-1": "愚人节",
        "5-1": "劳动节",
        "5-4": "青年节",
        "6-1": "儿童节",
        "7-1": "建党节",
        "8-1": "建军节",
        "9-10": "教师节",
        "10-1": "国庆节",
        "12-24": "平安夜",
        "12-25": "圣诞节"
    },

    //农历
    lunar: {

        //template
        tpl: "#{y}-#{m}-#{d} 星期#{W} 农历 #{CM}#{CD} #{gy}(#{sx}) #{gm} #{gd} #{so} #{cf} #{gf}",


        //闰月: leap[y-1900] & 0xf，闰月天数: leap[y-1900] & 0x10000
        leap: "ezc|esg|wog|gr9|15k0|16xc|1yl0|h40|ukw|gya|esg|wqe|wk0|15jk|2k45|zsw|16e8|yaq|tkg|1t2v|ei8|wj4|zp1|l00|lkw|2ces|8kg|tio|gdu|ei8|k12|1600|1aa8|lud|hxs|8kg|257n|t0g|2i8n|13rk|1600|2ld2|ztc|h40|2bas|7gw|t00|15ma|xg0|ztj|lgg|ztc|1v11|fc0|wr4|1sab|gcw|xig|1a34|l28|yhy|xu8|ew0|xr8|wog|g9s|1bvn|16xc|i1j|h40|tsg|fdh|es0|wk0|161g|15jk|1654|zsw|zvk|284m|tkg|ek0|xh0|wj4|z96|l00|lkw|yme|xuo|tio|et1|ei8|jw0|n1f|1aa8|l7c|gxs|xuo|tsl|t0g|13s0|16xg|1600|174g|n6a|h40|xx3|7gw|t00|141h|xg0|zog|10v8|y8g|gyh|exs|wq8|1unq|gc0|xf4|nys|l28|y8g|i1e|ew0|wyu|wkg|15k0|1aat|1640|hwg|nfn|tsg|ezb|es0|wk0|2jsm|15jk|163k|17ph|zvk|h5c|gxe|ek0|won|wj4|xn4|2dsl|lk0|yao".parseToArray(36),

        //节气
        jqmap: "0|gd4|wrn|1d98|1tuh|2akm|2rfn|38g9|3plp|46vz|4o9k|55px|5n73|64o5|6m37|73fd|7kna|81qe|8io7|8zgq|9g4b|9wnk|ad3g|ath2|".parseToArray(36),
        jqnames: "小寒|大寒|立春|雨水|惊蛰|春分|清明|谷雨|立夏|小满|芒种|夏至|小暑|大暑|立秋|处暑|白露|秋分|寒露|霜降|立冬|小雪|大雪|冬至".parseToArray(),

        //中文数字
        c1: "|一|二|三|四|五|六|七|八|九|十".parseToArray(),
        c2: "初|十|廿|卅|".parseToArray(),

        //中文星期
        wk: "日一二三四五六",

        //天干
        tg: "甲乙丙丁戊己庚辛壬癸",

        //地支
        dz: "子丑寅卯辰巳午未申酉戌亥",

        //生肖
        sx: "鼠牛虎兔龙蛇马羊猴鸡狗猪",

        //农历节日
        feast: {
            "1-1": "春节",
            "1-15": "元宵节",
            "5-5": "端午节",
            "8-15": "中秋节",
            "9-9": "重阳节",
            "12-8": "腊八节"
        },

        // 日期修正数组
        // ~表示日期范围
        // = 前面是日期, 后面对应的分别是年月日的修正值
        // 例: fixDate: ["2013-1-1=0|-1|1", "2013-1-12~2013-2-9=0|-1|0"]
        fixDate: ["2013-1-1~2013-1-11=0|-1|1", "2013-1-12~2013-2-9=0|-1|0"]
    }
};
var MAX_LUNAR_YEAY = 2499;
var MIN_LUNAR_YEAY = 1900;

class Calendar {
    constructor(key, context) {
        this.pageCtx = context;
        this.key = key;
        this.data = {
            selectDateType: 1
        };
        this.initCalendar();
    }
    /**
    *获取日期
    *@method: getDate
    *@param: {Date} || new Date()
    *@return: {y: 年, m: 月, d: 日}
    */
    getDate(date) {
        !_.isDate(date) && (date = new Date());
        return {
            y: date.getFullYear(),
            m: date.getMonth() + 1,
            d: date.getDate()
        };
    }
    setData(data){
        for(var key in data){
            this.data[key] = data[key];
        }
        
        this.pageCtx.setData({
            calendar_data: this.data
        });
    }
     /**
    }
    *检查是否date对象
    *@method: isDate
    *@param: {Date}
    *@return: {Bool}
    */
    isDate(date) {
        return date instanceof Date && !isNaN(date);
    }
    /**
    *返回返回农历月份天数
    *@method: getDaysByLunarMonth
    *@param: {Num} lunar year
    *@param: {Num} lunar month
    *@return: {Num}
    */
    getDaysByLunarMonth(y, m) {
        return map.lunar.leap[y-1900] & (0x10000 >> m) ? 30 : 29;
    }
     /**
    *返回公历年份的闰月月份
    *@method: getLeapMonth
    *@param: {Num} year
    *@return: {Num} || 0
    */
    getLeapMonth(y) {
        return map.lunar.leap[y-1900] & 0xf;
    }
    /**
    *根据序号返回干支组合名
    *@method: cyclical
    *@param: {Num} 序号 (0 --> 甲子，以60进制循环)
    *@return: {String}
    */
    cyclical(n) {
        return(map.lunar.tg.charAt(n%10) + map.lunar.dz.charAt(n%12));
    }
    initCalendar(){
        this.initNormalCalendar();
        this.initLunarCalendar();

        this.bindEvent();
    }
    initNormalCalendar(){
        var year = [];
        for(var i = MIN_LUNAR_YEAY; i < MAX_LUNAR_YEAY; i++){
            year.push({
                id: i,
                name: i + '年'
            });
        }
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth();
        var d = date.getDate();

        this.setData({
            years: year
        });

        this.getMonths(y);
        this.getDayCount(m);

        this.setData({
            selected_value: [y - MIN_LUNAR_YEAY, m , d]
        })
    }
    getMonths(y){
        var month = [];

        for(var i = 0 ; i < 12; i++){
            month.push({
                id: i,
                name: i + 1 + '月'
            })
        }

        this.setData({month: month});
    }
    getDayCount(m){
        var days = [];
        for(var i = 0; i < map.days[m]; i++){
            days.push({
                id: i,
                name: i + 1 + '日'
            })
        }
        this.setData({
            days : days
        })
    }
    initLunarCalendar(){
        var year = [];
        for(var i = MIN_LUNAR_YEAY; i < MAX_LUNAR_YEAY; i++){
            year.push({
                id: i,
                name: i + this.cyclical(i % 60)
            });
        }
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth();
        var d = date.getDate();

        this.setData({
            lunar_years: year
        });

        this.getLunarMonths(y);

        this.getLunarDayCount(y, m);

        this.setData({
            lunar_selected_value: [y - MIN_LUNAR_YEAY, m, d]
        })
    }
    getLunarMonths(y){
        var month = [];
        var c1 = '一|二|三|四|五|六|七|八|九|十|冬|腊'.split('|');
        for(var i = 0 ; i < 12; i++){
            month.push({
                id: i,
                name: c1[i] + '月'
            })
        }
        var num = this.getLeapMonth(y);
        if(num){
            month.splice(num - 1, 0, {id: num - 1, name: c1[num - 1] + '月'});
        }

        this.setData({lunar_month: month});
    }
    
    getLunarDayCount(y, m){
        var days = [];
        var num = this.getDaysByLunarMonth(y, m);
        for(var i = 0; i < num; i++){
            days.push({
                i: i,
                name: i
            })
        }
        this.setData({
            lunar_days : days
        })
    }
    bindEvent(){
        this.pageCtx.changeCalendarTab = this.changeCalendarTab.bind(this);
        this.pageCtx.changeLunarDate = this.changeLunarDate.bind(this);
        this.pageCtx.changeDate = this.changeDate.bind(this);
    }
    changeDate(e){
        var value = e.detail.value;
        var year = MIN_LUNAR_YEAY + value[0];
        var oldValue = this.data.selected_value.slice(0, 3);

        this.data.selected_value = value;

        if(value[0] !== oldValue[0]){
            this.getMonths(year);
            this.getDayCount(value[1]);
        }

        if(value[1] !== oldValue[1]){
            this.getDayCount(value[1]);
        }

    }
    changeLunarDate(e){
        var value = e.detail.value;
        var year = MIN_LUNAR_YEAY + value[0];
        var oldValue = this.data.lunar_selected_value.slice(0, 3);

        this.data.lunar_selected_value = value;


        if(value[0] !== oldValue[0]){
            this.getLunarMonths(year);
            this.getLunarDayCount(year, value[1]);
        }

        if(value[1] !== oldValue[1]){
            this.getLunarDayCount(year, value[1]);
        }
    }
    changeCalendarTab(e){
        this.setData({
            selectDateType: +e.target.dataset.tap
        });
    }
};

module.exports = Calendar;
