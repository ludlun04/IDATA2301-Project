import "./About.css"
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import FaqSection from "../../components/FaqSection/FaqSection";
import Turing from "../../resources/images/employees/turing.jpg";
import Lovelace from "../../resources/images/employees/lovelace.jpg";
import Haaland from "../../resources/images/employees/haaland.jpg";

export default function About() {
    const faqSectionClassName = "aboutFaqSection";
    return (<div className={"About"}>
            <section className={"aboutOurStory"}>
                <h1 className={"aboutHeader"}>Our Story</h1>
                <div className={"aboutOurStoryParagraph"}>
                    <p>Our story starts in the heart of Ålesund, a place known for its breathtaking fjords, coastal beauty, and vibrant spirit. We’re more than just a car rental company — Driveo was born from a passion for exploration and a desire to help locals and travelers alike experience the freedom of the open road.</p>

                    <p>We saw an opportunity to create something better — a service that’s reliable, flexible, and built around you. Whether you’re visiting for a weekend getaway, embarking on a scenic adventure through the Sunnmøre Alps, or simply need a car for your daily needs, Driveo is here to make it easy and enjoyable.</p>

                    <p>Our mission is simple: to empower your journey. We believe renting a car shouldn’t be complicated or expensive. With a modern fleet of well-maintained vehicles and a dedicated team that knows Ålesund inside out, we’re committed to getting you where you want to go — smoothly and safely.</p>

                    <p>From the winding coastal roads to the charming streets of the city, Driveo is here to help you explore Ålesund and beyond on your terms.</p>

                    <p>Let’s hit the road — your adventure starts with Driveo.</p>
                </div>
            </section>
            <section className={"aboutEmployees"}>
                <h1 className={"aboutHeader"}>Employees</h1>
                <div className={"aboutEmployeeCardContainer"}>
                    <EmployeeCard path={Turing} name={"Alan Turing"} title={"Managing Director"}></EmployeeCard>
                    <EmployeeCard path={Lovelace} name={"Ada Lovelace"} title={"Finance Manager"}></EmployeeCard>
                    <EmployeeCard path={Haaland} name={"Erling Braut Haaland"} title={"Marketing Consultant"}></EmployeeCard>
                </div>
            </section>
            <section className={"aboutFaq"}>
                <h1 className={"aboutHeader"}>FAQ</h1>
                <div className={"aboutFaqSectionContainer"}>
                    <FaqSection className={faqSectionClassName}
                        question={"What makes Driveo different from other car rental companies in Ålesund?"}
                        answer={"At Driveo, we’re all about flexibility, convenience, and making your journey unforgettable. We’re a local companyOld that knows Ålesund inside out — from the must-see landmarks to the hidden gems. Our modern, reliable fleet is matched with personalized service to ensure your trip is smooth, whether you’re here for an adventure or a quick visit."}
                    />
                    <FaqSection className={faqSectionClassName}
                        question={"Can I rent a car from Driveo for just a day or a weekend trip?"}
                        answer={"Absolutely! Whether you need a car for a few hours, a day, or a long weekend getaway, we’ve got you covered. We offer short-term rentals so you can explore Ålesund and beyond without committing to a long rental period."}
                    />
                    <FaqSection className={faqSectionClassName}
                        question={"Does Driveo offer any local travel tips or suggested routes for exploring Ålesund and the fjords?"}
                        answer={"Yes — and we love to share! Our team is packed with local knowledge and recommendations. Whether you’re after a scenic drive through the Sunnmøre Alps, a coastal route along the fjords, or a quick trip to explore Ålesund’s Art Nouveau architecture, we’ll gladly suggest routes and must-see stops."}
                    />
                    <FaqSection className={faqSectionClassName}
                                question={"What types of vehicles are available for rent at Driveo?"}
                                answer={"We offer a wide range of vehicles to match your journey. From compact cars for city driving to spacious SUVs for road trips and family adventures — even eco-friendly options — you’ll find something that suits your needs and style."}
                    />
                    <FaqSection className={faqSectionClassName}
                                question={"How do I book a car with Driveo, and what’s included in the rental price?"}
                                answer={"Booking is easy — you can reserve your car online or give us a call. Our rentals include basic insurance, roadside assistance, and a clean, fuel-efficient vehicle ready to go. No hidden fees, no hassle — just a smooth start to your journey."}
                    />
                </div>
            </section>
        </div>

    )
}