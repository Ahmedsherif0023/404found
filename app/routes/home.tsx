import type { Route } from "./+types/home";
import "../app.css";
import Navbar from "~/components/navbar/Navbar";
import Card from "~/components/card/Card";
import TestmonialCard from "~/components/testmonialCard/TestmonialCard";
import FAQCard from "~/components/FAQ/FAQ";
import icon from "../../public/assets/Logooo.png";
import BudgetRange from "../components/budgetrange/BudgetRange";
import Footer from "~/components/footer/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "404 Found Agency" },
    {
      name: "description",
      content:
        "a web agency that turns digital dead ends into functional, beautiful experiences. ",
    },
  ];
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center text-[#fff] text-[60px] text-center main-div">
        <div className="secondary-main-div">
          Bringing Your Ideas alive
          <div className="sub-main">
            <p className="text-[20px] text-[#fff] mt-4">
              We are a web agency that turns digital dead ends into functional,
              beautiful experiences
            </p>
          </div>
          <div className="flex flex-row items-center justify-center m-8 target-audience">
            <label>for</label>
            <div className="target">Startups</div>,
            <div className="target">Businesses</div>,
            <div className="target">Individuals</div>
            and
            <div className="target">any other foundation</div>
          </div>
          <div className="flex flex-row btns">
            <button className="our-work">Our Works</button>
            <button className="contact">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="trusted-container flex items-center justify-center text-center">
        <div className="trusted flex items-center justify-center text-center">
          Trusted by 250+ Clients
        </div>
      </div>
      <div className="second-div min-h-[300px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
        <h1 className="text-[60px]">Our Services</h1>
        <p>
          Transform your brand with our innovative digital solutions that
          captivate and engage your audience.
        </p>
      </div>
      <div className="our-services min-h-[200px] flex items-center justify-center text-center">
        <Card
          title="Design"
          description="At 404 Found, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
          img="/assets/design.png"
          showLearnMore={true}
        />
        <Card
          title="Engineering"
          description="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
          img="/assets/engineering.png"
          showLearnMore={true}
        />
        <Card
          title="Project Manager"
          description="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
          img="/assets/x.png"
          showLearnMore={true}
        />
      </div>
      <div className="second-div min-h-[300px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
        <h1 className="text-[60px]">Why Choose 404 Found ?</h1>
        <p>
          Experience excellence in digital craftsmanship with our team of
          skilled professionals dedicated to delivering exceptional results.
        </p>
      </div>
      <div className="specialities">
        <Card
          title="Expertise"
          description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          img="/assets/expertise.png"
          showLearnMore={false}
        />
        <Card
          title="Client-Centric Approach"
          description="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
          img="/assets/client.png"
          showLearnMore={false}
        />
        <Card
          title="Results-Driven Solutions"
          description="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
          img="/assets/result.png"
          showLearnMore={false}
        />
        <Card
          title="Collobrative Partnership"
          description="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
          img="/assets/partnership.png"
          showLearnMore={false}
        />
      </div>
      <div className="second-div min-h-[300px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
        <h1 className="text-[60px]">What Our Clinets Say About US ?</h1>
        <p>
          At 404 Found, we take pride in delivering exceptional digital products
          and services that drive success for our clients. <br /> Here's what
          some of our satisfied clients have to say about their experience
          working with us
        </p>
      </div>
      <div className="testmonials">
        <TestmonialCard
          personName="John Smith"
          personRole="CEO of chic Boutique"
          title="404Found has been Instrumental in Transforming our Online Presence. "
          description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
          img="/assets/Profile.png"
          showLearnMore={false}
        />
        <TestmonialCard
          personName="Sarah Johnson"
          personRole="Founder of HungrBites"
          title="Working with 404Found was a breeze. "
          description="They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. 404Found is a trusted partner we highly recommend."
          img="/assets/Profile2.png"
          showLearnMore={false}
        />
        <TestmonialCard
          personName="Mark Thompson"
          personRole="CEO of EventMasters"
          title="404Found developed a comprehensive booking and reservation system for our event management company. "
          description="Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences."
          img="/assets/Profile3.png"
          showLearnMore={false}
        />
        <TestmonialCard
          personName="Laura Adams"
          personRole="CEO of ProTech Solutions"
          title="ProTech Solutions turned to 404Found to automate our workflow "
          description="They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. 404Found's expertise and professionalism have made them a trusted technology partner."
          img="/assets/Profile4.png"
          showLearnMore={false}
        />
        <TestmonialCard
          personName="Michael Anderson"
          personRole="Founder of Dream Homes Realty"
          title="404Found designed and developed a captivating web portal for showcasing our real estate listings. "
          description="The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. 404Found's expertise in the real estate industry is unmatched."
          img="/assets/Profile5.png"
          showLearnMore={false}
        />
        <TestmonialCard
          personName="Emily Turner"
          personRole="CEO of FitLife Tracker"
          title="FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans."
          description="404Found's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend 404Found for any health and fitness app development needs."
          img="/assets/Profile6.png"
          showLearnMore={false}
        />
      </div>
      <div className="second-div min-h-[300px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
        <h1 className="text-[60px]">Frequently Asked Questions</h1>
        <p className="font-[500]">
          Still have any questions? <br /> Contact our team via{" "}
          <span className="text-(--primary-color) font-[800]">
            ahmedsherifoo23@gmail.com
          </span>
        </p>
      </div>
      
      <div className="FAQ">
        <div>
          <FAQCard
            number={1}
            question="What services does 404Found provide?"
            answer="404Found offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
          />
          <FAQCard
            number={3}
            question="What industries does 404Found work with?"
            answer="Any Kind of industry can be served by 404Found. We have experience working with startups, small businesses, and large enterprises across various sectors, including e-commerce, healthcare, finance, education, and more."
          />
          <FAQCard
            number={5}
            question="Do you offer ongoing support and maintenance after the project is completed?"
            answer="Of Course! We provide ongoing support and maintenance services to ensure that your digital products continue to perform optimally. Our team is available to address any issues, implement updates, and make enhancements as needed."
          />
          <FAQCard
            number={7}
            question="How involved will I be in the project development process?"
            answer="You will be actively involved throughout the project development process. We believe in transparent communication and collaboration, and we will keep you informed at every stage. Your feedback and input are crucial to ensuring that the final product meets your expectations."
          />
        </div>
        <div>
          <FAQCard
            number={2}
            question="How can 404Found help my business?"
            answer="We can help your business by providing tailored digital solutions that enhance your online presence, improve user experiences, and drive business growth. Whether you need a new website, a mobile app, or custom software, our team has the expertise to deliver results."
          />
          <FAQCard
            number={4}
            question="How long does it take to complete a project with 404Found?"
            answer="It depends on the complexity and scope of the project. We work closely with our clients to establish realistic timelines and milestones. Typically, projects can range from a few weeks to several months, depending on the requirements."
          />
          <FAQCard
            number={6}
            question="Can you work with existing design or development frameworks?"
            answer="Absolutely! We can work with your existing design or development frameworks, or we can create custom solutions from scratch. Our team is flexible and adaptable to meet your specific needs and preferences."
          />
          <FAQCard
            number={8}
            question="Can you help with website or app maintenance and updates?"
            answer="Yes, we offer website and app maintenance services to ensure that your digital products remain up-to-date, secure, and functional. We can handle regular updates, bug fixes, and feature enhancements as needed."
          />
        </div>
      </div>
      <div className="Thank-div min-h-[300px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
       <img src={icon} alt="icon" />
       <h1>Thank you for your interest in 404found</h1>
       <p>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
        <div className="btn">
            <a href="/contact" className="btn">Start Project</a>
        </div>
      </div>
      <form className="contact-form">
      <div className="Name-and-Email">
        <div className="Name">
          <span>Full Name</span>
          <input type="text" placeholder="Type here" />
        </div>
        <div className="Email">
          <span>Email</span>
          <input type="email" placeholder="Type here" />
        </div>
      </div>

      <div className="contact-purpose">
        <h1 className="purpose-question">
          Why are you contacting us?
        </h1>
        <div className="purpose-options">
          <div className="option">
            <input type="checkbox" />
            <span>Website building</span>
          </div>
          <div className="option">
            <input type="checkbox" />
            <span>Project Managment</span>
          </div>
          <div className="option">
            <input type="checkbox" />
            <span>App Development</span>
          </div>
          <div className="option">
            <input type="checkbox" />
            <span>Branding</span>
          </div>
          <div className="option">
            <input type="checkbox" />
            <span>Other</span>
          </div>
      </div>
      
      </div> 
     <div className="budget-ratio">
       <h1>Your budget</h1>
       <p>slide to indicate your budget range</p>
        <div className="budget">
        <BudgetRange />
      </div>
     </div>
     <div className="Message">
          <span>Your Message</span>
          <textarea placeholder="Type here"/>
          
        </div>

        <div className="btn">
        <input type="submit" value="Submit" className="submit-btn" />
          </div>
      </form>
      <Footer />
    </main>
  );
}
