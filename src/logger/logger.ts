export enum SdkLogLevel {
  log = 'log',
  info = 'info',
  error = 'error',
  warn = 'warn',
  debug = 'debug',
}

export interface SdkLogger {
  log?: (...args: any[]) => void;
  info?: (...args: any[]) => void;
  error?: (...args: any[]) => void;
  warn?: (...args: any[]) => void;
  debug?: (...args: any[]) => void;
}

export interface LoggableOptions {
  logger?: SdkLogger;
}

export class Loggable {

  private readonly _options: LoggableOptions;

  constructor(options?: LoggableOptions) {
    this._options = options || {};
  }

  protected log(level: SdkLogLevel, ...args: any[]): void {
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