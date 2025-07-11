import fs from "node:fs";
import path from "node:path";

const buildDir = "./dist";

function createEsmModulePackageJson() {
  fs.readdir(buildDir, function (err, dirs) {
    if (err) {
      throw err;
    }

    dirs.forEach(function (dir) {
      if (dir === "esm") {
        const packageJsonFile = path.join(buildDir, dir, "/package.json");
        if (!fs.existsSync(packageJsonFile)) {
          fs.writeFile(
            packageJsonFile,
            new Uint8Array(Buffer.from('{"type": "module"}')),
            function (err) {
              if (err) {
                throw err;
              }
            },
          );
        }
      }

      if (dir === "cjs") {
        const packageJsonFile = path.join(buildDir, dir, "/package.json");
        if (!fs.existsSync(packageJsonFile)) {
          fs.writeFile(
            packageJsonFile,
            new Uint8Array(Buffer.from('{"type": "commonjs"}')),
            function (err) {
              if (err) {
                throw err;
              }
            },
          );
        }
      }
    });
  });
}

createEsmModulePackageJson();
