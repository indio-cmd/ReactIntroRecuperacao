import { useEffect, useState } from 'react';
import './style.css'
import { getCharacters } from '../../api/rickAndMorty';
import Card from '../../Components/Card';

function Home() {
   const [carregando, setCarregando] = useState(true);
   const [personagens, setPersonagens] = useState([]);

   useEffect(() => {

      async function carregar() {
         const dados = await getCharacters()
         setPersonagens(dados)
         setCarregando(false)
      }

      // variavel = [ ] espaço da mem
      //array   = [  |  |  |  ]
      //           0| 1| 2
      carregar()
   }, [])

   if (carregando) {
      return (<>carregando ... </>

      )
   }

   return (
      // Loading - existe quando requisita  algo para algo externo
      <div>
         <h2 className='titulo-lista'>Personagens - Rick and mory</h2>

         <div className='lista-personagens' >
        {personagens.map((personagem) => (
          <Card personagem={personagem} />

        ))}
         </div>

      </div>
   )
}
export default Home 