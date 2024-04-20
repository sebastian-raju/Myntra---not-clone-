import './Style/App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import ProductView from './pages/ProductView';
import { Routes, Route } from 'react-router-dom';
import SingleView from './pages/SingleView';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/"} element={<ProductView/>}></Route>
        <Route path={"/single-view/:id"} element={<SingleView/>}></Route>
        <Route path={"/*"} element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
