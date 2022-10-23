// @ts-ignore no type declaration.
import IPFS from "ipfs-api";
import fs from "fs/promises";
import path from "path";

async function main() {
  const ipfs = new IPFS({
    host: "localhost",
    port: 5001,
    protocol: "http",
  });

  const filePath = path.join(__dirname, "../text.txt");
  const file = await fs.readFile(filePath);
  ipfs.files.add(file, (err: any, f: any) => {
    console.log(f);
  });
}

main();
