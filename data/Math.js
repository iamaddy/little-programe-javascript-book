module.exports = {
    categeryid: 4,
    name: 'Math',
    title: 'Math 对象',
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
        "name": "abs()",
        "syntax": "Math.abs(x)",
        "desc": "abs()可返回数的绝对值。",
        "returns": "x 的绝对值。",
        "parameter": "必需。必须是一个数值。",
        "title": "",
        "example": ""
    }, {
        "name": "acos()",
        "syntax": "Math.acos(x)",
        "desc": "acos()可返回一个数的反余弦。",
        "returns": "x 的反余弦值。返回的值是 0 到 PI 之间的弧度值。",
        "parameter": "必需。必须是 -1.0 ~ 1.0 之间的数。",
        "title": "",
        "example": ""
    }, {
        "name": "asin()",
        "syntax": "Math.asin(x)",
        "desc": "asin()可返回一个数的反正弦值。",
        "returns": "x 的反正弦值。返回的值是 -PI/2 到 PI/2 之间的弧度值。",
        "parameter": "必需。必须是一个数值该值介于 -1.0 ~ 1.0 之间。",
        "title": "",
        "example": ""
    }, {
        "name": "atan()",
        "syntax": "Math.atan(x)",
        "desc": "atan()可返回数字的反正切值。",
        "returns": "x 的反正切值。返回的值是 -PI/2 到 PI/2 之间的弧度值。",
        "parameter": "必需。必须是一个数值。",
        "title": "",
        "example": ""
    }, {
        "name": "atan2()",
        "syntax": "Math.atan2(yx)",
        "desc": "atan2()可返回从 x 轴到点 (xy) 之间的角度。",
        "returns": "-PI 到 PI 之间的值是从 X 轴正向逆时针旋转到点 (xy) 时经过的角度。",
        "parameter": "必需。指定点的 X 坐标。",
        "title": "",
        "example": ""
    }, {
        "name": "ceil()",
        "syntax": "Math.ceil(x)",
        "desc": "ceil()可对一个数进行上舍入。",
        "returns": "大于等于 x并且与它最接近的整数。",
        "parameter": "必需。必须是一个数值。",
        "title": "",
        "example": ""
    }, {
        "name": "cos()",
        "syntax": "Math.cos(x)",
        "desc": "cos()可返回一个数字的余弦值。",
        "returns": "x 的余弦值。返回的是 -1.0 到 1.0 之间的数。",
        "parameter": "必需。必须是一个数值。",
        "title": "",
        "example": ""
    }, {
        "name": "exp()",
        "syntax": "Math.exp(x)",
        "desc": "exp()可返回 e 的 x 次幂的值。",
        "returns": "返回 e 的 x 次幂。e 代表自然对数的底数其值近似为 2.71828。",
        "parameter": "必需。任意数值或表达式。被用作指数。",
        "title": "",
        "example": ""
    }, {
        "name": "floor()",
        "syntax": "Math.floor(x)",
        "desc": "floor()可对一个数进行下舍入。",
        "returns": "小于等于 x且与 x 最接近的整数。",
        "parameter": "必需。任意数值或表达式。",
        "title": "",
        "example": ""
    }, {
        "name": "log()",
        "syntax": "Math.log(x)",
        "desc": "log()可返回一个数的自然对数。",
        "returns": "x 的自然对数。",
        "parameter": "必需。任意数值或表达式。",
        "title": "",
        "example": ""
    }, {
        "name": "max()",
        "syntax": "Math.max(x...)",
        "desc": "max()可返回两个指定的数中带有较大的值的那个数。",
        "returns": "参数中最大的值。如果没有参数则返回 -Infinity。如果有某个参数为 NaN或是不能转换成数字的非数字值则返回 NaN。",
        "parameter": "0 或多个值。在 ECMASCript v3 之前该方法只有两个参数。",
        "title": "",
        "example": ""
    }, {
        "name": "min()",
        "syntax": "Math.min(xy)",
        "desc": "min()可返回指定的数字中带有最低值的数字。",
        "returns": "参数中最小的值。如果没有参数则返回 Infinity。如果有某个参数为 NaN或是不能转换成数字的非数字值则返回 NaN。",
        "parameter": "0 或多个值。在 ECMASCript v3 之前该方法只有两个参数。",
        "title": "",
        "example": ""
    }, {
        "name": "pow()",
        "syntax": "Math.pow(xy)",
        "desc": "pow()可返回 x 的 y 次幂的值。",
        "returns": "x 的 y 次幂。",
        "parameter": "必需。底数。必须是数字。",
        "title": "",
        "example": ""
    }, {
        "name": "random()",
        "syntax": "Math.random()",
        "desc": "random()可返回介于 0 ~ 1 之间的一个随机数。",
        "returns": "0.0 ~ 1.0 之间的一个伪随机数。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "round()",
        "syntax": "Math.round(x)",
        "desc": "round()可把一个数字舍入为最接近的整数。",
        "returns": "与 x 最接近的整数。",
        "parameter": "必需。必须是数字。",
        "title": "",
        "example": ""
    }, {
        "name": "sin()",
        "syntax": "Math.sin(x)",
        "desc": "sin()可返回一个数字的正弦。",
        "returns": "参数 x 的正弦值。返回值在 -1.0 到 1.0 之间。",
        "parameter": "必需。一个以弧度表示的角。将角度乘以 0.017453293 （2PI/360）即可转换为弧度。",
        "title": "",
        "example": ""
    }, {
        "name": "sqrt()",
        "syntax": "Math.sqrt(x)",
        "desc": "sqrt()可返回一个数的平方根。",
        "returns": "参数 x 的平方根。如果 x 小于 0则返回 NaN。",
        "parameter": "必需。必须是大于等于 0 的数。",
        "title": "",
        "example": ""
    }, {
        "name": "tan()",
        "syntax": "Math.tan(x)",
        "desc": "tan()可返回一个表示某个角的正切的数字。",
        "returns": "参数 x 的正切值。",
        "parameter": "必需。一个以弧度表示的角。将角度乘以 0.017453293 （2PI/360）即可转换为弧度。",
        "title": "",
        "example": ""
    }]
}