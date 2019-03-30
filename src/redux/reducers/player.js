import {ADD_PLAYER, UPDATE_TITLE} from "../actionTypes";

let maxId = 4;

const playerinitialState = {
  title :'My Scoreboard',
  players: [
    {name: "LDK", score: 0, id: 1},
    {name: "HONG", score: 0, id: 2},
    {name: "KIM", score: 0, id: 3},
    {name: "PARK", score: 0, id: 4},
  ]
}

export const playerReducer = (state = playerinitialState,action) => {
  switch (action.type) {
    case UPDATE_TITLE :
      return {
        ...state,
        title:action.title
      }
    case ADD_PLAYER :
      return {
        ...state,
        players: [
          ...state.players,
          {name:action.name, score : 0,id:++maxId}
        ]
      }
    default:
      return state;
  }
}