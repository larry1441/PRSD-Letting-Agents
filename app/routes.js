//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Select which type of licence applies to this property
router.post('/do-you-use-a-letting-agent-to-manage-this-property', function(request, response) {

    var usingLettingAgentToManage = request.session.data['usingLettingAgentToManage']
    if (usingLettingAgentToManage == "Yes"){
        response.redirect("#")
    } else {
        response.redirect("/letting_agents/select_which_type_of_licence_applies_to_this_property")
    }
})
