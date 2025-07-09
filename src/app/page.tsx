import {
    LandingHero,
    Portfolio,
    Service,
    Testimonial,
    Quote,
} from "@/components";

export default function Home() {
    return (
        <main>
            <LandingHero />
            <Service />
            <Portfolio />
            <Testimonial />
            <Quote />
        </main>
    );
}
