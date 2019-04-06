import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "../actionTypes";

let maxId = 4;

const playerInitialState = {
  title: 'My Scoreboard',
  players: [
    {name: "LDK", score: 0, id: 1},
    {name: "HONG", score: 0, id: 2},
    {name: "KIM", score: 0, id: 3},
    {name: "PARK", score: 0, id: 4},
  ]
}

export const playerReducer = (state = playerInitialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      }
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {name: action.name, score: 0, id: ++maxId}
        ]
      }
    case CHANGE_SCORE:
      state.players.forEach(player => {
        if (player.id === action.id) {
          player.score += action.delta;
        }
      })
      return {
        ...state,
        players: [...state.players]
      }
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.id)
      }
    default:
      return state;
  }
}