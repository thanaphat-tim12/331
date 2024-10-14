import { Provider } from 'react-redux'; 
import Store from './Store';
import AppRouter from './AppRouter'; 

 

function App() { 

  return ( 

    <Provider store={Store}> 

      <AppRouter /> 

    </Provider> 

  ); 

} 

 

export default App; 