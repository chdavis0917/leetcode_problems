const isValidSudoku = (board) => {
    const isValid = (arr) => {
      const seen = new Set();
      for (let num of arr) {
        if (num !== '.' && seen.has(num)) {
          return false;
        }
        seen.add(num);
      }
      return true;
    };
  
    // Check rows
    for (let i = 0; i < 9; i++) {
      if (!isValid(board[i])) {
        return false;
      }
    }
  
    // Check columns
    for (let j = 0; j < 9; j++) {
      const column = [];
      for (let i = 0; i < 9; i++) {
        column.push(board[i][j]);
      }
      if (!isValid(column)) {
        return false;
      }
    }
  
    // Check sub-boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
      for (let boxCol = 0; boxCol < 3; boxCol++) {
        const subBox = [];
        for (let i = boxRow * 3; i < boxRow * 3 + 3; i++) {
          for (let j = boxCol * 3; j < boxCol * 3 + 3; j++) {
            subBox.push(board[i][j]);
          }
        }
        if (!isValid(subBox)) {
          return false;
        }
      }
    }
  
    return true;
  };
  
  // Test case
  const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];
  
  console.log(isValidSudoku(board));