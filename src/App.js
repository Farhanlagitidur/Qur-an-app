import Titles from './component/surahTitle';
import Surah from './component/surah';
import Footer from './component/footer';
import ScrollToTop from './component/scrolltotop'
import {Route,Routes,Router} from 'react-router-dom';
import ParticlesBackground from './component/particlesBackground';

const App = () =>{
  return (
        <div className='bg-black '>
        <ParticlesBackground />
        <Routes>
         <Route path='/' element={<Titles/>}/>
         <Route path='/surah/:nomor' element={<Surah/>}/>
        </Routes>
        <ScrollToTop />
        </div>
  
  );
}

export default App;
