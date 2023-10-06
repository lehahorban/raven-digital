import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import OurWorks from "./components/OurWorks/OurWorks";
import Statistics from "./components/Statistics/Statistics";
import Testimonials from "./components/Testimonials/Testimonials";
import OurTeam from "./components/OurTeam/OurTeam";
import Blog from "./components/Blog/Blog";
import Faq from "./components/Faq/Faq";
import Clients from "./components/Clients/Clients";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <OurWorks />
        <Statistics />
        <Testimonials />
        <OurTeam />
        <Blog />
        <Faq />
        <Clients />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
