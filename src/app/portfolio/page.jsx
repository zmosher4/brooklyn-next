'use client';

import MapHeader from './MapHeader';
import MapIntro from './MapIntro';
import SketchMaps from './SketchMaps';
import Statement from './Statement';
import Map1 from './Map1';
import Map2 from './Map2';
import Map3 from './Map3';
import Map4 from './Map4';
import Map5 from './Map5';
import Footer from '../components/footer';
import { useEffect } from 'react';

export default function Maps() {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the element
      const element = document.querySelector(window.location.hash);
      if (element) {
        // Scroll to it
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div>
      <div className="flex flex-col min-h-screen animate-fadeIn">
        <MapHeader />
        <MapIntro id="introduction" />
      </div>
      <SketchMaps id="sketch-maps" />
      <Statement id="statement" />
      <Map1 id="map-1" />
      <Map2 id="map-2" />
      <Map3 id="map-3" />
      <Map4 id="map-4" />
      <Map5 id="map-5" />
      <Footer />
    </div>
  );
}
