"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_image_1 = __importDefault(require("../../utilities/resize-image"));
var imageApi = express_1.default.Router();
imageApi.get('/', function (req, res) {
    var filename = req.query.filename;
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    res.sendFile(resize_image_1.default(filename, width, height));
});
exports.default = imageApi;
