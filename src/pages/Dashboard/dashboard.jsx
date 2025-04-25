import React from 'react';
import Card from '../../components/ui/Card/card';
import './dashboard.css'

const maleFirstNames = ["Jack", "Liam", "Noah", "James", "Benjamin", "Lucas", "Henry", "Alexander", "William", "Ethan"];
const femaleFirstNames = ["Emma", "Olivia", "Ava", "Sophia", "Isabella", "Mia", "Charlotte", "Amelia", "Harper", "Ella"];
const lastNames = ["Johnson", "Smith", "Brown", "Taylor", "Anderson", "Clark", "Hall", "Lewis", "Young", "Harris"];
const hometowns = ["Ann Arbor", "Chicago", "Austin", "Boston", "San Diego", "Atlanta", "New York", "Seattle"];

const sampleData = Array.from({ length: 20 }, (_, i) => {
  const isMale = i % 2 === 0;
  const first = isMale
    ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)]
    : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  const fullName = `${first} ${last}`;
  const hometown = hometowns[Math.floor(Math.random() * hometowns.length)];

  return {
    name: fullName,
    phone: `(555) 123-${(1000 + i).toString().slice(-4)}`,
    hometown,
    image: `https://randomuser.me/api/portraits/${isMale ? "men" : "women"}/${i % 100}.jpg`,
  };
});




function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="card-container">
        {sampleData.map((data, index) => (
          <Card
            key={index}
            name={data.name}
            phone={data.phone}
            hometown={data.hometown}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
