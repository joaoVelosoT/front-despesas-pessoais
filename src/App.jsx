

// 2 - Reaproveitamento de estrutura
import {Outlet} from 'react-router-dom'



// Navegando entre as rotas
import NavBar from './components/NavBar';
function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        {/* <h1>React Router</h1> */}
        <Outlet />
        <p>FOOTER PADRAO</p>
      </div>
    </>
  )
}

export default App
