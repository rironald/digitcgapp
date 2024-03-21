import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Latest from "./Components/Latest";
import Newsletter from "./Components/Newsletter";
import UpcomingEvents from "./Components/UpcomingEvents";

import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../src/config/firebase";

function App() {
  const [digimon, setDigimon] = useState();

  const getDigimon = async () => {
    const querySnapshot = await getDocs(collection(db, "cardDB"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    setDigimon(digimon);
  };

  useEffect(() => {
    getDigimon();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Latest />
        <Newsletter />
        <UpcomingEvents />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
