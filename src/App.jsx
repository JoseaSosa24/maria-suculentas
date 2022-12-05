import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Article } from './components/Article';
function App() {
  const [count, setCount] = useState(0)

  return (

    <section className="App">
      <Header />
      <Main />
      <Footer />
    </section>

  )
}

export default App
