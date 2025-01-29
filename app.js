// masala 9 

function sum2(nums){
    if(nums.length >= 2) {
       return nums[0] + nums[1]
    } else if (nums.length == 0){
      return 0
    } else {
      return nums[0]
    }
}
sum2([1]);

// masala 10

function middleWay(a, b){
    return [a[Math.floor(a.length / 2)] ,  b[Math.floor(b.length / 2)]]
}

// masala 11 

function makeEnds(nums){
    return [ nums[0], nums[nums.length - 1] ] 
}

// masala 12

function has23(nums){
    if(nums.includes(2) || nums.includes(3)) {
      return true
    } else return false
}

// masala 13

function no23(nums){
    if(!nums.includes(2)) {
      if(nums.includes(3)) {
        return false
      }
      return true
    } else return false
}

// masala 14

function makeLast(nums){
    let lastEl = nums[nums.length - 1];
    let newArr = nums.concat(nums);
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = 0;
    }
    newArr[newArr.length - 1] = lastEl;
    return newArr
}

// masala 15

function double23(nums){
    let num = [0, 0];
    for (let i = 0; i <= nums.length; i++) {
      if(nums[i] == 2) {
        num[0]++
      } else if (nums[i] == 3) {
        num[1]++
      }
    }
    if(num.includes(2)) {
      return true
    } else {
      return false
    }
}

// masala 16

function fix23(nums){
    let num;
    for(let i = 0; i <= nums.length; i++) {
      if(nums[i] == 2 && nums[i + 1] == 3) {
        num = nums
      }
    }
    if(num) {
      num[num.indexOf(3)] = 0
      return num
    } else {
      return nums
    }  
}

// masala 17

function start1(a, b){
    if(a[0] == 1 && b[0] == 1) {
      return 2
    } else if(a[0] == 1 || b[0] == 1) {
      return 1
    } else {
      return 0
    }
}

// masala 18

function biggerTwo(a, b){
    if(a[0] + a[1] > b[0] + b[1]) {
      return a
    } else if (a[0] + a[1] == b[0] + b[1]) {
      return a
    } else {
      return b
    }
}

// masala 19

function makeMiddle(nums){
    let half = Math.floor(nums.length / 2)
    return [nums[half - 1], nums[half]]
}

// masala 20

function plusTwo(a, b){
    return a.concat(b)
}

// masala 21

function swapEnds(nums){
    return  [ nums[nums.length - 1],  nums.slice(1, nums.length - 1), nums.length == 1 ? [] : nums[0]].flat()
}

// masala 22

function midThree(nums){
    let middle = Math.floor(nums.length / 2);
    return [nums[middle - 1], nums[middle], nums[middle + 1]]
}

// masala 23

function maxTriple(nums){
    let middle = nums[Math.floor(nums.length / 2)];
    let first = nums[0];
    let last = nums[nums.length - 1];
    return Math.max(first, middle, last)
}

// masala 24

function frontPiece(nums){
    if(nums.length >= 2) {
      return [nums[0], nums[1]]
    } else {
      return nums
    }
}

// masala 25

function unlucky1(nums){
    if(nums[0] == 1 && nums[1] == 3){
      return true
    } else if (nums[nums.length - 2] == 1 && nums[nums.length - 1] == 3) {
      return true
    } else if (nums[1] == 1 && nums[2] == 3) {
      return true
    } else {
      return false
    }
};

// masala 26

function make2(a, b){
    let newArr = a.concat(b);
    return [newArr[0], newArr[1]]
}

// masala 27

function front11(a, b){
    return [a[0] ? a[0] : [], b[0] ? b[0] : []].flat()
}
