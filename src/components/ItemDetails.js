import { useParams } from "react-router-dom"
import { DATA } from "../database"

const database = DATA

export function ItemDetails(){
    const params = useParams()

    const item= database.find(item => item.id.toString() === params.id)

    return(
        <div>
            <h1></h1>
            <div>
                <img width="300px" src={item.image} alt="" />
            </div>
            <div>
                <div>Name: {item.name}</div>
                <div>Price: {item.price}</div>
                <div>Description: {item.description}</div>
            </div>
        </div>
    )
}
