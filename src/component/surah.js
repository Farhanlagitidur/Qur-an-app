import axios from 'axios';
import {useState,useEffect} from 'react'
import Titles from './surahTitle';
import Spinner from '../component/spinner'
import {useParams,Link} from 'react-router-dom'

const Surah = (props) => {
    const [surah, setSurah] = useState([]);
    const [show, setShow] = useState(false)

    const param = useParams()

    const getSurah = () => {
         const nomor = param.nomor;
         axios.get('https://al-quran-8d642.firebaseio.com/surat/' + nomor + '.json?print=pretty')
            .then((response) =>{
                setSurah(response.data);
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    useEffect(() => {
        getSurah()
    },[])
  
    if(surah.length === 0){
        return(
        <Spinner />
        )    
      }
   
    return (
        
        <div className='container mx-auto  bg-black rounded-md '>
          <div className='p-2 relative '>
          <Link  
           to={'/'} element={<Titles/>}><button className='bg-gradient-to-r from-sky-400 to-cyan-300 p-3 w-32 duration-500 hover:scale-90  rounded-md min-[320px]:p-2 min-[320px]:w-16 '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-3">
            <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clipRule="evenodd" /></svg>

         </button> </Link>
          </div>

            {surah.map((data,index) => {
                return(
                <div key={index} className='grid gap-x-2 gap-y-3 m-2 ' >
                    {/* //Ayah */}
                    <div className='bg-gradient-to-l from-gray-100 to-gray-300 rounded-lg shadow-xl relative p-4'>
                    <div className=' lg:text-lg outline outline-2  outline-cyan-400  w-8 rounded-r-md animate-pulse  text-center '>{data.nomor} </div>
                    <p className='float-right font-custom text-4xl  p-1 ml-10 min-[320px]:text-3xl lg:text-4xl text-right ' key={index}>
                     {data.ar}</p>
                    {!show &&  <button onClick={() => {setShow(true)}}
                     className='rounded-md p-1 absolute bottom-1 hover:scale-125 duration-700 left-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                     d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" /></svg></button>}
                    </div>

                    {/* // Terjemah */}
                    <div className='relative'>
                    {show && 
                    <div className='bg-gradient-to-r from-sky-400 to-cyan-300 p-2 rounded-md'>
                    
                    <button onClick={() => {setShow(false)}} className=' rounded-md p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  ">
                    <path strokeLinecap="round" strokeLinejoin="round"
                     d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
                    <p className=' p-3 font-romo text-sm'>{data.id}</p>
                    </div>
                   }
                    </div>
                </div>
                )
                
            })}

    
        </div>
    );
   

};

export default Surah;


