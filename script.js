function myFunction(nums) {
  let resultArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let z = i + 1; z < nums.length; z++) {
      for (let y = z + 1; y < nums.length; y++) {
        if (
          nums[i] + nums[z] + nums[y] === 0 &&
          !resultArray.includes([nums[i], nums[z], nums[y]].sort())
        ) {
          console.log(`\nPushing Array: ${[nums[i], nums[z], nums[y]].sort()}`);
          console.log(`Current result Array: `);
          console.log(resultArray);
          resultArray.push([nums[i], nums[z], nums[y]].sort());
        }
      }
    }
  }

  return resultArray;
}

const result = myFunction([-1, 0, 1, 2, -1, -4]);
console.log(result);
