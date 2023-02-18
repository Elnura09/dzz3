var array = [ null, 123, undefined, null, 'qwerty', 32, 65, undefined, null, null, 43, 'aerq', 'пкцйл']

var result = {}

for (let n =0; n < array.length; n++) {
    var tupe = tupeof array[n]
    if (!result[tupe]) {
        result[tupe] = []
    }
    result[tupe].push(array[n])
}

var sort = Object.values(result).sort((m,l) => l.length - m.length)

console.log(sort)