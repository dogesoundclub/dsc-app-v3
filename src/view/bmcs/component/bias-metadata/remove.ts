/*
import * as fs from "fs";
import metadata from "./poison.json";

(async () => {

    for (const data of metadata as any) {
        delete data.external_url;
        delete data.description;
        delete data.attributes;
    }

    fs.writeFileSync("poison.json", JSON.stringify(metadata));
})();
*/