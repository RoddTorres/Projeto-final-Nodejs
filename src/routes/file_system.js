const fs = require("fs");

class FileSystem {
  static async writeFile(content) {
    const name = content[0].name.toLowerCase().replaceAll(" ", "-");
    return await fs.promises.writeFile(`./src/tmp/${name}.json`, JSON.stringify(content));
  }
}

module.exports = FileSystem;