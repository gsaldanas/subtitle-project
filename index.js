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
allContent = allContent.replace(/[^a-z]/gi, " "); //alle niet letters vervangen door een spatie
allContent = allContent.replace(/ +/g, " ");
console.log(allContent);
