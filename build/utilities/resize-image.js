"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var resizeImage = function (filename, width, height) {
    var inputFile;
    try {
        inputFile = path_1.default.resolve('images/full', filename + ".jpg");
    }
    catch (error) {
        console.log(error.message);
    }
    // create path for output file
    var outputFile = path_1.default.resolve("images/thumb", width + "-" + height + "-" + filename + ".jpg");
    if (fs_1.default.existsSync(outputFile)) {
        return outputFile;
    }
    else {
        sharp_1.default(inputFile)
            .resize(width, height)
            .toFile(outputFile).then(function (info) { console.log(info); })
            .catch(function (error) { return console.log(error.message); });
    }
    ;
    return outputFile;
};
exports.default = resizeImage;
