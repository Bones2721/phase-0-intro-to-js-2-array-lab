const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph")
}
function destructivelyPrependCat(Bob) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    var Broom_1=
    [...cats, name]
    return Broom_1
}
function prependCat(name) {
    var Arnold_2=
    [name, ...cats]
    return Arnold_2
}
function removeFirstCat() {
    var caats=
    cats.slice(1)
    return caats
}
function removeLastCat() {
    var catts=
    cats.slice(0, cats.length-1)
    return catts
}