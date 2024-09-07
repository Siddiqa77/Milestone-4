var _a;
//listing
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Validate that all fields are filled
        if (nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
            // Create resume HTML
            var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            \n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            \n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            \n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
            // Output resume to the page
            var resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
            }
            else {
                console.error("Element with ID result is missing.");
            }
        }
        else {
            alert("Please fill out all fields.");
        }
    }
    else {
        console.error("One or more form elements are missing.");
    }
});
