import { StrictMode } from 'react';

import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Cart } from './pages/Cart/index';
import { Contact } from './pages/Contact/index';
import { Faqs } from './pages/Faqs/index';
import { Home } from './pages/Home/index';
import { Product } from './pages/Product/index';

function App() {
	return (
		<>
			<StrictMode>
				<div className='app'>
					<Header />
					<ScrollToTop />
					<Routes>
						<Route element={<Home />} path='/merchstore.frontend/' />
						<Route element={<Contact />} path='merchstore.frontend/contact' />
						<Route element={<Faqs />} path='merchstore.frontend/faqs' />
						<Route element={<Product />} path='merchstore.frontend/item/:id' />
						<Route element={<Cart />} path='merchstore.frontend/cart' />
					</Routes>
					<Footer />
				</div>
			</StrictMode>
		</>
	);
}

export default App;
