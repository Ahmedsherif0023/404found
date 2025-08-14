
import ProcessCard from '~/components/ProcessSteps/ProcessSteps';
import '../app.css'
import Navbar from "~/components/navbar/Navbar";
import BudgetRange from "../components/budgetrange/BudgetRange";
import Footer from "~/components/footer/Footer";
import Logo from "../../public/favicon.ico";
import {NavLink} from "react-router-dom";
import WorkForm from "~/components/WorkForm/WorkForm";



export default function Process() {
  return (
    <main>
      <Navbar/>
      <div className="Process">

     
      <div className="second-div min-h-[200px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center work-div">
        <h1 className="text-[50px]">Process of Starting the Project</h1>
        <p className="text-[20px]">
          At 404Found, we value transparency, collaboration, and delivering exceptional results.
        </p>
      </div>
      <div className="work-header">
        <h1>At 404Found</h1>
        <p>
        We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.  </p>
        <div className="example-header">
          Here's an overview of our typical process:
        </div>
        </div>

        <div className="Steps">
          <ul>

            <li><ProcessCard num='01' title='Discovery' Describtion='We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.'/></li>
          <li><ProcessCard num='02' title='Planning and Strategy' Describtion='Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.'/></li>
            <li><ProcessCard num='03' title='Design' Describtion='Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.'/></li>
          <li><ProcessCard num='04' title='Development' Describtion='Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.'/></li>
            <li><ProcessCard num='05' title='Testing and Quality Assurance' Describtion='We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.'/></li>
          <li><ProcessCard num='06' title='Deployment and launch' Describtion='When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.'/></li>
            <li><ProcessCard num='07' title='Post-Launch Support' Describtion="Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support."/></li>
            <li><ProcessCard num='08' title='Continuous Improvement' Describtion='We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.'/></li>
        
          </ul>
        </div>
          <div className="Thank-div min-h-[300px] mt-[0px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
               <img src={Logo} alt="icon" />
               <h1>Thank you for your interest in 404found</h1>
               <p>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
                <div className="btn">
                    <NavLink to="/contact" className="btn">Start Project</NavLink>
                </div>
              </div>
              <WorkForm />
         </div>
         <Footer />
    </main>
  );
}