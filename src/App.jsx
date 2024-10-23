
import { BrowserRouter as Router , Routes /*Switch*/ , Route} from 'react-router-dom';
import './App.css'
import RootPage from './pages/RootPage';
import Header from './components/Header';
import DetailPage from './pages/DetailPage';
import { useProducts } from './customHooks/useProducts';


function App() {

const {products, pages} = useProducts()

  return (
    <>   
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<RootPage products = {products} pages = {pages}/>} />
          <Route path="/detail/:id" element={<DetailPage  products = {products} pages = {pages}/>} />
          <Route path="/" element={<RootPage products = {products} pages = {pages}/>} />  
        </Routes>
      </Router>
    </>
  );
}

export default App
