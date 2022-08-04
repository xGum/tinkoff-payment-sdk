"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanFromString = exports.booleanToString = void 0;
function booleanToString(value) {
    return String(value);
}
exports.booleanToString = booleanToString;
function booleanFromString(value) {
    const positiveValues = [
        '1',
        'true',
        'on',
        'yes',
    ];
    return positiveValues.includes(value);
}
exports.booleanFromString = booleanFromString;
//# sourceMappingURL=boolean.js.map