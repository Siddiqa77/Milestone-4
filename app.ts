//listing
document
  .getElementById("resume-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    //type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if (
      nameElement &&
      emailElement &&
      phoneElement &&
      addressElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const address = addressElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

      // Validate that all fields are filled
      if (
        nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        educationElement &&
        experienceElement &&
        skillsElement
      ) {
        // Create resume HTML
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            
            <h3>Education</h3>
            <p>${education}</p>
            
            <h3>Experience</h3>
            <p>${experience}</p>
            
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Output resume to the page
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
          resumeOutputElement.innerHTML = resumeOutput;
        } else {
          console.error("Element with ID result is missing.");
        }
      } else {
        alert("Please fill out all fields.");
      }
    } else {
      console.error("One or more form elements are missing.");
    }
  });
