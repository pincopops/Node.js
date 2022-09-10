import * as fs from "node:fs";

fs.writeFile("file-1.txt", "test1", function (error) {

    if (error) {
        throw new Error("Dammit!", error)
    }
    else console.log("The file has been saved!");

    fs.readFile("file-1.txt", { encoding: "utf-8" }, function (error, data) {

        if (error) {
            console.error(error);
            return
        }

        console.log("Here's the file you were looking for:", data);
    })
})

