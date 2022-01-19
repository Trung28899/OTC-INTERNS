// 1. Declare and Assign Objects:

console.log("1. Declare and Assign Objects:");

const anhTrung = {
  firstName: "Trung",
  lastName: "Trinh",
  friends: ["Minh", "Duc", "Linh", "Mike", "Nick", "Messi"],
  bornIn: 1999,
};

anhTrung.gender = "male";
anhTrung["graduateIn"] = "April 2020";
anhTrung.getAge = () => {
  return 2022 - anhTrung.bornIn;
};

console.log(anhTrung);
console.log("");

// 2. Access object method and properties:
console.log("anhTrung.firstName");
console.log(anhTrung.firstName);
console.log("");

console.log("anhTrung.getAge()");
console.log(anhTrung.getAge());
console.log("");

console.log("anhTrung['lastName']");
console.log(anhTrung["lastName"]);
console.log("");

console.log("anhTrung['graduate' + 'In']");
console.log(anhTrung["graduate" + "In"]);
console.log("");

console.log("anhTrung.graduateIn");
console.log(anhTrung.graduateIn);
console.log("");
