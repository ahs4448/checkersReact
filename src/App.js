import './App.css';
import React, { useState, useEffect } from "react";

// Navigation
function Navigation({ playerOneTurn }) {
  return (
    <nav className="navbar">
      <div className="nav-left" style={{ color: playerOneTurn ? "black" : "green" }}>Player 2</div>
      <div className="nav-center">CHECKERS</div>
      <div className="nav-right" style={{ color: playerOneTurn ? "green" : "black" }}>Player 1</div>
    </nav>
  );
}

// Square component
function Square({ isDark, piece, isSelected, onClick }) {
  return (
    <div className={`square ${isDark ? "dark" : "light"}`} onClick={onClick}>
      {piece && (
        <div className={`piece ${piece.player === 1 ? "playerOne" : "playerTwo"} ${isSelected ? "selectedPiece" : ""}`}>
          {piece.king ? "K" : ""}
        </div>
      )}
    </div>
  );
}

// Board component
function Board() {
  const [playerOneTurn, setPlayerOneTurn] = useState(true);

  // 32 dark squares (playable)
  const initialPieces = Array(32).fill(null);
  for (let i = 0; i < 12; i++) initialPieces[i] = { player: 1, king: false };
  for (let i = 20; i < 32; i++) initialPieces[i] = { player: 2, king: false };

  const [pieces, setPieces] = useState(initialPieces);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
  console.log("Clicked square (1–32):", index + 1);

  const clickedPiece = pieces[index];

  // Clicking your own piece
  if (clickedPiece && clickedPiece.player === (playerOneTurn ? 1 : 2)) {
    setSelectedIndex(index); // automatically selects/switches
    return;
  }

  // If clicked an empty square while a piece is selected → future move logic
  if (selectedIndex !== null) {
    console.log("Attempt move from", selectedIndex + 1, "to", index + 1);
    setSelectedIndex(null); // reset selection after move attempt
  }
};


  // Optional: log when selection updates
  useEffect(() => {
    if (selectedIndex !== null) {
      console.log("Selected square (1–32):", selectedIndex + 1);
    }
  }, [selectedIndex]);

  const squares = [];
  let darkIndex = 0; // maps 32 dark squares

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isDark = (row + col) % 2 !== 0;
      const piece = isDark ? pieces[darkIndex] : null;
      const currentIndex = darkIndex;

      squares.push(
        <Square
          key={row * 8 + col}
          isDark={isDark}
          piece={piece}
          isSelected={isDark && currentIndex === selectedIndex}
          onClick={() => isDark && handleClick(currentIndex)}
        />
      );

      if (isDark) darkIndex++;
    }
  }

  return (
    <>
      <Navigation playerOneTurn={playerOneTurn} />
      <div id="container">
        <div className="board">{squares}</div>
      </div>
    </>
  );
}

// App component
function App() {
  return <Board />;
}

export default App;


