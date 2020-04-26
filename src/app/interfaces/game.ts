import {WiningType} from './wining-type';

export interface Game {
    id:string,
    lastNumber: number,
    remainingNumbers: number[],
    completedNumbers: number[],
    firstFive: WiningType,
    firstRow: WiningType,
    secondRow: WiningType
    thirdRow: WiningType,
    fullHouse: WiningType,
    completed: boolean,
    updatedTime: number;
}
export interface UserGameStatus{
  isFirstFiveCompleted:boolean;
  isFirstRowCompleted:boolean;
  isSecondRowCompleted:boolean;
  isThirdRowCompleted:boolean;
  isFullHouse:boolean;
}
