// src/App.js
import React from 'react';
import Navbar from './components/navbar/Navbar.js';
//import Form from './components/form/login/Login.js';
import Form from './components/form/register/RegisterForm.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
