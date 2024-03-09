import './App.css'
import Header from './components/Header.jsx'
import MainMenu from './components/MainMenu.jsx'
import Aside from './components/Aside.jsx'
import Content from './components/Content.jsx'
import {ProductProvider} from './components/context/ProductContext.jsx'
import {FilterProvider} from './components/context/FilterContext.jsx'

function App() {

  return (
    <>
      <Header />
      <ProductProvider>
        <MainMenu />
        <FilterProvider>
          <Aside />
          <Content />
        </FilterProvider>
      </ProductProvider> 
    </>
  )
}

export default App
