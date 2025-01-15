import mapimg4 from '@/assets/mapimg4.webp';
import Image from 'next/image';

export default function Map1({ id }) {
  return (
    <div id={id} className="m-4">
      <div className="text-center text-[#30574e] font-bold text-2xl m-4">
        Map 1: Household Drinking Water Access Compared to Previous and Existing
        World Bank Water Supply Projects in India
      </div>
      <div className="flex items-center justify-center m-4">
        <Image
          className="object-cover h-[800px] w-[600px] border-4 border-[#30574e]"
          src={mapimg4}
        />
      </div>
      <div className="text-[#30574e] font-light leading-relaxed md:mx-64 md:my-20 sm:m-4 text-xl">
        This map represents household access to safe drinking water in India
        against the number of World Bank drinking water projects. It operates as
        both an initial introduction to what household drinking water access
        looks like in terms of percentage and where the World Bank has funded
        drinking water projects. However, a closer inspection of the data source
        disclaimer and circles indicates that this picture is largely out of
        data and does not provide an updated view of water access in India and
        the hollow circles raise questions about where the World Bank has helped
        implement these projects and the full goals of them. While the data
        becomes an obstacle it is also operates to represent the lack of
        accurate data on water issues in India and that any data or map
        portraying water access should be questioned regarding its source and
        accuracy. The hollow circles also foreground a critique of World Bank
        projects as being vague and difficult to appraise for location, success,
        and intention.
      </div>
    </div>
  );
}
