import { users } from "./db";

const add = (x: number, y: number): number => {
  return x + y;
};

export function initialize() {
  const result = add(1, 1);
  console.log(`Initializing: 1 + 1 = ${result}`);
  console.log(`Initialization complete with ${users.length} users:`, users);
}
