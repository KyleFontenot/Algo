import { createSignal, createContext, useContext } from "solid-js";
// import { createStore } from "solid-js/store";

const StateContext = createContext();

export function ContextProvider(props) {
  const [master, setMaster] = createSignal("");

  // const updateAllValues = createMemo(() => fibonacci(count()));

  let context = [master, setMaster];
  // Use inside component:
  // const [master, setMaster] = usePassStore();

  return (
    <StateContext.Provider value={context}>
      {props.children}
    </StateContext.Provider>
  );
}
export function usePassStore() {
  return useContext(StateContext);
}
