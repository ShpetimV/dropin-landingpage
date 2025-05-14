import {Header} from '@/sections/Header';
import {Hero} from '@/sections/Hero';
import {LogoTicker} from "@/sections/LogoTicker";
import {StatisticsTicker} from "@/sections/StatisticsTicker";
import {ProductShowcase} from "@/sections/ProductShowcase";
import {Pricing} from "@/sections/Pricing";
import {Testimonials} from "@/sections/Testimonials";
import {FrequentlyAskedQuestions} from "@/sections/FrequentlyAskedQuestions";
import {CallToAction} from "@/sections/CallToAction";
import {Footer} from "@/sections/Footer";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <LogoTicker/>
            <ProductShowcase/>
            <Pricing/>
            <Testimonials/>
            <FrequentlyAskedQuestions/>
            <CallToAction/>
            <Footer/>
        </>

    )
}
