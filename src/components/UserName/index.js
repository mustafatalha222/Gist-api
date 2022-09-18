import styles from "./index.module.scss";

export default function UserName({ name, link, src, alt = "avatar" }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.avatarImg}>
        <img src={src} alt={alt} data-testid="avatar" />
      </div>
      <a href={link} target="_blank" rel="noreferrer" data-testid="username">
        {name}
      </a>
    </section>
  );
}
