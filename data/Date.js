module.exports = {
	categeryid: 3,
	name: 'Date',
	title: 'Date 对象',
	desc: 'Date 对象用于处理日期和时间。注释：Date 对象会自动把当前日期和时间保存为其初始值。',
	syntax: 'var myDate=new Date()',
	parameter: '',
	returns: '',
	property: [{
		name: 'constructor',
		title: '',
		desc: 'constructor 属性返回对创建此对象的 Date 函数的引用。',
		syntax: 'object.constructor'
	}, {
		name: 'prototype',
		title: '',
		desc: '属性使您有能力向对象添加属性和方法。',
		syntax: 'object.prototype.name=value'
	}],
	methods: [{
		name: 'Date()',
		title: '',
		desc: 'Date()可返回当天的日期和时间。',
		syntax: 'Date()',
		parameter: '',
		returns: '',
		example: ''
	}, {
		name: 'getDate()',
		title: '',
		desc: 'getDate()可返回月份的某一天。注释：该方法总是结合一个 Date 对象来使用。',
		syntax: 'dateObject.getDate()',
		parameter: '',
		returns: 'dateObject 所指的月份中的某一天，使用本地时间。返回值是 1 ~ 31 之间的一个整数。',
		example: ''
	}, {
		name: 'getDay()',
		title: '',
		desc: 'getDay()可返回表示星期的某一天的数字。',
		syntax: 'dateObject.getDay()',
		parameter: '',
		returns: 'dateObject 所指的星期中的某一天，使用本地时间。返回值是 0（周日） 到 6（周六） 之间的一个整数。',
		example: ''
	}, {
		name: 'getMonth()',
		title: '',
		desc: 'getMonth()可返回表示月份的数字。',
		syntax: 'dateObject.getMonth()',
		parameter: '',
		returns: 'dateObject 的月份字段，使用本地时间。返回值是 0（一月） 到 11（十二月） 之间的一个整数。',
		example: ''
	}, {
		name: 'getFullYear()',
		title: '',
		desc: 'getFullYear()可返回一个表示年份的 4 位数字。',
		syntax: 'dateObject.getFullYear()',
		parameter: '',
		returns: '当 dateObject 用本地时间表示时返回的年份。返回值是一个四位数，表示包括世纪值在内的完整年份，而不是两位数的缩写形式。',
		example: ''
	}, {
		name: 'getYear()',
		title: '',
		desc: 'getYear()可返回表示年份的两位或四位的数字。从 ECMAScript v3 开始，JavaScript 的实现就不再使用该方法，而使用 getFullYear()取而代之！',
		syntax: 'dateObject.getYear()',
		parameter: '',
		returns: '',
		example: ''
	}, {
		name: 'getHours()',
		title: '',
		desc: 'getHours()可返回时间的小时字段。由 getHours() 返回的值是一个两位的数字。不过返回值不总是两位的，如果该值小于 10，则仅返回一位数字。',
		syntax: 'dateObject.getHours()',
		parameter: '',
		returns: 'dateObject 的小时字段，以本地时间显示。返回值是 0 （午夜） 到 23 （晚上 11 点）之间的一个整数。',
		example: ''
	}, {
		name: 'getMinutes()',
		title: '',
		desc: 'getMinutes()可返回时间的分钟字段。',
		syntax: 'dateObject.getMinutes()',
		parameter: '',
		returns: 'dateObject 的分钟字段，以本地时间显示。返回值是 0 ~ 59 之间的一个整数。',
		example: ''
	}, {
		name: 'getSeconds()',
		title: '',
		desc: 'getSeconds()可返回时间的秒。',
		syntax: 'dateObject.getSeconds()',
		parameter: '',
		returns: 'dateObject 的分钟字段，以本地时间显示。返回值是 0 ~ 59 之间的一个整数。',
		example: ''
	}, {
		name: 'getMinutes()',
		title: '',
		desc: 'getMinutes()可返回时间的分钟字段。',
		syntax: 'dateObject.getMinutes()',
		parameter: '',
		returns: 'dateObject 的分钟字段，以本地时间显示。返回值是 0 ~ 59 之间的一个整数。',
		example: ''
	}, {
		name: 'getMilliseconds()',
		title: '',
		desc: 'getMilliseconds()可返回时间的毫秒。',
		syntax: 'dateObject.getMilliseconds()',
		parameter: '',
		returns: 'dateObject 的毫秒字段，以本地时间显示。返回值是 0 ~ 999 之间的一个整数。',
		example: ''
	}, {
		name: 'getTime()',
		title: '',
		desc: 'getTime()可返回距 1970 年 1 月 1 日之间的毫秒数。',
		syntax: 'dateObject.getTime()',
		parameter: '',
		returns: 'dateObject 指定的日期和时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数。',
		example: ''
	}, {
		name: 'getTimezoneOffset()',
		title: '',
		desc: 'getTimezoneOffset()可返回格林威治时间和本地时间之间的时差，以分钟为单位。',
		syntax: 'dateObject.getTimezoneOffset()',
		parameter: '',
		returns: '本地时间与 GMT 时间之间的时间差，以分钟为单位。',
		example: ''
	}, {
		name: 'getUTCDate()',
		title: '',
		desc: 'getUTCDate()可根据世界时返回一个月 (UTC) 中的某一天。',
		syntax: 'dateObject.getUTCDate()',
		parameter: '',
		returns: 'dateObject 用世界时表示时，返回该月中的某一天 （是 1 ~ 31 中的一个值）。',
		example: ''
	}, {
		name: 'getUTCDay()',
		title: '',
		desc: 'getUTCDay()根据世界时返回表示星期的一天的一个数字。',
		syntax: 'dateObject.getUTCDay()',
		parameter: '',
		returns: 'dateObject 用世界时表示时，返回该星期中的某一天 ，该值是 0（星期天） ~ 6（星期六） 中的一个值。',
		example: ''
	}, {
		name: 'getUTCMonth()',
		title: '',
		desc: 'getUTCMonth()可返回一个表示月份的数字（按照世界时 UTC）。',
		syntax: 'dateObject.getUTCMonth()',
		parameter: '',
		returns: '返回 dateObject 用世界时表示时的月份，该值是 0（一月） ~ 11（十二月） 之间中的一个整数。需要注意的是，Date 对象使用 1 来表示月的第一天，而不是像月份字段那样使用 0 来代表一年的第一个月。',
		example: ''
	}, {
		name: 'getUTCFullYear()',
		title: '',
		desc: 'getUTCFullYear()可返回根据世界时 (UTC) 表示的年份的四位数字。',
		syntax: 'dateObject.getUTCFullYear()',
		parameter: '',
		returns: '返回 dateObject 用世界时表示时的年份，该值是一个四位的整数，而不是两位数的缩写。',
		example: ''
	}, {
		name: 'getUTCHours()',
		title: '',
		desc: 'getUTCHours()可根据世界时 (UTC) 返回时间的小时。',
		syntax: 'dateObject.getUTCHours()',
		parameter: '',
		returns: '返回 dateObject 用世界时表示时的小时字段，该值是一个 0（午夜） ~ 23（晚上 11 点） 之间的整数。',
		example: ''
	}, {
		"name": "JavaScript getUTCMinutes()",
		"syntax": "dateObject.getUTCMinutes()",
		"desc": "getUTCMinutes()可根据世界时 (UTC) 返回时间的分钟字段。",
		"returns": "返回 dateObject 用世界时表示时的分钟字段该值是一个 0 ~ 59 之间的整数。",
		"parameter": "",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript getUTCSeconds()",
		"syntax": "dateObject.getUTCSeconds()",
		"desc": "getUTCSeconds()可根据世界时返回时间的秒。",
		"returns": "当 dateObject 用世界时表示时返回它的秒字段该值是一个 0 ~ 59 之间的整数。",
		"parameter": "",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript getUTCMilliseconds()",
		"syntax": "dateObject.getUTCMilliseconds()",
		"desc": "getUTCMilliseconds()可根据世界时 (UTC) 返回时间的毫秒。",
		"returns": "当 dateObject 用世界时表示时返回它的毫秒字段该值是一个 0 ~ 999 之间的整数。",
		"parameter": "",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript parse()",
		"syntax": "Date.parse(datestring)",
		"desc": "parse()可解析一个日期时间字符串并返回 1970/1/1 午夜距离该日期时间的毫秒数。",
		"returns": "指定的日期和时间据 1970/1/1 午夜（GMT 时间）之间的毫秒数。",
		"parameter": "必需。表示日期和时间的字符串。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setDate()",
		"syntax": "dateObject.setDate(day)",
		"desc": "setDate()用于设置一个月的某一天。",
		"returns": "调整过的日期的毫秒表示。在 ECMAScript 标准化之前该方法什么都不返回。",
		"parameter": "必需。表示一个月中的一天的一个数值（1 ~ 31）。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setMonth()",
		"syntax": "dateObject.setMonth(monthday)",
		"desc": "setMonth()用于设置月份。",
		"returns": "调整过的日期的毫秒表示。在 ECMAScript 标准化之前该方法什么都不返回。",
		"parameter": "必需。一个表示月份的数值该值介于 0（一月） ~ 11（十二月） 之间。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setFullYear()",
		"syntax": "dateObject.setFullYear(yearmonthday)",
		"desc": "setFullYear()用于设置年份。",
		"returns": "返回调整过的日期的毫秒表示。",
		"parameter": "必需。表示年份的四位整数。用本地时间表示。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setYear()",
		"syntax": "dateObject.setYear(year)",
		"desc": "setYear()用于设置年份。",
		"returns": "调整过的日期的毫秒表示。在 ECMAScript 标准化之前该方法什么都不返回。",
		"parameter": "必需。表示年份的两位或四位数字。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setHours()",
		"syntax": "dateObject.setHours(hourminsecmillisec)",
		"desc": "setHours()用于设置指定的时间的小时字段。",
		"returns": "调整过的日期的毫秒表示。在 ECMAScript 标准化之前该方法什么都不返回。",
		"parameter": "必需。表示小时的数值介于 0（午夜） ~ 23（晚上11点） 之间以本地时间计（下同）。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setMinutes()",
		"syntax": "dateObject.setMinutes(minsecmillisec)",
		"desc": "setMinutes()用于设置指定时间的分钟字段。",
		"returns": "调整过的日期的毫秒表示。在 ECMAScript 标准化之前该方法什么都不返回。",
		"parameter": "必需。表示分钟的数值介于 0 ~ 59 之间以本地时间计（下同）。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setSeconds()",
		"syntax": "dateObject.setSeconds(secmillisec)",
		"desc": "The setSeconds() method is used to set the seconds of a specified time.",
		"returns": "调整过的日期的毫秒表示。在 ECMAScript 标准化之前该方法什么都不返回。",
		"parameter": "必需。表示秒的数值该值是介于 0 ~ 59 之间的整数。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setMilliseconds()",
		"syntax": "dateObject.setMilliseconds(millisec)",
		"desc": "setMilliseconds()用于设置指定时间的毫秒字段。",
		"returns": "调整过的日期的毫秒表示。",
		"parameter": "必需。用于设置 dateObject 毫秒字段该参数是介于 0 ~ 999 之间的整数。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setTime()",
		"syntax": "dateObject.setTime(millisec)",
		"desc": "setTime()以毫秒设置 Date 对象。",
		"returns": "返回参数 millisec。在 ECMAScript 标准化之前该方法不返回值。",
		"parameter": "必需。要设置的日期和时间据 GMT 时间 1970 年 1 月 1 日午夜之间的毫秒数。这种类型的毫秒值可以传递给 Date() 构造函数可以通过调用 Date.UTC() 和 Date.parse()获得该值。以毫秒形式表示日期可以使它独立于时区。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setUTCDate()",
		"syntax": "dateObject.setUTCDate(day)",
		"desc": "setUTCDate()用于根据世界时 (UTC) 设置一个月中的某一天。",
		"returns": "调整过的日期的毫秒表示。",
		"parameter": "必需。要给 dateObject 设置的一个月中的某一天用世界时表示。该参数是 1 ~ 31 之间的整数。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setUTCMonth()",
		"syntax": "dateObject.setUTCMonth(monthday)",
		"desc": "setUTCMonth()用于根据世界时 (UTC) 来设置月份。",
		"returns": "调整过的日期的毫秒表示。",
		"parameter": "必需。要给 dateObject 设置的月份字段的值用世界时表示。该参数是 0（一月） ~ 11（十二月） 之间的整数。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setUTCFullYear()",
		"syntax": "dateObject.setUTCFullYear(yearmonthday)",
		"desc": "setUTCFullYear()用于根据世界时 (UTC) 设置年份。",
		"returns": "调整过的日期的毫秒表示。",
		"parameter": "必需。要给 dateObject 设置的年份字段的值。该参数应该是含有世纪值的完整年份如 1999而不只是缩写的年份值比如 99。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setUTCHours()",
		"syntax": "dateObject.setUTCHours(hourminsecmillisec)",
		"desc": "setUTCHours()用于根据世界时 (UTC) 设置小时（0 - 23）。",
		"returns": "如果没有规定 min sec 以及 millisec 参数则使用从 getUTCMinutes getUTCSeconds 以及 getUTCMilliseconds返回的值。",
		"parameter": "必需。要给 dateObject 设置的小时字段的值。该参数是 0 ~ 23 之间的整数。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setUTCMinutes()",
		"syntax": "dateObject.setUTCMinutes(minsecmillisec)",
		"desc": "setUTCMinutes()用于根据世界时 (UTC) 来设置指定时间的分钟。",
		"returns": "调整过的日期的毫秒表示。",
		"parameter": "必需。要给 dateObject 设置的分钟字段的值用世界时表示。该参数应该是 0 ~ 59 之间的整数。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setUTCSeconds()",
		"syntax": "dateObject.setUTCSeconds(secmillisec)",
		"desc": "setUTCSeconds()用于根据世界时 (UTC) 设置指定时间的秒。",
		"returns": "调整过的日期的毫秒表示。",
		"parameter": "必需。要给 dateObject 设置的秒字段的值。使用世界时表示。该参数是 0 ~ 59 之间的整数。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript setUTCMilliseconds()",
		"syntax": "dateObject.setUTCMilliseconds(millisec)",
		"desc": "setUTCMilliseconds()用于根据世界时 (UTC) 设置指定时间的毫秒。",
		"returns": "调整过的日期的毫秒表示。",
		"parameter": "必需。要给 dateObject 设置的毫秒字段的值。使用世界时表示。该参数是 0 ~ 999 之间的整数。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript toTimeString()",
		"syntax": "dateObject.toTimeString()",
		"desc": "toTimeString()可把 Date 对象的时间部分转换为字符串并返回结果。",
		"returns": "dateObject 的时间部分的字符串表示由实现决定使用本地时间表示。",
		"parameter": "",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript toDateString()",
		"syntax": "dateObject.toDateString()",
		"desc": "toDateString()可把 Date 对象的日期部分转换为字符串并返回结果。",
		"returns": "dateObject 的日期部分的字符串表示由实现决定使用本地时间表示。",
		"parameter": "",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript toGMTString()",
		"syntax": "dateObject.toGMTString()",
		"desc": "toGMTString()可根据格林威治时间 (GMT) 把 Date 对象转换为字符串并返回结果。",
		"returns": "dateObject 的字符串表示。此日期会在转换为字符串之前由本地时区转换为 GMT 时区。",
		"parameter": "",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript toUTCString()",
		"syntax": "dateObject.toUTCString()",
		"desc": "toUTCString()可根据世界时 (UTC) 把 Date 对象转换为字符串并返回结果。",
		"returns": "dateObject 的字符串表示用世界时表示。",
		"parameter": "",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript toLocaleString()",
		"syntax": "dateObject.toLocaleString()",
		"desc": "toLocaleString()可根据本地时间把 Date 对象转换为字符串并返回结果。",
		"returns": "dateObject 的字符串表示以本地时间区表示并根据本地规则格式化。",
		"parameter": "",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript toLocaleTimeString()",
		"syntax": "dateObject.toLocaleTimeString()",
		"desc": "toLocaleTimeString()可根据本地时间把 Date 对象的时间部分转换为字符串并返回结果。",
		"returns": "dateObject 的时间部分的字符串表示以本地时间区表示并根据本地规则格式化。",
		"parameter": "",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript toLocaleDateString()",
		"syntax": "dateObject.toLocaleDateString()",
		"desc": "toLocaleDateString()可根据本地时间把 Date 对象的日期部分转换为字符串并返回结果。",
		"returns": "dateObject 的日期部分的字符串表示以本地时间区表示并根据本地规则格式化。",
		"parameter": "",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript UTC()",
		"syntax": "Date.UTC(yearmonthdayhoursminutessecondsms)",
		"desc": "UTC()可根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。",
		"returns": "返回指定的时间距 GMT 时间 1970 年 1 月 1 日午夜的毫秒数。",
		"parameter": "必需。表示年份的四位数字。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript toFixed()",
		"syntax": "NumberObject.toFixed(num)",
		"desc": "toFixed()可把 Number 四舍五入为指定小数位数的数字。",
		"returns": "返回 NumberObject 的字符串表示不采用指数计数法小数点后有固定的 num 位数字。如果必要该数字会被舍入也可以用 0 补足以便它达到指定的长度。如果 num 大于 le+21则该方法只调用 NumberObject.toString()返回采用指数计数法表示的字符串。",
		"parameter": "必需。规定小数的位数是 0 ~ 20 之间的值包括 0 和 20有些实现可以支持更大的数值范围。如果省略了该参数将用 0 代替。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript toExponential()",
		"syntax": "NumberObject.toExponential(num)",
		"desc": "toExponential()可把对象的值转换成指数计数法。",
		"returns": "返回 NumberObject 的字符串表示采用指数计数法即小数点之前有一位数字小数点之后有 num 位数字。该数字的小数部分将被舍入必要时用 0 补足以便它达到指定的长度。",
		"parameter": "必需。规定指数计数法中的小数位数是 0 ~ 20 之间的值包括 0 和 20有些实现可以支持更大的数值范围。如果省略了该参数将使用尽可能多的数字。",
		"title": "",
		"example": ""
	}, {
		"name": "JavaScript toPrecision()",
		"syntax": "NumberObject.toPrecision(num)",
		"desc": "toPrecision()可在对象的值超出指定位数时将其转换为指数计数法。",
		"returns": "返回 NumberObject 的字符串表示包含 num 个有效数字。如果 num 足够大能够包括 NumberObject 整数部分的所有数字那么返回的字符串将采用定点计数法。否则采用指数计数法即小数点前有一位数字小数点后有 num-1 位数字。必要时该数字会被舍入或用 0 补足。",
		"parameter": "必需。规定必须被转换为指数计数法的最小位数。该参数是 1 ~ 21 之间（且包括 1 和 21）的值。有效实现允许有选择地支持更大或更小的 num。如果省略了该参数则调用方法 toString()而不是把数字转换成十进制的值。",
		"title": "",
		"example": ""
	}]
}