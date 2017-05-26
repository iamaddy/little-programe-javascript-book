module.exports = {
	categeryid: 2,
	name: 'Boolean',
	title: 'Boolean 对象',
	desc: 'Boolean 对象表示两个值："true" 或 "false"。',
	syntax: 'new Boolean(value);	//构造函数\nBoolean(value);		//转换函数',
	parameter: '参数 value 由布尔对象存放的值或者要转换成布尔值的值。',
	returns: '当作为一个构造函数（带有运算符 new）调用时，Boolean() 将把它的参数转换成一个布尔值，并且返回一个包含该值的 Boolean 对象。如果作为一个函数（不带有运算符 new）调用时，Boolean() 只将把它的参数转换成一个原始的布尔值，并且返回这个值。注释：如果省略 value 参数，或者设置为 0、-0、null、""、false、undefined 或 NaN，则该对象设置为 false。否则设置为 true（即使 value 参数是字符串 "false"）。',
	property: [{
		name: 'constructor',
		title: '',
		desc: 'constructor 属性返回对创建此对象的 Boolean 函数的引用。',
		syntax: 'object.constructor'
	}, {
		name: 'prototype',
		title: '',
		desc: '属性使您有能力向对象添加属性和方法。',
		syntax: 'object.prototype.name=value'
	}],
	methods: [{
		name: 'toString()',
		title: '',
		desc: 'toString()可把一个逻辑值转换为字符串，并返回结果。注释：在 Boolean 对象被用于字符串环境中时，此方法会被自动调用。',
		syntax: 'booleanObject.toString()',
		parameter: '',
		returns: '根据原始布尔值或者 booleanObject 对象的值返回字符串 "true" 或 "false"。',
		example: ''
	},{
		name: 'valueOf()',
		title: '',
		desc: 'valueOf()可返回 Boolean 对象的原始值。',
		syntax: 'booleanObject.valueOf()',
		parameter: '',
		returns: 'booleanObject 的原始布尔值。',
		example: ''
	}] 
}