// import logo from './logo.svg';
import './App.css';
//  
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import React , { useState }from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





// let name = "Guddu";
function App() {
  const[mode , setMode] = useState('dark');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    },3000)
  }



  const toggleMode =() => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing Mode'
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils is Amazing Mode'
      // },1500);
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
//     <>
//     <h1>This is me</h1>
//     <div className="App">
//       <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with guddu  
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }

//made self 
/* <div className="blank">Lovely</div> */

/* <>
<nav>
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</nav>
<div className='container'>
  <h1>Hello {name}</h1>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quidem sint quaerat earum dolorem deserunt, sapiente non aspernatur, nihil assumenda ea! Distinctio et animi deleniti alias consequatur modi nulla quaerat.
</div>
</> */
<>


{/* boots strap navbar components */}
{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
    
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}

{/* <Router> */}
  <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
    {/* <Routes>
      <Route exact path="/about" element={<About />} /> */}
      {/* <Route exact path="/" element={*/}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    {/* </Routes> */}
  </div>
{/* </Router> */}

</>
);
}
export default App;
