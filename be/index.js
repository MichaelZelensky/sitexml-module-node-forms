/**
 * 
 * forms
 * SiteXML Node.js module
 * Frontend
 * 
 */


const moduleJson = require('../module.json')

//CSS
const styles = `
<style>
.xforms-row {
    margin: 10px 0;
}
</style>
`

const forms = {}

// Express.js middleware
forms.handler = (req, res, next) => {

    // do something

    res.send(req.body)

    next()
}

module.exports = forms