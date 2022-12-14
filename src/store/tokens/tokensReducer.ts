import { Action } from './actions';

export interface TokenState {
  tokens: string,
  id: string
}

const initialState = {
  tokens: '',
  id: ''
}

// o (state) ele recebe o estado da minha aplicação, e o que está entre {} é a ação, que é o que vai modificar o state
export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
  //esse switch vai olhar o tipo da minha ação
  switch(action.type){
    //se o type for do tipo ADD_TOKEN minha propriedade tokens receber o token (que é o payload)
    case "ADD_TOKEN": {
      return {tokens: action.payload, id: state.id}
    }
    case "ADD_ID": {
      return {id: action.payload, tokens: state.tokens}
    }
    //caso não seja ele vai me retornar ao estado original, que é vazio
    default: return state
  }
}