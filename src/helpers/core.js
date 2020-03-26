const createBoard = (rows, columns) => {

    const playerRow = Math.round(rows / 2);
    const playerColumn = Math.round(columns / 2);
    const playerLocation = { row: playerRow, column: playerColumn };

    let occupiedLocations = new Map();
    const playerSquare = playerLocation.row * columns + playerLocation.column;
    const boardSquares = rows * columns;

    // Generate unique random numbers between 0 and rows * columns
    while (occupiedLocations.size < rows) {
        const newValue = random(boardSquares);
        if (!occupiedLocations.has(newValue) && newValue !== playerSquare) {
            occupiedLocations.set(newValue);
        }
    }

    const elements = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (occupiedLocations.has(i * columns + j)) {
                elements.push({ row: i, column: j, hasEnemy: true });
            } else {
                elements.push({ row: i, column: j, hasEnemy: false });
            }
        }
    };

    return {
        elements,
        rows,
        columns,
        playerLocation,
        totalMoves: 0,

    };
};

const random = (maxNum) => {
    return Math.round(Math.random() * maxNum);
}

module.exports = { createBoard };