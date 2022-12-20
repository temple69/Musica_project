import { useState,useCallback,useEffect } from "react"
import ReleaseList from "./ReleaseList"
import classes from './releaselist.module.css'


const Release = () => {
    const[charts,setCharts]= useState([])
    useCallback(()=>{
        fetchMusic()
    },[])
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
       useEffect(()=>{
        try{
        fetchMusic()
        }
        catch(err){
            console.log(err + "catched")
        }
    },[])


       const filtered_charts =charts.splice(0,10).map((chart)=>{
        const filtered_resuts= {
            id:chart.key,
            title:chart.title,
            artist:chart.subtitle,
            imgUrl:chart.images.background,
            audioUrl:chart.hub.actions[1].uri
        }
        return filtered_resuts

       })
       console.log(filtered_charts)
  return (
    <section style={{
        color:"white",
        margin:'4em 0',
        padding:'1em 2em'
    
    }} >
        <h2>NEW Releases</h2>
        <div className={classes.flex}>
         {filtered_charts.map((chart)=>(
         <ReleaseList 
         key={chart.id}
         title={chart.title} 
         imgUrl={chart.imgUrl}
         artist={chart.artist}
         audioSrc={chart.audioUrl}/>

    ))}
    </div>
    </section>
  )
}

export default Release