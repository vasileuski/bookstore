import { ReactNode } from "react";
import ReactDOM from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  NOTIFICATION = "notification",
}

interface IPortalProps {
  children: ReactNode;
  target: PortalTarget;
}

export const Portal = ({ target, children }: IPortalProps) => {
  const root = document.getElementById(target) as HTMLElement;

  return ReactDOM.createPortal(children, root);
};
