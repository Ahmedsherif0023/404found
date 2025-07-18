import type { Route } from "./+types/home";
import '../app.css'
import Navbar from "~/components/navbar/Navbar";
import Card from "~/components/card/Card";

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
    </main>
  );
}
