/* eslint-disable no-console */
/**
   * A Logger to log the events throughout the application.
   *
   * The possible levels are:
   *  0 - ERROR | 1 - INFO | 2 - DEBUG
   */
class Logger {
  /**
   * @param {number} level - The level of the Logger
   * 0 - ERROR | 1 - INFO | 2 - DEBUG
   */
  constructor(level) {
    this.level = level;
  }

  error(message) {
    if (this.level >= 0) {
      console.log(`ERROR: ${message}`);
    }
  }

  info(message) {
    if (this.level >= 1) {
      console.log(`INFO: ${message}`);
    }
  }

  debug(message) {
    if (this.level >= 2) {
      console.log(`DEBUG: ${message}`);
    }
  }
}

let logger;

export function initLogger(level) {
  let loggerLevel = 0;

  if (level) { loggerLevel = level; }

  logger = new Logger(loggerLevel);
}

function getLogger() {
  if (!logger) {
    initLogger();
  }

  return logger;
}

export function logError(message) { getLogger().error(message); }
export function logInfo(message) { getLogger().info(message); }
export function logDebug(message) { getLogger().debug(message); }
