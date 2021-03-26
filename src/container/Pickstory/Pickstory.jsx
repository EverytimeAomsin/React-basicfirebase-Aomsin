import React from 'react'
import Room from "../../components/Room"
import '../../components/Layout/allnav.css'
import Story from '../../container/Pickstory/Story'
import Add from '../../database/Data/Add'

export default function Pickstory(){
    return(
        <div className="navall">
            <Room/>
            <div>
                <Story/>
            </div>
            <Add/>
        </div>
    )
}