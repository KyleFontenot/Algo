import { For, children, createSignal, createEffect, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { usePassStore } from "./ContextProvider";

import Sortable from "sortablejs";
import styles from "./DnD.module.scss";
// export let sortableRef;

export function DnD(props) {
  const kids = children(() => props.children);
  // const [sortableDivText, setSortableText] = createSignal();
  let sortableRef;
  const [master, setMaster, refreshMaster] = usePassStore();
  createEffect(() => {
    // console.log(props.ref());
    setMaster(sortableRef.innerText);
  });

  function signalRefresh() {
    console.log("invoked function!");
  }

  // At the moment requires multiple children
  if (props.children instanceof HTMLElement) {
    const singleChild = props.children;
    return <>{props.children}</>;
  } else {
    // for (let i = 0; i < kids().length; i++) {
    //   setMaster((master) => ({ [`pos${i}`]: `value${i}` }));
    // }
    // console.log(master);
    const full = (
      <div ref={sortableRef} style={props.style} className={props.className}>
        <For each={kids()}>
          {(child) => {
            return child;
          }}
        </For>
      </div>
    );

    Object.values(kids()).forEach((each) => {
      each.classList.add(styles.draggable);
    });

    let sortable = new Sortable(sortableRef, {
      animation: 300,
      easing: "cubic-bezier(1, 0, 0, 1)",
      direction: "horizontal",
      ghostClass: styles.draggableGhost, // Class name for the drop placeholder
      chosenClass: styles.draggableChosen, // Class name for the chosen item
      dragClass: styles.draggableDragging, //classname for thhe dragg item
      onEnd: (evt) => {
        // console.log(evt.to);
        // refreshMaster(sortableRef.innerText);
        setMaster(sortableRef.innerText);
      },
    });

    return full;
  }
}
