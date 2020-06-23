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
console.log('Third ---', rotate([1, 2, 3, 4, 5, 6, 7], 3))

// contains dublicate

const containsDuplicate = function (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = 1 + (count[nums[i]] || 0);
  }
  let found = Object.keys(count).filter(function (key) {
    return count[key] > 1
  })
  return found.length ? true : false;
}
console.log(containsDuplicate([1, 2, 5, 4]))

// Single number

let singleNumber = (nums) => nums.reduce((c, n) => c ^= n)

console.log(singleNumber([2, 5, 2]))

// Intersection of Two Arrays II

let intersect = function (nums1, nums2) {
  return nums1.filter(x => nums2.includes(x))
}
console.log(intersect([1, 2, 6, 5], [8, 9, 7, 5]));

// Plus One

let plusOne = function (digits) {
  for (let i = 0; i < digits.length; i++) {
    let last = digits[digits.length - 1] + 1
    result = digits.slice(0, digits.length - 1).concat(last);
    return result
  }
}
console.log(plusOne([1, 2, 3, 4, 5]));
