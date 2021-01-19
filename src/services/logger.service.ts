import * as winston from 'winston';

export default class LoggerService {
  /**
   * Initialize Winston logger with CloudWatch transport.
   */
  public static initializeLogger = () => {
    winston.clear();
    winston.add(
      new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple(),
          winston.format.splat(),
        ),
      }),
    );
  };
}
