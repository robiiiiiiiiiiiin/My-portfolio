module.exports = function flattenString(value) {
    return value.replace(/\.|\s/g, '').toLowerCase();
};