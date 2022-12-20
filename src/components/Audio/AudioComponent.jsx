

import React from 'react'
import './audio.css'

const AudioComponent = () => {
  return (
    <section className='audio_container'>
      <div>
        <img src="" alt="" srcset="" />
        <article>
          <h2>PAPER</h2>
        <p>JERIQ</p>
       </article>
        </div>
       <article className='controls'>
        <button>shuffle</button>
        <button>previous</button>
        <button>play/pause</button>
        <button>next</button>
        <button>repeat</button>
       </article>
       <article className='volume_control'>
        <input type="range" min={0} max={100}  value={50}/>
       </article>
       <article className='duration'>
        <progress max={100}>
          
        </progress>
       </article>
    
    </section>
  )
}

export default AudioComponent