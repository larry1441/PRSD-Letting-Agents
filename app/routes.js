//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Do you use a letting agent to manage this property?
router.post('/do-you-use-a-letting-agent-to-manage-this-property', function(request, response) {
    var usingLettingAgentToManage = request.session.data['usingLettingAgentToManage']
    if (usingLettingAgentToManage == "Yes"){
        response.redirect("/letting_agents/do_you_want_to_invite_a_letting_agent_to_this_registration")
    } else {
        response.redirect("/letting_agents/select_which_type_of_licence_applies_to_this_property")
    }
})

// Do you want to invite a letting agent to this registration?
router.post('/do_you_want_to_invite_a_letting_agent_to_this_registration', function(request, response) {
    var inviteLettingAgentToRegistration = request.session.data['inviteLettingAgentToRegistration']
    if (inviteLettingAgentToRegistration == "Yes"){
        response.redirect("/letting_agents/connection_code")
    } else {
        response.redirect("/letting_agents/what_is_the_name_of_the_letting_agency")
    }
}) 

// What is the name of the letting agency?
router.post('/what_is_the_name_of_the_letting_agency', function(request, response) {
    response.redirect("/letting_agents/what_is_the_letting_agencys_address")
})

// What is the agency’s address
router.post('/what_is_the_letting_agencys_address', function(request, response) {
    response.redirect("letting_agents/select_an_address")
})

// Select an address
router.post('/select_an_address', function(request, response) {
    var selectAnAddress = request.session.data['selectAnAddress']
    if (selectAnAddress == "I want to manually enter my address"){
        response.redirect("/letting_agents/what_is_the_letting_agencys_address_manual_entry")
    } else {
        response.redirect("/letting_agents/what_are_the_letting_agents_contact_details")
    }
})

// What is the letting agency's address?
router.post('/what_is_the_letting_agencys_address_manual_entry', function(request, response) {
    response.redirect("/letting_agents/what_are_the_letting_agents_contact_details")
})

// What are the letting agents contact details?
router.post('/what_are_the_letting_agents_contact_details', function(request, response) {
    response.redirect("/letting_agents/select_which_type_of_licence_applies_to_this_property")
})

// Connection code
router.post('/connection_code', function(request, response) {
    response.redirect("/letting_agents/is_this_the_correct_agency")
})


// Is this the correct agency?
router.post('/is_this_the_correct_agency', function(request, response) {
    var isThisTheCorrectAgency = request.session.data['isThisTheCorrectAgency']
    if (isThisTheCorrectAgency == "Yes"){
        response.redirect("/letting_agents/invitation_sent")
    } else {
        response.redirect("/letting_agents/connection_code")
    }
})

// Agency not found
router.post('/agency_not_found', function(request, response) {
    response.redirect("/letting_agents/connection_code")
})










// xxx
router.post('/xxx', function(request, response) {
    response.redirect("http://blog.blackmondaydesign.com")
})

// xxx
router.post('/xxx', function(request, response) {
    response.redirect("http://blog.blackmondaydesign.com")
})

// xxx
router.post('/xxx', function(request, response) {
    response.redirect("http://blog.blackmondaydesign.com")
})

// xxx
router.post('/xxx', function(request, response) {
    response.redirect("http://blog.blackmondaydesign.com")
})

// xxx
router.post('/xxx', function(request, response) {
    response.redirect("http://blog.blackmondaydesign.com")
})

// xxx
router.post('/xxx', function(request, response) {
    response.redirect("http://blog.blackmondaydesign.com")
})

// xxx
router.post('/xxx', function(request, response) {
    response.redirect("http://blog.blackmondaydesign.com")
})
