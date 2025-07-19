import type { Route } from "./+types/home";
import '../app.css'
import Navbar from "~/components/navbar/Navbar";
import Card from "~/components/card/Card";
import TestmonialCard from "~/components/testmonialCard/TestmonialCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "404 Found Agency" },
    { name: "description", content: "a web agency that turns digital dead ends into functional, beautiful experiences. " },
  ];
}

export default function Home() {
  return (
    <main >
      <Navbar />
      <div className="min-h-screen flex items-center justify-center text-[#fff] text-[60px] text-center main-div">
        <div className="secondary-main-div"> 
           Bringing Your Ideas alive
        <div className="sub-main">
          <p className="text-[20px] text-[#fff] mt-4">
            We are a web agency that turns digital dead ends into functional, beautiful experiences
          </p>
        </div>

      <div className="flex flex-row items-center justify-center m-8 target-audience">
      <label>for</label>
      <div className="target">
        Startups
      </div>
      ,
      <div className="target">
        Businesses
      </div>
      ,
      <div className="target">
        Individuals
        </div>
        and
        <div className="target">
          any other foundation
        </div>
      </div>


       <div className="flex flex-row btns">
         <button className="our-work">
           Our Works
         </button>
         <button className="contact">
           Contact Us
         </button>
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
        <p>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
      </div>
      <div className="our-services min-h-[200px] flex items-center justify-center text-center">
        <Card title="Design" description="At 404 Found, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences." img="/assets/design.png" showLearnMore={true}/>
        <Card title="Engineering" description="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs." img="/assets/engineering.png" showLearnMore={true}/>
        <Card title="Project Manager" description="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process." img="/assets/x.png" showLearnMore={true}/>
      </div>
     <div className="second-div min-h-[300px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
        <h1 className="text-[60px]">Why Choose 404 Found ?</h1>
        <p>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
      </div>
      <div className="specialities">
        <Card title="Expertise" description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions." img="/assets/expertise.png" showLearnMore={false}/>
        <Card title="Client-Centric Approach" description="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success." img="/assets/client.png" showLearnMore={false}/>
        <Card title="Results-Driven Solutions" description="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage." img="/assets/result.png" showLearnMore={false}/>
        <Card title="Collobrative Partnership" description="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive." img="/assets/partnership.png" showLearnMore={false}/>
      </div>
     <div className="second-div min-h-[300px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
        <h1 className="text-[60px]">What Our Clinets Say About US ?</h1>
        <p>At 404 Found, we take pride in delivering exceptional digital products and services that drive success for our clients. <br/> Here's what some of our satisfied clients have to say about their experience working with us</p>
      </div>
      <div className="testmonials">
        <TestmonialCard personName="John Smith" personRole="CEO of chic Boutique" title="404Found has been Instrumental in Transforming our Online Presence. " description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier." img="/assets/Profile.png" showLearnMore={false}/>
        <TestmonialCard personName="Sarah Johnson" personRole="Founder of HungrBites" title="Working with 404Found was a breeze. " description="They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend." img="/assets/Profile2.png" showLearnMore={false}/>
        <TestmonialCard personName="Mark Thompson" personRole="CEO of EventMasters" title="404Found developed a comprehensive booking and reservation system for our event management company. " description="Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences." img="/assets/Profile3.png" showLearnMore={false}/>
        <TestmonialCard personName="Laura Adams" personRole="CEO of ProTech Solutions" title="ProTech Solutions turned to 404Found to automate our workflow " description="They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner." img="/assets/Profile4.png" showLearnMore={false}/>
        <TestmonialCard personName="Michael Anderson" personRole="Founder of Dream Homes Realty" title="SquareUp designed and developed a captivating web portal for showcasing our real estate listings. " description="The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched." img="/assets/Profile5.png" showLearnMore={false}/>
        <TestmonialCard personName="Emily Turner" personRole="CEO of FitLife Tracker" title="FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans." description="SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs." img="/assets/Profile6.png" showLearnMore={false}/>
      </div>
     <div className="second-div min-h-[300px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
        <h1 className="text-[60px]">Frequently Asked Questions</h1>
        <p className="font-[500]">Still have any questions? <br/> Contact our team via <span className="text-(--primary-color) font-[800]" >ahmedsherifoo23@gmail.com</span></p>
      </div>
    </main>
  );
}
