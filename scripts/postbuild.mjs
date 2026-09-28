import fs from "fs";
import path from "path";

const dist = "dist";
const indexHtml = fs.readFileSync(path.join(dist, "index.html"));
const sitemap = fs.readFileSync("public/sitemap.xml", "utf8");

const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((m) => new URL(m[1]).pathname.replace(/^\/|\/$/g, ""))
  .filter(Boolean);

for (const route of routes) {
  const file = path.join(dist, `${route}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, indexHtml);
}

// Unknown URLs still get a real 404 status, which is correct
fs.writeFileSync(path.join(dist, "404.html"), indexHtml);
console.log(`Created ${routes.length} route files`);