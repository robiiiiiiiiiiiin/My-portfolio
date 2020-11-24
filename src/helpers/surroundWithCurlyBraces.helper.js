module.exports = function surroundWithCurlyBraces(value) {
    var result = '{{' + value + '}}';
    return result;
};