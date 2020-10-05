"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_enum_1 = require("./type.enum");
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
                            .replace(/(\r\n|\n|\r)/gm, PreamOneLiner.NEWLINE)
                            .replace(/(\t|    )/gm, PreamOneLiner.TAB);
                        break;
                    case type_enum_1.OneLinerDirection.UNPROCESS:
                        result = this.content
                            .replace(new RegExp(PreamOneLiner.NEWLINE, 'g'), '\n')
                            .replace(new RegExp(PreamOneLiner.TAB, 'g'), '    ')
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
                            .replace(/(\r\n|\n|\r)/gm, PreamOneLiner.NEWLINE)
                            .replace(/(\t|    )/gm, PreamOneLiner.TAB);
                        break;
                    case type_enum_1.OneLinerDirection.UNPROCESS:
                        result = this.content
                            .replace(new RegExp(PreamOneLiner.NEWLINE, 'g'), '\n')
                            .replace(new RegExp(PreamOneLiner.TAB, 'g'), '    ')
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
    PreamOneLiner.NEWLINE = '#N#';
    PreamOneLiner.TAB = '#T#';
    return PreamOneLiner;
}());
exports.default = PreamOneLiner;
//# sourceMappingURL=main.js.map