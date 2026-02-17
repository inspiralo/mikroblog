document.addEventListener("DOMContentLoaded", function () {
  // Csak akkor fusson, ha posztoldalon vagyunk (van .md-ből generált HTML)
  if (!window.location.pathname.endsWith(".html")) return;

  const parts = window.location.pathname.split("/").filter(Boolean);

  // parts: ["mikroblog", "konyvekrol", "valami.html"]
  const category = parts[1] || "";
  const subcategory = parts.length === 4 ? parts[2] : null;

  const backDiv = document.createElement("div");
  backDiv.style.marginTop = "40px";
  backDiv.style.opacity = "0.9";

  let fallback = `/mikroblog/${category}/`;
  if (subcategory) fallback = `/mikroblog/${category}/${subcategory}/`;

  backDiv.innerHTML = `
    <a href="javascript:history.back()">← Vissza</a>
    <span style="margin-left:10px; opacity:0.6;">
      vagy <a href="${fallback}">vissza a kategóriához</a>
    </span>
  `;
  document.body.appendChild(backDiv);
});