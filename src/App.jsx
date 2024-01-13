import { BrowserRouter, Routes , Route, } from 'react-router-dom';
import HomePage from './Containers/HomePage';

import NosotrosPage from './Containers/NosotrosPage';
import LogingPage from './Containers/LogingPage';
import FrozenPage from './Containers/FrozenPage';
import DrinkPage from './Containers/DrinkPage';
import Promotionspage from './Containers/PromotionPage';
import ShipPage from './Containers/ShipPage';

import RecordPage from './Containers/RecordPage';
import ShoppingCarPage from './Containers/ShoppingCarPage';

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
      <Route path="/envios" element={<ShipPage />} />
      <Route path="/registro" element={<RecordPage />} />
      <Route path="/carrito" element={<ShoppingCarPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
