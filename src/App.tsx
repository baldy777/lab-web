import { useState, useEffect } from 'react'
import './App.css'

interface GaleriaType{
  id: number;
  author: string;
  url: string;
  download_url: string;
}

function App() {
  
  const [galeria, setGaleria] = useState<GaleriaType[]>([]);

  const obtenerDatos = async() => {
    try{
      const result = await fetch('https://picsum.photos/v2/list?page=2&limit=25')
      .then((res) => res.json());
      setGaleria(result);

    }catch(error){
      console.log('Error', error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  },[])


  return (
    <div>
        {galeria.map((item) => 
        <div>
          <img src={item.download_url} alt={'Author: ${item.author'}
          style={{height:'100px'}}>
          
          </img>
          <p>{item.author}</p>
        </div>
        )}
    </div>
  )
}

export default App;
