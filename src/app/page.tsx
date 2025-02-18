import MiddleSection from './components/mid';
import Footer from './components/footer';
import Header from './components/header';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <Header />
      <div className="bg-[#e0dad0] flex flex-col justify-center items-center">
        <Image
          className="m-7 w-96 h-96"
          width={384}
          height={384}
          id="bio-img"
          src="https://static.wixstatic.com/media/2ecae4_41d788da0459492698044ed26d96a48b~mv2.jpg/v1/crop/x_365,y_0,w_4016,h_4016/fill/w_700,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Graduate%20School%20photo.jpg"
          alt="grad photo"
        />
        <div className="bio-text text-md">
          I am a PhD student at Syracuse University in the Department of
          Geography and the Environment. My research explores the intersection
          of political ecology, development, and political economy related to
          water access in India. Specifically, my research focuses on how
          international discourse and structural adjustment projects have
          impacted livelihoods in India. By building on the expansive existing
          literature on development, water, political ecology, and economy I
          seek to understand what international discourse and power dynamics
          truly mean for livelihoods.
        </div>
      </div>

      <MiddleSection />
      <Footer />
    </div>
  );
};
export default Home;
