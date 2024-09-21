import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import cartStore from './Redux/cartStore.js';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

<Provider store={cartStore}>
<App />
</Provider>

    </BrowserRouter>
  
  </StrictMode>,
)
