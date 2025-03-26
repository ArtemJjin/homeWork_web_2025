import { useParams } from "react-router-dom"
import { Header } from "../components/header/Header"
import { AsteroidCardImageDino } from "../components/AsteroidCard/AsteroidCardImageDino/AsteroidCardImageDino"

export const Destroyment = ()=>{
    // const { id } = useParams()

    return <div>
        <Header/>
        <div>
            На этой странице должны отображаться выбраные астероида на уничтожение.
        </div>
        <div>
            Динозавр их уже ждёт.
            <AsteroidCardImageDino/>
        </div>
        </div>
}