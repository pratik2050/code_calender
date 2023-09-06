import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import DataContest from './components/DataContest.js';
import Home from './components/Home.js';
//  import Navbar from './components/Navbar.js';
function App() {
  return (
   <div>
    {/* {<DataContest myURL = "https://kontests.net/api"/>} */}
  
      <BrowserRouter>
         <Routes>
        <Route path='/' element={<Home />} />      
        <Route path='/codechef' element={<DataContest name="Code Chef" myURL = "https://kontests.net/api/v1/code_chef"/>} />      
        <Route path='/codeforces' element={<DataContest name="Code Forces" myURL = "https://kontests.net/api/v1/codeforces"/>} />      
        <Route path='/leetcode' element={<DataContest name="Leet Code" myURL = "https://kontests.net/api/v1/leet_code"/>} />      
        <Route path='/topcoder' element={<DataContest name="Top Coder" myURL = "https://kontests.net/api/v1/top_coder"/>} />      
        </Routes>
      </BrowserRouter>

   </div>
    
  );
}

 export default App;

