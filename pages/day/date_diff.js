var date 	= new Date();
var year 	= date.getFullYear();
var month 	= date.getMonth();
var c_day 	= date.getDate();
var c_week 	= date.getDay();

module.exports = {
	weeklyDiff: function(time){
		var d = new Date(time);
		var week = d.getDay();
		var diff =  week - c_week;
		return diff >=0 ? diff : 7 + diff;
	},
	monthDiff: function(start, end){
		var d = new Date(start);
		var day = d.getDate();

		var lastDay = this.getMonthLastDays();
		if(day > c_day){
			return day + lastDay - c_day
		}else{
			return c_day - day;
		}
	},
	yearDiff: function(start, end){

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
    },
};