import MapHeader from './MapHeader';
import MapIntro from './MapIntro';
import SketchMaps from './SketchMaps';
import Statement from './Statement';
import Map1 from './Map1';
import Map2 from './Map2';

export default function Maps() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <MapHeader />
        <MapIntro />
      </div>
      <SketchMaps />
      <Statement />
      <Map1 />
      <Map2 />
    </div>
  );
}
