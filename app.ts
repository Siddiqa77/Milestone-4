
//Resume form display
const form = document.getElementById("resume-form") as HTMLFormElement;
const output = document.getElementById("resumeOutput") as HTMLBodyElement;

//Generate resume

form.addEventListener('submit', (event:Event) =>{
    event.preventDefault();

   

    //collect input

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills= (document.getElementById('skills') as HTMLInputElement).value;
   
    //generate resume content dynamically
   const resumeHtml = `

   <h2>Editable Resume</h2>
   <h3>Personal Information</h3>
   <p><b>Name:</b><span contenteditable="true">${name}</span></p>
   <p><b>Email:</b><span contenteditable="true">${email}</span></p>
   <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
   <p><b>Address:</b><span contenteditable="true">${address}</span></p>
    <h3>Education</h3>
   <p contenteditable="true">${education}</p>
    <h3>Experience</h3
    <p contenteditable="true">${experience}</p>
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    </div>
    `;

if(output){
    output.innerHTML = resumeHtml;
}else{
    console.error("Resume Element is missing")
}

});
