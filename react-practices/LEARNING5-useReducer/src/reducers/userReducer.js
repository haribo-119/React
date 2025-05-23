/* 
 * 1) useReducer - 여러 컴포넌트에서 상태를 공유할 때 사용
 *    reducer는 "상태"와 "액션"을 받아서 "새로운 상태"를 반환하는 함수이다
 */

// 반드시 reducers 폴더에 넣어야 되지 않지만, 보통 폴더를 만들어 관리한다
export const initialState = {
    name: '',
    year: '',
    warning: ''
  }
  
  export function userReducer(state, action) {
    switch (action.type) {
      case 'SET_NAME':
        return { 
          ...state, 
          name: action.payload.trim().toLowerCase() }
      case 'SET_YEAR':
        const age
         = new Date().getFullYear() - action.payload
        if (age < 18) {
          return { 
            ...state, 
            warning: 'Must be at least 18 yrs old!' }
        }
        return { 
          ...state, 
          year: action.payload, 
          warning: '' }

       //2) data.jk   
      case 'RESET':
      return init(action.payload)      

      default:
        throw new Error('Unknown action type')
    }
  }

  // 2) data.js
  export function init(externalData) {
    return {
      ...initialState,
      name: externalData.name,
      year: externalData.year
    }
  }