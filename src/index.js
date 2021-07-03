import { initLogger, logError, logInfo, logDebug } from "./utils/Logger.js";

initLogger(2);

logError('ErrorTest');
logInfo('InfoTest');
logDebug('DebugTest');