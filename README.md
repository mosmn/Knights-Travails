# Knight Moves

The `knightMoves` function is designed to find the shortest possible way for a knight to move from one square to another on a 2-dimensional board. It returns a list of all the squares the knight will stop on along the way.

![Knight Moves](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/ruby_programming/computer_science/project_knights_travails/imgs/00.png)

## Usage

```javascript
// Any starting and ending positions between [0, 0] and [7, 7] can be used
const start = [3, 0];
const end = [7, 5];

playGame(start, end);
```

## Algorithm

The algorithm used to find the shortest path between two squares is the breadth-first search (BFS). It explores all neighboring squares at each depth level before moving on to the next level. The BFS algorithm guarantees that the first path found will be the shortest one.

## Game Board

To visualize the game board, you can use the `createGameBoard` and `displayGameBoard` functions provided. The board is represented as an 8x8 grid of squares.

```javascript
const board = createGameBoard();
displayGameBoard(board, [3, 3], [4, 3]);
```

The above code will display the game board with the knight's starting position marked as `[K]` and the ending position marked as `[E]`.

## Testing

To run the test cases, you can use the following command:

```shell
node script.js
```

The test cases cover various scenarios to ensure the correctness of the `knightMoves` function.