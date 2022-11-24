import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {HomePage} from "./pages/HomePage";

const queryClient = new QueryClient()

export function App(){
    return (
        <QueryClientProvider client={queryClient}>
            <HomePage />
        </QueryClientProvider>
    )
}