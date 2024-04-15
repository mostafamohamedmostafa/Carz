import React from 'react'
import { NavigationBar } from './NavigationBar'
import { HeroSection } from './HeroSection'
import { MiniService } from './MiniService'
import { WhyUsComponent } from './WhyUsComponent'
import { DedicatedService } from './DedicatedService'
import { Image } from './Image'
import { Benefits } from './Benefits'
import { Clients } from './Clients'
import { ClientReview } from './ClientReview'
import { Team } from './Team'
import { Pricing } from './Pricing'
import { Footer } from './Footer'




import ImageSection from "../images/ImageSection.jpg";

export const HomePage = () => {
    return (
        <div>
      
            <HeroSection></HeroSection>
            <MiniService></MiniService>
            <WhyUsComponent></WhyUsComponent>
            <DedicatedService></DedicatedService>
            <Image ImageSection={ImageSection}></Image>
            <Benefits></Benefits>
            <Clients></Clients>
            <ClientReview></ClientReview>
            <Team></Team>
            <Pricing></Pricing>


        </div>
    )
}
