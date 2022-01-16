import { render } from "solid-js/web";
import "./styles/globals.css";
import "./styles/custom.scss";
import "./index.css";
import styles from "./styles/Home.module.scss";
import { createSignal, createEffect, onMount } from "solid-js";
import { ContextProvider, usePassStore } from "./components/ContextProvider";

import EntryForm from "./components/EntryForm/EntryForm.jsx";
import { DnD } from "./components/DnD";

import TopLeftSVG from "./images/topleft-shapes.svg";
import BottomSVG from "./images/bottom-shapes.svg";
import TopRightSVG from "./images/topright-shapes.svg";

const toggleCase = (letter) => {
  let old = letter;
  letter.toUppercase() === old ? letter.toLowercase() : letter.toUppercase();
  // if (letter.toUppercase() === old) {
  //   return letter.toLowercase();
  // } else {
  //   return letter.toUppercase();
  // }
};

const App = () => {
  const [something, setSomething] = createSignal("");
  const [master, setMaster] = usePassStore();
  createEffect(() => {
    console.log(master());
    // setSomething(master);
  });
  onMount(() => {});
  let numberRef;
  let wordRef;
  let specialRef;
  const [userNumber, setUserNumber] = createSignal("");
  const [userWord, setUserWord] = createSignal("");
  const [userSpecial, setUserSpecial] = createSignal("");

  const [wildChar1, setWildChar1] = createSignal("A");
  const [wildChar2, setWildChar2] = createSignal("m");
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

      <section
        className={styles.letsgetstarted}
        style="vertical-align: middle;text-align:center;"
      >
        <h1 style="min-height: 14rem;line-height: 14rem;display: inline-block;">
          Let's get started
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style="width: 100%;"
        >
          {/* ----- User's Number  ----- */}
          <div className={styles.inputDiv}>
            <label for="usernumbers">
              Choose between 2 to 4 numbers of your choice.
            </label>
            <br />
            <span className={styles.example}>Example: 987</span>
            <br />
            <input
              type="text"
              id="usernumbers"
              name="usernumbers"
              maxLength="4"
              minLength="2"
              ref={numberRef}
              style="letter-spacing: 4px;"
              onInput={() => {
                setUserNumber(numberRef.value);
              }}
              style={{
                width:
                  userNumber().length > 0
                    ? `${userNumber().length + 3}rem`
                    : "60%",
              }}
            />
          </div>
          <div className={styles.contextinfo}>
            <p>
              This can be a particular sequence of numbers, or individual
              numbers. <br />
            </p>
          </div>

          {/* ----- User's Special  ----- */}
          <div className={styles.inputDiv}>
            <label for="userSpecialChar">
              Choose 1 - 3 special characters.
            </label>
            <br />
            <span className={styles.example}>
              Example: "&nbsp; & &nbsp;&nbsp;, &nbsp;"
            </span>
            <br />
            <input
              type="text"
              id="userSpecialChar"
              name="userSpecialChar"
              maxLength="6"
              minLength="2"
              style="letter-spacing: 4px;"
              ref={specialRef}
              onInput={() => {
                setUserSpecial(specialRef.value);
              }}
              style={{
                width:
                  userSpecial().length > 0
                    ? `${userSpecial().length + 3}rem`
                    : "60%",
              }}
            />
          </div>
          <div className={styles.contextinfo}>
            <p>
              Try avoiding using " ! " since it is the most common character
              used in passwords, making it easier to crack. If you can't imagine
              not using it, it'll be okay to use.
            </p>
          </div>

          {/* ----- User's word  ----- */}
          <div className={styles.inputDiv}>
            <label for="userphrase">
              Choose a short word that you'll definitely remember. <br />( 7
              letters maximum )
            </label>
            <br />
            <span className={styles.example}>Example: "boisterous"</span>
            <br />
            <input
              type="text"
              id="userphrase"
              name="userphrase"
              maxLength="7"
              minLength="2"
              style="letter-spacing: 4px;"
              ref={wordRef}
              onInput={() => {
                setUserWord(wordRef.value);
              }}
              style={{
                width:
                  userWord().length > 0 ? `${userWord().length + 3}rem` : "60%",
              }}
            />
          </div>
          <div className={styles.contextinfo}>
            <p>
              Here's a description. THis is atop that is is super fun and
              helpful
            </p>
          </div>
        </form>

        {/* For making this into a repeatable component, this might be an option to automatically format children */}
        {/*<Test>{(x)=><div {...x} />}</Test>
         and then instead of doing dynamic just do
         <>{props.children({style:{}})}</>*/}

        <DnD
          style="margin: 2rem; outline:1px solid black; width: 90%;margin: 2rem auto 4rem; padding: 3% 6%;"
          ref={dndref}
        >
          <div
            classList={{
              [styles.draggableDivs]: true,
              [styles.draggablehidden]: userNumber() === "",
            }}
          >
            {userNumber}
          </div>
          <div
            classList={{
              [styles.draggableDivs]: true,
              [styles.draggablehidden]: userSpecial() === "",
            }}
          >
            {userSpecial}
          </div>
          <div
            classList={{
              [styles.draggableDivs]: true,
              [styles.draggablehidden]: userWord() === "",
            }}
          >
            {userWord}
          </div>
          <div className={styles.draggableDivs}>{wildChar1}</div>
          <div className={styles.draggableDivs}>{wildChar2}</div>
        </DnD>
        <div style="width: 100%; text-align: center; padding: 2rem 7% 10rem">
          <h2 style="font-size: 3rem">{master()}</h2>
        </div>
      </section>
    </main>
  );
};
render(
  () => (
    <ContextProvider>
      <App />
    </ContextProvider>
  ),
  document.getElementById("root")
);
