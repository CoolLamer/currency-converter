import { QueryClient, QueryClientProvider } from 'react-query'
import {HomePage} from "./pages/HomePage";

const queryClient = new QueryClient()

export const App = function (){
    return (
        <QueryClientProvider client={queryClient}>
            <HomePage />
        </QueryClientProvider>
    )
}