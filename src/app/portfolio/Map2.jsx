import Miro1 from './Miro1';

export default function Map2({ id }) {
  return (
    <div id={id} className="m-4">
      <div className="text-center text-[#30574e] font-bold text-2xl m-4">
        Map 2: Stories of Climate Change: The Impact of Increasing Ocean Levels
        on Fresh Water Access in Chellenam, India
      </div>
      <Miro1 />
      <div className="text-[#30574e] font-light leading-relaxed md:mx-64 md:my-20 sm:m-4 text-xl">
        This map depicts the story of declining fresh water access as ocean
        levels rise and increase water saliency in Chellenam, India. I utilized
        the multidimensional mapping technique that Margaret Pearce and Michael
        Hermann outline in their 2010 article: "Mapping Champlain's Travels:
        Restorative Techniques for Historical Cartography" as a guide to
        building this map. "Stories of Climate Change" follows a discussion of
        resident experiences with increasing water saliency as climate change
        leads to higher ocean levels and makes local freshwater sources
        nonviable for human use. It weaves across scales of analysis from local
        to international to highlight the role climate change has on every day
        lives and the struggle for water access. It positions both my own
        analysis of water access issues in Chellenam, India from news sources
        along side quotes from residents in the area.{' '}
      </div>
    </div>
  );
}
