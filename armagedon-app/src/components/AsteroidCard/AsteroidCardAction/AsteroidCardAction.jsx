import styles from "./Action.module.css"

export const AsteroidCardAction = ({isDangerous}) =>{
    const messegSorry = "Вы нажали на кнопку.\nПростите, но она пока не работает."

    return (<div>
        <div className={styles.actionGrabe}>
            {`Оценка: ${isDangerous ? 'опасен' : 'не опасен'}`}
        </div>
        <button onClick={()=>{alert(messegSorry)}} className={styles.action}>
            <div className={styles.actionText}>
                На уничтожение
            </div>
        </button>
    </div>)
}