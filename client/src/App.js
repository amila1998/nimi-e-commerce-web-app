import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import Header from './components/headers/Header';
import MainPages from './components/mainpages/Pages';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
        
          <header>
            <Header />
          </header>
          <main>
            <MainPages />
          </main>
         
        
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;