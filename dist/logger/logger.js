"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loggable = exports.SdkLogLevel = void 0;
var SdkLogLevel;
(function (SdkLogLevel) {
    SdkLogLevel["log"] = "log";
    SdkLogLevel["info"] = "info";
    SdkLogLevel["error"] = "error";
    SdkLogLevel["warn"] = "warn";
    SdkLogLevel["debug"] = "debug";
})(SdkLogLevel = exports.SdkLogLevel || (exports.SdkLogLevel = {}));
class Loggable {
    constructor(options) {
        this._options = options || {};
    }
    log(level, ...args) {
        if (this._options.logger) {
            const logger = this._options.logger;
            switch (level) {
                case SdkLogLevel.debug:
                    if (logger.debug instanceof Function) {
                        logger.debug(...args);
                    }
                    break;
                case SdkLogLevel.error:
                    if (logger.error instanceof Function) {
                        logger.error(...args);
                    }
                    break;
                case SdkLogLevel.info:
                    if (logger.info instanceof Function) {
                        logger.info(...args);
                    }
                    break;
                case SdkLogLevel.log:
                    if (logger.log instanceof Function) {
                        logger.log(...args);
                    }
                    break;
                case SdkLogLevel.warn:
                    if (logger.warn instanceof Function) {
                        logger.warn(...args);
                    }
                    break;
            }
        }
    }
}
exports.Loggable = Loggable;
//# sourceMappingURL=logger.js.map