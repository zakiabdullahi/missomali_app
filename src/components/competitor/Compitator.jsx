/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import styles from "./competitor.module.scss";
import { MdHowToVote } from "react-icons/md";
import { handleModal } from "../../features/modal/modalSplice";

import { setCurrentCompetitor } from "../../features/competitors/competitorSlice";
const Compitator = ({ competitor }) => {
  // const { isOpen } = useSelector((state) => state.modal);

  // const { currentCompetitor } = useSelector((state) => state.competitor);
  const backgroundStyle = {
    width: "100%",
    background: `linear-gradient(0deg, #128b4871, rgba(0,0,0,0) 60%, rgba(0,0,0,0)) ,url(${competitor.Photo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const dispatch = useDispatch();
  const voteNow = () => {
    dispatch(setCurrentCompetitor(competitor));
    dispatch(handleModal());
  };
  return (
    <div className={styles.compitator} style={backgroundStyle}>
      <div className={styles.info}>
        <span className={styles.name}>{competitor.FirstName}</span>
        <span className={styles.state}>{competitor.RepresentingState}</span>
        <span className={styles.vote_count}>
          Total Votes : {competitor.NumberofVotes}
        </span>
      </div>

      <div className={styles.vote}>
        <MdHowToVote className={styles.vote_icon} onClick={voteNow} />
      </div>
    </div>
  );
};

export default Compitator;
