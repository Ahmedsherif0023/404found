
import '../app.css'
import Navbar from "~/components/navbar/Navbar";
import JobCard from '~/components/jobcard/JobCard';
import Footer from '~/components/footer/Footer';

export default function Careers() {
  return (
    <main>
      <Navbar />
      <div className=" jointeam-div second-div min-h-[200px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center ">
              <h1 className="text-[20px]">Join Our Team at 404Found</h1>
              <p>
              Unlock your potential and join our team of innovators and problem solvers.
              </p>
            </div>
      <div className="welcoming-div text-left justify-center text-[#fff] p-[20px] ">
        <h1 className=" w-[80%] text-[35px] font-[700] mb-[20px]">Welcome to 404Found, where talent meets opportunity!</h1>
        <p className=' w-[80%] text-[20px] font-[400] text-[var(--grey-color)]'>At 404Found, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us.</p>
        <div className="why">
          Why work at 404Found ?
        </div>
      </div>
      <div className="reasons-to-work">
        <div className="reason">
          <h1>Innovative and Impactful Projects</h1>
          <p>At 404Found, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.</p>
        </div>
        <div className="reason">
          <h1>Supportive Environment</h1>
          <p>At 404Found, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.</p>
        </div>
        <div className="reason">
          <h1>Continuous Learning and Growth </h1>
          <p>We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies.</p>
        </div>
        <div className="reason">
          <h1>Challenging and Rewarding Work</h1>
          <p>Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.</p>
        </div>
      </div>

        <div className="current-openings text-left justify-center text-[#fff] p-[20px]">
        <h1 className=" w-[80%] text-[35px] font-[700] mb-[20px]">Current Openings</h1>
        <p className=' w-[95%] text-[20px] font-[400] text-[var(--grey-color)]'>We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.</p>
        
      </div>

 <div className="job-type">
          <h2>Design Job Openings</h2>
        </div>
      <div className="jobs">
        <JobCard img="/assets/ID.png" title ="UI Designer" description="Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression."    showLearnMore={true}/>
        <JobCard img="/assets/IA.png" title ="UX Designer" description="Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys."    showLearnMore={true}/>
        <JobCard img="/assets/3.png" title ="Design Head" description="Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs."    showLearnMore={true}/>
      </div>
      <div className="job-type">
          <h2>Development Job Openings</h2>
        </div>
        <div className="jobs">
        <JobCard img="/assets/Front.png" title ="Front-end Developer" description="Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences."    showLearnMore={true}/>
        <JobCard img="/assets/5.png" title ="Back-end Developer" description="Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface."    showLearnMore={true}/>
        <JobCard img="/assets/6.png" title ="Full stack Developer" description="Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions."    showLearnMore={true}/>
      </div>
      <div className="job-type">
          <h2>Management Job Openings</h2>
        </div>
        <div className="jobs">
        <JobCard img="/assets/7.png" title ="BA Manager" description="Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts."    showLearnMore={true}/>
        <JobCard img="/assets/8.png" title ="Project Manager" description="Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success."    showLearnMore={true}/>
        <JobCard img="/assets/9.png" title ="HR Manager" description="Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture."    showLearnMore={true}/>
      </div>
      <div className="job-type">
          <h2>QA Job Openings</h2>
        </div>
        <div className="jobs">
        <JobCard img="/assets/Bug.png" title ="QA Tester" description="Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience."    showLearnMore={true}/>
        <JobCard img="/assets/11.png" title ="SQL Tester"description="Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data."    showLearnMore={true}/>
        <JobCard img="/assets/Function.png" title ="Manual Tester" description="Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance."    showLearnMore={true}/>
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
                    <a href="/contact" className="btn">Start Project</a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
    
    </main>
  );
}
