import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export default function CustomInput(props: InputProps) {
  return <input {...props} />;
}
