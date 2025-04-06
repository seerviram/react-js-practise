import React, { useState, useEffect, useRef } from "react";
import "./style.css"
const styles={
  green: {
    backgroundColor: 'green'
  },
  gray: {
    backgroundColor: 'gray'
  },
  red: {
    backgroundColor: 'red'
  }
}

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(getRandomFoodPosition());
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const gameLoopRef = useRef(null);

  function getRandomFoodPosition() {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowUp" && direction.y === 0) setDirection({ x: 0, y: -1 });
      if (event.key === "ArrowDown" && direction.y === 0) setDirection({ x: 0, y: 1 });
      if (event.key === "ArrowLeft" && direction.x === 0) setDirection({ x: -1, y: 0 });
      if (event.key === "ArrowRight" && direction.x === 0) setDirection({ x: 1, y: 0 });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction]);

  useEffect(() => {
    gameLoopRef.current = setInterval(() => moveSnake(), 150);
    return () => clearInterval(gameLoopRef.current);
  }, [snake]);

  const moveSnake = () => {
    const newSnake = [...snake];
    const newHead = {
      x: newSnake[0].x + direction.x,
      y: newSnake[0].y + direction.y,
    };

    // Check collision with walls
    if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
      setIsGameOver(true);
      clearInterval(gameLoopRef.current);
      return;
    }

    // Check collision with itself
    if (newSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
      setIsGameOver(true);
      clearInterval(gameLoopRef.current);
      return;
    }

    newSnake.unshift(newHead);
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(getRandomFoodPosition());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(getRandomFoodPosition());
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
  };

  return (
    <div>
      <h1 >🐍 Snake Game</h1>
      <div class="gamecontainer">
        <canvas id="gameBoard" width="500" height="500"></canvas>
        <div class="score"></div>
    </div>
      {/* <div >
        {[...Array(GRID_SIZE)].map((_, y) =>
          [...Array(GRID_SIZE)].map((_, x) => {
            const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;
            return (
              <div
                key={`${x}-${y}`}
                className={`${isSnake ? "greenSnack" : "gray"} ${isFood ? "redfood" : ""}`}
              />
            );
          })
        )}
      </div>
      {isGameOver && (
        <div >
          Game Over! <button onClick={resetGame}>Restart</button>
        </div>
      )} */}
    </div>
  );
};

export default SnakeGame;
