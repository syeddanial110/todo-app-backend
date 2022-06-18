/**
 * Sends the HTTP response
 * @param {Object} res - Response Object
 * @param {Integer} code - HTTP status code
 * @param {Object} obj - the data object returned
 */
 const sendResponse = (res, code, obj) => {
    if(!Number.isInteger(code)){
        obj = code;
        code = 200
    }
    if(!res.headersSent)
    return res.status(code).json(obj)
}

/**
 * Sends the HTTP response with only message in body
 * @param {Object} res - Response Object
 * @param {String} message 
 * @param {Boolean} success 
 * @param {Integer} code - HTTP status code
 */
const sendResponseMsg = (res, message, success, code = 200) => {
    if(!res.headersSent)
    return res.status(code).json({message, success})
}

module.exports = {
    sendResponse,
    sendResponseMsg,
}