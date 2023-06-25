#!/usr/bin/env node

const knightMoves = (start, end) => {
    const moves = [
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1]
      ];
    
      const queue = [[start]];
      const visited = new Set();
      visited.add(start.toString());
    
      while (queue.length > 0) {
        const path = queue.shift();
        const [x, y] = path[path.length - 1];
    
        if (x === end[0] && y === end[1]) {
          return path;
        }
    
        for (const [dx, dy] of moves) {
          const newX = x + dx;
          const newY = y + dy;
    
          if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const newPosition = [newX, newY];
    
            if (!visited.has(newPosition.toString())) {
              visited.add(newPosition.toString());
              queue.push([...path, newPosition]);
            }
          }
        }
      }
    
      return [];
}

const printPath = (path) => {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    for (const position of path) {
      console.log(position);
    }
}

const createGameBoard = () => {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        row.push('[ ]');
      }
      board.push(row);
    }
    return board;
}

const displayGameBoard = (board, KnightPosition) => {
    const [knightX, knightY] = knightPosition;
    board[knightX][knightY] = '[K]';
    for (const row of board) {
      console.log(row.join(''));
    }
}

const playGame = (start, end) => {
    const board = createGameBoard();
    displayGameBoard(board, start);
    const path = knightMoves(start, end);
    printPath(path);
}

const start = [0, 0];
const end = [7, 7];
playGame(start, end);



