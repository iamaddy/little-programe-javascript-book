module.exports = {
	version: '1.0.0',
	data: [{
		parentid: 1,
		type: 'Object',
		data: [{
			categeryid: 1,
			name: 'Array',
			title: 'Array 对象',
			desc: 'Array 对象用于在单个的变量中存储多个值。',
			syntax: 'new Array();\nnew Array(size);\nnew Array(element0, element1, ..., elementn);',
			parameter: '参数 size 是期望的数组元素个数。返回的数组，length 字段将被设为 size 的值。参数 element ..., elementn 是参数列表。当使用这些参数来调用构造函数 Array() 时，新创建的数组的元素就会被初始化为这些值。它的 length 字段也会被设置为参数的个数。',
			returns: '返回新创建并被初始化了的数组。如果调用构造函数 Array() 时没有使用参数，那么返回的数组为空，length 字段为 0。当调用构造函数时只传递给它一个数字参数，该构造函数将返回具有指定个数、元素为 undefined 的数组。当其他参数调用 Array() 时，该构造函数将用参数指定的值初始化数组。当把构造函数作为函数调用，不使用 new 运算符时，它的行为与使用 new 运算符调用它时的行为完全一样。',
			property: [{
				name: 'constructor',
				title: '',
				desc: '返回对创建此对象的数组函数的引用。',
				syntax: 'object.constructor'
			}, {
				name: 'length',
				title: '',
				desc: 'length 属性可设置或返回数组中元素的数目。',
				syntax: 'arrayObject.length'
			}, {
				name: 'prototype',
				title: '',
				desc: '属性使您有能力向对象添加属性和方法。',
				syntax: 'object.prototype.name=value'
			}],
			methods: [{
				name: 'concat()',
				title: '',
				desc: 'concat()用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。',
				syntax: 'arrayObject.concat(arrayX,arrayX,......,arrayX)',
				parameter: 'arrayX	必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。',
				returns: '返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。',
				example: ''
			}, {
				name: 'join()',
				title: '',
				desc: 'join()用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。',
				syntax: 'arrayObject.join(separator)',
				parameter: 'separator可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。',
				returns: '返回一个字符串。该字符串是通过把 arrayObject 的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入 separator 字符串而生成的。',
				example: ''
			}, {
				name: 'pop()',
				title: '',
				desc: 'pop()用于删除并返回数组的最后一个元素。pop()将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。',
				syntax: 'arrayObject.pop()',
				parameter: '',
				returns: 'arrayObject 的最后一个元素。',
				example: ''
			}, {
				name: 'push()',
				title: '',
				desc: 'push()可向数组的末尾添加一个或多个元素，并返回新的长度。push()可把它的参数顺序添加到 arrayObject 的尾部。它直接修改 arrayObject，而不是创建一个新的数组。push()和 pop()使用数组提供的先进后出栈的功能。',
				syntax: 'arrayObject.push(newelement1,newelement2,....,newelementX)',
				parameter: 'newelement1	必需。要添加到数组的第一个元素。newelement2	可选。要添加到数组的第二个元素。newelementX	可选。可添加多个元素。',
				returns: '把指定的值添加到数组后的新长度。',
				example: ''
			}, {
				name: 'reverse()',
				title: '',
				desc: 'reverse()用于颠倒数组中元素的顺序。该方法会改变原来的数组，而不会创建新的数组。',
				syntax: 'arrayObject.reverse()',
				parameter: '',
				returns: '',
				example: ''
			}, {
				name: 'shift()',
				title: '',
				desc: 'shift()用于把数组的第一个元素从其中删除，并返回第一个元素的值。如果数组是空的，那么 shift()将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。',
				syntax: 'arrayObject.shift()',
				parameter: '',
				returns: '数组原来的第一个元素的值。',
				example: ''
			}, {
				name: 'slice()',
				title: '',
				desc: 'slice()可从已有的数组中返回选定的元素。请注意，该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。',
				syntax: 'arrayObject.slice(start,end)',
				parameter: 'start	必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。end	可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。',
				returns: '返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。',
				example: ''
			}, {
				name: 'sort()',
				title: '',
				desc: 'sort()用于对数组的元素进行排序。',
				syntax: 'arrayObject.sort(sortby)',
				parameter: 'sortby	可选。规定排序顺序。必须是函数。',
				returns: '对数组的引用。请注意，数组在原数组上进行排序，不生成副本。',
				example: ''
			}, {
				name: 'concat()',
				title: '',
				desc: 'concat()用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。',
				syntax: 'arrayObject.concat(arrayX,arrayX,......,arrayX)',
				parameter: 'arrayX	必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。',
				returns: '返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。',
				example: ''
			}, {
				name: 'splice()',
				title: '',
				desc: 'splice()向/从数组中添加/删除项目，然后返回被删除的项目。splice()可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。',
				syntax: 'arrayObject.splice(index,howmany,item1,.....,itemX)',
				parameter: 'index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。item1, ..., itemX	可选。向数组添加的新项目。',
				returns: 'Array	包含被删除项目的新数组，如果有的话。',
				example: ''
			}, {
				name: 'toString()',
				title: '',
				desc: 'toString()可把数组转换为字符串，并返回结果。数组中的元素之间用逗号分隔。当数组用于字符串环境时，JavaScript 会调用这一方法将数组自动转换成字符串。但是在某些情况下，需要显式地调用该方法。',
				syntax: 'arrayObject.toString()',
				parameter: '',
				returns: 'arrayObject 的字符串表示。返回值与没有参数的 join()返回的字符串相同。',
				example: ''
			}, {
				name: 'unshift()',
				title: '',
				desc: 'unshift()可向数组的开头添加一个或更多元素，并返回新的长度。unshift()将把它的参数插入 arrayObject 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。请注意，unshift()不创建新的创建，而是直接修改原有的数组。',
				syntax: 'arrayObject.unshift(newelement1,newelement2,....,newelementX)',
				parameter: 'newelement1	必需。向数组添加的第一个元素。newelement2	可选。向数组添加的第二个元素。newelementX	可选。可添加若干个元素。',
				returns: 'arrayObject 的新长度。',
				example: ''
			}]
		}, 
		require('./boolean'),
		require('./Date'), 
		require('./Math'), 
		require('./Number'), 
		require('./String'),
		require('./RegExp'),
		require('./Global')
		]
	}, {
		parentid: 2,
		type: 'BOM'
	}, {
		parentid: 3,
		type: 'DOM'
	}]
}