const { HTTPResponse } = require("../classes/classes")
const styledLog = require("../helpers/styledLog")

const liveLocation = (req, res) => {
    styledLog({ colour: 'white', style: 'bold' }, `ℹ Tracker ID: ${req.body.trackerId}`)
    styledLog({ colour: 'white', style: 'bold' }, `ℹ Time: ${new Date(req.body.timestamp)} | Lt: ${req.body.latitude} | Ln: ${req.body.longitude} | Sp: ${req.body.speed} | Hd: ${req.body.heading} | Ac: ${req.body.accuracy} | NL: ${req.body.newLeg}`)

    styledLog({ colour: 'green', style: 'bold', blankLine: 2 }, `✓ Live location updated for Tracker ID ${req.body.trackerId}`)
    res.send(new HTTPResponse().success(null, 'Live location updated.'))
}

module.exports = { liveLocation }