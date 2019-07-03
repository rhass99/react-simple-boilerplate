import {
  UPDATE_MSG, UPDATE_MSGLIST, UPDATE_USERNAME
} from './constants';

const chatReducer = (state={}, {type, payload}) => {
  switch(type) {
    case UPDATE_MSG:
      return {
        ...state,
        message : payload
      }
    case UPDATE_MSGLIST:
      console.log("updated")
      console.log(payload)
      console.log({
        ...state,
        messageList: [...state.messageList, payload]
      })
      return {
        ...state,
        messageList : [...state.messageList, payload]
      }
    case UPDATE_USERNAME:
      return {
        ...state,
        username : payload
      }
    default:
      return state;
  }
}

export default chatReducer;