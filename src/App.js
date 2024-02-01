import './App.css';
import './index.css'
import Home from './screens/Home';
import Login from './screens/Login';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './component/ContextReducer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './screens/Signup';
import MyOrder from './screens/MyOrder';
function App() {
  return (
    <CartProvider>
    <Router> 
    <div>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/CreateUser" element={<Signup/>}/>
    <Route exact path="/myOrder" element={<MyOrder/>}/>
    </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
