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
    <>
    <div style={{display:'', maxWidth:'100%', alignItems:'center'}}>
      <h2>Galeria de imagenes</h2> <br />
        {galeria.map((item) => 
        <div style={{textAlign:'justify'}}>
          <img src={item.download_url} alt={'Author: ${item.author'}
          style={{width:'150px'}}>
          
          </img>
          <p>{item.author}</p>
        </div>
        )}
    </div>
    </>
  )
}

export default App;
