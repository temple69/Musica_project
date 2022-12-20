import React from 'react'
import { useCallback } from 'react'
import { useEffect,useState } from 'react'
import Chartlists from './Chartlists'


const Chart = () => {
    const[charts,setCharts]= useState([])
    useCallback(()=>{
        fetchMusic()
    })
    async function fetchMusic(){
        const response =await fetch('https://shazam-core.p.rapidapi.com/v1/charts/world',{
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '173bd399a3msh5e4bbe494ace227p10872ajsn24a6fd1170ff',
                'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
            }
        })
        const data = await response.json()
        setCharts(data)
       }

       const filtered_charts =charts.splice(0,3).map((chart)=>{
        const filtered_resuts= {
            id:chart.key,
            title:chart.title,
            imgUrl:chart.images.background,
            audioUrl:chart.hub.actions[1].uri
        }
        return filtered_resuts

       })
    useEffect(()=>{
        try{
        fetchMusic()
        }
        catch(err){
            console.log(err + "catched")
        }
    },[])
    
  return (
    <>
    
   {filtered_charts.map((chart)=>(
         <Chartlists 
         key={chart.id}
         title={chart.title} 
         imgUrl={chart.imgUrl}
         artist={chart.artist}
         audioSrc={chart.audioUrl}/>

    ))}</>
    

  )
}

export default Chart