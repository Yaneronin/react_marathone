import s from "./style.module.css";
const Layout = (props) => {
  // const classes = s.desc + " " + s.full;
  // const style = {
  //   background: `url(${props.urlBg})`,
  // };
  const style = props.urlBg
    ? { backgroundImage: `url(${props.urlBg})` }
    : { background: `${props.colorBg}` };
  return (
    <section className={s.root} style={style}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3> {props.title} </h3>
            <span className={s.separator}></span>
          </div>
          <div>
            <p>{props.desc}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export { Layout };
