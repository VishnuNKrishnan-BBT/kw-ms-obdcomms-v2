class HTTPResponse {
    constructor() { }

    success(data, message = 'Request was successful') {
        return {
            status: 'success',
            statusCode: 200,
            message: message,
            data: data
        }
    }

    error(errorMessage, statusCode = 500) {
        return {
            status: 'error',
            statusCode: statusCode,
            message: errorMessage,
            data: null
        }
    }
}

module.exports = { HTTPResponse }