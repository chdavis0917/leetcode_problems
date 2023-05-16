const canConstruct = (ransomNote, magazine) => {
    const ransomMap = new Map();
    const magazineMap = new Map();
  
    // Populate ransomMap with the count of each character in ransomNote
    for (let char of ransomNote) {
      ransomMap.set(char, (ransomMap.get(char) || 0) + 1);
    }
    console.log(ransomMap);
  
    // Populate magazineMap with the count of each character in magazine
    for (let char of magazine) {
      magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
    }

    console.log(magazineMap);
  
    // Check if ransomNote can be constructed from magazine
    for (let [char, count] of ransomMap) {
      if (!magazineMap.has(char) || magazineMap.get(char) < count) {
        return false;
      }
    }
  
    return true;
  };
  
  // Test case
  const ransomNote = "a";
  const magazine = "b";
  console.log(canConstruct(ransomNote, magazine)); // Output: false
  