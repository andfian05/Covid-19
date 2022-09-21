

import Card from "./components/Card/Card";
import Foot from "./components/Footer/Foot";
import Form from "./components/Form/Form";
import Nav from "./components/Navbar/Nav";
import Provinsi from "./components/Provinsi/Provinsi";

import Two from "./components/Two/Two";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <Nav />
      <Home />
      <Two />
      {/* <Card /> */}
      <Provinsi />
    
      
      <Form />
      <Foot />
     

    </div>
  );
}

export default App;
