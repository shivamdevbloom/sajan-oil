import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';
import Dashboard from './component/pages/Dashboard';
import AboutUs from './component/pages/AboutUs';
import ProductPage from './component/productpage/ProuductPage';
import ContactPage from './component/contactUsPage/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}>
           <Route index element={<Home/>}/>
           <Route path='/aboutus' element={<AboutUs/>}/>
           <Route path='/productpage' element={<ProductPage/>}/>
           <Route path='/contactus' element={<ContactPage/>}/>
           <Route path='/contactus' element={<ContactPage/>}/>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
