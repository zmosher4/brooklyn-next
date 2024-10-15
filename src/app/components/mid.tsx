import Image from 'next/image';
import travel1 from '@/assets/travel1.webp';
import travel2 from '@/assets/travel2.webp';
import travel3 from '@/assets/travel3.webp';
import travel4 from '@/assets/travel4.png';

const MiddleSection = () => {
  return (
    <div className="lg:block lg:w-[100%]">
      <div className="bg-[#30574e]">
        <div className="flex justify-center items-center h-screen m-10 mt-10 space-x-4">
          {/* Image 1 */}
          <div className="xl:h-[600px] xl:w-[500px] md:h-[400px] md:w-[300px] lg:h-[400px] lg:w-[300px]">
            <Image
              className="object-cover h-full w-full"
              src={travel1}
              alt="travel1"
            />
          </div>

          {/* Image 2 */}
          <div className="xl:h-[600px] xl:w-[500px] md:h-[400px] md:w-[300px] lg:h-[400px] lg:w-[300px]">
            <Image
              className="object-cover h-full w-full"
              src={travel2}
              alt="travel2"
            />
          </div>

          {/* Image 3 */}
          <div className="xl:h-[600px] xl:w-[500px] md:h-[400px] md:w-[300px] lg:h-[400px] lg:w-[300px]">
            <Image
              className="object-cover h-full w-full"
              src={travel3}
              alt="travel3"
            />
          </div>
        </div>

        <div className="xl:pt-32">
          <div className="h-96 xl:w-[1100px] w-[400px] sm:w-[500px] mx-auto flex justify-center items-center">
            <Image src={travel4} alt="travel4" />
          </div>
        </div>

        <div className="relative w-screen xl:h-64 lg:h-0 bg-gray-200">
          <svg
            className="absolute top-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#30574e"
              d="M0,320 Q720,160 1440,320 L1440,0 L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
