import styles from "../styles/Home.module.scss";
import { createSignal } from "solid-js";
import EntryForm from "../components/EntryForm/EntryForm.jsx";

import DnD from "../components/DnD";

import TopLeftSVG from "../images/topleft-shapes.svg";

import BottomSVG from "../images/bottom-shapes.svg";

import TopRightSVG from "../images/topright-shapes.svg";

const Home = () => {
  const [scrolloffset, setoffset] = createSignal();
  return (
    <main>
      <section className={styles.landingspace}>
        <div style="text-align: center; width: clamp(8rem, 55%, 40rem);">
          <h1 className={styles.title}>Passworder</h1>
          <div className={styles.landingmessage}>
            <h3>Create great passwords easily that are:</h3>
            <ul>
              <li>Easy to remember</li> <li>Unique</li>
              <li>Secure</li>
              <li>Consistent</li>
            </ul>
          </div>
        </div>
        <TopLeftSVG
          style="fill: red; top: 0; left:-2rem;  width: 34vw; min-width:28rem;"
          className={styles.svgshapes}
        />
        <TopRightSVG
          style="fill: linear-gradient(to right, var(--color-secondary), var(--color-primary)); top: 0; right:5vw;  width: 18vw; min-width: 14rem; "
          className={styles.svgshapes}
        />
        <BottomSVG
          style="fill: green; bottom: 0; left:6%;  width: 54vw;"
          className={styles.svgshapes}
        />
      </section>
      <div className={styles.scrolltimeline}>
        <div className={styles.timelineline}></div>
      </div>
      <section
        className={styles.letsgetstarted}
        style="vertical-align: middle;text-align:center;"
      >
        <h1 style="min-height: 14rem;line-height: 14rem;display: inline-block;">
          Let's get started
        </h1>
        <EntryForm />

        <DnD style="margin: 2rem; background-color: #444">
          <p>Hello</p>
        </DnD>
        <DnD style="margin: 2rem; background-color: #444">
          <p>Hello</p>
          <p>second</p>
        </DnD>
      </section>
    </main>
  );
};

export default Home;
