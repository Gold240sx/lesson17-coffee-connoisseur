import styles from './banner.module.css';

const Banner = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Coffee <span>Connoisseur</span></h1>
            <p className={styles.subtitle}>Discover your local coffee shops!</p>
            <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
        </div>
    );
};

export default Banner;