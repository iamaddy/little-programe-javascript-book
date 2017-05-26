module.exports = {
    categeryid: 7,
    name: 'RegExp',
    title: 'RegExp 对象',
    desc: 'RegExp 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。',
    syntax: 'new RegExp(pattern, attributes);',
    parameter: '参数 pattern 是一个字符串，指定了正则表达式的模式或其他正则表达式。参数 attributes 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。ECMAScript 标准化之前，不支持 m 属性。如果 pattern 是正则表达式，而不是字符串，则必须省略该参数。',
    returns: '一个新的 RegExp 对象，具有指定的模式和标志。如果参数 pattern 是正则表达式而不是字符串，那么 RegExp() 构造函数将用与指定的 RegExp 相同的模式和标志创建一个新的 RegExp 对象。如果不用 new 运算符，而将 RegExp() 作为函数调用，那么它的行为与用 new 运算符调用时一样，只是当 pattern 是正则表达式时，它只返回 pattern，而不再创建一个新的 RegExp 对象。',
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
        "name": "search()",
        "syntax": "stringObject.search(regexp)",
        "desc": "search()用于检索字符串中指定的子字符串或检索与正则表达式相匹配的子字符串。",
        "returns": "stringObject 中第一个与 regexp 相匹配的子串的起始位置。",
        "parameter": "该参数可以是需要在 stringObject 中检索的子串也可以是需要检索的 RegExp 对象。注释：要执行忽略大小写的检索请追加标志 i。",
        "title": "",
        "example": ""
    }, {
        "name": "match()",
        "syntax": "stringObject.match(searchvalue);stringObject.match(regexp)",
        "desc": "match()可在字符串内检索指定的值或找到一个或多个正则表达式的匹配。",
        "returns": "该方法类似 indexOf() 和 lastIndexOf()但是它返回指定的值而不是字符串的位置。",
        "parameter": "必需。规定要检索的字符串值。",
        "title": "必需。规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象则需要首先把它传递给 RegExp 构造函数将其转换为 RegExp 对象。",
        "example": ""
    }, {
        "name": "replace()",
        "syntax": "stringObject.replace(regexp/substrreplacement)",
        "desc": "replace()用于在字符串中用一些字符替换另一些字符或替换一个与正则表达式匹配的子串。",
        "returns": "一个新的字符串是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。",
        "parameter": "必需。规定子字符串或要替换的模式的 RegExp 对象。请注意如果该值是一个字符串则将它作为要检索的直接量文本模式而不是首先被转换为 RegExp 对象。",
        "title": "必需。一个字符串值。规定了替换文本或生成替换文本的函数。",
        "example": "位于匹配子串左侧的文本。"
    }, {
        "name": "split()",
        "syntax": "stringObject.split(separatorhowmany)",
        "desc": "split()用于把一个字符串分割成字符串数组。",
        "returns": "一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 stringObject 分割成子串创建的。返回的数组中的字串不包括 separator 自身。",
        "parameter": "必需。字符串或正则表达式从该参数指定的地方分割 stringObject。",
        "title": "可选。该参数可指定返回的数组的最大长度。如果设置了该参数返回的子串不会多于这个参数指定的数组。如果没有设置该参数整个字符串都会被分割不考虑它的长度。",
        "example": ""
    }]
}