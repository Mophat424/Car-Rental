// import React from 'react';
// import '../index.css';

// const About: React.FC = () => {
//   return (
//     <div className="page-center">
//       <div>
//         <h2>About the Car Management System</h2>
//         <p>Learn more about our services and features.</p>
//       </div>
//     </div>
//   );
// };

// export default About;








// import React from 'react';
// import '../index.css';

// const About: React.FC = () => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
//         <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
//           About the Car Management System
//         </h2>
//         <p style={{ fontSize: '1.1rem', color: '#444' }}>
//           Our platform empowers car rental agencies and fleet managers to stay organized,
//           reduce manual tracking, and gain insights into car availability, maintenance schedules,
//           and customer data — all in one place.
//         </p>
//       </section>

//       <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '3rem' }}>
//         {['Real-time Tracking', 'Secure Login', 'Detailed Analytics'].map((title, i) => (
//           <div key={i} style={{
//             flex: '1 1 250px',
//             padding: '1.5rem',
//             backgroundColor: '#fff',
//             borderRadius: '8px',
//             boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//             textAlign: 'center'
//           }}>
//             <img
//               src={`https://source.unsplash.com/100x100/?technology,car,${i}`}
//               alt={title}
//               style={{ borderRadius: '50%', marginBottom: '1rem' }}
//             />
//             <h4>{title}</h4>
//             <p style={{ fontSize: '0.9rem', color: '#555' }}>
//               {title} allows users to manage operations smoothly with user-friendly interfaces and robust tools.
//             </p>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default About;





// import React from 'react';
// import '../index.css';

// const About: React.FC = () => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       {/* About Description */}
//       <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
//         <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
//           About the Car Management System
//         </h2>
//         <p style={{ fontSize: '1.1rem', color: '#444' }}>
//           Our platform empowers car rental agencies and fleet managers to stay organized,
//           reduce manual tracking, and gain insights into car availability, maintenance schedules,
//           and customer data — all in one place.
//         </p>
//       </section>

//       {/* Highlights */}
//       <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '3rem' }}>
//         {[
//           { title: 'Real-time Tracking', img: 'gps' },
//           { title: 'Secure Login', img: 'cybersecurity' },
//           { title: 'Detailed Analytics', img: 'data' }
//         ].map((item, i) => (
//           <div key={i} style={{
//             flex: '1 1 250px',
//             padding: '1.5rem',
//             backgroundColor: '#fff',
//             borderRadius: '8px',
//             boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//             textAlign: 'center'
//           }}>
//             <img
//               src={`https://source.unsplash.com/100x100/?${item.img}`}
//               alt={item.title}
//               style={{ borderRadius: '50%', marginBottom: '1rem' }}
//             />
//             <h4>{item.title}</h4>
//             <p style={{ fontSize: '0.9rem', color: '#555' }}>
//               Our system provides robust {item.title.toLowerCase()} for smarter car management.
//             </p>
//           </div>
//         ))}
//       </section>

//       {/* Team Section */}
//       <section style={{ marginTop: '4rem' }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Meet Our Team</h2>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           flexWrap: 'wrap',
//           gap: '2rem'
//         }}>
//           {[
//             { name: 'Alex M.', role: 'Lead Developer', img: 'man,developer' },
//             { name: 'Sandra K.', role: 'UX Designer', img: 'woman,designer' },
//             { name: 'James T.', role: 'Backend Engineer', img: 'tech,server' }
//           ].map((person, i) => (
//             <div key={i} style={{
//               width: '220px',
//               textAlign: 'center',
//               backgroundColor: '#fff',
//               padding: '1.5rem',
//               borderRadius: '8px',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
//             }}>
//               <img
//                 src={`https://source.unsplash.com/100x100/?${person.img}`}
//                 alt={person.name}
//                 style={{ borderRadius: '50%', marginBottom: '1rem' }}
//               />
//               <h4>{person.name}</h4>
//               <p style={{ color: '#777' }}>{person.role}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;








import React from 'react';
import '../index.css';

import missionImg from '../assets/images/about-mission.jpg';
import fleetImg from '../assets/images/about-fleet.jpg';
import customersImg from '../assets/images/about-customers.jpg';
import supportImg from '../assets/images/about-support.jpg';

import alexImg from '../assets/images/alex.jpg';
import sandraImg from '../assets/images/sandra.jpg';
import jamesImg from '../assets/images/james.jpg';

const About: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      {/* About Intro */}
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          About Triple M Car Rental
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#444' }}>
          At Triple M, we simplify car rentals by combining modern fleet tracking, secure bookings,
          and a user-friendly experience. Whether you're managing cars or booking one, you're in control.
        </p>
      </section>

      {/* Highlights Section with Local Images */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginTop: '3rem'
        }}
      >
        {[
          { title: 'Our Mission', img: missionImg, desc: 'To provide reliable car rental solutions for everyone.' },
          { title: 'Our Fleet', img: fleetImg, desc: 'A wide range of cars — from sedans to SUVs — always ready.' },
          { title: 'Customer First', img: customersImg, desc: 'We focus on experience, speed, and satisfaction.' },
          { title: '24/7 Support', img: supportImg, desc: 'Need help? Our team is always just a call away.' }
        ].map((item, i) => (
          <div key={i} style={{
            flex: '1 1 250px',
            padding: '1rem',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
            maxWidth: '260px'
          }}>
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: '100%',
                height: '160px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}
            />
            <h4>{item.title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Team Section */}
      <section style={{ marginTop: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Meet Our Team</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          {[
            { name: 'Alex M.', role: 'Lead Developer', img: alexImg },
            { name: 'Sandra K.', role: 'UX Designer', img: sandraImg },
            { name: 'James T.', role: 'Backend Engineer', img: jamesImg }
          ].map((person, i) => (
            <div key={i} style={{
              width: '220px',
              textAlign: 'center',
              backgroundColor: '#fff',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <img
                src={person.img}
                alt={person.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', marginBottom: '1rem' }}
              />
              <h4>{person.name}</h4>
              <p style={{ color: '#777' }}>{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
