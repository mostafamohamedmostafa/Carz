import React from 'react'
import TeamPageImage from "../images/TeamPageImage.jpg"
import { Image } from './Image'
import { Team } from './Team'
import { DedicatedService } from './DedicatedService'
import { GetInTouch } from './GetInTouch'
export const TeamMemberPage = () => {
    return (
        <section className='TeamMemberPage'>

            <Image ImageSection={TeamPageImage}></Image>

            <h1 className='SpecailTextFont'>Team Members Page</h1>

            <Team></Team>
            <DedicatedService></DedicatedService>
            <GetInTouch></GetInTouch>
        </section>
    )
}
