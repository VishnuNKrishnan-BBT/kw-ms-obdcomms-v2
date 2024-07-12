const styledLog = require("../helpers/styledLog")

const requestLogger = (req, res, next) => {
    styledLog({ colour: 'yellow', style: 'bold' }, `⚙ Request on ${req.method} ${req.path} @ ${new Date(Date.now())}`)
    next()
}

module.exports = { requestLogger }