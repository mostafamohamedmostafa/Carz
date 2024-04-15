import React from 'react'
import Hero1 from "../images/Hero1.jpg"
import { Image } from './Image'
import { Pricing } from './Pricing'
import { ClientReview } from './ClientReview'
import { Benefits } from './Benefits'
import { MiniService } from './MiniService'
import { ContactForm } from './ContactForm'
export const PricingPage = () => {
    return (
        <section className='PricingPage '>
            <Image ImageSection={Hero1}></Image>

            <h1 className='SpecailTextFont'>Pricing Page</h1>
            <Pricing></Pricing>
            <ClientReview></ClientReview>
            <Benefits></Benefits>
            <MiniService></MiniService>
            <ContactForm></ContactForm>
        </section>
    )
}
