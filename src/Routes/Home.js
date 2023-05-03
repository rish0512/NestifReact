import Navbar from "../Components/Navbar";
import Contents from "../Components/Contents";
import Footer from "../Components/Footer";
import Slides from "../Components/Slides";
function Home() {
  return (
    <>
      <Navbar />
      <Slides />
      <Contents
        cName="contents"
        text="The workforce is the lifeblood of any organization, and with the right people, you can transform businesses. At Nestif, we aim to do just that – equip companies with world-class workforce management solutions to help them succeed. As a globally recognized workforce management services provider, we offer end-to-end HRO services that are aimed at solving complex HR challenges. From customized staffing services, expert talent acquisition, search and recruitment, payroll compliance, training and skill development, to managed workforce solutions, Quess provides all the tools necessary to drive your business growth.s"
      />
      <Footer />
    </>
  );
}
export default Home;
