import style from "./Container.module.css";

export const Container = ({ children }) => (
  <div className={style.container}>{children}</div>
);
