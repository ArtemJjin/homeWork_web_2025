import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export const Header = () =>{
    return <div className={styles.container}>
        <div>
            <div>ARMAGEDON V</div>
            <div>Сервис мониторинга и уничтожения астероидов, опасно подлетевших к NBSP земли.</div>
        </div>
        <div>
            <Link to={"/asteroids"}>Астероиды</Link>
            <Link to={'/destroyment'}>Уничтожение</Link>
        </div>
        <div>
            
        </div>
    </div>
}