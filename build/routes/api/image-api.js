"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageApi = express_1.default.Router();
imageApi.get('/', function (req, res) {
    res.send('Resizing the image');
    try {
        sharp(inputFile)
            .resize(125, 125)
            .toFile(outputFile).then(function (info) { console.log(info); })
            .catch(function (error) { return console.log(error.message); });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.default = imageApi;
