
import classses from './releaselist.module.css'


const ReleaseList = ({imgUrl,title}) => {
return (
        <figure className={classses.figure}>
        <img src={imgUrl} alt="" />
            <figcaption>
                {title}
            </figcaption>
        </figure>
    
  )
}

export default ReleaseList