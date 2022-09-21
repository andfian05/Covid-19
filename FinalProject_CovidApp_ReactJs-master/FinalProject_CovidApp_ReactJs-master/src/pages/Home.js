
import Footer from "../components/Footer/Foot";
import Hello from "../components/Hello";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Navbar/Nav";


function Main() {
  return (
    <main>
      {/* <h1>Final Project - Covid ID</h1>
      <h2>Good Luck, Bestie</h2> */}
      <Hello />


      
    </main>
  );
}

function Home() {
  return (
    <div>
     
     <Hero />
      <Main />
     
     
    </div>
  );
}

export default Home;
