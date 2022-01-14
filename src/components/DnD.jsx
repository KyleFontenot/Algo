import "./DnD.css";
import { For, children } from "solid-js";
import { Dynamic } from "solid-js/web";

export default function DnD(props) {
  const kids = children(() => props.children);
  console.log(props.children);

  // if (!props.children.length) {
  //   console.error("DnD Component must have more than one child element");
  // }
  if (props.children instanceof HTMLElement) {
    console.log("htmleleement!!!");
    return <>{props.children}</>;
  } else {
    return (
      <div className="DnD-container" style={props.style}>
        <For each={kids()} fallback={<p>hello</p>}>
          {(child) => {
            return (
              <div
                draggable="true"
                className="DnD__childDiv"
                style={props.childrenStyle}
              >
                {child}
              </div>
            );
          }}
        </For>
      </div>
    );
  }
}
