const twoSum = function(nums, target) {
    const numbersMap = {};
    for (let i = 0; i < nums.length; i++) {
    
    const num = target - nums[i];
    
    if (numbersMap[num] !== undefined) {
      
      return [numbersMap[num], i];
    }
    
    numbersMap[nums[i]] = i;
  }
};

// Teste de output 

console.log(twoSum([2, 7, 11, 15], 9))