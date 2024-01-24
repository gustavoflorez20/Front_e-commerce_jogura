import Header from '../Routes/Header';
import Conten from '../Routes/Conten';
import Section2 from '../Routes/Section2'
import Footer from '../Routes/Footer';
/* import Navbar from '../ComponentsHome/Navbar' */


const HomePage = () => {
  return (
    <div>
        <Header/>
       {/*  <Navbar/> */}
        <Conten/>
        <Section2/>
        <Footer/>
        
        
    </div>
  )
}

export default HomePage