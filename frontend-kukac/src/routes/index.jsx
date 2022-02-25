import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ceps from '../components/Ceps';
import Palindrome from '../components/Palindrome';
import Purchase from '../components/Purchase';
import Car from '../components/Vehicles/Car';
import Motorcycle from '../components/Vehicles/Motorcycle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

const RouteList = () => (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='*' element={<Cards />} />
    <Route path='/Palindrome' element={<Palindrome />} />
    <Route path='/Purchase' element={<Purchase />} />
    <Route path='/Cars' element={<Car />} />
    <Route path='/Motorcycles' element={<Motorcycle />} />
    <Route path='/Cep' element={<Ceps />} />
    </Routes>
    <Footer />
    </BrowserRouter>
); 

export default RouteList;