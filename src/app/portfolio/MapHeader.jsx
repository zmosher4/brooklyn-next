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
    <div className="w-full">
      <div className="flex flex-wrap">
        <div className="relative w-full md:w-[50%]">
          <Image src={map1} alt="" className="object-cover w-full" />
          <div className="absolute inset-0 flex justify-center items-center text-shadow-md font-bold text-6xl">
            Mapping Portfolio
          </div>
        </div>
        <div className="relative w-full md:w-[50%] p-4">
          <h3 className="text-[#30574e] text-2xl font-bold">Page Navigation</h3>
          <div className="text-[#30574e] underline underline-offset-2 mt-8">
            <ul className="space-y-2">
              {mapBullets.map((b) => (
                <li key={b} className="list-disc">
                  {b}
                </li>
              ))}
              <ul className="ml-8 space-y-2">
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
    </div>
  );
}
