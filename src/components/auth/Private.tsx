import { ComponentType } from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: ComponentType<ProfileProps>;
};

export default function Private({
  isLoggedIn,
  component: Component,
}: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="Vishwas" />;
  } else {
    return <Login />;
  }
}
