import HashMap from "./hashmap";

const hashmap = new HashMap();

console.log("----- SET TESTING -----");
console.log("Set Key: Carlos Value: 1");
hashmap.set("Carlos", "1");
console.log(hashmap);
console.log("Set Key: Carlos Value: 2");
hashmap.set("Carlos", "2");
console.log(hashmap);
console.log("Set Key: Alpha Value: Alpha");
hashmap.set("RandomString0", "Alpha");
console.log(hashmap);
console.log("Set Key: Vish Value: 2");
hashmap.set("Vish", "2");
console.log(hashmap);
console.log("Set Key: Marty Value: 3");
hashmap.set("Marty", "Value 3");
console.log(hashmap);
console.log("---------------------------------\n\n");

console.log("----- GET TESTING -----");
console.log(
  "Current keys are Carlos: 2, Vish: 2, Marty: 3, RandomString0: Alpha",
);
console.log("Get Carlos, Result:", hashmap.get("Carlos"));
console.log("Get Vish, Result:", hashmap.get("Vish"));
console.log("Get Marty, Result:", hashmap.get("Marty"));
console.log("Get RandomString0, result:", hashmap.get("RandomString0"));
console.log("Get Random, Result:", hashmap.get("Random"));
console.log("---------------------------------\n\n");
