const projectList = document.getElementById("project-list");
const loadProjectsButton = document.getElementById("load-projects");
const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");
const themeToggle = document.getElementById("theme-toggle");

function renderProjects(projects) {
  projectList.innerHTML = projects
    .map(
      (project, index) => `
		<article class="project-card" style="--card-color: ${project.color}; --delay: ${
        index * 80
      }ms">
			<div class="project-image"><span>${
        project.number
      }</span><div class="project-shape"></div></div>
			<div class="project-meta"><div><h3>${project.title}</h3><p>${
        project.description
      }</p></div><span class="project-type">${project.type}</span></div>
		</article>
	`
    )
    .join("");
}

loadProjectsButton.addEventListener("click", async () => {
  loadProjectsButton.disabled = true;
  loadProjectsButton.innerHTML = "Loading...";
  try {
    const response = await fetch("hello.php?action=projects");
    if (!response.ok)
      throw new Error("The resort packages could not be loaded.");
    renderProjects(await response.json());
    loadProjectsButton.innerHTML = "Packages loaded ✓";
  } catch (error) {
    projectList.innerHTML = `<p class="error-state">${error.message} Please try again.</p>`;
    loadProjectsButton.disabled = false;
    loadProjectsButton.innerHTML = "Try again ↗";
  }
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = contactForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  formResponse.className = "form-response";
  formResponse.textContent = "Preparing your stay...";
  try {
    const response = await fetch("hello.php?action=contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
    });
    const result = await response.json();
    if (!response.ok)
      throw new Error(result.message || "Unable to send your booking request.");
    formResponse.className = "form-response success";
    formResponse.textContent = result.message;
    contactForm.reset();
  } catch (error) {
    formResponse.className = "form-response error-state";
    formResponse.textContent = error.message;
  } finally {
    submitButton.disabled = false;
  }
});

const savedTheme = localStorage.getItem("azure-coast-theme");
if (savedTheme === "light") document.body.classList.add("light-theme");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem(
    "azure-coast-theme",
    document.body.classList.contains("light-theme") ? "light" : "dark"
  );
});
