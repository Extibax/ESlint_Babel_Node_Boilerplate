/* Modules */
import express from "express";

const app = express();

/* Uncomment this 2 lines to check if eslint is working */

/* let foo = null; */

/* console.log(bar); */

async function main() {
  await app.listen(3000);
  console.log("Server on port 3000");
}

main();
