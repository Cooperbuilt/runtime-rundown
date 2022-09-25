import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>
          Runtime Rundown™ and this website are a &quot;Joe and Evan&quot;
          production, &copy; 2022{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
