import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Education } from './components/Education';
import { Presentation } from './components/Presentation';

function App() {
  return (
    <div id="home">
      <Header />

      <main className="my-16 space-y-15 text-zinc-800">
        <Presentation />

        <About />

        <Education />
      </main>

      <Footer />
    </div>
  );
}

export default App;
