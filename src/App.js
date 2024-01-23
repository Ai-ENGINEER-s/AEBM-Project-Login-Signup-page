// // App.js

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AuthSection from './components/AuthSection';
// import InscriptionForm from './components/SignupForm';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AuthSection />} />
//         <Route path="/inscription" element={<InscriptionForm />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from 'react';
import AuthSection from './components/AuthSection';
import SignupForm from './components/SignupForm';

const App = () => {
  const [scrollToSignupForm, setScrollToSignupForm] = useState(false);

  const handleScrollToSignupForm = () => {
    setScrollToSignupForm(true);
  };

  return (
    <div>
      <AuthSection scrollToSignupForm={handleScrollToSignupForm} />
      <SignupForm scrollToSignupForm={scrollToSignupForm} />
    </div>
  );
}

export default App;
