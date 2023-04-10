import { MouseEvent } from "react";

type ButtonProps = {
  handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
}
