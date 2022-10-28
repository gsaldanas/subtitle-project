import fs from "fs";

const folderContents = fs.readdirSync("back_to_the_future_dutch");
console.log(folderContents);

let allContent = "";
//use for loop to go trough the data of the array
for (let i = 0; i < folderContents.length; i++) {
  allContent += fs.readFileSync(
    "back_to_the_future_dutch/" + folderContents[i]
  );
}
//regex expressions
allContent = allContent
  .replace(/[^a-z]/gi, " ")
  .replace(/font|color/gi, " ")
  .replace(/ +/g, " ")
  .toLowerCase()
  .split(" ")
  .filter(function (woord) {
    if (woord.length >= 4) {
      return true;
    } else {
      return false;
    }
  });
console.log(allContent);
//alle niet letters vervangen door een spatie
