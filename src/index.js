module.exports = function reverse (n) {
    var s = '' + n;
    return parseInt(s.split('').reverse().join(''))
}
