"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = 3000;
var inputFile = path_1.default.resolve('images/full', "fjord.jpg");
var outputFile = path_1.default.resolve("images/resized", "output.jpg");
app.listen(port, function () {
    console.log("App listening at http://localhost:" + port);
});
app.get('/image', function (req, res) {
    res.send('Resizing the image');
    try {
        sharp_1.default(inputFile)
            .resize(125, 125)
            .toFile(outputFile).then(function (info) { console.log(info); })
            .catch(function (error) { return console.log(error.message); });
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.default = app;
