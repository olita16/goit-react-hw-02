import css from '../Notification/Notification.module.css';

const Notification = ({ message }) => (
  <p className={css.notification}>{message}</p>
);

export default Notification;