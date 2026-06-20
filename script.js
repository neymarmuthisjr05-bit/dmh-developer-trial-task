function generateResume() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;
    let education = document.getElementById("education").value;
    let experience = document.getElementById("experience").value;

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        skills === "" ||
        education === "" ||
        experience === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("resume").innerHTML = `
        <h2>${name}</h2>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <hr>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>
    `;
}
