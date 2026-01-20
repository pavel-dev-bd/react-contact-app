
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './App.css';

 import Header from './components/header.jsx';
 import Homepage from './pages/homepage.jsx';
 import Singlepage from './pages/singlepage.jsx';
 import AddContactPage from './pages/addContactPage.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Singlepage />} />
        <Route path="/edit/:id" element={<AddContactPage />} />
        <Route path="/add-contact" element={<AddContactPage />} />
      </Routes>
    </Router>
  )

}

export default App
