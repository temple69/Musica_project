import useFetch from "../../hooks/useFetch"
import { filterMusic } from "../../utilities/helperFunction"
import ReleaseList from "./ReleaseList"
import classes from './releaselist.module.css'
const Release = () => {
    const musicData=useFetch()
    const releasedMusic = filterMusic(musicData,10)

    
  return (
    <section style={{
        color:"white",
        margin:'4em 0',
        padding:'1em 6em'
    
    }} >
        <h2>NEW Releases</h2>
        <div className={classes.flex}>
         {releasedMusic.map((chart)=>(
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