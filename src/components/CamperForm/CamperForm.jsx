import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import style from './CamperForm.module.css';

const CamperForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    iziToast.success({
      title: 'Ok',
      titleColor: '#fff',
      message: 'Successfully booking camper!',
      position: 'topRight',
      backgroundColor: 'green',
      messageColor: '#fff',
      theme: 'dark',
    });
    event.target.reset();
  };

  return (
    <div className={style.formContainer}>
      <div className={style.formWrapper}>
        <h3 className={style.formTitle}>Book your campervan now</h3>
        <p className={style.formSubtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className={style.formInput}
          type="text"
          name="name"
          placeholder="Name*"
          required
        />
        <input
          className={style.formInput}
          type="email"
          name="email"
          placeholder="Email*"
          required
        />
        <input
          className={style.formInput}
          type="text"
          name="text"
          placeholder="Booking date*"
          required
        />
        <textarea
          className={style.formComment}
          name="comment"
          placeholder="Comment"
        ></textarea>
        <button className={style.formBtn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default CamperForm;
