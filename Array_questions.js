// let nums = [1, 1, 2]
// Убрать повторяющиеся номера в массиве.

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const removeDuplicate = function (nums) {
  let seen = {};
  let out = [];
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i]
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }
  return out.length
}

console.log('Fist ---', removeDuplicate(nums))


// Say you have an array prices for which  the i-element  is price of given stock on day i.
// algorithm to find the maximum price

let maxProfitCalc = (nums) => {
  let maxProfit = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    const diff = nums[i + 1] - nums[i];
    if (diff > 0) {
      maxProfit += diff;
    }
  }
  return maxProfit
}
console.log('Second ---', maxProfitCalc([7, 1, 5, 3, 6, 4]))

// rotate function

const rotate = function (nums, k) {
  if (nums.length > k) {
    nums.unshift(...nums.splice(-k))
  } else {
    let i = 0
    while (i < k) {
      nums.unshift(nums.splice(-1))
      i++
    }
  }
  return nums
}
console.log('Third ---',rotate([1, 2, 3, 4, 5, 6, 7], 3))
