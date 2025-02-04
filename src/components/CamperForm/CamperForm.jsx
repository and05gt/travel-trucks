import style from './CamperForm.module.css';

const CamperForm = () => {
  return (
    <div className={style.formContainer}>
      <div className={style.formWrapper}>
        <h3 className={style.formTitle}>Book your campervan now</h3>
        <p className={style.formSubtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <input
        className={style.formInput}
        type="text"
        name="name"
        placeholder="Name*"
      />
      <input
        className={style.formInput}
        type="email"
        name="email"
        placeholder="Email*"
      />
      <input
        className={style.formInput}
        type="text"
        name="text"
        placeholder="Booking date*"
      />
      <textarea
        className={style.formComment}
        name="comment"
        placeholder="Comment"
      ></textarea>
      <button className={style.formBtn} type="submit">
        Send
      </button>
    </div>
  );
};

export default CamperForm;
