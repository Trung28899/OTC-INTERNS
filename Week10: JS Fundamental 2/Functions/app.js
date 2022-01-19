// 1. Function Declaration:
console.log("// 1. Function Declaration Syntax:");

function callName(name) {
  const name2022 = `${name} in 2022`;
  return name2022;
}

const newName = callName("Trung");
console.log(newName);

/*********************************  END PART 1    ****************************************/

// 2. Function Expression: do the same thing, different syntax
console.log("");
console.log("// 2. Function Expression:");

const callName2 = function (name) {
  const name2022 = `${name} in 2022`;
  return name2022;
};

const newName2 = callName2("Linh");
console.log(newName2);

/*********************************  END PART 2   ****************************************/

// 3. Arrow Function: do the same thing, different syntax
console.log("");
console.log("// 3. Arrow Function:");

const callName3 = (name) => {
  const name2022 = `${name} in 2022`;
  return name2022;
};
const newName3 = callName3("ONTHECARD");
console.log(newName3);

// BONUS: Another way to declare function:
console.log("// BONUS: Another way to declare function:");

const callName4 = (name) => `${name} in 2022`;

const newName4 = callName4("ONTHECARD");
console.log(newName4);

/*********************************  END PART 3   ****************************************/
console.log("");
console.log(
  "// 4. Differences between Function Declaration vs Function Expression and Arrow Function"
);
// 4. Differences between Function Declaration vs Function Expression and Arrow Function
/*
    - Function Declaration: Can do hoisting
    - Function Expression: Cannot do hoisting
    - Arrow Function: Cannot do hoisting. Newest syntax - ES6

    *, Hoisting: call a function before it is created (initialized)
*/

// Example of hosting:

const tuoiTrung = tinhTuoi(1999);
console.log(tuoiTrung);

function tinhTuoi(namSinh) {
  return 2022 - namSinh;
}

const tinhTuoi2 = function (namSinh) {
  return 2022 - namSinh;
};

const tinhTuoi3 = (namSinh) => 2022 - namSinh;

/*********************************  END PART 4   ****************************************/

// 5. Calling a function within a function
console.log("");
console.log("// 5. Calling a function within a function");

const baoNhieuTuoi = (namSinh, namTrongTuongLai) => {
  const tuoiTuongLai = namTrongTuongLai - namSinh;
  const tuoiNamNay = tinhTuoi(namSinh);

  return `Năm nay bạn ${tuoiNamNay} tuổi. Vào năm ${namTrongTuongLai}, bạn sẽ ${tuoiTuongLai} tuổi`;
};

console.log(baoNhieuTuoi(1999, 2055));

/*********************************  END PART 5   ****************************************/
