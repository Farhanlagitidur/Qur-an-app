import {useEffect} from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className='boder-white'>
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) }}
        className ='fixed bottom-4 right-3 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 rounded-md p-1  animate-bounce' >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" clipRule="evenodd" /></svg>

      </button>
    </div>
  );
}

