import React from 'react';
import './home.css'; // optional, if you have styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to ClubMe</h1>
      <p>ClubMe is your all-in-one platform for recruitment and organization management, built specifically for student clubs, societies, and Greek life chapters. We simplify every step of recruiting new members, keeping track of event attendance, and managing ongoing engagement, all in one place.</p>

      <p>Recruitment has never been easier. Potential New Members (PNMs) can seamlessly check in to events using QR codes or text-based verification, eliminating the need for messy manual sign-ins. Our intelligent attendance system automatically logs participation, helping organizations track interest and engagement levels across multiple events without lifting a finger.</p>

      <p>Organizations can create fully customizable event pages that not only advertise their events but also capture detailed attendance data. Our platform automates the distribution of applications, ensuring that only PNMs who meet attendance requirements receive access. This removes administrative overhead and keeps the recruitment process fair and efficient.</p>

      <p>ClubMe also provides real-time dashboards where organization admins can view attendance trends, event success metrics, and applicant statuses at a glance. If multiple recruits share the same name, our smart duplicate-handling ensures no confusion during event check-ins.</p>

      <p>To keep recruits engaged, ClubMe offers instant notification features — once a PNM signs up for an organization, they automatically receive reminders about upcoming events, deadlines, and announcements without any manual follow-up needed from admins.</p>

      <p>In addition to recruitment tools, organizations can personalize their profiles to better attract the type of new members they want. Bulk communication features allow admins to send targeted text messages or emails to potential new members, ensuring personalized engagement throughout the recruitment season.</p>

      <p>With ClubMe, student organizations can focus on what matters most: building strong communities, growing membership, and creating lasting impact on campus. Let us handle the logistics — you handle the future.</p>
    </div>
  );
};

export default Home;
