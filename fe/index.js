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

const moduleActionsPath = "~module_actions"

const forms = {}


/**
 * 
 * Optional argument
 * @param { SiteXMLModulesInstance } opt - module instance options
 * 
 * If specified, must have 'id' property, the rest is defined by each module
 * 
 */

forms.render = (opt, siteObj) => {
    // return "I am a form!" + JSON.stringify(opt)

    // action path
    let rootPath = siteObj.rootpath
    // strip traing slash
    if (rootPath[rootPath.length-1] === "/")  rootPath = rootPath.slice(0, -1)
    const actionPath = `${rootPath}/${moduleActionsPath}/${moduleJson.name}`

    // fields html
    let fieldsHTML = ""
    for (let i = 0; i < opt.fields.length; i++) {
        fieldsHTML += `<div class="xforms-row">
            <input 
                name="${opt.fields[i].name}" 
                type="${opt.fields[i].type}" 
                placeholder="${opt.fields[i].caption}" 
            />
        </div>`
    }

    // resulting html
    return `
        ${styles}
        <form action="${actionPath}" method="post">
            ${fieldsHTML}
            <input type="hidden" name="instanceid" value="${(opt && opt.id) ? opt.id : ""}" />
            <input type="submit" value="Submit" />
        </form>
    `
}

module.exports = forms