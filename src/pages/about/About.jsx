import "./About.css"
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import FaqSection from "../../components/FaqSection/FaqSection";

export default function About() {
    const faqSectionClassName = "aboutFaqSection";
    return (<div className={"About"}>
            <div className={"aboutOurStory"}>
                <h1 className={"aboutHeader"}>Our Story</h1>
                <p className={"aboutOurStoryParagraph"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className={"aboutEmployees"}>
                <h1 className={"aboutHeader"}>Employees</h1>
                <div className={"aboutEmployeeCardContainer"}>
                    <EmployeeCard></EmployeeCard>
                    <EmployeeCard></EmployeeCard>
                    <EmployeeCard></EmployeeCard>
                </div>
            </div>
            <div className={"aboutFaq"}>
                <h1 className={"aboutHeader"}>FAQ</h1>
                <div className={"aboutFaqSectionContainer"}>
                    <FaqSection className={faqSectionClassName}
                        question={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum ex non ratione! Alias dicta obcaecati optio ut veritatis voluptatem?"}
                        answer={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis ducimus quibusdam suscipit! Adipisci, eius eum excepturi id impedit ipsum mollitia quia ratione sequi suscipit voluptas voluptates voluptatum? Eius esse facere fuga natus nulla quisquam repudiandae totam voluptas."}
                    />
                    <FaqSection className={faqSectionClassName}
                        question={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at aut delectus dignissimos dolorum ducimus eveniet exercitationem id ipsa magnam natus obcaecati perferendis porro quaerat qui quidem quos recusandae, repellendus rerum sapiente, tempore voluptatem voluptatum! Amet eius illum necessitatibus suscipit?"}
                        answer={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, maiores."}
                    />
                    <FaqSection className={faqSectionClassName}
                        question={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, beatae consequatur corporis eligendi illo ipsam maxime nesciunt sed velit veniam?"}
                        answer={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic perspiciatis sit tempore! Cupiditate earum, ipsam laboriosam magni natus similique temporibus."}
                    />
                </div>
            </div>
        </div>

    )
}