// // components/Layout.tsx
// import React from 'react';
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       <Sidebar />
//       <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//         <Navbar />
//         <main style={{ padding: '1rem', flex: 1 }}>{children}</main>
//       </div>
//     </div>
//   );
// };

// export default Layout;








// components/Layout.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main style={{ padding: '1rem', flex: 1 }}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
