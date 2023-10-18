import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Users/Home';
import AdminLogin from './Admin/AdminLogin';
import AdminRegister from './Admin/AdminRegister';
import AdminProduct from './Admin/AdminProduct';
import AdminCategory from './Admin/AdminCategory';
import Layout from './components/Layout';
import Product from './Users/Product';

function App() {
  return (
       <BrowserRouter>
            <Routes>
               {/* user route */}
                <Route path='/' element={<Layout/>}>
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='/product' element={<Product/>}></Route>

                </Route>


                {/* Admin route */}
                    <Route path='/admin' element={<AdminLogin/>}></Route>
                    <Route path='/admin/register' element={<AdminRegister/>}></Route>
                    <Route path='/admin/category' element={<AdminCategory/>}></Route>
                    <Route path='/admin/product' element={<AdminProduct/>}></Route>

                

            </Routes>
       </BrowserRouter>
  );
}

export default App;
