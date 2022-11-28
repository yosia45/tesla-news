import './App.css';
import 'antd/dist/reset.css'

import router from './router/index';
import {RouterProvider} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
