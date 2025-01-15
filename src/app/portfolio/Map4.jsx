import mapimg5 from '@/assets/mapimg5.webp';
import Image from 'next/image';

export default function Map4({ id }) {
  return (
    <div id={id} className="m-4">
      <div className="text-center text-[#30574e] font-bold text-2xl m-4">
        Map 4: Mapping the "Miracle Water Village"
      </div>
      <div className="flex items-center justify-center m-4">
        <Image
          className="object-fit h-[800px] w-[900px] border-4 border-[#30574e]"
          src={mapimg5}
        />
      </div>
      <div className="text-[#30574e] font-light leading-relaxed md:mx-64 md:my-20 sm:m-4 text-xl">
        This map utilizes the topology mapping technique outlined by Levi
        Westerveld and Anne Knowles in their 2020 article " Loosening the grid:
        topology as the basis for a more inclusive GIS" to share the story of a
        community water management project in Hiwarz Bazar, India. The map
        follows the story of water access in Hiwarz Bazar and the experience of
        local farmers whom were forced to migrate for work in Mumbai due to crop
        loss with rising drought conditions, and their subsequent return to town
        after successful implementation of a community water project. The map
        utilizes colors, shading, and quotes to depict the experiences of these
        farmers prior too, during, and after the projects implementation. It
        centers the very real and intense experiences of water users in India
        especially when water plays a central role in economic livelihoods.
      </div>
    </div>
  );
}
