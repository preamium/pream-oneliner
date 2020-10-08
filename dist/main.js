"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAB = exports.NEWLINE = exports.OneLinerDirection = exports.OneLinerType = void 0;
var type_enum_1 = require("./type.enum");
Object.defineProperty(exports, "OneLinerType", { enumerable: true, get: function () { return type_enum_1.OneLinerType; } });
Object.defineProperty(exports, "OneLinerDirection", { enumerable: true, get: function () { return type_enum_1.OneLinerDirection; } });
var NEWLINE = '#N#';
exports.NEWLINE = NEWLINE;
var TAB = '#T#';
exports.TAB = TAB;
var PreamOneLiner = /** @class */ (function () {
    function PreamOneLiner(content, type, direction) {
        this.content = content;
        this.type = type;
        this.direction = direction;
    }
    PreamOneLiner.prototype.process = function () {
        var result = '';
        switch (this.type) {
            case type_enum_1.OneLinerType.LESS:
                switch (this.direction) {
                    case type_enum_1.OneLinerDirection.PROCESS:
                        result = this.content
                            .trim()
                            .replace(/(\r\n|\n|\r)/gm, NEWLINE)
                            .replace(/(\t|    )/gm, TAB);
                        break;
                    case type_enum_1.OneLinerDirection.UNPROCESS:
                        result = this.content
                            .replace(new RegExp(NEWLINE, 'g'), '\n')
                            .replace(new RegExp(TAB, 'g'), '    ')
                            .trim();
                        break;
                    default:
                        return Promise.reject(new Error('direction not defined'));
                }
                break;
            case type_enum_1.OneLinerType.PUG:
                switch (this.direction) {
                    case type_enum_1.OneLinerDirection.PROCESS:
                        result = this.content
                            .trim()
                            .replace(/(\r\n|\n|\r)/gm, NEWLINE)
                            .replace(/(\t|    )/gm, TAB);
                        break;
                    case type_enum_1.OneLinerDirection.UNPROCESS:
                        result = this.content
                            .replace(new RegExp(NEWLINE, 'g'), '\n')
                            .replace(new RegExp(TAB, 'g'), '    ')
                            .trim();
                        break;
                    default:
                        return Promise.reject(new Error('direction not defined'));
                }
                break;
            default:
                return Promise.reject(new Error('content type not defined'));
        }
        return Promise.resolve(result);
    };
    return PreamOneLiner;
}());
exports.default = PreamOneLiner;
//# sourceMappingURL=main.js.map