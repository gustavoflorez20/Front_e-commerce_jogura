import Header from '../ComponentsHome/Header';
import Frozen  from '../ComponentsFrozen/Frozen';
import Section2 from '../ComponentsHome/Section2'
import Footer from '../ComponentsHome/Footer';
import Home from '../ComponentsInventory/Home';



const FrozenPage = () => {
  return (
    <div>
        <Header/>
        <Frozen/>
        <Home/>
        <Section2 />
        <Footer/>

        
    </div>
  )
}

export default FrozenPage