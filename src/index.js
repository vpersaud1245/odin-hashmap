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
console.log("Get Bravo, Result:", hashmap.get("Bravo"));
console.log("---------------------------------\n\n");

console.log("----- HAS TESTING -----");
console.log(
  "Current keys are Carlos: 2, Vish: 2, Marty: 3, RandomString0: Alpha",
);
console.log("Has Carlos, Result:", hashmap.has("Carlos"));
console.log("Has Vish, Result:", hashmap.has("Vish"));
console.log("Has Marty, Result:", hashmap.has("Marty"));
console.log("Has RandomString0, result:", hashmap.has("RandomString0"));
console.log("Has Random, Result:", hashmap.has("Random"));
console.log("Has Bravo, Result:", hashmap.has("Bravo"));
console.log("---------------------------------\n\n");

console.log("----- HAS TESTING -----");
console.log(
  "Current keys are Carlos: 2, Vish: 2, Marty: 3, RandomString0: Alpha",
);
console.log(hashmap.length());
console.log("---------------------------------\n\n");

console.log("----- REMOVE TESTING -----");
console.log(
  "Current keys are Carlos: 2, Vish: 2, Marty: 3, RandomString0: Alpha",
);
console.log("Remove Carlos, Result:", hashmap.remove("Carlos"));
console.log(hashmap);
console.log("Remove RandomString0, result:", hashmap.remove("RandomString0"));
console.log(hashmap);
console.log("Remove Testing, result:", hashmap.remove("Testing"));
console.log("---------------------------------\n\n");

console.log("----- CLEAR TESTING -----");
console.log(hashmap);
console.log("Current keys are Vish: 2, Marty: 3");
console.log("Clear hashmap", hashmap.clear());
console.log(hashmap);
