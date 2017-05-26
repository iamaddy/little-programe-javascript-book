module.exports = {
    categeryid: 5,
    name: 'Number',
    title: 'Number 对象',
    desc: 'Number 对象是原始数值的包装对象。',
    syntax: 'var myNum=new Number(value);\nvar myNum=Number(value);',
    parameter: '参数 value 是要创建的 Number 对象的数值，或是要转换成数字的值。',
    returns: '当 Number() 和运算符 new 一起作为构造函数使用时，它返回一个新创建的 Number 对象。如果不用 new 运算符，把 Number() 作为一个函数来调用，它将把自己的参数转换成一个原始的数值，并且返回这个值（如果转换失败，则返回 NaN）。',
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
        "name": "NaN 属性",
        "syntax": "Number.NaN",
        "desc": "NaN 属性是代表非数字值的特殊值。该属性用于指示某个值不是数字。可以把 Number 对象设置为该值来指示其不是数字值。",
        "returns": "<span>提示：</span>请使用 isNaN() 全局函数来判断一个值是否是 NaN 值。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "NEGATIVE_INFINITY 属性",
        "syntax": "Number.NEGATIVE_INFINITY",
        "desc": "NEGATIVE_INFINITY 属性表示小于 Number.MIN_VALUE 的值。",
        "returns": "该值代表负无穷大。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "POSITIVE_INFINITY 属性",
        "syntax": "Number.POSITIVE_INFINITY",
        "desc": "POSITIVE_INFINITY 属性表示大于 Number.MAX_VALUE 的值。",
        "returns": "该值代表正无穷大。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "toString()",
        "syntax": "NumberObject.toString(radix)",
        "desc": "toString()可把一个 Number 对象转换为一个字符串并返回结果。",
        "returns": "数字的字符串表示。例如当 radix 为 2 时NumberObject 会被转换为二进制值表示的字符串。",
        "parameter": "可选。规定表示数字的基数使 2 ~ 36 之间的整数。若省略该参数则使用基数 10。但是要注意如果该参数是 10 以外的其他值则 ECMAScript 标准允许实现返回任意值。",
        "title": "",
        "example": ""
    }, {
        "name": "toLocaleString()",
        "syntax": "NumberObject.toLocaleString()",
        "desc": "toLocaleString()可把一个 Number 对象转换为本地格式的字符串。",
        "returns": "数字的字符串表示由实现决定根据本地规范进行格式化可能影响到小数点或千分位分隔符采用的标点符号。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "toFixed()",
        "syntax": "NumberObject.toFixed(num)",
        "desc": "toFixed()可把 Number 四舍五入为指定小数位数的数字。",
        "returns": "返回 NumberObject 的字符串表示不采用指数计数法小数点后有固定的 num 位数字。如果必要该数字会被舍入也可以用 0 补足以便它达到指定的长度。如果 num 大于 le+21则该方法只调用 NumberObject.toString()返回采用指数计数法表示的字符串。",
        "parameter": "必需。规定小数的位数是 0 ~ 20 之间的值包括 0 和 20有些实现可以支持更大的数值范围。如果省略了该参数将用 0 代替。",
        "title": "",
        "example": ""
    }, {
        "name": "toExponential()",
        "syntax": "NumberObject.toExponential(num)",
        "desc": "toExponential()可把对象的值转换成指数计数法。",
        "returns": "返回 NumberObject 的字符串表示采用指数计数法即小数点之前有一位数字小数点之后有 num 位数字。该数字的小数部分将被舍入必要时用 0 补足以便它达到指定的长度。",
        "parameter": "必需。规定指数计数法中的小数位数是 0 ~ 20 之间的值包括 0 和 20有些实现可以支持更大的数值范围。如果省略了该参数将使用尽可能多的数字。",
        "title": "",
        "example": ""
    }, {
        "name": "toPrecision()",
        "syntax": "NumberObject.toPrecision(num)",
        "desc": "toPrecision()可在对象的值超出指定位数时将其转换为指数计数法。",
        "returns": "返回 NumberObject 的字符串表示包含 num 个有效数字。如果 num 足够大能够包括 NumberObject 整数部分的所有数字那么返回的字符串将采用定点计数法。否则采用指数计数法即小数点前有一位数字小数点后有 num-1 位数字。必要时该数字会被舍入或用 0 补足。",
        "parameter": "必需。规定必须被转换为指数计数法的最小位数。该参数是 1 ~ 21 之间（且包括 1 和 21）的值。有效实现允许有选择地支持更大或更小的 num。如果省略了该参数则调用方法 toString()而不是把数字转换成十进制的值。",
        "title": "",
        "example": ""
    }, {
        "name": "valueOf()",
        "syntax": "NumberObject.valueOf()",
        "desc": "valueOf()可以字符串返回数字。",
        "returns": "字符串的输出通常等于该数字。",
        "parameter": "",
        "title": "",
        "example": ""
    }]
}