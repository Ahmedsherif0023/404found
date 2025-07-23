
import '../app.css'
import Navbar from "~/components/navbar/Navbar";
import Footer from "~/components/footer/Footer";
import ServiceCard from "~/components/serviceCard/ServiceCard";
import icon from "../../public/assets/Logooo.png";

export default function Services() {
  return (
    <main >
      <Navbar />
      <div className='Services-container'>
        <div className="second-div min-h-[400px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
          <h1 className="text-[60px]">Our Services</h1>
          <p className="text-[24px]">
           Transform your brand with our innovative digital solutions that captivate and engage your audience.
          </p>
        </div>
        <div className="service-type">
        <h1>Design</h1>
        <p>At 404Found, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. </p>
        <div className="include">
          Our design services include:
        </div>
        </div>
        <div className="sub-service">
          <h2>User Experience (UX) Design</h2>
        </div>
       
        <div className="sub-service-contain">
          <ServiceCard title="User Research and Persona Development" img="/assets/UR.png" />
          <ServiceCard title="Information Architecture and Wireframing" img="/assets/IA.png" />  
          <ServiceCard title="Interactive Prototyping and User Testing" img="/assets/IP.png" />
          <ServiceCard title="UI Design and Visual Branding" img="/assets/UI.png" />
        </div>
      
         <div className="sub-service">
          <h2>User Interface (UI) Design</h2>
        </div>  
        <div className="sub-service-contain">
          <ServiceCard title="Intuitive and Visually Appealing Interface Design" img="/assets/ID.png" />
          <ServiceCard title="Custom Iconography and Illustration" img="/assets/CI.png" />  
          <ServiceCard title="Typography and Color Palette Selection" img="/assets/TYP.png" />
          <ServiceCard title="Responsive Design for Various Devices" img="/assets/RES.png" />
        </div>
         <div className="sub-service">
          <h2>Branding and Identity</h2>
        </div>  
        <div className="sub-service-contain">
          <ServiceCard title="Logo Design and Visual Identity Development" img="/assets/Logo.png" />
          <ServiceCard title="Brand Strategy and Positioning" img="/assets/Brand.png" />  
          <ServiceCard title="Brand Guidelines and Style Guides" img="/assets/Guides.png" />
          <ServiceCard title="Marketing Collateral Design (Brochures, Business Cards, etc.)" img="/assets/Marketing.png" />
        </div>
        <div className="service-type">
        <h1>Engineering</h1>
        <p>Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.</p>
        <div className="include">
          Our engineering services include:
        </div>
        </div>
         <div className="sub-service">
          <h2>Web Development</h2>
        </div>
        <div className="sub-service-contain">
          <ServiceCard title="Front-End Development (HTML, CSS, JavaScript)" img="/assets/Front.png" />
          <ServiceCard title="Back-End Development (PHP, Python, Ruby)" img="/assets/Back.png" />  
          <ServiceCard title="Content Management System (CMS) Development (WordPress, Drupal)" img="/assets/CMS.png" />
          <ServiceCard title="E-Commerce Platform Development (Magento, Shopify)" img="/assets/E-com.png" />
        </div>
         <div className="sub-service">
          <h2>Mobile App Development</h2>
        </div>
        <div className="sub-service-contain">
          <ServiceCard title="Native iOS and Android App Development" img="/assets/Native.png" />
          <ServiceCard title="Cross-Platform App Development (React Native, Flutter)" img="/assets/Cross.png" />  
          <ServiceCard title="App Prototyping and UI/UX Design Integration" img="/assets/Prototype.png" />
          <ServiceCard title="App Testing, Deployment, and Maintenance" img="/assets/Testing.png" />
        </div>
         <div className="sub-service">
          <h2>Custom Software Development</h2>
        </div>
        <div className="sub-service-contain">
          <ServiceCard title="Entrprise Software Development" img="/assets/Enterprise.png" />
          <ServiceCard title="Custom Web Application Development" img="/assets/Web-app.png" />  
          <ServiceCard title="Integration with Third-Party APIs and Systems" img="/assets/API.png" />
          <ServiceCard title="Legacy System modernization and Migratoin" img="/assets/Legacy.png" />
        </div>
        <div className="service-type">
        <h1>Project Management</h1>
        <p>Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>
        <div className="include">
          Our project management services include:
        </div>
        </div>
        <div className="sub-service">
          <h2>Project Planning and Scoping</h2>
        </div>
        <div className="sub-service-contain">
          <ServiceCard title="Requirements Gathering and Analysis" img="/assets/Gathering.png" />
          <ServiceCard title="Project ROadmap and Timeline Development" img="/assets/Roadmap.png" />  
          <ServiceCard title="Resource Allocation and Task Assignment" img="/assets/Allocation.png" />
          <ServiceCard title="Risk Assessment and Mitigation Strategies" img="/assets/Roadmap.png" />
        </div>
        <div className="sub-service">
          <h2>Agile Development</h2>
        </div>
        <div className="sub-service-contain">
          <ServiceCard title="Iterative Development and Sprints" img="/assets/DEV.png" />
          <ServiceCard title="Scrum or Kanban Methodology Implementation" img="/assets/Scrum.png" />  
          <ServiceCard title="Regular Progress Updates and Demos" img="/assets/Progress.png" />
          <ServiceCard title="Continuous Improvement and Feedback Incorporation" img="/assets/Improvement.png" />
        </div>
        <div className="sub-service">
          <h2>Quality Assurance and Testing</h2>
        </div>
        <div className="sub-service-contain">
          <ServiceCard title="Test Planning and Execution" img="/assets/Planning.png" />
          <ServiceCard title="Function Usabilty Testing" img="/assets/Function.png" />  
          <ServiceCard title="Performance and Security Testing" img="/assets/Performance.png" />
          <ServiceCard title="Bug Tracking and Issue Resolution" img="/assets/Bug.png" />
        </div>
        <div className="Thank-div min-h-[300px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
               <img src={icon} alt="icon" />
               <h1>Let us Bring your Ideas to Life in the Digital World.</h1>
               <p>No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</p>
                <div className="btn">
                    <a href="/contact" className="btn">Start Project</a>
                </div>
              </div>
      </div>      
      <Footer />
    </main>
  );
}
