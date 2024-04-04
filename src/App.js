import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Works from "./components/Projects/Works";
import Contact from "./contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
