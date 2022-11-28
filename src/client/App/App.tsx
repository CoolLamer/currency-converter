import { QueryClient, QueryClientProvider } from 'react-query'
import {HomePage} from "./pages/HomePage";
import {ThemeProvider} from "styled-components";

const queryClient = new QueryClient()

const theme = {
    primary0: '#C1F6B9',
    primary1: '#E7FDE4',
    primary2: '#D5FACF',
    primary3: '#ADF0A3',
    primary4: '#99E98D',

    secondary0: '#B1EAE4',
    secondary1: '#E2FBF8',
    secondary2: '#CAF4F0',
    secondary3: '#97DED7',
    secondary4: '#7DCFC6',

    alternative0: '#E9FCBE',
    alternative1: '#F7FEE5',
    alternative2: '#F0FDD2',
    alternative3: '#E2FAAA',
    alternative4: '#DAF796',
}

export const App = function (){
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <HomePage />
            </ThemeProvider>
        </QueryClientProvider>
    )
}