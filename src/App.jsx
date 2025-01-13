import './App.css';
import { MyApp } from './components/MyApp';
import { BrowserRouter } from 'react-router-dom';
import { Myprovider } from './context/context';
import { CreateStore } from './context/store';


function App() {
  const store=CreateStore();
  return(<> <Myprovider value={store}>
       <BrowserRouter>
        <MyApp />
       </BrowserRouter>
      </Myprovider>
   
  </>
  )
}
export default App;
