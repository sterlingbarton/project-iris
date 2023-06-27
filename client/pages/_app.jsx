import {Layout} from '../components/Layout';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
// import '../styles/globals.css'

export default function App({ Component, pageProps }) {

    return ( 
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </LocalizationProvider>
     );
}
