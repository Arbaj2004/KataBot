import React, { useEffect } from 'react';
import FlipCard from '../components/FlipCard';
import aid_img from '../assets/aid.png';
import education_img from '../assets/education.png';
import health_img from '../assets/health.png';


const works = [
  {
    image: aid_img,
    title: 'Humanitarian Aid and Disaster Relief',
    description: 'Providing emergency assistance during natural disasters and health crises by rapidly deploying resources such as food, clean water, shelter, and medical supplies to affected areas. Our teams work tirelessly to reach remote locations, coordinating with local authorities to ensure timely and effective delivery of aid. We also focus on long-term recovery efforts, helping communities rebuild infrastructure and restore livelihoods. In addition to immediate relief.',
  },
  {
    image: education_img,
    title: 'Education and Literacy',
    description: 'Promoting education and literacy in underserved communities by establishing schools, offering scholarships, and providing teacher training programs. Our initiatives aim to break the cycle of poverty by ensuring that every child, regardless of their background or socio-economic status, has access to quality education. We focus on creating inclusive learning environments that cater to the needs of all students, including those with disabilities. ',
  },
  {
    image: health_img,
    title: 'Health and Medical Services',
    description: 'Facilitating access to health services and medical supplies by setting up mobile clinics, distributing medications, and running vaccination campaigns in remote and vulnerable areas. Our health initiatives include training local healthcare workers and conducting health education workshops to promote better hygiene and preventive care. We prioritize maternal and child health, ensuring that pregnant women and young children receive the care they need. ',
  },
];


function OurWorks() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold text-center text-green-900 mb-16">Our Works</h2>
      <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-4">
        {works.map((work, index) => (
          <FlipCard
            key={index}
            image={work.image}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </section>
  );
}

export default OurWorks;
