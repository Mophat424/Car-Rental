// import React from 'react';
// import '../index.css';

// const Landing: React.FC = () => {
//   return (
//     <div className="page-center">
//       <div>
//         <h2>Welcome to the Car Management System</h2>
//         <p>Use the navigation above to get started.</p>
//       </div>
//     </div>
//   );
// };

// export default Landing;







// import React from 'react';
// import '../index.css';

// const Landing: React.FC = () => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
//         <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
//           Welcome to the Car Management System
//         </h2>
//         <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
//           Discover a smarter way to manage your fleet, rentals, and car data.
//           Everything you need in one modern, streamlined dashboard.
//         </p>
//       </section>

//       <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
//         {['fleet.jpg', 'maintenance.jpg', 'dashboard.jpg'].map((img, i) => (
//           <div key={i} style={{
//             width: '250px',
//             borderRadius: '8px',
//             overflow: 'hidden',
//             boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//             transition: 'transform 0.3s ease',
//             cursor: 'pointer'
//           }} className="hover-card">
//             <img
//               src={`https://source.unsplash.com/250x150/?car,${i}`}
//               alt="Car feature"
//               style={{ width: '100%', display: 'block' }}
//             />
//             <div style={{ padding: '1rem', backgroundColor: '#fff' }}>
//               <h4>Feature {i + 1}</h4>
//               <p style={{ fontSize: '0.9rem', color: '#555' }}>
//                 Brief description about this feature. Efficient, intuitive, reliable.
//               </p>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Landing;




// import React from 'react';
// import '../index.css';

// import engine from '../assets/images/engine.jpg';
// import garage from '../assets/images/garage.jpg';
// import speed from '../assets/images/speed.jpg';
// import vehicle from '../assets/images/vehicle.jpg';

// import fleet from '../assets/images/fleet.jpg';
// import maintenance from '../assets/images/maintenance.jpg';
// import analytics from '../assets/images/analytics.jpg';

// const Landing: React.FC = () => {
//   const sliderImages = [engine, garage, speed, vehicle];
//   const featureCards = [
//     { title: 'Fleet Management', img: fleet },
//     { title: 'Maintenance Logs', img: maintenance },
//     { title: 'Analytics Dashboard', img: analytics }
//   ];

//   return (
//     <div>

//       {/* Hero Section */}
//       <section
//         style={{
//           backgroundImage: 'url("https://source.unsplash.com/1600x600/?car,city")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white',
//           padding: '6rem 2rem',
//           textAlign: 'center',
//           position: 'relative'
//         }}
//       >
//         <div style={{
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           padding: '2rem',
//           borderRadius: '8px',
//           maxWidth: '700px',
//           margin: '0 auto'
//         }}>
//           <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
//             Your Fleet, Simplified.
//           </h1>
//           <p style={{ fontSize: '1.2rem' }}>
//             Manage rentals, track maintenance, and gain insights — all from one intuitive dashboard.
//           </p>
//         </div>
//       </section>

//       {/* Slider Section */}
//       <section style={{ overflow: 'hidden', margin: '3rem 0' }}>
//         <div style={{
//           display: 'flex',
//           animation: 'slide 20s linear infinite',
//           gap: '1rem'
//         }}>
//           {sliderImages.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt={`Slide ${i}`}
//               style={{ borderRadius: '8px', minWidth: '400px', objectFit: 'cover' }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section style={{ padding: '2rem' }}>
//         <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
//           <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
//             Welcome to the Car Management System
//           </h2>
//           <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
//             Discover a smarter way to manage your fleet, rentals, and car data.
//           </p>
//         </div>

//         <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
//           {featureCards.map((item, i) => (
//             <div key={i} className="hover-card" style={{
//               width: '250px',
//               borderRadius: '8px',
//               overflow: 'hidden',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//               transition: 'transform 0.3s ease',
//               cursor: 'pointer'
//             }}>
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 style={{ width: '100%', display: 'block' }}
//               />
//               <div style={{ padding: '1rem', backgroundColor: '#fff' }}>
//                 <h4>{item.title}</h4>
//                 <p style={{ fontSize: '0.9rem', color: '#555' }}>
//                   Efficient and intuitive {item.title.toLowerCase()} tools at your fingertips.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Landing;








// import React from 'react';
// import '../index.css';

// import engine from '../assets/images/engine.jpg';
// import garage from '../assets/images/garage.jpg';
// import speed from '../assets/images/speed.jpg';
// import vehicle from '../assets/images/vehicle.jpg';
// import locations from  '../assets/images/location.jpg'

// import fleet from '../assets/images/fleet.jpg';
// import insurance from '../assets/images/maintenance.jpg'; // renamed purpose
// import bookings from '../assets/images/analytics.jpg'; // renamed purpose

// const Landing: React.FC = () => {
//   const sliderImages = [engine, garage, speed, vehicle];

//   const featureCards = [
//     {
//       title: 'Reservations',
//       img: fleet,
//       desc: 'Efficient and intuitive tools to manage reservations.'
//     },
//     {
//       title: 'Insurance',
//       img: insurance,
//       desc: 'Protect your fleet with flexible coverage plans.'
//     },
//     {
//       title: 'Bookings',
//       img: bookings,
//       desc: 'Get your cars here — fast and easy.'
//     },

//        {
//       title: 'Location',
//       img: locations,
//       desc: 'Know the location of your car.'
//     }

//   ];

//   return (
//     <div>

//       {/* Hero Section */}
//       <section
//         style={{
//           backgroundImage: 'url("https://source.unsplash.com/1600x600/?car,rent")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white',
//           padding: '6rem 2rem',
//           textAlign: 'center',
//           position: 'relative'
//         }}
//       >
//         <div style={{
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           padding: '2rem',
//           borderRadius: '8px',
//           maxWidth: '700px',
//           margin: '0 auto'
//         }}>
//           <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
//             Welcome to Triple M Car Rental
//           </h1>
//           <p style={{ fontSize: '1.2rem' }}>
//             Manage rentals, track bookings, and explore our wide car selection.
//           </p>
//         </div>
//       </section>

//       {/* Slider Section */}
//       <section style={{ overflow: 'hidden', margin: '3rem 0' }}>
//         <div style={{
//           display: 'flex',
//           animation: 'slide 20s linear infinite',
//           gap: '1rem'
//         }}>
//           {sliderImages.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt={`Slide ${i}`}
//               style={{ borderRadius: '8px', minWidth: '400px', objectFit: 'cover' }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section style={{ padding: '2rem' }}>
//         <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
//           <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
//             Explore Reliable Rental Services at Your Fingertips
//           </h2>
//           <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
//             Discover a smarter way to manage your trips, book cars, and secure your rental experience.
//           </p>
//         </div>

//         <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
//           {featureCards.map((item, i) => (
//             <div key={i} className="hover-card" style={{
//               width: '250px',
//               borderRadius: '8px',
//               overflow: 'hidden',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//               transition: 'transform 0.3s ease',
//               cursor: 'pointer'
//             }}>
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 style={{ width: '100%', display: 'block' }}
//               />
//               <div style={{ padding: '1rem', backgroundColor: '#fff' }}>
//                 <h4>{item.title}</h4>
//                 <p style={{ fontSize: '0.9rem', color: '#555' }}>
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Landing;



// import React from 'react';
// import '../index.css';

// import engine from '../assets/images/engine.jpg';
// import garage from '../assets/images/garage.jpg';
// import speed from '../assets/images/speed.jpg';
// import vehicle from '../assets/images/vehicle.jpg';
// import locations from '../assets/images/location.jpg';

// import fleet from '../assets/images/fleet.jpg';
// import insurance from '../assets/images/maintenance.jpg';
// import bookings from '../assets/images/analytics.jpg';


// const Landing: React.FC = () => {
//   const sliderImages = [engine, garage, speed, vehicle];

//   const featureCards = [
//     {
//       title: 'Reservations',
//       img: fleet,
//       desc: 'Efficient and intuitive tools to manage reservations.'
//     },
//     {
//       title: 'Insurance',
//       img: insurance,
//       desc: 'Protect your fleet with flexible coverage plans.'
//     },
//     {
//       title: 'Bookings',
//       img: bookings,
//       desc: 'Get your cars here — fast and easy.'
//     },
//     {
//       title: 'Location',
//       img: locations,
//       desc: 'Know the location of your car.'
//     }
//   ];

//   return (
//     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
//       {/* Hero Section */}
//       <section
//         style={{
//           backgroundImage: 'url("https://source.unsplash.com/1600x600/?car,rent")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white',
//           padding: '6rem 2rem',
//           textAlign: 'center',
//           position: 'relative'
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             padding: '2rem',
//             borderRadius: '8px',
//             maxWidth: '700px',
//             margin: '0 auto'
//           }}
//         >
//           <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
//             Welcome to Triple M Car Rental
//           </h1>
//           <p style={{ fontSize: '1.2rem' }}>
//             Manage rentals, track bookings, and explore our wide car selection.
//           </p>
//         </div>
//       </section>

//       {/* Slider Section */}
//       <section style={{ overflowX: 'hidden', margin: '3rem 0' }}>
//         <div
//           style={{
//             display: 'flex',
//             animation: 'slide 20s linear infinite',
//             gap: '1rem',
//             maxWidth: '100%'
//           }}
//         >
//           {sliderImages.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt={`Slide ${i}`}
//               style={{
//                 borderRadius: '8px',
//                 width: '100%',
//                 maxWidth: '300px',
//                 height: '200px',
//                 objectFit: 'cover',
//                 flexShrink: 0
//               }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section style={{ padding: '2rem' }}>
//         <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
//           <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
//             Explore Reliable Rental Services at Your Fingertips
//           </h2>
//           <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
//             Discover a smarter way to manage your trips, book cars, and secure your rental experience.
//           </p>
//         </div>

//         <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
//           {featureCards.map((item, i) => (
//             <div
//               key={i}
//               className="hover-card"
//               style={{
//                 width: '250px',
//                 borderRadius: '8px',
//                 overflow: 'hidden',
//                 boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//                 transition: 'transform 0.3s ease',
//                 cursor: 'pointer'
//               }}
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 style={{ width: '100%', height: '180px', objectFit: 'cover' }}
//               />
//               <div style={{ padding: '1rem', backgroundColor: '#fff' }}>
//                 <h4>{item.title}</h4>
//                 <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Landing;




// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { RootState } from '../store';

// import '../index.css';

// import engine from '../assets/images/engine.jpg';
// import garage from '../assets/images/garage.jpg';
// import speed from '../assets/images/speed.jpg';
// import vehicle from '../assets/images/vehicle.jpg';
// import locations from '../assets/images/location.jpg';
// import fleet from '../assets/images/fleet.jpg';
// import insurance from '../assets/images/maintenance.jpg';
// import bookings from '../assets/images/analytics.jpg';

// const Landing: React.FC = () => {
//   const sliderImages = [engine, garage, speed, vehicle];
//   const navigate = useNavigate();
//   const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     if (isAuthenticated) {
//       if (user?.role === 'admin') {
//         navigate('/admin-dashboard');
//       } else if (user?.role === 'user') {
//         navigate('/user-dashboard');
//       }
//     }
//   }, [isAuthenticated, user, navigate]);

//   const featureCards = [
//     {
//       title: 'Reservations',
//       img: fleet,
//       desc: 'Efficient and intuitive tools to manage reservations.'
//     },
//     {
//       title: 'Insurance',
//       img: insurance,
//       desc: 'Protect your fleet with flexible coverage plans.'
//     },
//     {
//       title: 'Bookings',
//       img: bookings,
//       desc: 'Get your cars here — fast and easy.'
//     },
//     {
//       title: 'Location',
//       img: locations,
//       desc: 'Know the location of your car.'
//     }
//   ];

//   return (
//     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
//       {/* Hero Section */}
//       <section
//         style={{
//           backgroundImage: 'url("https://source.unsplash.com/1600x600/?car,rent")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white',
//           padding: '6rem 2rem',
//           textAlign: 'center',
//           position: 'relative'
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             padding: '2rem',
//             borderRadius: '8px',
//             maxWidth: '700px',
//             margin: '0 auto'
//           }}
//         >
//           <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
//             Welcome to Triple M Car Rental
//           </h1>
//           <p style={{ fontSize: '1.2rem' }}>
//             Manage rentals, track bookings, and explore our wide car selection.
//           </p>
//         </div>
//       </section>

//       {/* Slider Section */}
//       <section style={{ overflowX: 'hidden', margin: '3rem 0' }}>
//         <div
//           style={{
//             display: 'flex',
//             animation: 'slide 20s linear infinite',
//             gap: '1rem',
//             maxWidth: '100%'
//           }}
//         >
//           {sliderImages.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt={`Slide ${i}`}
//               style={{
//                 borderRadius: '8px',
//                 width: '100%',
//                 maxWidth: '300px',
//                 height: '200px',
//                 objectFit: 'cover',
//                 flexShrink: 0
//               }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section style={{ padding: '2rem' }}>
//         <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
//           <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
//             Explore Reliable Rental Services at Your Fingertips
//           </h2>
//           <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
//             Discover a smarter way to manage your trips, book cars, and secure your rental experience.
//           </p>
//         </div>

//         <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
//           {featureCards.map((item, i) => (
//             <div
//               key={i}
//               className="hover-card"
//               style={{
//                 width: '250px',
//                 borderRadius: '8px',
//                 overflow: 'hidden',
//                 boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//                 transition: 'transform 0.3s ease',
//                 cursor: 'pointer'
//               }}
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 style={{ width: '100%', height: '180px', objectFit: 'cover' }}
//               />
//               <div style={{ padding: '1rem', backgroundColor: '#fff' }}>
//                 <h4>{item.title}</h4>
//                 <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Landing;






import React from 'react';
import '../index.css';
import engine from '../assets/images/engine.jpg';
import garage from '../assets/images/garage.jpg';
import speed from '../assets/images/speed.jpg';
import vehicle from '../assets/images/vehicle.jpg';
import locations from '../assets/images/location.jpg';
import fleet from '../assets/images/fleet.jpg';
import insurance from '../assets/images/maintenance.jpg';
import bookings from '../assets/images/analytics.jpg';

const Landing: React.FC = () => {
  const sliderImages = [engine, garage, speed, vehicle];

  const featureCards = [
    {
      title: 'Reservations',
      img: fleet,
      desc: 'Efficient and intuitive tools to manage reservations.'
    },
    {
      title: 'Insurance',
      img: insurance,
      desc: 'Protect your fleet with flexible coverage plans.'
    },
    {
      title: 'Bookings',
      img: bookings,
      desc: 'Get your cars here — fast and easy.'
    },
    {
      title: 'Location',
      img: locations,
      desc: 'Know the location of your car.'
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("https://source.unsplash.com/1600x600/?car,rent")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '6rem 2rem',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '2rem',
            borderRadius: '8px',
            maxWidth: '700px',
            margin: '0 auto'
          }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Welcome to Triple M Car Rental
          </h1>
          <p style={{ fontSize: '1.2rem' }}>
            Manage rentals, track bookings, and explore our wide car selection.
          </p>
        </div>
      </section>

      {/* Slider Section */}
      <section style={{ overflowX: 'hidden', margin: '3rem 0' }}>
        <div
          style={{
            display: 'flex',
            animation: 'slide 20s linear infinite',
            gap: '1rem',
            maxWidth: '100%'
          }}
        >
          {sliderImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i}`}
              style={{
                borderRadius: '8px',
                width: '100%',
                maxWidth: '300px',
                height: '200px',
                objectFit: 'cover',
                flexShrink: 0
              }}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Explore Reliable Rental Services at Your Fingertips
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Discover a smarter way to manage your trips, book cars, and secure your rental experience.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {featureCards.map((item, i) => (
            <div
              key={i}
              className="hover-card"
              style={{
                width: '250px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem', backgroundColor: '#fff' }}>
                <h4>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
