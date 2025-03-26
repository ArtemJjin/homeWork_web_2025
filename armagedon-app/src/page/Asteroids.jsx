import { useState, useEffect } from "react"
import { AsteroidCard } from "../components/AsteroidCard/AsteroidCard"
import { Header } from "../components/header/Header"
import styles from "./Asteroids.module.css"
import { data } from "react-router-dom"

export const Asteroids = ()=>{

    const [asteroids, setAsteroids] = useState([]);

    const [onlyDangerous, setOnlyDangerous] = useState(false)
    const [distanceMode, setDistanceMode] = useState(false)

    useEffect(()=>{
        const result = fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=EU8BOAEcD4kGabeop6poXDE6uSypBkeZGff8uGkj").then((res)=>{
            return res.json()
        }).then((response)=>{
            let rawAsteroids =[]
            for (const data in response.near_earth_objects) {
                rawAsteroids = rawAsteroids.concat(response.near_earth_objects[data])
            }
            const asteroids = rawAsteroids.map(item=>{
                const size = Math.trunc((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min )/2) ;
                const close = item.close_approach_data[0]

                return {
                    name: item.name, date: close.close_approach_date,
                    size , distance: {kilometrs: close.miss_distance.kilometers , lunar: close.miss_distance.lunar } , isDangerous: item.is_potentially_hazardous_asteroid ,
                     id: item.id  
                }
            })

            setAsteroids(asteroids)
        }).catch((err)=>{
            console.log(err)
        })
    }, []
    )

    return <div>
        <div>
            <Header/>
        </div> 
        Home
        <div className={styles.showDangerousOnly}>
            <input type="checkbox" value={onlyDangerous} onChange={()=>setOnlyDangerous(!onlyDangerous)}>
            </input>
            Отображать только опысные астероиды.
        </div>
        <div className={styles.distanceMode}>
            Расстояние <button onClick={() => setDistanceMode(true)}
            className={styles.distanceChooser}
            > в километрах</button>,
            <button
            onClick={()=> setDistanceMode(false)}
            className={styles.distanceChooser}
            > в дистанциях до луны</button>
        </div>

        <div>
        </div>
        {onlyDangerous ? asteroids.filter((it)=> it.isDangerous).map((item)=>
        <AsteroidCard key={item.id} {...item} distanceMode={distanceMode}/>) : asteroids.map((item)=>
        <AsteroidCard key={item.id} {...item} distanceMode={distanceMode}/>) }
        

    </div>
}
