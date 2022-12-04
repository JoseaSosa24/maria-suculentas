import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { Article } from './components/Article';
import { Galeria } from './components/Galeria';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <section className="App d-flex flex-column gap-4">
        <Header />
        <Article />
        <Galeria/>
        <Main />
        <Footer />
      </section>
    </Router>
  )
}

export default App
