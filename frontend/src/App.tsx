// import './App.css'
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import { Signup } from './pages/Signup';
// import { Signin } from './pages/Signin';
// import { Dashboard } from './pages/Dashboard';
// import { SendMoney } from './pages/SendMoney';

import { Heading } from "./components/Heading"
import { InputBox } from "./components/InputBox"
import { SubHeading } from "./components/SubHeading"

function App() {

  return (
    // <>
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/signup" element={<Signup/>}/>
    //     <Route path="/signin" element={<Signin />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/send" element={<SendMoney />} />
    //   </Routes>
    //   </BrowserRouter>
    // </>

    <InputBox label="firstname" type="password" placeholder="aditya"></InputBox>

  )
}

export default App
