
import './App.css'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
function App() {

  return (
    <div className='p-3 lg:p-0 max-w-[1320px] mx-auto lg:pt-[50px]'>
      <Header></Header>
      
      <OurRecipes></OurRecipes>
    </div>
  )
}

export default App
