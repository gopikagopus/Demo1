
import './App.css'

function App() {
  

  return (
    <>
      
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
   </Routes>



    </>
  )
}

export default App
