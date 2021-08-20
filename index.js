"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCake = exports.validateImageUrl = exports.validateYumFactor = exports.validateCakeComment = exports.validateCakeName = void 0;
var is_url_1 = __importDefault(require("is-url"));
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
function validateImageUrl(url) {
    return is_url_1.default(url);
}
exports.validateImageUrl = validateImageUrl;
function validateCake(cake) {
    return !!(validateImageUrl(cake.imageUrl)
        && validateCakeName(cake.name)
        && validateCakeComment(cake.comment)
        && validateYumFactor(cake.yumFactor));
}
exports.validateCake = validateCake;
