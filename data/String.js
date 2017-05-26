module.exports = {
    categeryid: 6,
    name: 'String',
    title: 'String 对象',
    desc: 'String 对象用于处理文本（字符串）',
    syntax: 'new String(s);\nString(s);',
    parameter: '参数 s 是要存储在 String 对象中或转换成原始字符串的值。',
    returns: '当 String() 和运算符 new 一起作为构造函数使用时，它返回一个新创建的 String 对象，存放的是字符串 s 或 s 的字符串表示。当不用 new 运算符调用 String() 时，它只把 s 转换成原始的字符串，并返回转换后的值。',
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
    }, {
        name: 'length',
        title: '',
        desc: '属性可返回字符串中的字符数目。',
        syntax: 'stringObject.length'
    }],
    methods: [{
        "name": "charAt()",
        "syntax": "stringObject.charAt(index)",
        "desc": "charAt()可返回指定位置的字符。",
        "returns": "请注意并没有一种有别于字符串类型的字符数据类型所以返回的字符是长度为 1 的字符串。",
        "parameter": "必需。表示字符串中某个位置的数字即字符在字符串中的下标。",
        "title": "",
        "example": ""
    }, {
        "name": "charCodeAt()",
        "syntax": "stringObject.charCodeAt(index)",
        "desc": "charCodeAt()可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。",
        "returns": "方法 charCodeAt() 与 charAt()执行的操作相似只不过前者返回的是位于指定位置的字符的编码而后者返回的是字符子串。",
        "parameter": "必需。表示字符串中某个位置的数字即字符在字符串中的下标。",
        "title": "",
        "example": ""
    }, {
        "name": "indexOf()",
        "syntax": "stringObject.indexOf(searchvaluefromindex)",
        "desc": "indexOf()可返回某个指定的字符串值在字符串中首次出现的位置。",
        "returns": "该方法将从头到尾地检索字符串 stringObject看它是否含有子串 searchvalue。开始检索的位置在字符串的 fromindex 处或字符串的开头（没有指定 fromindex 时）。如果找到一个 searchvalue则返回 searchvalue 的第一次出现的位置。stringObject 中的字符位置是从 0 开始的。",
        "parameter": "必需。规定需检索的字符串值。",
        "title": "可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数则将从字符串的首字符开始检索。",
        "example": ""
    }, {
        "name": "lastIndexOf()",
        "syntax": "stringObject.lastIndexOf(searchvaluefromindex)",
        "desc": "lastIndexOf()可返回一个指定的字符串值最后出现的位置在一个字符串中的指定位置从后向前搜索。",
        "returns": "如果在 stringObject 中的 fromindex 位置之前存在 searchvalue则返回的是出现的最后一个 searchvalue 的位置。",
        "parameter": "必需。规定需检索的字符串值。",
        "title": "可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数则将从字符串的最后一个字符处开始检索。",
        "example": ""
    }, {
        "name": "localeCompare()",
        "syntax": "stringObject.localeCompare(target)",
        "desc": "用本地特定的顺序来比较两个字符串。",
        "returns": "说明比较结果的数字。如果 stringObject 小于 target则 localeCompare() 返回小于 0 的数。如果 stringObject 大于 target则该方法返回大于 0 的数。如果两个字符串相等或根据本地排序规则没有区别该方法返回 0。",
        "parameter": "要以本地特定的顺序与 stringObject 进行比较的字符串。",
        "title": "",
        "example": ""
    }, {
        "name": "match()",
        "syntax": "stringObject.match(searchvalue)stringObject.match(regexp)",
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
        "parameter": "必需。规定子字符串或要替换的模式的 RegExp 对象。请注意如果该值是一个字符串则将它作为要检索的直接量文本模式而不是首先被转换为 RegExp 对象。;",
        "title": "必需。一个字符串值。规定了替换文本或生成替换文本的函数。",
        "example": "位于匹配子串左侧的文本。"
    }, {
        "name": "search()",
        "syntax": "stringObject.search(regexp)",
        "desc": "search()用于检索字符串中指定的子字符串或检索与正则表达式相匹配的子字符串。",
        "returns": "stringObject 中第一个与 regexp 相匹配的子串的起始位置。",
        "parameter": "该参数可以是需要在 stringObject 中检索的子串也可以是需要检索的 RegExp 对象。注释：要执行忽略大小写的检索请追加标志 i。",
        "title": "",
        "example": ""
    }, {
        "name": "split()",
        "syntax": "stringObject.split(separatorhowmany)",
        "desc": "split()用于把一个字符串分割成字符串数组。",
        "returns": "一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 stringObject 分割成子串创建的。返回的数组中的字串不包括 separator 自身。",
        "parameter": "必需。字符串或正则表达式从该参数指定的地方分割 stringObject。",
        "title": "可选。该参数可指定返回的数组的最大长度。如果设置了该参数返回的子串不会多于这个参数指定的数组。如果没有设置该参数整个字符串都会被分割不考虑它的长度。",
        "example": ""
    }, {
        "name": "substr()",
        "syntax": "stringObject.substr(startlength)",
        "desc": "substr()可在字符串中抽取从 start 下标开始的指定数目的字符。",
        "returns": "一个新的字符串包含从 stringObject 的 start（包括 start 所指的字符） 处开始的 length 个字符。如果没有指定 length那么返回的字符串包含从 start 到 stringObject 的结尾的字符。",
        "parameter": "必需。要抽取的子串的起始下标。必须是数值。如果是负数那么该参数声明从字符串的尾部开始算起的位置。也就是说-1 指字符串中最后一个字符-2 指倒数第二个字符以此类推。",
        "title": "可选。子串中的字符数。必须是数值。如果省略了该参数那么返回从 stringObject 的开始位置到结尾的字串。",
        "example": ""
    }, {
        "name": "substring()",
        "syntax": "stringObject.substring(startstop)",
        "desc": "substring()用于提取字符串中介于两个指定下标之间的字符。",
        "returns": "一个新的字符串该字符串值包含 stringObject 的一个子字符串其内容是从 start 处到 stop-1 处的所有字符其长度为 stop 减 start。",
        "parameter": "必需。一个非负的整数规定要提取的子串的第一个字符在 stringObject 中的位置。",
        "title": "<p>可选。一个非负的整数比要提取的子串的最后一个字符在 stringObject 中的位置多 1。如果省略该参数那么返回的子串会一直到字符串的结尾。</p>&#13;",
        "example": ""
    }, {
        "name": "toLocaleLowerCase()",
        "syntax": "stringObject.toLocaleLowerCase()",
        "desc": "toLocaleLowerCase()用于把字符串转换为小写。",
        "returns": "一个新的字符串在其中 stringObject 的所有大写字符全部被转换为了小写字符。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "toLocaleUpperCase()",
        "syntax": "stringObject.toLocaleUpperCase()",
        "desc": "toLocaleUpperCase()用于把字符串转换为大写。",
        "returns": "一个新的字符串在其中 stringObject 的所有小写字符全部被转换为了大写字符。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "toLowerCase()",
        "syntax": "stringObject.toLowerCase()",
        "desc": "toLowerCase()用于把字符串转换为小写。",
        "returns": "一个新的字符串在其中 stringObject 的所有大写字符全部被转换为了小写字符。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "toUpperCase()",
        "syntax": "stringObject.toUpperCase()",
        "desc": "toUpperCase()用于把字符串转换为大写。",
        "returns": "一个新的字符串在其中 stringObject 的所有小写字符全部被转换为了大写字符。",
        "parameter": "",
        "title": "",
        "example": ""
    }, {
        "name": "join()",
        "syntax": "arrayObject.join(separator)",
        "desc": "join()用于把数组中的所有元素放入一个字符串。",
        "returns": "元素是通过指定的分隔符进行分隔的。",
        "parameter": "可选。指定要使用的分隔符。如果省略该参数则使用逗号作为分隔符。",
        "title": "",
        "example": ""
    }]
}