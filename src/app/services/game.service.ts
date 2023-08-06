import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public gameState = [3,3,3,3,3,3,3,3,3];

  public winPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  public gameDraw = false;
  public gameOver = false;
  public winner = 3;
  public chance = 0;


  constructor() { }

  // methods


  changeGameState(postion:number){
    // check game over
    if(this.gameOver){
      alert("Game is Over..");
      return;
    }

    // check for postion occupied
    if(this.gameState[postion]!==3){
      alert("Position is  allready occupied..");
      return;
    }

    // if posion is blank - blank==3
    this.gameState[postion]=this.chance;

    // check for winner 
    if(this.checkWinner()){
      this.gameOver=true;
      this.winner=this.chance;
      return;
    }

    // if no winner 

    // check for drwa
    if(this.checkDrwa()){
      this.gameOver=true;
      this.gameDraw=true;
      return;
    }

    // if no winner no  drwa
    this.chance=this.chance==1 ? 0:1;
  }

  // ganeStart
  restartGame() {


    this.gameState = [3, 3, 3, 3, 3, 3, 3, 3, 3];

    this.winPos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    this.gameDraw = false;
    this.gameOver = false;
    this.winner = 3;
    this.chance = 0;


  }

  // check winner
  checkWinner(){
    for(let i=0;i<this.winPos.length;i++){
      let winningSubArray=this.winPos[i];

      if(this.gameState[winningSubArray[0]]===
        this.gameState[winningSubArray[1]]&&
        this.gameState[winningSubArray[1]]===
        this.gameState[winningSubArray[2]]&&
        this.gameState[winningSubArray[0]]!==3){
          return true
      }
    }
    return false
  }

  // check draw
  checkDrwa(){
    for(let i=0;i<this.gameState.length;i++){
      if(this.gameState[i]==3){
        return false;
      }
    }
    return true;
  }
  
}
