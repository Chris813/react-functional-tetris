import style from "./decorate.module.scss";

export function Decorate() {
  return (
    <div className={style.decorate}>
      <div className={style.topBorder}>
        <div className={style.left}>
          <span style={{ width: 40 }} />
          {new Array(4).fill(0).map(() => (
            <span className={style.ml} />
          ))}
        </div>
        <div className={style.right}>
          {new Array(4).fill(0).map(() => (
            <span className={style.mr} />
          ))}
          <span className={style.ml} style={{ width: 40 }} />
        </div>
      </div>
      <h1>T E T R I S</h1>
      <div className={style.view}>
        <div className={style.item}>
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
        </div>
        <div className={style.item}>
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
        </div>
        <div className={style.item}>
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.c} />
        </div>
        <div className={style.item}>
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.trans}></b>
        </div>
        <div className={style.item}>
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.trans}></b>
        </div>
        <div className={style.item}>
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
        </div>
      </div>
      <div className={`${style.view} ${style.l}`}>
        <div className={style.item}>
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.trans}></b>
        </div>
        <div className={style.item}>
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.trans}></b>
        </div>
        <div className={style.item}>
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.c} />
        </div>
        <div className={style.item}>
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
        </div>
        <div className={style.item}>
          <b className={style.c} />
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
        </div>
        <div className={style.item}>
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.trans}></b>
          <b className={style.c} />
          <b className={style.trans}></b>
        </div>
      </div>
    </div>
  );
}
