import HashMap from "./hashmap";

const hashmap = new HashMap();

console.log("----- SET TESTING -----");
console.log("Set Key: Carlos Value: 1");
hashmap.set("Carlos", "1");
hashmap.toString();
console.log("");
console.log("Set Key: Key 2, Value: 2");
hashmap.set("Key 2", "2");
hashmap.toString();
console.log("");
console.log("Set Key: RandomString0, Value: 3");
hashmap.set("RandomString0", "3");
hashmap.toString();
console.log("");
console.log("Set Key: Key 2, Value: new Value");
hashmap.set("Key 2", "new Value");
hashmap.toString();
console.log("");
console.log("Set Key: Vish Value: 2");
hashmap.set("Vish", "2");
hashmap.toString();
console.log("---------------------------------\n\n");

console.log("----- GET TESTING -----");
console.log("Current Hashmap:");
hashmap.toString();
console.log("Get Carlos, Result:", hashmap.get("Carlos"));
console.log("Get Vish, Result:", hashmap.get("Vish"));
console.log("Get RandomString0, result:", hashmap.get("RandomString0"));
console.log("Get Key 2, Result:", hashmap.get("Key 2"));
console.log("Get Bravo, Result:", hashmap.get("Bravo"));
console.log("Get Marty, Result:", hashmap.get("Marty"));
console.log("---------------------------------\n\n");

console.log("----- HAS TESTING -----");
console.log("Current Hashmap:");
hashmap.toString();
console.log("Has Carlos, Result:", hashmap.has("Carlos"));
console.log("Has Vish, Result:", hashmap.has("Vish"));
console.log("Has RandomString0, result:", hashmap.has("RandomString0"));
console.log("Has Key 2, Result:", hashmap.has("Key 2"));
console.log("Has Bravo, Result:", hashmap.has("Bravo"));
console.log("Has Marty, Result:", hashmap.has("Marty"));
console.log("---------------------------------\n\n");

console.log("----- LENGTH TESTING -----");
console.log("Current Hashmap:");
hashmap.toString();
console.log("Current hashmap Length:", hashmap.length());
console.log("New Hashmap");
const emptyHashmap = new HashMap();
emptyHashmap.toString();
console.log("New Empty hashmap Length:", emptyHashmap.length());
console.log("---------------------------------\n\n");

console.log("----- KEYS TESTING -----");
console.log("Current Hashmap:");
hashmap.toString();
console.log(hashmap.keys());
console.log("---------------------------------\n\n");

console.log("----- VALUES TESTING -----");
console.log("Current Hashmap:");
hashmap.toString();
console.log(hashmap.values());
console.log("---------------------------------\n\n");

console.log("----- ENTRIES TESTING -----");
console.log("Current Hashmap:");
hashmap.toString();
console.log(hashmap.entries());
console.log("---------------------------------\n\n");

console.log("----- REMOVE TESTING -----");
console.log("Current Hashmap:");
hashmap.toString();
console.log("Remove RandomString0, result:", hashmap.remove("RandomString0"));
hashmap.toString();
console.log("Remove Testing, result:", hashmap.remove("Testing"));
hashmap.toString();
console.log("---------------------------------\n\n");

console.log("----- CLEAR TESTING -----");
console.log("Current Hashmap:");
hashmap.toString();
console.log("Clear hashmap");
hashmap.clear();
hashmap.toString();
console.log("---------------------------------\n\n");

console.log("----- CAPACITY TESTING -----");
console.log("Current Hashmap:");
hashmap.toString();
console.log("Add 14 entries");
for (let i = 0; i < 7; i += 1) {
  hashmap.set(`Key ${i}`, `${i}`);
  hashmap.set(`RandomKey${i}`, `${i}`);
}
hashmap.toString();
console.log("---------------------------------\n\n");
