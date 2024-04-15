import React from 'react'
import { Image } from './Image'
import ServiceImage from "../images/ServicePage.jpg"
import { DedicatedService } from './DedicatedService'
import { GetInTouch } from './GetInTouch'
export const ServicePage = () => {
    return (
        <section className='ServicePage'>
            <Image ImageSection={ServiceImage}></Image>
            <h1 className='SpecailTextFont'>Service Us Page</h1>
            <DedicatedService></DedicatedService>
            <GetInTouch></GetInTouch>








        </section>
    )
}
