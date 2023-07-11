import * as React from 'react';
import Nav from "./Nav";
import { Snackbar, Alert } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AppBar from '@mui/material/AppBar';

const GlobalState = React.createContext(null);

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
            case 'OPEN-SNACKBAR': 
                return {
                    ...state,
                    snackbarState: {
                        ...state.alertState,
                        ...action.payload,
                        open: true
                    }
                }
            case 'CLOSE-SNACKBAR': {
                state.snackbarState.open = false;
                return { ...state };
            }
            default:
                return {...state}
        }
    }

    const [state, dispatch] = React.useReducer(reducer, {
        isLoggedIn: false,
        user: {},
        snackbarState: {
            open: false,
            alertState: '',
            message: ''
          }

    })

    return ( 
        <GlobalState.Provider value={{state, dispatch}}>
            <Nav />
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={state.snackbarState.open}
                    message={state.snackbarState.message}
                >
                <Alert
                    severity={
                    state.snackbarState.alertState ? state.snackbarState.alertState : undefined
                    }
                >
                {state.snackbarState.message}
                </Alert>
                </Snackbar>
                { children }
        </GlobalState.Provider>
     );
}

export {GlobalState, Layout}


