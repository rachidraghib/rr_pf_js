document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    renderHero(data.hero);
    renderAbout(data.about);
    renderSkills(data.skills);
    renderProjects(data.projects);
    renderContact(data.contact);

    setupNavigation();
  } catch (error) {
    console.error("Failed to load portfolio data:", error);
  }
});

function setupNavigation() {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".page-section");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");

      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      sections.forEach((sec) => {
        sec.classList.toggle("active", sec.id === targetId);
      });
    });
  });
}

///////////////////////////// Education Download Buttons ///////////////////////////////////
/////////// matLab file download button ///////////
document.getElementById("matLabBtn").addEventListener("click", () => {
  // 1. Create a hidden anchor element
  const link = document.createElement("a");

  // 2. Set the path to your matLab file
  link.href = "./tech_cer/matLab.pdf";

  // 3. Define the download filename
  link.download = "matLab.pdf";

  // 4. Append to body, trigger programmatically, and clean up
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

/////////// Resume file download button ///////////
document.getElementById("resumeBtn").addEventListener("click", () => {
  // 1. Create a hidden anchor element
  const link = document.createElement("a");

  // 2. Set the path to your resume file
  link.href = "./tech_cer/resume.pdf";

  // 3. Define the download filename
  link.download = "resume.pdf";

  // 4. Append to body, trigger programmatically, and clean up
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

/////////// BHCC Progress file download button ///////////
document
  .getElementById("progBtn", " transcriptBtn")
  .addEventListener("click", () => {
    // 1. Create a hidden anchor element
    const link = document.createElement("a");

    // 2. Set the path to your BHCC progress file
    ((link.href = "./tech_cer/CS_Progress.pdf"), "./tech_cer/transcript.pdf");

    // 3. Define the download filename
    ((link.download = "CS_Progress.pdf"), "transcript.pdf");

    // 4. Append to body, trigger programmatically, and clean up
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

/////////// Transcript file download button ///////////
document.getElementById("transcriptBtn").addEventListener("click", () => {
  // 1. Create a hidden anchor element
  const link = document.createElement("a");

  // 2. Set the path to your BHCC progress file
  link.href = "./tech_cer/transcript.pdf";

  // 3. Define the download filename
  link.download = "transcript.pdf";

  // 4. Append to body, trigger programmatically, and clean up
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

///////////////////////////// Army Download Buttons ///////////////////////////////////

/////////// BCT file download button ///////////
document.getElementById("bctBtn").addEventListener("click", () => {
  // 1. Create a hidden anchor element
  const link = document.createElement("a");

  // 2. Set the path to your resume file
  link.href = "./army_cer/BCT.pdf";

  // 3. Define the download filename
  link.download = "BCT.pdf";

  // 4. Append to body, trigger programmatically, and clean up
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

/////////// U.S. Army Translation Certificate file download button ///////////
document.getElementById("arabicBtn").addEventListener("click", () => {
  // 1. Create a hidden anchor element
  const link = document.createElement("a");

  // 2. Set the path to your resume file
  link.href = "./army_cer/arabic.pdf";

  // 3. Define the download filename
  link.download = "arabic.pdf";

  // 4. Append to body, trigger programmatically, and clean up
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

/////////// Python file download button ///////////
document.getElementById("Python").addEventListener("click", () => {
  // 1. Create a hidden anchor element
  const link = document.createElement("a");

  // 2. Set the path to your Python file
  link.href = "./tech_cer/python.pdf";

  // 3. Define the download filename
  link.download = "python.pdf";

  // 4. Append to body, trigger programmatically, and clean up
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

function renderHero(hero) {
  const container = document.getElementById("hero-container");
  container.innerHTML = `
    <h1>${hero.name}</h1>
    <h3>${hero.title}</h3>
    <a> <img src=\"tech_cer/Vetsin_Tech_badge.png \" alt=\"C++\" img-align=\"right\" width=\"100\" height=\"100\"><span style="color:gold;">VetsinTech Bootcamp 2024</span></a><br>
    
    ${hero.subtitle}
     
    <p>${hero.ctaText}</p>
  `;
}

function renderAbout(about) {
  const container = document.getElementById("about-container");
  container.innerHTML = `
   
    ${about.bio}
   
    
  `;
}

function renderSkills(skills) {
  const container = document.getElementById("skills-container");
  container.innerHTML = skills
    .map(
      (group) => `
    <div class="card">

     <div class="nav-logo"> <h3>${group.category}</h3></div>
    
     ${group.summary}r5
      <br><br>
      <h3>🟢 Competencies</h3>
      <br><br>
      <ul>${group.items.map((item) => `<ul>${item}</ul><br>`).join("")}</ul>
      </div>
  `,
    )
    .join("<br>");
}

function renderProjects(projects) {
  const container = document.getElementById("projects-container");
  container.innerHTML = projects
    .map(
      (proj) => `
    <div class="card">
    <span style="color: #38bdf8;"><h1>${proj.title}</h1></span><br>
      
      <p>${proj.description}</p>
      <br>

      <div class="tags">
        ${proj.tags.map((tag) => `<span style="color: #38bdf8;">${tag}<br> </span>`).join("")}
      </div>
      <a href="${proj.liveUrl}" target="_blank" rel=" noopener noreferer" class="btn">Live Demo</a>
      
      <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn">View GitHub Repo</a>

    </div>
  `,
    )
    .join("<br>");
}

function renderContact(contact) {
  const container = document.getElementById("contact-container");
  container.innerHTML = `
 

<a> <img src=\"images/email.jpg \" alt=\"Email\" img-align=\"right\" width=\"50\" height=\"50\"><span style="color: #38bdf8;">  Email:</span></a>  

<br><a href="mailto:${contact.email}"><smaller><p1>${contact.email}</p1></smaller></a>

<br>
<br>

<a> <img src=\"images/phone.jpg \" alt=\"Phone\" img-align=\"right\" width=\"50\" height=\"50\"><span style="color: #38bdf8;">  Phone:</span></a>  
<br><a href="tel:${contact.phone}"><smaller><p1>${contact.phone}</p1></smaller></a>

<br>
<br>


<a> <img src=\"images/web.webp \" alt=\"Website\" img-align=\"right\" width=\"50\" height=\"50\"><span style="color: #38bdf8;"> Website:</span></a>
<br><a href="${contact.website}" target="_blank" rel="noopener noreferrer"><smaller><p1>${contact.website}</p1></smaller></a><br>
<br>

<a> <img src=\"images/github.webp \" alt=\"GitHub\" img-align=\"right\" width=\"50\" height=\"50\"><span style="color: #38bdf8;"> GitHub:</span></a>


<br><a href="${contact.github}" target="_blank" rel="noopener noreferrer"><smaller><p1> ${contact.github}</p1></smaller></a><br>
<br><a> <img src=\"images/linkedin.jpg \" alt=\"LinkedIn\" img-align=\"right\" width=\"50\" height=\"50\"><span style="color: #38bdf8;"> LinkedIn:</span></a>

<br><a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer"><smaller><p1>${contact.linkedin}</p1></smaller></a><br>
<br><br>
<span style="color: #38bdf8;"><h2>Get In Touch</h2></span><br>

<section>
<form id="contact-form">
  <input type="text" id="name" placeholder="Your Name" required>
  <input type="email" id="email" placeholder="Your Email" required>
  <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
  <button type="submit" class="btn">Send Message</button>
</form>
</section>
<br><br>

    `;

  // 3. Simple Mock Form Submission Validation
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Basic confirmation presentation logic
    alert(
      `Thank you, ${name}! Your inquiry message has been recorded. I'll reach out to ${email} soon.`,
    );
    contactForm.reset();
  });
}
