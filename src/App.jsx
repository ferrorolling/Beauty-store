
import { BrowserRouter as Router , Routes /*Switch*/ , Route} from 'react-router-dom';
import './App.css'
import RootPage from './pages/RootPage';
import Header from './components/Header';
import DetailPage from './pages/DetailPage';


function App() {

  return (
    <>   
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<RootPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/" element={<RootPage />} />  
        </Routes>
      </Router>
    </>
  );
}

export default App
