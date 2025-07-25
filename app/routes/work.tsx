import "../app.css";
import Navbar from "~/components/navbar/Navbar";
import WorkCard from "~/components/workcard/WorkCard";
import icon from "../../public/assets/Logooo.png";
import Footer from "~/components/footer/Footer";

export default function Work() {
  return (
    <main>
      <Navbar />
      <div className="second-div min-h-[300px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center work-div">
        <h1 className="text-[60px]">Our Works</h1>
        <p className="text-[20px]">
          Discover a portfolio of visually stunning and strategically crafted
          digital projects that showcase our creativity and expertise.
        </p>
      </div>

      <div className="work-header">
        <h1>At 404Found</h1>
        <p>
          We have had the privelege of working with a diverse range of clients
          and delivering exceptional digital products that drive sucess.
        </p>
        <div className="example-header">
          Here are some examples of our notable works:
        </div>
        <div className="Work">
          <WorkCard
            title="E-commerce Platform for Fashion hub"
            img="/assets/project1.png"
            title2="Chic Boutique"
            Link="https://www.chicboutique.com"
            description="We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
          />
          <WorkCard
            title="Mobile App for Food Delivery Service"
            img="/assets/project2.png"
            title2="HungryBites"
            Link="https://www.hungrybites.com"
            description="HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
          />
         
          <WorkCard
            title="Bookin and Reservation System for Event Management"
            img="/assets/project3.png"
            title2="Event Master"
            Link="https://www.eventmaster.com"
            description="EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences."
          /> 
          
          <WorkCard
            title="Custom Software for Workflow Automation"
            img="/assets/project4.png"
            title2="ProTech Solutions"
            Link="https://www.protechsolutions.com"
            description="We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
          />
          <WorkCard
            title="Web Portal For Real Estate Listings"
            img="/assets/project5.png"
            title2="Dream Homes Realty"
            Link="https://www.dreamhomesrealty.com"
            description="Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
          />
          <WorkCard
            title="Mobile App for Fitness Tracking"
            img="/assets/project6.png"
            title2="FitLife Tracker"
            Link="https://www.fitlifetracker.com"
            description="FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles."
          />
          <WorkCard
            title="Custom Software for supplyChain Management"
            img="/assets/project7.png"
            title2="Global Logistic Solutions"
            Link="https://www.globallogisticsolutions.com"
            description="Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs. "
          />
          <WorkCard
            title="Educational Platform for Online Learning"
            img="/assets/project8.png"
            title2="EduConnect"
            Link="https://www.educonnect.com"
            description="EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages."
          />
          <WorkCard
            title="Mobile App for Travel Planning"
            img="/assets/project9.png"
            title2="WanderWise"
            Link="https://www.WanderWise.com"
            description="WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations."
          />
          <WorkCard
            title="Web Application for Customer Relation Management"
            img="/assets/project10.png"
            title2="ConnectCRM"
            Link="https://www.ConnectCRM.com"
            description="ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth."
            />
        </div>
            </div>
        <div className="Thank-div min-h-[300px] mt-[20px] flex flex-col items-center justify-center text-[#fff] text-[20px] text-center Working-div">
               <img src={icon} alt="icon" />
               <h1>Let Us Bring Your Ideas to Life in the Digital World</h1>
               <p>No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</p>
                <div className="btn">
                    <a href="/contact" className="btn">Start Project</a>
                </div>
              </div>
              <Footer />
    </main>
  );
}
