"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCake = exports.validateYumFactor = exports.validateCakeComment = exports.validateCakeName = void 0;
function validateCakeName(name) {
    return !!name && name.length <= 30;
}
exports.validateCakeName = validateCakeName;
function validateCakeComment(comment) {
    return !!comment && comment.length <= 200;
}
exports.validateCakeComment = validateCakeComment;
function validateYumFactor(factor) {
    return factor > 0 && factor <= 5;
}
exports.validateYumFactor = validateYumFactor;
function validateCake(cake) {
    return !!(cake.imageUrl
        && validateCakeName(cake.name)
        && validateCakeComment(cake.comment)
        && validateYumFactor(cake.yumFactor));
}
exports.validateCake = validateCake;
