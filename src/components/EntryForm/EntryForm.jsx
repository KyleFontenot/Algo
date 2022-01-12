import styles from "./EntryForm.module.scss";
import { onMount, createEffect, createSignal } from "solid-js";

const Home = (props) => {
  let numberRef;
  let wordRef;
  let specialRef;
  const [userNumber, setUserNumber] = createSignal("");
  const [userWord, setUserWord] = createSignal("");
  const [userSpecial, setUserSpecial] = createSignal("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style="width: 100%;"
    >
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
              userNumber().length > 0 ? `${userNumber().length + 3}rem` : "60%",
          }}
        />
      </div>
      <div className={styles.contextinfo}>
        <p>
          This can be a particular sequence of numbers, or individual numbers.{" "}
          <br />
        </p>
      </div>

      <div className={styles.inputDiv}>
        <label for="userSpecialChar">
          Choose one or two special characters.
        </label>
        <br />
        <span className={styles.example}>Example: "boisterous"</span>
        <br />
        <input
          type="text"
          id="userSpecialChar"
          name="userSpecialChar"
          maxLength="6"
          minLength="2"
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
          Here's a description. THis is atop that is is super fun and helpful
        </p>
      </div>

      <div className={styles.inputDiv}>
        <label for="userphrase">
          Choose a short word that you'll definitely remember.
        </label>
        <br />
        <span className={styles.example}>Example: "boisterous"</span>
        <br />
        <input
          type="text"
          id="userphrase"
          name="userphrase"
          maxLength="6"
          minLength="2"
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
          Here's a description. THis is atop that is is super fun and helpful
        </p>
      </div>
      <div className={styles.inputDiv}>
        <label for="userphrase">
          Choose a short word that you'll definitely remember.
        </label>
        <br />
        <span className={styles.example}>Example: "boisterous"</span>
        <br />
        <input
          type="text"
          id="userphrase"
          name="userphrase"
          maxLength="6"
          minLength="2"
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
          Here's a description. THis is atop that is is super fun and helpful
        </p>
      </div>
    </form>
  );
};

export default Home;
