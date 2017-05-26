module.exports = {
    categeryid: 8,
    name: 'Global',
    title: 'Global 对象',
    desc: '全局属性和函数可用于所有内建的 JavaScript 对象。',
    syntax: '',
    parameter: '',
    returns: '',
    property: [{
        "name": "Infinity 属性",
        "syntax": '',
        "desc": "Infinity 属性用于存放表示正无穷大的数值。",
        "returns": "无法使用 for/in 循环来枚举 Infinity 属性也不能用 delete 运算符来删除它。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "java 属性",
        "syntax": "java",
        "desc": "表示 java.* 包层级的 JavaPackage。",
        "returns": "在包含了 LiveConnect 或其他用于脚本化 Java 的技术的 实现中全局 java 属性就是一个 JavaPackage 对象它表示 java.* 包层级。这个属性的存在意味着像 java.util 这样的一个 表示式引用的是 java.util 包。对于不符合 java.* 层级的 Java 包请参阅全局 Packages 属性。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "NaN 属性",
        "syntax": "NaN",
        "desc": "NaN 属性用于引用特殊的非数字值。",
        "returns": "无法使用 for/in 循环来枚举 NaN 属性也不能用 delete 运算符来删除它。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "Packages 属性",
        "syntax": "Packages",
        "desc": "根 JavaPackage。",
        "returns": "在包含了 LiveConnect 或其他用于脚本化 Java 的技术的 实现中全局 Packages 属性就是一个 JavaPackage 对象其属性是 Java 解释器所知道的所有包的根。例如Packages.javax.swing 引用的是 Java 包 javax.swing。全局属性 java 是 Packages.java 的简写。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "undefined 属性",
        "syntax": "undefined",
        "desc": "undefined  属性用于存放 的 undefined 值。",
        "returns": "无法使用 for/in 循环来枚举 undefined 属性也不能用 delete 运算符来删除它。",
        "parameter": "",
        "title": "",
        "example": ""
    }],
    methods: [{
        "name": "decodeURI()",
        "syntax": "decodeURI(URIstring)",
        "desc": "decodeURI()可对 encodeURI()编码过的 URI 进行解码。",
        "returns": "URIstring 的副本其中的十六进制转义序列将被它们表示的字符替换。",
        "parameter": "必需。一个字符串含有要解码的 URI 或其他要解码的文本。",
        "title": "",
        "example": ""
    }, {
        "name": "decodeURIComponent()",
        "syntax": "decodeURIComponent(URIstring)",
        "desc": "decodeURIComponent()可对 encodeURIComponent()编码的 URI 进行解码。",
        "returns": "URIstring 的副本其中的十六进制转义序列将被它们表示的字符替换。",
        "parameter": "必需。一个字符串含有编码 URI 组件或其他要解码的文本。",
        "title": "",
        "example": ""
    }, {
        "name": "encodeURI()",
        "syntax": "encodeURI(URIstring)",
        "desc": "encodeURI()可把字符串作为 URI 进行编码。",
        "returns": "URIstring 的副本其中的某些字符将被十六进制的转义序列进行替换。",
        "parameter": "必需。一个字符串含有 URI 或其他要编码的文本。",
        "title": "",
        "example": ""
    }, {
        "name": "encodeURIComponent()",
        "syntax": "encodeURIComponent(URIstring)",
        "desc": "encodeURIComponent()可把字符串作为 URI 组件进行编码。",
        "returns": "URIstring 的副本其中的某些字符将被十六进制的转义序列进行替换。",
        "parameter": "必需。一个字符串含有 URI 组件或其他要编码的文本。",
        "title": "",
        "example": ""
    }, {
        "name": "escape()",
        "syntax": "escape(string)",
        "desc": "escape()可对字符串进行编码这样就可以在所有的计算机上读取该字符串。",
        "returns": "已编码的 string 的副本。其中某些字符被替换成了十六进制的转义序列。",
        "parameter": "必需。要被转义或编码的字符串。",
        "title": "",
        "example": ""
    }, {
        "name": "eval()",
        "syntax": "eval(string)",
        "desc": "eval()可计算某个字符串并执行其中的的 代码。",
        "returns": "通过计算 string 得到的值（如果有的话）。",
        "parameter": "必需。要计算的字符串其中含有要计算的 表达式或要执行的语句。",
        "title": "",
        "example": ""
    }, {
        "name": "getClass()",
        "syntax": "getClass(javaobj)",
        "desc": "getClass()可返回一个 JavaObject 的 JavaClass。",
        "returns": "javaobj 的 JavaClass 对象。",
        "parameter": "一个 JavaObject 对象。",
        "title": "",
        "example": ""
    }, {
        "name": "isFinite()",
        "syntax": "isFinite(number)",
        "desc": "isFinite()用于检查其参数是否是无穷大。",
        "returns": "如果 number 是有限数字（或可转换为有限数字）那么返回 true。否则如果 number 是 NaN（非数字）或者是正、负无穷大的数则返回 false。",
        "parameter": "必需。要检测的数字。",
        "title": "",
        "example": ""
    }, {
        "name": "isNaN()",
        "syntax": "isNaN(x)",
        "desc": "isNaN()用于检查其参数是否是非数字值。",
        "returns": "如果 x 是特殊的非数字值 NaN（或者能被转换为这样的值）返回的值就是 true。如果 x 是其他值则返回 false。",
        "parameter": "必需。要检测的值。",
        "title": "",
        "example": ""
    }, {
        "name": "Number()",
        "syntax": "Number(object)",
        "desc": "Number()把对象的值转换为数字。",
        "returns": "如果参数是 Date 对象Number() 返回从 1970 年 1 月 1 日至今的毫秒数。",
        "parameter": "必需。对象。",
        "title": "",
        "example": ""
    }, {
        "name": "parseFloat()",
        "syntax": "parseFloat(string)",
        "desc": "parseFloat()可解析一个字符串并返回一个浮点数。",
        "returns": "该函数指定字符串中的首个字符是否是数字。如果是则对字符串进行解析直到到达数字的末端为止然后以数字返回该数字而不是作为字符串。",
        "parameter": "必需。要被解析的字符串。",
        "title": "",
        "example": ""
    }, {
        "name": "parseInt()",
        "syntax": "parseInt(string radix)",
        "desc": "parseInt()可解析一个字符串并返回一个整数。",
        "returns": "返回解析后的数字。",
        "parameter": "必需。要被解析的字符串。",
        "title": "可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。如果省略该参数或其值为 0则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头将以 16 为基数。如果该参数小于 2 或者大于 36则 parseInt() 将返回 NaN。",
        "example": ""
    }, {
        "name": "unescape()",
        "syntax": "unescape(string)",
        "desc": "unescape()可对通过 escape() 编码的字符串进行解码。",
        "returns": "string 被解码后的一个副本。",
        "parameter": "必需。要解码或反转义的字符串。",
        "title": "",
        "example": ""
    }]
}