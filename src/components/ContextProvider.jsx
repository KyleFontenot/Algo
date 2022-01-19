import {
  createSignal,
  createEffect,
  createContext,
  useContext,
} from "solid-js";
// import { createStore } from "solid-js/store";
const StateContext = createContext();

export function ContextProvider(props) {
  const [master, setMaster] = createSignal("");

  let context = [master, setMaster, refreshMaster];
  // Use inside component:
  // const [master, setMaster, refreshMaster] = usePassStore();

  return (
    <StateContext.Provider value={context}>
      {props.children}
    </StateContext.Provider>
  );
}
export function usePassStore() {
  return useContext(StateContext);
}

export function refreshMaster(input, setter) {
  if (input) {
    setMaster(input);
  } else {
    setMaster((master) => {
      return master;
    });
  }
}
