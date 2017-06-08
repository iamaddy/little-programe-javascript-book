var c_date 	= new Date();
var c_year 	= c_date.getFullYear();
var c_month = c_date.getMonth();
var c_day 	= c_date.getDate();
var c_week 	= c_date.getDay();

const DAYTIME = 24 * 60 * 60 * 1000;
module.exports = {
	weeklyDiff: function(time){
		var d = new Date(time);
		var week = d.getDay();
		var diff =  week - c_week;
		return diff >= 0 ? diff : 7 + diff;
	},
	monthDiff: function(start){
		var d = new Date(start);
		var day = d.getDate();

		var lastDay = this.getMonthLastDays();
		if(day > c_day){
			return day + lastDay - c_day
		}else{
			return c_day - day;
		}
	},
	yearDiff: function(start){
        var date = new Date(start);
        var month = date.getMonth();
        var year = date.getFullYear();
        date.setFullYear(c_year);

        if(month >= c_month){
            return Math.ceil((date - c_date) / DAYTIME);
        }else{
            date.setFullYear(c_year + 1);
            return Math.ceil((date - c_date) / DAYTIME);
        }
	},
    getDayDiff: function(start){
        var date = new Date(start);
        if(date >= c_date){
            return  Math.ceil((date - c_date) / DAYTIME);
        }else{
            return  Math.ceil((c_date - date) / DAYTIME);
        }
    },
	getMonthLastDays() {
        var date = new Date();
        date.setMonth(date.getMonth() + 1, 1);
        date.setHours(0, 0, 0, 0);

        var lastDay = new Date(date - 1)
        var lastTime = lastDay.valueOf();
        var now = Date.now();
        var gap = (lastTime - now) / 1000;
        var D = parseInt(gap / 86400);
        return D;
    },
    getYearLastDay() {
        var date = new Date();
        var thisYear = date.getFullYear();
        var lastDay = new Date(thisYear, 11, 31, 23, 59, 59);
        var lastTime = lastDay.valueOf();
        var now = Date.now();
        var gap = (lastTime - now) / 1000;
        var D = parseInt(gap / 86400);
        return D;
    }
};