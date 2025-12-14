import './App.css';
import React, { useEffect, useState } from "react";



var playerOneTurn = true;
var playerTwoTurn = false;
var playerOnePieces = 12;
var playerTwoPieces = 12;
var num;
var arr = [];
var positionRow;
var positionNum;
var isKing = "";
var badMoveValsOdd = [4, 12, 20, 28]
var badMoveValsEven = [5, 13, 21, 29]
var badExtraskipsLeft = [1, 9, 17, 25, 5, 13, 21, 29]
var badExtraskipsRight = [4, 12, 20, 28, 8, 16, 24, 32]




function Navigation() {
  const [color, setColor] = useState(""); // state for the color

  useEffect(() => {
    if (playerOneTurn === true) {
      setColor("green"); // update state
    }
  }, []);



  return (
    <nav className="navbar">
      <div className="nav-left">Player 2</div>
      <div className="nav-center">CHECKERS</div>
      <div className="nav-right" style={{ color: color }}>Player 1</div>
    </nav>
  );
}




function Board() {
   const [board, setBoard] = useState([
    null, "P1", "P1", "P1", "P1",
    "P1", "P1", "P1", "P1",
    "P1", "P1", "P1", "P1",
    "S", "S", "S", "S",
    "S", "S", "S", "S",
    "P2", "P2", "P2", "P2",
    "P2", "P2", "P2", "P2",
    "P2", "P2", "P2", "P2",
  ]);

  let positionArr = [];

  return (

    <div id="container">

      <div className="board">


        <div class="nopiece">
        </div>

        <div class="valid" value="1" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="2" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="3" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="4" data="odd-from-top">
        </div>

        <div class="valid" value="5" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="6" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="7" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="8" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="9" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="10" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="11" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="12" data="odd-from-top">
        </div>

        <div class="valid" value="13" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="14" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="15" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="16" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="17" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="18" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="19" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="20" data="odd-from-top">
        </div>

        <div class="valid" value="21" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="22" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="23" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="24" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="25" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="26" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="27" data="odd-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="28" data="odd-from-top">
        </div>

        <div class="valid" value="29" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="30" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="31" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <div class="valid" value="32" data="even-from-top">
        </div>

        <div class="nopiece">
        </div>

        <Pieces />

      </div>
    </div>
  );
}

function Pieces() {
  return (

    <div>

      <div className="playerOne" data-position={1} data="odd-from-top" style={{ transform: "translate(72px, -512px)" }}>
      </div>

      <div className="playerOne" data-position={2} data="odd-from-top" style={{ transform: "translate(148px, -512px)" }}>
      </div>

      <div className="playerOne" data-position={3} data="odd-from-top" style={{ transform: "translate(224px, -512px)" }}>
      </div>

      <div className="playerOne" data-position={4} data="odd-from-top" style={{ transform: "translate(299px, -512px)" }}>
      </div>

      <div className="playerOne" data-position={5} data="even-from-top" style={{ transform: "translate(-253px, -448px)" }}>
      </div>

      <div className="playerOne" data-position={6} data="even-from-top" style={{ transform: "translate(-178px, -448px)" }}>
      </div>

      <div className="playerOne" data-position={7} data="even-from-top" style={{ transform: "translate(-102px, -448px)" }}>
      </div>

      <div className="playerOne" data-position={8} data="even-from-top" style={{ transform: "translate(-27px, -448px)" }}>
      </div>

      <div className="playerOne" data-position={9} data="odd-from-top" style={{ transform: "translate(72px, -448px)" }}>
      </div>

      <div className="playerOne" data-position={10} data="odd-from-top" style={{ transform: "translate(148px, -448px)" }}>
      </div>

      <div className="playerOne" data-position={11} data="odd-from-top" style={{ transform: "translate(224px, -448px)" }}>
      </div>

      <div className="playerOne" data-position={12} data="odd-from-top" style={{ transform: "translate(300px, -448px)" }}>
      </div>




      <div className="playerTwo" data-position={21} data="even-from-top" style={{ transform: "translate(-253px, -256px)" }}>
      </div>

      <div className="playerTwo" data-position={22} data="even-from-top" style={{ transform: "translate(-178px, -256px)" }}>
      </div>


      <div className="playerTwo" data-position={23} data="even-from-top" style={{ transform: "translate(-102px, -256px)" }}>
      </div>

      <div className="playerTwo" data-position={24} data="even-from-top" style={{ transform: "translate(-27px, -256px)" }}>
      </div>

      <div className="playerTwo" data-position={25} data="odd-from-top" style={{ transform: "translate(72px, -256px)" }}>
      </div>

      <div className="playerTwo" data-position={26} data="odd-from-top" style={{ transform: "translate(148px, -256px)" }}>
      </div>

      <div className="playerTwo" data-position={27} data="odd-from-top" style={{ transform: "translate(223px, -256px)" }}>
      </div>

      <div className="playerTwo" data-position={28} data="odd-from-top" style={{ transform: "translate(299px, -256px)" }}>
      </div>

      <div className="playerTwo" data-position={29} data="even-from-top" style={{ transform: "translate(-253px, -192px)" }}>
      </div>

      <div className="playerTwo" data-position={30} data="even-from-top" style={{ transform: "translate(-178px, -192px)" }}>
      </div>

      <div className="playerTwo" data-position={31} data="even-from-top" style={{ transform: "translate(-102px, -192px)" }}>
      </div>


      <div className="playerTwo" data-position={32} data="even-from-top" style={{ transform: "translate(-27px, -192px)" }}>
      </div>



    </div>
  )
}


function App() {
  return (
    <>
      <Navigation />
      <Board />
    </>
  );
}

export default App;


