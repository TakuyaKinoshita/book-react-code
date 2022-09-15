import classes from "../scss/CssModules.module.scss";

export const Cssmodules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>This is CssModules Component</p>
      <button className={classes.button}>button</button>
    </div>
  );
};