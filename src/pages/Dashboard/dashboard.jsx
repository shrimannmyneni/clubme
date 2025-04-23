import React from 'react';
import Card from '../../components/ui/Card/Card';

// Sample data
const sampleData = [
  {
    name: "John Doe",
    phone: "(123) 456-7890",
    hometown: "New York",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    phone: "(987) 654-3210",
    hometown: "Los Angeles",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Sam Brown",
    phone: "(555) 123-4567",
    hometown: "Chicago",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
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
