import React from 'react';
import './App.css';
import Routes from './routes';

// import { Button } from 'reactstrap';

// import Headers from './components/Headers';
// import Footer from './components/Footer';
// import BarraNav from './components/Navbar';


// function App() {
//   return (
//     <div className="App">
//       ola thais
//     </div>
//   );
// }

// class App extends React.Component {
//   render(){
//     return (
//       <div className="App">
        
//         <Navbar/>
//         <Headers/>
//         <Footer/>

//       </div>
//     )
//   }
// }

function App (props) {
  return (
    <div>
      {/* <BarraNav/>
      <Headers/>
      <Footer/>
      <Button color="danger">Danger!</Button> */}
      <Routes/>
    </div>
  );
};


export default App;
