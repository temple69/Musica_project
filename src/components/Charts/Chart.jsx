import React from 'react'
import useFetch from '../../hooks/useFetch'
import { filterMusic, } from '../../utilities/helperFunction'

import Chartlists from './Chartlists'
const Chart = () => {
    const musicData = useFetch()
    const resuts= filterMusic(musicData,3)
return (
    <>
    
   {resuts.map((chart)=>(
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