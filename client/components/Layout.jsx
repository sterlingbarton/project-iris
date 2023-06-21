import { createContext, useContext, useReducer } from 'react'
import OuterNav from "./OuterNav";
import InnerNav from "./InnerNav";
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
            <OuterNav />
            <InnerNav />
            <SideBar />
            { children }
        </GlobalState.Provider>
     );
}

export {GlobalState, Layout}


