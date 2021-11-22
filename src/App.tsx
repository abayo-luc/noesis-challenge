import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import 'antd/dist/antd.css';
import { DataTable } from './Table';

export const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <DataTable />
  </QueryClientProvider>
);

export default App;
