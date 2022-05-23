import {StatusCodes} from 'http-status-codes';
import CustomAPIError from './custom-api.js';
/* It's a custom error class that extends the CustomAPIError class and sets the statusCode property to
400 */
class BadRequestError extends CustomAPIError {
		constructor(message) {
				super(message);
				this.statusCode = StatusCodes.BAD_REQUEST;
		}
}
export default BadRequestError;