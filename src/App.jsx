import React from "react";
import Hack4maha from './Hack4maha';

function App() {
  return (
    <div>
      <Hack4maha
        sentence="Hack4Maharashtra"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
    </div>
  );
}

export default App;


// import React from 'react'
// import Home from  "./Pages/Home";

// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   )
// }

// export default App

 
 