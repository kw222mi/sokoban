import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import { level1, level1Layout } from "../data/levels";
import "./board.css";

interface Position {
  x: number;
  y: number;
}

const Board = () => {
  const [board, setBoard] = useState<number[][]>(level1);
  const [charPos, setCharPos] = useState<Position | undefined>();
 

  const getCharStartPosition = () => {
    const posY = board.findIndex((row) => row.includes(5));
    console.log(posY);
    const posX = board[posY].findIndex((x) => x === 5);
    console.log(posX);
    return { x: posX, y: posY };
  };

   const getStorageLocationPositions = () => {
    const array =[]
    board.forEach((row, rowIndex) => {
        row.forEach((tile, colIndex) => {
            if (tile === 4) {
                array.push({y:rowIndex, x:colIndex});
            }
        });
    });
     return array;
    };

     const storageLocation:Position[] = getStorageLocationPositions()

  useEffect(() => {
    
    const startPosition = getCharStartPosition();
    setCharPos(startPosition);
    
  }, []);

  const upDateCharPos = (y: number, x: number) => {
    const newBoard = [...board];
    console.log("storage" + storageLocation)
    
    //const isStorageLocation = storageLocation.filter((pos) => pos.y == charPos!.y && pos.x == charPos!.x)
    //console.log(isStorageLocation)
    newBoard[charPos!.y][charPos!.x] = level1[charPos!.y][charPos!.x] === 4? 4 : 3;
    newBoard[y][x] = 5;
    setCharPos({ y: y, x: x });
    setBoard(newBoard);
  };

  const boxMove = (y: number, x: number) => {
    const newBoard = [...board];
    newBoard[y][x] = 2;
    setBoard(newBoard);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    let newY: number = 0;
    let newX: number = 0;
    let newBoxPositionX: number = 0;
    let newBoxPositionY: number = 0;
    if (charPos)
      switch (event.key) {
        case "ArrowUp":
          newY = charPos.y - 1;
          newBoxPositionY = newY - 1;
          newX = charPos.x;
          newBoxPositionX = newX;
          break;
        case "ArrowDown":
          newY = charPos.y + 1;
          newBoxPositionY = newY + 1;
          newX = charPos.x;
          newBoxPositionX = newX;
          break;
        case "ArrowLeft":
          newY = charPos.y;
          newBoxPositionY = newY;
          newX = charPos.x - 1;
          newBoxPositionX = newX - 1;
          break;
        case "ArrowRight":
          newY = charPos.y;
          newBoxPositionY = newY;
          newX = charPos.x + 1;
          newBoxPositionX = newX + 1;
          break;
      }

    switch (board[newY][newX]) {
      case 3:
      case 4:
        upDateCharPos(newY, newX);
        break;
      case 2:
        if (
          board[newBoxPositionY][newBoxPositionX] === 3 ||
          board[newBoxPositionY][newBoxPositionX] === 4
        ) {
          boxMove(newBoxPositionY, newBoxPositionX);
          upDateCharPos(newY, newX);
        }
        break;
    }
  };

  return (
    <div className="board" tabIndex={0} onKeyDown={handleKeyDown} autoFocus>
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((tile, colInd) => (
            <Tile key={`${rowIndex}-${colInd}`} image={level1Layout[tile]} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
