import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import  {Header}  from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
     <Header />
    </section>
  )
}

export default App
