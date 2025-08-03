
import '../app.css'
import Navbar from "~/components/navbar/Navbar";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import BudgetRange from "../components/budgetrange/BudgetRange";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FAQCard from "~/components/FAQ/FAQ";
import Footer from "~/components/footer/Footer";


export default function Contact() {
  return (
    <main>
      <Navbar />
    <div className="contact-div second-div min-h-[200px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
              <h1 className="text-[15px]">Contact Us</h1>
              <p>
             Get in touch with us today and let us help you with any questions or inquiries you may have.
              </p>
            </div>      

            <div className="contact-ways">
              <div className="contact-way"><MdMail/> <label> ahmedsherifoo23@gmail.com</label></div>
              <div className="contact-way"><FaPhone/> <label>+201274375560</label> </div>
              <div className="contact-way"><FaLocationDot /> <label>Egypt</label> </div>
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

                  <div className="connected">
                  <div className="operating-days">Operating Days <label>Monday to Friday</label></div>
                <ul className="socials">
                               <span className="connected">Stay Connected</span>
                               <div className="icon-list">
                                 <li> <a href="#"><FaFacebook /></a> </li>
                               <li> <a href="#"><FaLinkedin /></a> </li>
                               <li> <a href="#"><FaInstagram /></a> </li>
                               </div>
                              
                           </ul>
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
                        <div className="today divv">
            <div className="head">
              <img src="./assets/Logooo.png" alt="Logo" />
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
                    <a href="/contact" className="btn">Start Project</a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
    </main>
  )
}
