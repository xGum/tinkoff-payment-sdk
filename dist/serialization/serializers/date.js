"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expDateFromStringOrThrow = exports.dateFromStringOrThrow = exports.dateToStringOrThrow = void 0;
const date_fns_1 = require("date-fns");
function dateToStringOrThrow(value) {
    // noinspection SuspiciousTypeOfGuard
    if (!(value instanceof Date)) {
        throw new Error('Value must be a valid JavaScript Date');
    }
    return date_fns_1.formatISO(value);
}
exports.dateToStringOrThrow = dateToStringOrThrow;
function dateFromStringOrThrow(value) {
    // noinspection SuspiciousTypeOfGuard
    if (typeof value !== 'string') {
        throw new Error('Value must be a string');
    }
    return new Date(Date.parse(value));
}
exports.dateFromStringOrThrow = dateFromStringOrThrow;
function expDateFromStringOrThrow(value) {
    // noinspection SuspiciousTypeOfGuard
    if (typeof value !== 'string' || value.length !== 4) {
        throw new Error('Value must be a string with 4 symbols length');
    }
    const month = parseInt(value.slice(0, 2), 10) - 1;
    const year = parseInt(value.slice(2, 4), 10) - 2000;
    return new Date(year, month);
}
exports.expDateFromStringOrThrow = expDateFromStringOrThrow;
//# sourceMappingURL=date.js.map