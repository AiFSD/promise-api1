document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  fetch("https://api.github.com/users/github/repos")
    .then((response) => response.json())
    .then((data) => {
      content.innerHTML = "";
      data.forEach((repo) => {
        const repoDiv = document.createElement("div");
        repoDiv.className = "card mb-3";
        repoDiv.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${repo.name}</h5>
            <p class="card-text">${repo.description || "No description"}</p>
          </div>
        `;
        content.appendChild(repoDiv);
      });
    })
    .catch((error) => console.error("Error fetching GitHub data:", error));
});
