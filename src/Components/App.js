import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "../screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "../features/userSlice";
import ProfileScreen from "../screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import "./App.css";
// import HomeScreen from "../screens/HomeScreen";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginScreen from "../screens/LoginScreen";
// import { auth } from "../firebase";
// import { useDispatch, useSelector } from "react-redux";
// import { logout, login, selectUser } from "../features/userSlice";
// import ProfileScreen from "../screens/ProfileScreen";

// function App() {
//   const user = useSelector(selectUser);
//   const [isLoading, setIsLoading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((userAuth) => {
//       if (userAuth) {
//         // Logged in
//         console.log(userAuth);
//         dispatch(
//           login({
//             uid: userAuth.uid,
//             email: userAuth.email,
//           })
//         );
//       } else {
//         // Logged out
//         dispatch(logout());
//       }

//       // Set loading state to false after authentication state is determined
//       setIsLoading(false);
//     });

//     return unsubscribe;
//   }, [dispatch]);

//   if (isLoading) {
//     // You can add a loading spinner or some other indicator here
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="app">
//       <Router>
//         {!user ? (
//           <LoginScreen />
//         ) : (
//           <Routes>
//             {/* <Route exact path="/profile" element={<ProfileScreen />} /> */}
//             <Route exact path="/" element={<HomeScreen />} />
//           </Routes>
//         )}
//       </Router>
//     </div>
//   );
// }

// export default App;
