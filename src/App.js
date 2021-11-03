import './styles/style.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Dashboard from './components/dashboard.js';

function App() {
  return (
    <div className="App h-100">      
    <Header/>
    <main className="d-flex flex-column justify-content-between">
      <Dashboard/>
      <Footer/>
    </main>
  </div>
  );
}

export default App;
