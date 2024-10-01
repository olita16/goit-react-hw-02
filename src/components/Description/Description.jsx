
import css from '../Description/Description.module.css';

const Section = ({ title, text, children }) => (
  <section className={css.sectionOne}>
    <h2 className={css.header}>{title}</h2>
    <p className={css.text}>{text}</p> {/* Додаємо текст */}
    {children}
  </section>
);

export default Section;