
import './App.css'
import Footer from "./components/Footer";

import Home from "./components/Home";

function App() {
 

  return (
    <div className="flex flex-col h-screen max-width: 1280px">
    <div className="">
      <Home></Home>
    </div>
    <div className="mt-auto">
      <Footer></Footer>
    </div>
  </div>
  )
}

export default App
