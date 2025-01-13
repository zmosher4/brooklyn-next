import Image from 'next/image';
import mapimg2 from '@/assets/mapimg2.webp';
import mapimg3 from '@/assets/mapimg3.webp';

export default function SketchMaps() {
  return (
    <div className="text-[#30574e]">
      <div className="flex items-center justify-center m-8 font-bold text-4xl">
        Sketch Maps
      </div>
      <div className="flex justify-around m-4 font-bold  text-xl">
        <div>Sketch Map 1: Mapping Power Relations with Drinking Water</div>
        <div>Sketch Map 2: Hauz Khas Water Project</div>
      </div>
      <div className="flex justify-between m-4 space-x-4">
        <Image className="object-cover h-[900px] w-full" src={mapimg2} />

        <Image className="object-cover h-[900px] w-full" src={mapimg3} />
      </div>
      <div className="flex justify-between m-16 text-md space-x-48 leading-relaxed">
        <div>
          Sketch Map 1 depicts power relations between centralized institutions
          and decentralized experiences which alter drinking water access. To
          highlight the way in which power moves through and across various
          components that make up and attribute to drinking water access, I
          mapped out various varied scales of institutional actors, project
          types, and experience components related to drinking water access. The
          map depicts how large institutional actors like the World Bank and
          Indian Government tend to have the ability to exercise more power over
          various drinking water projects or other actors which then have
          narrower capabilities of exercising power over drinking water access.
          It also notes how some experiences related to drinking water like
          access itself and price are also captured within institutional
          structures adding layers to the way in which the state or user might
          view these elements. Taking a step back, this map also demonstrates
          the messiness of drinking water access and how interconnected and
          complex relations between elements of water access are especially when
          caught up in processes, flows, and a network of power.
        </div>
        <div>
          Sketch Map 2 depicts one narrow story of water access related to a
          project run by a local advocacy group in Delhi. It shows the
          progression of Hauz Khas lake situated in South-West Delhi which since
          1936 has undergone rapid urbanization leading to drastic changes in
          the lake’s water table. Based on maps collected and presented by the
          advocacy group, the three top-down maps also demonstrate moments when
          the group became involved in restoring the lake and their proposed
          plan to revitalize it. The side view maps that correspond to each
          top-down map give viewers a means of seeing how rapidly water was lost
          and then restored to the lake. However, the map does not capture
          prominent issues around this water project including the diminishing
          aquifer based underneath this lake and part of the city which was
          replenished by this project. It fails to depict the issue of pollution
          which led partially to the drying of the lake and loss of ecology.
          Furthermore, it does not capture the returned issue of pollution due
          to failure to continue monitoring and implementing project components
          after the advocacy group transferred project responsibility to the
          city planning and development association. However, in failing to
          capture these elements of the project and changes to the lake, the map
          does demonstrate how political and environmental changes are often
          pushed to lower priority of project description and implementation
          despite having real impact on the project and outcomes.
        </div>
      </div>
    </div>
  );
}
