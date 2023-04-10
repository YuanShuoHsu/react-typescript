import { ReactNode } from "react";

type OscarProps = {
  children: ReactNode;
};

export default function Oscar(props: OscarProps) {
  return <div>{props.children}</div>;
}
