const fs = require("fs");
const file = process.argv[2];
const text = fs.readFileSync(file, "utf8");
console.log(text.split(/\s+/).filter(Boolean).length);
