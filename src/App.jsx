import { useEffect } from 'react';
import Navigation from './components/Navbar';
import Cardbox from './components/Cardbox';
import { v4 as uuid } from 'uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dummy from './dummy.json';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div data-bs-theme='dark' className='App'>
      <Navigation />
      <div className='articles_feed'>
        {dummy.map((article, index) => (
          <Cardbox article={article} key={uuid()} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
