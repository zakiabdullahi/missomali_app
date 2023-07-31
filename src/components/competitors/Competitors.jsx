import styles from "./competitors.module.scss";
// import competitors from "../../assets/competitors.json";
import Compitator from "../competitor/Compitator";
import { useSelector } from "react-redux";
const Competitors = () => {
  const { competitors } = useSelector((state) => state.competitor);
  return (
    <div className={styles.competitors_container}>
      <div className={styles.competitors_header}>
        <span>MissSomali</span>
        <p>
          Built with React.js — the template is a well-structured, thoughtfully
          componentized Next.js project, giving you a codebase that’s productive
          and enjoyable to work in.
        </p>
      </div>

      <div className={styles.competitors}>
        {competitors.map((competitor) => (
          <Compitator key={competitor.id} competitor={competitor} />
          // <>
          //   <span key={competitor.id}>{competitor.FirstName}</span>
          // </>
        ))}
      </div>
    </div>
  );
};

export default Competitors;
