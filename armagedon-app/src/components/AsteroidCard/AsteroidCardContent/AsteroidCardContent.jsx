import styles from "./AsteroidCardContent.module.css"

export const AsteroidCardContent = (props) => {
    const {name, date, distance, size, distanceMode} = props;
    const distanceKilometrs = Math.trunc(distance.kilometrs)
    const distanceLunar = Math.trunc(distance.lunar)

    return (<div>
        <div className={styles.contentName}>
            {name}
        </div>
        <div className={styles.contentWraper}>
            <div className={styles.contantDate}>
                {`Дата: ${date}`}
            </div>
            <div className={styles.contantDistance}>
                {distanceMode? `Растояние: ${distanceKilometrs} км`: `Растояние: ${distanceLunar} раз от Земли до луны`}
            </div>
            <div className={styles.contantSize}>
                {`Размер: ${size} м`}
            </div>
        </div>
    </div>)
}