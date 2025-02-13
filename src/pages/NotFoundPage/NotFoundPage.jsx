import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main>
      <section className={style.sectionNotFound}>
        <div className={style.containerNotFound}>
          <h2 className={style.notFoundSubtitle}>
            Sorry, but page is not found!
          </h2>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
