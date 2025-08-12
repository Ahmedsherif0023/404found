
import '../app.css'
import Navbar from "~/components/navbar/Navbar";
import StoryPoint from '~/components/storypoints/StoryPoint';
import Footer from  '~/components/footer/Footer';
import {NavLink} from "react-router-dom";
export default function About() {
  return (
    <main>
      <Navbar />
      <div className="second-div min-h-[200px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
        <h1 className="text-[50px]">About Us</h1>
        <p>
         Welcome to 404Found, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.
        </p>
      </div>




      <div className="about">
        <div className="about-text">
          <h1>
            About 404Found
          </h1>
          <p>404Found is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
        </div>
        <div className="about-image">
          <img src="./assets/xxx.png" alt="img" className="background"/>
          <img src="./favicon.ico" alt="Logo" className="Logoo"/>
        </div>
      </div>
        <div className="Story-header">
          <h1>Our Story</h1>
        </div>




        <div className="Steps">
                  <ul>
        
                    <li><StoryPoint num='01' title='Design' Describtion='We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.'/></li>
                  <li><StoryPoint num='02' title='Engineering' Describtion='Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.'/></li>
                    <li><StoryPoint num='03' title='Project Management' Describtion='Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.'/></li>
                  <li><StoryPoint num='04' title='Collaboration' Describtion='Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.'/></li>
                    <li><StoryPoint num='05' title='Client-Centric Approach' Describtion='We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.'/></li>
                  <li><StoryPoint num='06' title='Driving Success' Describtion='When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.'/></li>
                
                  </ul>
                </div>





                
          <div className="today">
            <div className="head">
              <img src="./favicon.ico" alt="Logo"  className="Logo"/>
              <div className="head-text">
                <h1>Today, 404Found Continues to Thrive as a Leading Digital Product Agency.....</h1>
                <p>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
              </div>
            </div>
            <div className="body">
              <div className="welcome">
                <p>Welcome to 404Found</p>
                <section>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</section>
                  <div className="btn">
                    <NavLink to="/contact" className="btn">Start Project</NavLink>
                </div>
              </div>
            </div>
          </div>
          <Footer />
    </main>
  );
}
