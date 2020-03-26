import React, { useState } from 'react';
import Square from './Square';
import { createBoard } from '../helpers/core';

const Board = ({ rows, columns }) => {

    const [model, setModel] = useState(createBoard(rows, columns));

    const moveHandler = (direction) => {
        if (direction === 1) {
            if (model.playerLocation.row > 0) { model.playerLocation.row--; }
        } else if (direction === 2) {
            if (model.playerLocation.row < model.rows - 1) { model.playerLocation.row++; }
        } else if (direction === 3) {
            if (model.playerLocation.column > 0) { model.playerLocation.column--; }
        } else if (direction === 4) {
            if (model.playerLocation.column < model.columns - 1) { model.playerLocation.column++ }
        }

        const enemy = model.elements.find(a => a.row === model.playerLocation.row && a.column === model.playerLocation.column);
        if (enemy) {
            enemy.hasEnemy = false;
        }
        model.totalMoves++;
        setModel({ ...model });
        if (!model.elements.find(a => a.hasEnemy)){
            alert('Game over. Total moves to save princess: ' + model.totalMoves);
            setModel(createBoard(rows, columns));
        }
    }

    let divs = [];
    for (let i = 0; i < model.rows; i++) {
        for (let j = 0; j < model.columns; j++) {
            divs.push(<Square row={i} column={j} board={model}></Square>);
        }
        divs.push(<br></br>);
    }

    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37:
                moveHandler(3);
                break;
            case 38:
                moveHandler(1);
                break;
            case 39:
                moveHandler(4);
                break;
            case 40:
                moveHandler(2);
                break;
            default:
                break;
        }
    };
    return divs;

}

export default Board;