import { createContext, useContext, useReducer } from 'react'
import Nav from "./Nav";
import SideBar from "./SideBar";

const GlobalState = createContext(null);

function Layout({ children }) {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'LOGIN':
                return {
                    ...state,
                    isLoggedIn: true,
                    user: action.payload
                }
            case 'LOGOUT':
                return{ 
                    isLoggedIn: false,
                    user: {}
                }
            case 'CHECK':
                return{
                    user: action.payload
                }
            case 'SIGNUP':
                return{
                    ...state,
                    isLoggedIn: true,
                    user: action.payload
                }
            case 'DELETE':
                return{
                    isLoggedIn: false,
                    user: {}
                }
            case 'EDIT':
                return{
                    isLoggedIn: true,
                    user: action.payload
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        isLoggedIn: false,
        user: {}
    })

    return ( 
        <GlobalState.Provider value={{state, dispatch}}>
            <Nav />
            <SideBar />
            { children }
        </GlobalState.Provider>
     );
}

export {GlobalState, Layout}


