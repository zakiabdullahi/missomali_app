import Modal from "react-modal";
import styles from "./vote.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { handleModal } from "../../features/modal/modalSplice";
import {
  decreaseVote,
  increaseVote,
  addVoteCount,
  resetState,
} from "../../features/competitors/competitorSlice";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const VoteModal = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const { currentCompetitor } = useSelector((state) => state.competitor);
  const { voteCount } = useSelector((state) => state.competitor);

  const disptach = useDispatch();

  // const [isOpen, setIsOpen] = useState(false);
  // function openModal() {
  //   // dispatch(handleModal());
  //   // setIsOpen(true);
  // }
  function closeModal() {
    // dispatch(handleModal());
    // setIsOpen(false);
    disptach(handleModal());
  }
  if (!currentCompetitor) return;

  const backgroundStyle = {
    width: "100%",
    height: "500px",
    background: `linear-gradient(0deg, #128b4871, rgba(0,0,0,0) 60%, rgba(0,0,0,0)) ,url(${currentCompetitor.Photo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderBottomRightRadius: "10px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    disptach(addVoteCount(currentCompetitor.Id));
    disptach(resetState());
    closeModal();
  };

  return (
    <div>
      {/* <button onClick={() => disptach(handleModal())}>Open Modal</button> */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modal_container}>
          <div className={styles.competitor_info}>
            <div style={backgroundStyle}></div>
            <div className={styles.bio}>
              <div className={styles.divider}>
                <label htmlFor="">Name</label>
                <span>
                  {currentCompetitor.FirstName +
                    " " +
                    currentCompetitor.MiddleName}
                  {/* farhi ali */}
                </span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">State</label>
                <span>
                  {currentCompetitor.RepresentingState}
                  {/* jubbalad */}
                </span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">background Study</label>
                <span>{currentCompetitor.PersonalBackground}</span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">Employment</label>
                <span>
                  {currentCompetitor.EmploymentorSchool}
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores voluptate natus repellendus. */}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.vote_container}>
            <div className={styles.vote_count}>
              <span>purchase votes</span>
              <div className={styles.vote_controls}>
                <button
                  className={styles.icon}
                  onClick={() => disptach(decreaseVote())}
                >
                  <AiOutlineMinus />
                </button>
                <span>{voteCount}</span>
                <button
                  className={styles.icon}
                  onClick={() => disptach(increaseVote())}
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <span className={styles.pay}>Pay With Evc,Zaad and Sahal</span>
              <input
                type="number"
                placeholder="enter your number"
                className={styles.form_control}
              />
              <button type="submit">Vote Now</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VoteModal;
