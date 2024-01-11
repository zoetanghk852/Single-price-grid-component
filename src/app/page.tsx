import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.container}>
          <section className={styles.header}>
            <h1>Join our community </h1>
            <h2>30-day,hassle-free money back guarantee</h2>
            <p>
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </section>
          <section className={styles.info}>
            <div className={styles.plan}>
              <h2 className={styles.subtile}>Monthly Subscription</h2>
              <div className={styles.price}>
                $29<span>per month</span>
              </div>

              <p>Full access for less than $1 a day</p>
              <button className={styles.signUp_btn}>Sign Up</button>
            </div>
            <div className={styles.service}>
              <h3 className={styles.subtile}>Why Us</h3>
              <ul className={styles.paragraph}>
                <li>Tutorials by industry experts</li>
                <li>Peer & expert code review</li>
                <li>Coding exercises</li>
                <li>Access to our GitHub repos</li>
                <li>Community forum</li>
                <li>Flashcard decks</li>
                <li>New videos every week</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <h5>
          {`Challenge by `}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">zoe</a>.
        </h5>
      </footer>
    </>
  );
}
