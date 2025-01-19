import React from 'react';
import TeamMember from './TeamMember';
import { motion } from "framer-motion";

const portals = [
  { name: "NAPS", image: require("../assets/images/Apprenticeship (NAPS) portal.jpg") },
  { name: "ASCI", image: require("../assets/images/ASCI DBMS portal.jpg") },
  { name: "ESSCI", image: require("../assets/images/ESSCI  DBMS portal.jpg") },
  { name: "HSSC", image: require("../assets/images/HSSC DBMS portal.jpg") },
  { name: "NASSCOM INSDMS", image: require("../assets/images/NASSCOM INSDMS.jpg") },
  { name: "Skill India Portal (SIDH)", image: require("../assets/images/Skill india portal (SIDH).jpg") },
];

const teamData = [
  {
    name: "Nirmal Kumar",
    photo: require("../assets/images/nirmal.jpg"),
    designation: "Executive - SEG Operations",
    education: "MBA",
    journey: "I have been a part of the team and the company for 1 year.",
    experience: "I have 9 years of professional experience, during which I have gained expertise in data analysis, process improvement, team management, Excel reporting, and problem solving.",
    tools: "Microsoft Excel (advanced reporting, data analysis, and problem-solving), SQL (Beginner), PowerPoint, Word, CorelDRAW, and Photoshop.",
    dailyTasks: "Managing result creation, flag reporting, result allocation, problem-solving in Excel, preparing detailed reports, and ensuring data accuracy and timely delivery.",
    uniqueAspect: "I stay calm under pressure, which helps me solve problems effectively. A fun fact about me is that I enjoy playing cricket, watching movies, cooking, or exploring new technologies."
  },
  {
    name: "Shaifali Srivastava",
    photo: require("../assets/images/srivastava.jpg"),
    designation: "Associate",
    education: "Bachelor of Technology in Computer Science",
    journey: "I have been working as an Associate in Mercer-Mettl for the last 4 years.",
    experience: "I have completed certifications in Java Enterprise Edition Workshop and Networking.",
    tools: "MS Excel, Macro Recorder, Zoho CRM, Java, HTML, SQL.",
    dailyTasks: "I primarily support result allocation and result creation, including template creation and INSDMS uploading. I also assist the team in the uploading process when required.",
    uniqueAspect: "I aim to involve myself more in reporting and analytics to support the team better. I am passionate about learning and upskilling to enhance productivity."
  },
  {
    name: "Vinay Kumar",
    photo: require("../assets/images/vinay.jpg"),
    designation: "Manager, Business Intelligence Team",
    education: "Master's degree in Data Science",
    journey: "I have been with Mercer Mettl for 6 years, driving data-driven insights.",
    experience: "I bring over 9 years of experience in data analysis, visualization, and business intelligence.",
    tools: "Excel, Power BI, Tableau, VBA, SQL, Python.",
    dailyTasks: "Responsible for post-assessment deliveries including result upload analytics, acting as NSDC SPOC, managing Zoho CRM as an admin, and contributing as a part of LT for SEG.",
    uniqueAspect: "I excel in leveraging data science for actionable insights and have a proven track record in leadership within the BI domain.",
  },
  {
    name: "Atul Awasthi",
    photo: require("../assets/images/atul.jpg"),
    designation: "Executive in Operations",
    education: "N/A", 
    journey: "I joined Mercer Mettl last year as an intern and transitioned to a full-time role in March.",
    experience: "N/A", 
    tools: "Excel, Zoho.",
    dailyTasks: "Managing data uploads on the SIDH portal and leading the PMVK uploading project.",
    uniqueAspect: "I am continuously improving my skills.",
  },
  {
    name: "Manish Parashar",
    photo: require("../assets/images/manish.jpg"),
    designation: "Manager (Data Management)",
    education: "Pursuing MCA from IGNOU",
    journey: "I have been working at Mercer Mettl since 2014, completing 10 years.",
    experience: "I have 12 years of professional experience, working well in team environments.",
    tools: "MS Excel, Power BI, Zoho CRM, Power Automate.",
    dailyTasks: "I manage data, ensure efficient workflows, and collaborate with various teams to meet business objectives.",
    uniqueAspect: "I believe in honesty, speaking well, and am also a good batsman in cricket.",
    hobbies: "Cricket, speaking engagements.",
},
{
  name: "Rakesh Kumar",
  photo: require("../assets/images/rakesh.jpg"),
  designation: "Assistant Manager",
  education: "Graduation BA",
  journey: "I have been with Mercer Mettl for 6 years.",
  experience: "I have 23 years of professional experience.",
  tools: "MS Excel, VBA Macro, SQL, Power BI.",
  dailyTasks: "I handle result generation and lead initiatives for process improvement/automation.",
  uniqueAspect: "I specialize in automation work with Excel and VBA Macro.",
  hobbies: "Process automation, Excel-related projects.",
},
{
name: "Gaurav Kain",
photo: require("../assets/images/gaurav.jpg"),
designation: "Senior Associate (Team Management)",
education: "M.Com (Masters of Commerce), GNIIT (Software Engineering)",
journey: "I have accumulated 5 years of experience with the Business Intelligence (BI) team at Mercer | Mettl, focusing on result creation, uploading, agency validation, client reporting, and client management.",
experience: "I possess 6 years of experience as a Java Web Developer and in Data Analytics.",
tools: "Core Java, JavaScript, HTML, CSS, Advanced Java, JSP Servlets, SQL, Oracle DBA, VBA, Power Query, Power BI, Data Analytics, JSON.",
dailyTasks: "I oversee the management of over 10 different portals, with a primary focus on the Skill India Digital Hub (SIDH) portal.",
uniqueAspect: "In my leisure time, I engage in various outdoor and indoor sports, including football, basketball, and snooker. I have competed at the national level in football and at the district level in basketball.",
hobbies: "Football, basketball, snooker.",
}
];


const TeamIntros = () => {
  return (
    <motion.div
      className="team-intros"
      style={{
        backgroundColor: "#e8f5e9",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Team Introduction */}
      <motion.div
        style={{ textAlign: "center", marginBottom: "30px" }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ color: "#1b5e20", fontSize: "36px", marginBottom: "20px" }}>
          Meet the Business Intelligence Team
        </h1>
        <p
          style={{
            color: "#4caf50",
            fontSize: "18px",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          The Business Intelligence (BI) team at Mercer Mettl is a dynamic group of dedicated professionals
          committed to transforming data into actionable insights. Our mission is to streamline processes,
          enhance workflows, and empower decision-making through accurate reporting and innovative solutions.
          With expertise in data analysis, Excel reporting, SQL, and visualization tools like PowerPoint and
          CorelDRAW, the team excels in generating results, analyzing trends, and ensuring timely delivery of
          insights. Collaboration, problem-solving, and precision define our daily tasks as we aim to drive
          operational excellence and strategic success.
        </p>
      </motion.div>

      {/* Team Member Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <TeamMember
              name={member.name}
              photo={member.photo}
              designation={member.designation}
              education={member.education}
              journey={member.journey}
              experience={member.experience}
              tools={member.tools}
              dailyTasks={member.dailyTasks}
              uniqueAspect={member.uniqueAspect}
            />
          </motion.div>
        ))}
      </div>

      {/* Portals Section */}
      <motion.div
        className="portal-section"
        style={{
          marginTop: "40px",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#dcedc8",
          borderRadius: "10px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2 style={{ color: "#2e7d32", marginBottom: "20px" }}>Portals We Work On</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {portals.map((portal, index) => (
            <motion.div
              key={index}
              style={{
                width: "200px",
                textAlign: "center",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={portal.image}
                alt={portal.name}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h4 style={{ color: "#388e3c", marginTop: "10px" }}>{portal.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamIntros;
