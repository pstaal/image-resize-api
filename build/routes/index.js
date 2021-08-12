"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
var image_api_1 = __importDefault(require("./api/image-api"));
routes.get('/', function (req, res) {
    res.send('Main api route!');
});
routes.use('/image', image_api_1.default);
exports.default = routes;
