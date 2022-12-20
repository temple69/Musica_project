import  { useEffect,useState } from 'react'


const useFetch = () => {
    const [musicData,setMusicData]=useState([])
    useEffect(()=>{
        const fetchMusic=async ()=>{
            const response = await fetch('https://shazam-core.p.rapidapi.com/v1/charts/world',{
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '173bd399a3msh5e4bbe494ace227p10872ajsn24a6fd1170ff',
                    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
                }
            })
            const data = await response.json()
            setMusicData(data)

        }
        fetchMusic()
    },[])
    
  return musicData

  
}

export default useFetch