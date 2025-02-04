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
                        answer={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis ducimus quibusdam suscipit! Adipisci, eius eum excepturi id impedit ipsum mollitia quia ratione sequi suscipit voluptas voluptates voluptatum? Eius esse facere fuga natus nulla quisquam repudiandae totam voluptas. A ab alias aperiam aut blanditiis commodi, culpa deserunt distinctio dolor dolorem eius esse impedit libero maxime recusandae vitae voluptates. Beatae distinctio excepturi in libero molestiae. Aliquam culpa cum dignissimos distinctio dolor, dolore dolorem dolores facilis fugit illo ipsa iure minus natus necessitatibus nobis nostrum odit officiis perferendis perspiciatis placeat quibusdam quisquam recusandae, repellat saepe sapiente sequi, tenetur. Esse facilis ipsam recusandae."}
                    />
                    <FaqSection className={faqSectionClassName}
                        question={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deserunt facilis fugit id laboriosam libero nam nesciunt obcaecati, possimus quaerat rem suscipit veniam vero? Pariatur, perspiciatis sapiente! Fugit, ipsa, voluptatibus?"}
                        answer={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, maiores."}
                    />
                    <FaqSection className={faqSectionClassName}
                        question={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi consequatur corporis cum doloremque et expedita ipsa itaque laudantium natus, necessitatibus nesciunt odio perferendis quod saepe sapiente tempore voluptates! Ad aliquid commodi ducimus ex ipsa laborum officiis ratione rem temporibus."}
                        answer={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at eum non sed sint sit voluptate! Ab adipisci aliquam, animi, aspernatur assumenda at beatae commodi corporis debitis deserunt doloremque eaque eius, enim eos excepturi facilis harum hic illo impedit ipsum itaque iure magni minus mollitia nulla omnis perferendis perspiciatis placeat possimus provident quaerat quo quos sequi similique suscipit vero voluptatibus? Amet aperiam atque aut commodi consectetur consequuntur dignissimos dolor dolorum eveniet fuga inventore minima molestias nemo pariatur, possimus quas qui quis quisquam repudiandae sed sint sunt unde ut. Ab adipisci alias amet asperiores atque autem consectetur consequuntur, dignissimos eligendi esse exercitationem explicabo facilis fugiat harum iste maiores minus, modi nihil non nulla omnis optio praesentium quas quia quisquam recusandae reiciendis rem saepe similique tempora tenetur ut velit voluptatibus? Accusamus ad animi at consectetur deserunt dignissimos dolorum eligendi esse laudantium magnam minus molestiae nihil, obcaecati officiis placeat quod ratione rem reprehenderit similique totam ut vero voluptatem. Atque aut hic quo temporibus voluptates. Deserunt id laudantium modi, nihil odio quis sequi? Dolorum ea eligendi explicabo reiciendis vel voluptas voluptate, voluptatibus? Alias dicta dignissimos doloribus ducimus nesciunt nulla quae qui repudiandae rerum similique! At debitis dignissimos ducimus fugiat iste iure reprehenderit ut veritatis?"}
                    />
                </div>
            </div>
        </div>

    )
}