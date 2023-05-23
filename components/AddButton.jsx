import styles from '../styles/AddButton.module.css'

const AddButton = ({setClose}) => {
    return(
        <div onClick={() => setClose(false)} className={styles.addButton}>
            Add New Dish
        </div>
    )
}

export default AddButton;