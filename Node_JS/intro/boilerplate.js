const fs = require("fs");

// Create a folder with the name of the third argument (default name: Project)
const folderName = process.argv[2] || "Project";

// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("IN THE CALLBACK!");
//   if (err) throw err;
// });

try {
  fs.mkdirSync(folderName);

  // Create the basic files needed in a project
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/style.css`, "");
} catch (err) {
  console.log("SOMETHING WENT WRONG!!!");
  console.log(err);
}
