import Image from 'next/image';
import map1 from '@/assets/mapimg1.webp';
export default function MapHeader() {
  const mapBullets = [
    'Introduction',
    'Sketch Maps',
    'Reflexivity Statement',
    'Maps',
  ];
  const mapNums = ['Map 1', 'Map 2', 'Map 3', 'Map 4', 'Map 5'];
  return (
    <>
      <div className="flex">
        <div className="relative w-[50%]">
          <Image src={map1} alt="" className="object-cover" />
          <div className="absolute inset-0 flex justify-center items-center text-shadow-md font-bold text-6xl">
            Mapping Portfolio
          </div>
        </div>
        <div className="relative w-[50%]">
          <h3 className="text-[#30574e] m-4 text-2xl font-bold ">
            Page Navigation
          </h3>
          <div className="flex m-20 absolute inset-0 text-[#30574e] underline underline-offset-2">
            <ul className="space-y-2">
              {mapBullets.map((b) => (
                <li key={b} className="list-disc">
                  {b}
                </li>
              ))}
              <ul className="flex ml-8 flex-col space-y-2">
                {mapNums.map((m) => (
                  <li key={m} className="list-[circle]">
                    {m}
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
