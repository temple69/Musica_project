import styles from './landing.module.css'
import img_1 from '../../assets/images/jumbotronImages/img_1.png'
import img_2 from '../../assets/images/jumbotronImages/img_2.png'
import img_3 from '../../assets/images/jumbotronImages/img_3.png'
import img_4 from '../../assets/images/jumbotronImages/img_4.png'
import img_5 from '../../assets/images/jumbotronImages/img_5.png'
import love_vector from '../../assets/images/jumbotronImages/Vector.png'
import Chart from '../Charts/Chart'



const Landing = () => {
  return (
    <section className={styles.three_layout_grid}>
        <aside className={styles.aside_nav}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Playlist</a></li>
                <li><a href="#">Collection</a></li>
                <li><a href="#">Album</a></li>
            </ul>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">logout</a></li>
    
            </ul>
        </aside>
        <div className={styles.jumbotron}>
          <p>Currated playlist</p>
          <article>
          <h1>R & B Hits</h1>
          <p>All mine, Lie again, Petty call me everyday,
Out of time, No love, Bad habit,
and so much more</p>
          </article>
          <article>
            <p>
            <img src={img_1} alt="" />
            <img src={img_2} alt="" />
            <img src={img_3} alt="" />
            <img src={img_4} alt="" />
            <img src={img_5} alt="" />
            </p>
            <img src={love_vector} alt="love_shape" />
            <p>33k Likes</p>

          </article>
          

        </div>
        <aside>
          <h2>Top Charts</h2>
          <Chart/>
    
        </aside>
</section>
  )
}

export default Landing