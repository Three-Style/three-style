import HomeFooter from "../components/partials/Footer/footer";
import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/blur.css";

function Home() {

  return (
    <>
      <Helmet>
        <title>One-Stop Solution For All Your Fitness Needs - FG Group</title>
        <meta
          name="description"
          content="FG Group Solely Works In The Health & Fitness Sector. We Provide Diet & Exercise Plans As Well As Health And Fitness Courses. We Also Offer Digital Marketing Courses For Fitness Professionals, And Ready-Made Meals For Healthy Living."
        />
        <meta
          name="keywords"
          content="best dietitian in surat, online dietitian consultation, gyms in surat, personal training gyms near me, certified nutritionist course, fitness trainer course in india, online fitness courses, nutritionist course online india, certification for fitness trainer, nutritionist online course, best digital marketing course, best digital marketing course online"
        />
        {/* <link
          rel="preload"
          href={`${process.env.PUBLIC_URL}/assets/images/img/website_intro_video1.mp4`}
          as="fetch"
          type="video/mp4"
        /> */}
      </Helmet>

      <HomeFooter />
    </>
  );
}

export default Home;
