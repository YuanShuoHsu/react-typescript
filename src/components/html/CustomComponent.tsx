import { ComponentProps } from "react";
import Greet from "../props/Greet";

export default function CustomComponent(props: ComponentProps<typeof Greet>) {
  return <div>{props.name}</div>;
}
