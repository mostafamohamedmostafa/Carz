import React from 'react'
import { GetInTouch } from './GetInTouch'
import { Image } from './Image'
import AboutUsImage from "../images/AboutUsImage.jpg"
import { Vision } from './Vision'
import { WhyUsComponent } from './WhyUsComponent'
import { Benefits } from './Benefits'
import { ClientReview } from './ClientReview'
import { Team } from './Team'
import { Pricing } from './Pricing'
import { Clients } from './Clients'
export const AboutUsPage = () => {
    return (
        <section>
            <Image ImageSection={AboutUsImage}></Image>
            <h1 className='SpecailTextFont'>About Us Page</h1>
            <Vision></Vision>
            <WhyUsComponent></WhyUsComponent>
            <Benefits></Benefits>
            <ClientReview></ClientReview>
            <Pricing></Pricing>
            <Team></Team>
            <Clients></Clients>
            <GetInTouch></GetInTouch>

        </section>
    )
}
