export const LogLevels = {
  LOG: 'log',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
};

export default class Logger {
  _name: string;
  _printTimestamp: boolean;
  _console;

  constructor(name = 'main', printTimestamp = false) {
    this._name = name;
    this._printTimestamp = !!printTimestamp;
    this._console = console;
  }
  // @ts-ignore
  log(...args) {
    return this._log(LogLevels.LOG, ...args);
  }
  // @ts-ignore
  info(...args) {
    return this._log(LogLevels.INFO, ...args);
  }
  // @ts-ignore
  warn(...args) {
    return this._log(LogLevels.WARN, ...args);
  }
  // @ts-ignore
  error(...args) {
    return this._log(LogLevels.ERROR, ...args);
  }

  setPrintTimestamp(val = true) {
    this._printTimestamp = !!val;
    return this;
  }
  // @ts-ignore
  _log(level = LogLevels.INFO, ...args) {
    // @ts-ignore
    const ts = this._printTimestamp ? `${+new Date()} ` : '';
    // @ts-ignore
    try {
      // @ts-ignore
      this._console[level](`[${this._name}] ${ts}${level}:`, ...args);
    } catch (e) {
      console.error(e);
    }
    return this;
  }
}
