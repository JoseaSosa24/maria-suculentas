import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import  {Header}  from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Main } from './components/Main';
import { Footer } from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App d-flex flex-column gap-4">
     <Header />
     <Main />
     <Footer />
    </section>
  )
}

export default App
