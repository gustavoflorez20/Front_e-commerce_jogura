import { BrowserRouter, Routes , Route, } from 'react-router-dom';
import HomePage from './Containers/HomePage';
import NosotrosPage from './Containers/NosotrosPage';
import LogingPage from './Containers/LogingPage';
import FrozenPage from './Containers/FrozenPage';
import DrinkPage from './Containers/DrinkPage';
import Promotionspage from './Containers/PromotionPage';
import RegisterPage from './Containers/RegisterPage';
import ShoppingCarPage from './Containers/ShoppingCarPage'
import TermsPage from './Containers/TermsPage';
import PrivacyPage from './Containers/PrivacyPage';
import CookiesPage from './Containers/CookiesPage';
import LegalPage from './Containers/LegalPage';
import AtcPage from './Containers/AtcPage';
import WorkwUPage from './Containers/WorkwUPage';
import DeliveryPage from './Containers/DeliveryPage.Jsx';
import UbicationPage from './Containers/UbicationPage';



function App() {
  return (
    
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nosotros" element={<NosotrosPage />} />
      <Route path="/login" element={<LogingPage />} />
      <Route path="/productos" element={<FrozenPage />} />
      <Route path="/drink" element={<DrinkPage />} />
      <Route path="/promociones" element={<Promotionspage />} />
      <Route path="/carrito" element={<ShoppingCarPage />} />
      <Route path="/terminos" element= {<TermsPage/>} />
      <Route path="/politicas" element= {<PrivacyPage/>} />
      <Route path="/cookies" element= {<CookiesPage/>} />
      <Route path="/legal" element= {<LegalPage/>} />
      <Route path="/atencionAlCliente" element= {<AtcPage/>} />
      <Route path="/trabajaConNosotros" element= {<WorkwUPage/>} />
      <Route path="/entregaYRecogidas" element= {<DeliveryPage/>} />
      <Route path="/ubicacion" element= {<UbicationPage/>} />
      <Route path="/registersUser" element= {<RegisterPage/>} />


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
