import './App.css';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Todos } from './components/Todos';
import {Section } from './components/Section';
import { Footer } from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <main>
        <Header/>
        <Form/>
        <Todos/>
        <Section/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
