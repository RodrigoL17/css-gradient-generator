import styles from './menuDisplay.module.css'

const MenuDisplay = ({children}) => {
    return (
        <section className={styles.menu}>
            {children}
        </section>
    )
}

export default MenuDisplay