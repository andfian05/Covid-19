import styles from "./Hero.module.css";



function Hero() {
    return (
      <div className={styles.container}>
          <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h1 className={styles.hero__title}>Covid ID</h1>
                    <h3 className={styles.hero__child}>Monitoring Perkembangan Covid</h3>
                    <p className={styles.hero__description}>Aplikasi Monitoring Covid-19 dan Media Informasi Up to Date, Semoga Bermanfaat.</p>
                    <button className={styles.hero__button}>Vaccine</button>
                </div>

                

                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src="https://media.discordapp.net/attachments/894919708938223657/961641500121370634/hero.jpg" alt="" />
                </div>
            </section>
        </div>
      </div>
    );
  }


export default Hero;