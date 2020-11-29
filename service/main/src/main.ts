import { add, subtract } from "@company/lib-math";
import { concat } from "@company/lib-string";
import { initialize } from "./initialize";

function main() {
  initialize();

  const result = subtract(add(2, 2), 1);
  const username = concat("ad", "min");
  console.log(
    `Starting service as username ${username}: 2 + 2 - 1 = ${result}`
  );
}

main();
