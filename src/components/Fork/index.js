import { UserName } from "../../components";
import styles from "./index.module.scss";

export default function Fork({ forks }) {
  console.log(forks, "<--forks");
  return (
    <div className={styles.wrapper}>
      <strong>Forks:</strong>
      {forks && forks?.length !== 0 ? (
        <div className={styles.forkList}>
          {forks?.map((fork, i) => (
            <div key={i}>
              <UserName
                src={fork.user?.avatar_url}
                name={fork.user?.login}
                link={`https://gist.github.com/${fork.id}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <span> No fork found</span>
      )}
    </div>
  );
}
