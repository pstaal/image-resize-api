"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var debug_1 = __importDefault(require("debug"));
var log = debug_1.default('http');
var app = express_1.default();
var port = 3000;
app.listen(port, function () {
    log('server started');
});
app.use('/api', index_1.default);
exports.default = app;
