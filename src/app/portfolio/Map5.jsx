import Miro2 from './Miro2';

export default function Map5({ id }) {
  return (
    <div id={id} className="m-4">
      <div className="text-center text-[#30574e] font-bold text-2xl m-4">
        Map 5: Border Tension: The Fight for Water Rights under the Indus Waters
        Treaty of 1960
      </div>
      <Miro2 />
      <div className="text-[#30574e] font-light leading-relaxed md:mx-64 md:my-20 sm:m-4 text-xl">
        This mapping project utilizes a mapping technique laid out by Meghan
        Kelly in her 2019 article "Mapping Syrian Refugee Border Crossing: A
        Feminist Approach" to share the varied perspectives of borders related
        to the Indus Waters Treaty of 1960. The project follows an atlas style
        map which gives the perspective of India, Pakistan, and the World Bank
        related to river flow rates across the Indian/Pakistan border. It begins
        first with an introduction to the method before showing border
        perspectives related to the portion of the treaty giving Pakistan
        control of the Western Rivers, and the then shifts to consider the
        perspectives of the treaty which give control of the Eastern Rivers to
        India. Critically, this mapping project reflects on the opposing views
        of border tension over river flows under the Indus Waters Treaty. It
        looks at the way the treaty is viewed by the World Bank, India, and
        Pakistan depending on their own positionality and power over particular
        rivers and critiques the notion that this treaty has drawn explicit
        peace to the region over river rights.
      </div>
      <div className="text-[#30574e] font-light leading-relaxed md:mx-64 md:mt-20 sm:m-4 text-lg">
        <span className="font-bold">Dedication: </span>This page and each of the
        five mapping projects presented here are dedicated to Jack, who was
        always a source of inspiration and support in all my academic and
        mapping endeavors related to and beyond my research.
      </div>
    </div>
  );
}
