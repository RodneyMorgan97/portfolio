import Head from "next/head";
import LavaLamp from "../components/LavaLamp/LavaLamp";
import TextCycle from "../components/TextCycle/TextCycle";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";

const FlowerWithModal = dynamic(
  () => {
    return import("../components/FlowerWithModal/FlowerWithModal");
  },
  { ssr: false }
);

export default function Home() {
  const containerStyle = "flex items-center min-w-full flex-col";

  const groovyTraits = [
    "technical leadership",
    "managerial training",
    "web integrations",
    "analytically driven solutions",
    "mentorship",
    "a positive attitude",
  ];
  return (
    <>
      <Head>
        <title>Rodney Morgan</title>
        <meta
          name="description"
          content="Your next leadership training candidate"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"flex flex-col items-center min-w-full text-white"}>
        {/* Title container */}
        <div className={`${containerStyle}  p-10 bg-theme-sandy-brown`}>
          {/* */}
          <div className="flex flex-col">
            <p className={`text-6xl md:text-8xl my-10 text-white`}>
              Rodney Morgan
            </p>
            <div className="flex  flex-col break-normal">
              <p className={`text-6xl text-white`}>
                The <b className={`text-theme-burnt-sienna`}>grooviest</b>{" "}
                choice for
              </p>
              <div className={"flex text-theme-persian-green text-6xl"}>
                <TextCycle cycleText={groovyTraits} />
              </div>
            </div>
          </div>
          <div className={"max-w-40 m-4"}>
            <LavaLamp />
          </div>
        </div>
        <div
          className={`${containerStyle} justify-between p-10 bg-theme-maize-crayola`}
        >
          <h1 className="text-5xl text-center">
            Why am I ready for leadership?
          </h1>
          <div className="flex flex-col items-center justify-center text-center md:w-full md:flex-row md:justify-evenly m-8">
            <FlowerWithModal
              petalColor={"theme-persian-green"}
              text={"Technical Mentor"}
              modalBackgroundColor={"#2A9D8F"}
            >
              <div className="flex flex-col text-white p-4">
                <p className="text-4xl pb-8">Technical Mentor</p>
                <p className="pb-2">
                  {
                    "During my time at MP Biomedicals, I have had the privilege of providing mentorship to colleagues and an intern. My mentorship has primarily focused on technical improvements:"
                  }
                </p>
                <li>{"Improving code reuse"}</li>
                <li>{"Enhancing application security"}</li>
                <li>{"Deploying production-ready integrations"}</li>
                <li>{"Application scaling"}</li>
                <li>{"Full-Stack architecture"}</li>
                <p className="pt-4">
                  {
                    "With this experience, I believe that I have a strong foundation for future leadership on a development team."
                  }
                </p>
              </div>
            </FlowerWithModal>

            <FlowerWithModal
              petalColor={"theme-persian-green"}
              text={"Value Driven Solutions"}
              modalBackgroundColor={"#2A9D8F"}
            >
              <div className="flex flex-col text-white p-4">
                <p className="text-4xl pb-8">Value Driven Solutions</p>
                <p className="pb-2">
                  {
                    "It's important that the projects I complete move MP Biomedicals towards a more advantage position in our industry."
                  }
                </p>
                <li>{"How can we catch up to competition?"}</li>
                <li>
                  {"What can we do to beat compeitiors in the marketplace?"}
                </li>
                <li>{"How can we generate more revenue?"}</li>
                <li>{"Will this make a difference for MP Bio employees?"}</li>
                <li>{"How much time will this save employees?"}</li>
                <li>{"How can we measure success in this project?"}</li>
                <p className="pt-4 pb-2">
                  {
                    "This can be seen in several projects I've completed during my last two years at MP Bio."
                  }
                </p>
                <li>
                  {
                    "The Address Cleanup website saved us time when importing addresses to Infor M3"
                  }
                </li>
                <li>
                  {
                    "The creation of our API Gateway (Express) allows the real-time transfer of information between our business software"
                  }
                </li>
                <li>
                  {
                    "The Quote-to-Order integration allows sales to submit an order with one click from Zoho instead of manual submission"
                  }
                </li>
                <li>
                  {
                    "The Sales Portal (coming soon!) will give our Sales Team an at-a-glance view of our Customers, Products, and Orders."
                  }
                </li>
              </div>
            </FlowerWithModal>
            <FlowerWithModal
              petalColor={"theme-persian-green"}
              text={"Cross-Functional Communicator"}
              modalBackgroundColor={"#2A9D8F"}
            >
              <div className="flex flex-col text-white p-4 md:max-w-[50%]">
                <p className="text-4xl pb-8">Cross-Functional Communicator</p>
                <p className="pb-4 md:text-2xl">
                  {
                    "Throughout my time in the IT Department as an Integrations Programmer, it has been my responsibility to meet with business leaders across our organization to collaborate on technical solutions that accommodate business needs."
                  }
                </p>
                <p className="pb-4 md:text-2xl">
                  {
                    "I plan to take this knowledge into my leadership to build strong working relationships with people from different backgrounds and skill sets, which can help me to better understand the needs and perspectives of others. This, in turn, can help me to make more informed decisions and find solutions to problems that benefit the entire organization. "
                  }
                </p>
                <p className="pb-4 md:text-2xl">
                  {
                    "Additionally, being able to communicate effectively with people from different departments can help build trust and foster a positive work culture, which is crucial for any leader. "
                  }
                </p>
              </div>
            </FlowerWithModal>
          </div>
        </div>
        <div
          className={`${containerStyle} justify-between p-10 bg-theme-burnt-sienna`}
        >
          <h1 className="text-5xl text-center">
            How will MIT help me become a better leader?
          </h1>
          <div className="flex flex-col items-center justify-center text-center md:w-full md:flex-row md:justify-evenly  m-8">
            <FlowerWithModal
              petalColor={"theme-maize-crayola"}
              text={"Conflict Resolution"}
              modalBackgroundColor={"#E9C46A"}
            >
              <div className="flex flex-col text-white p-4 md:max-w-[50%]">
                <p className="text-4xl pb-8">Conflict Resolution</p>
                <p className="pb-4 md:text-2xl">
                  {
                    "I believe that conflict resolution is an important skill for any leader to possess, as it allows them to effectively address and resolve conflicts that may arise within their team or organization.  As a leader, it is my responsibility to create a positive and productive work environment, and being able to effectively resolve conflicts is crucial in achieving this goal. "
                  }
                </p>
                <p className="pb-4 md:text-2xl">
                  {
                    "I feel like I haven't been challenged with much conflict in my leadership experience (thankfully) and will not be fully prepared to handle it appropriately when it inevitably occurs. I believe that participating in the MIT leadership training program will give me the tools and knowledge I need to better understand and address conflicts in the future."
                  }
                </p>
              </div>
            </FlowerWithModal>
            <FlowerWithModal
              petalColor={"theme-maize-crayola"}
              text={"Learning From Experience"}
              modalBackgroundColor={"#E9C46A"}
            >
              <div className="flex flex-col text-white p-4 md:max-w-[50%]">
                <p className="text-4xl pb-8">Learning From Experience</p>
                <p className="pb-4 md:text-2xl">
                  {
                    "In the MIT leadership training program, I will have the chance to learn from experienced leaders who have a wealth of knowledge and experience to share. I believe that learning from these individuals will be a valuable opportunity for me to gain insights and perspectives that I may not have considered before. I am eager to learn from their experiences and to apply what I learn to my own leadership journey. I believe that this type of learning will help me to become a more effective and respected leader within my organization."
                  }
                </p>
              </div>
            </FlowerWithModal>
            <FlowerWithModal
              petalColor={"theme-maize-crayola"}
              text={"Expanding My Network"}
              modalBackgroundColor={"#E9C46A"}
            >
              <div className="flex flex-col text-white p-4 md:max-w-[50%]">
                <p className="text-4xl pb-8">Expanding My Network</p>
                <p className="pb-4 md:text-2xl">
                  {
                    "I believe that expanding my network of mentors and connecting with other program attendees is an important aspect of my leadership development. In the MIT leadership training program, I will have the opportunity to learn from experienced mentors, as well as connect with other program attendees who are also aspiring to become leaders. I believe that having these connections will be a valuable resource for me as I continue to grow and develop my leadership skills. Additionally, I believe that connecting with other program attendees will be beneficial because I will inevitably be working with these individuals in the future, and building strong relationships with them now will help me to be a more effective leader when it's time for the next generation of leaders to step-in. "
                  }
                </p>
              </div>
            </FlowerWithModal>
          </div>
        </div>
        <div
          className={`${containerStyle} justify-between p-10 bg-theme-rifle-green`}
        >
          <h1 className="text-5xl text-center">
            Why should MP Biomedicals invest in me?
          </h1>
          <div className="flex flex-col items-center justify-center text-center md:w-full md:flex-row md:justify-evenly m-8">
            <FlowerWithModal
              petalColor={"theme-burnt-sienna"}
              text={"Company-first Mentality"}
              modalBackgroundColor={"#E76F51"}
            >
              <div className="flex flex-col text-white p-4 md:max-w-[50%]">
                <p className="text-4xl pb-8">Company-first Mentality</p>
                <p className="pb-4 md:text-2xl">
                  {
                    "I believe that it's in the best interest of MP Biomedicals to invest their time and resources into me because I have the company's best interest in mind when performing my daily tasks."
                  }
                </p>
                <p className="pb-4 md:text-2xl">
                  {
                    "One way I have demonstrated this dedication is by striving to do things the right way, even when it isn't the easiest option. When programming, I am sure to write readable documentation so that other programmers (current or future) will be able to understand my thought process throughout the development lifecycle. Also, I'll take the time to make my code scalable and easily expandable so it can be reused whenever the company's needs change."
                  }
                </p>
                <p className="pb-4 md:text-2xl">
                  {
                    "Another way I demonstrate a company-first mentality is my contribution to the IT Team's yearly goals. I get the opportunity to look at the state of our company and determine the future-projects that will have the most immediate impact on my coworkers. Sometimes this requires major changes and collaborative projects, but other times there are some small, easy wins that I get to help MP Biomedicals reach."
                  }
                </p>
                <p className="pb-4 md:text-2xl">
                  {
                    "Finally, a third way I show that I have the company's best interest in mind through my daily work is by treating those around me with respect. While this one isn't technical, I think that it goes a long way to be kind to everyone I interact with. My intention is to make everyone's life easier, and refrain from being the bottleneck on our collective path to success. "
                  }
                </p>
              </div>
            </FlowerWithModal>
            <FlowerWithModal
              petalColor={"theme-burnt-sienna"}
              text={"Eager to Grow"}
              modalBackgroundColor={"#E76F51"}
            >
              <div className="flex flex-col text-white p-4 md:max-w-[50%]">
                <p className="text-4xl pb-8">Eager to Grow</p>
                <p className="text-3xl pb-2">Growth Mindset</p>
                <p className="pb-4 md:text-2xl">
                  {
                    "I am someone who believes that I can ALWAYS improve and grow, whether it be in leadership or technical ability. I view challenges and setbacks as opportunities to learn and grow, rather than as failures. "
                  }
                </p>
                <p className="text-3xl pb-2">Proactive behavior</p>
                <p className="pb-4 md:text-2xl">
                  {
                    "I see myself as someone who is proactive in seeking out opportunities to learn and improve. I believe that I take initiative to seek out resources, ask for feedback, and volunteer for new tasks and projects."
                  }
                </p>
                <p className="text-3xl pb-2">Desire to learn</p>
                <p className="pb-4 md:text-2xl">
                  {
                    "I am always looking to learn more. In fact, one of the reasons I built this website for my application is because I wanted to try out a new web hosting platform I haven't used before. This is also my first time purchasing a domain and making it available on the web. Honestly, it would have been easier to make a Powerpoint, but I wanted to challenge myself to try something"
                  }
                  <b>{" different"}</b>
                </p>
                <p className="pb-4 md:text-2xl">{""}</p>
              </div>
            </FlowerWithModal>
            <FlowerWithModal
              petalColor={"theme-burnt-sienna"}
              text={"Big Ideas"}
              modalBackgroundColor={"#E76F51"}
            >
              <div className="flex flex-col text-white p-4 md:max-w-[50%]">
                <p className="text-4xl pb-8">Big Ideas</p>
                <p className="pb-4 md:text-2xl">
                  {
                    "MP Biomedicals has consistently deomnstrated greatness by overcoming the odds, crushing projections, and contributing to leading scientific advances."
                  }
                </p>
                <p className="pb-4 md:text-2xl">
                  {
                    "There are many ways that we can continue to provide these opportunities, but as a Software Developer my mind is drawn towards increasing our potential with programming."
                  }
                </p>
                <p className="pb-4 md:text-2xl">
                  {
                    "I would like to make it even easier to get our products in the hands of our customers. Some ways we can accomplish this would be through enhanced data visualization, increasing our marketing team's insights, displaying our products through more vendor websites, and allowing us to make quick iterations mpbio.com"
                  }
                </p>
                <p className="pb-4 md:text-2xl">
                  {
                    "While this sounds exciting, our opportunities are limited with a small team of developers. With my leadership skills growing, I believe I'll be in a position to leverage our development partners and internal development talent to begin accomplishing these goals in the near future."
                  }
                </p>
              </div>
            </FlowerWithModal>
          </div>
        </div>
        <div
          className={`${containerStyle} justify-between p-10 bg-theme-persian-green`}
        >
          <p></p>
        </div>
      </main>
    </>
  );
}
