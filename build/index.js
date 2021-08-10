"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
var port = 3000;
var inputFile = path_1.default.resolve('images/full', "fjord.jpg");
var outputFile = path_1.default.resolve("images/thumb", "output.jpg");
app.listen(port, function () {
    console.log("App listening at http://localhost:" + port);
});
app.use('/main', index_1.default);
exports.default = app;
