export default function Map3({ id }) {
  return (
    <div id={id} className="m-4">
      <div className="text-center text-[#30574e] font-bold text-2xl m-4">
        Map 3: Tension over Water Rights in the Indus River Valley
      </div>
      <div className="flex items-center justify-center">
        <iframe
          src="https://storymaps.arcgis.com/stories/e39121aca71f4c18a081f0a49bbea5d7"
          frameborder="0"
          className="overflow-auto w-[75%] h-[700px] border-none p-8"
        ></iframe>
      </div>
      <div className="text-[#30574e] font-light leading-relaxed md:mx-64 md:my-20 sm:m-4 text-xl">
        This mapping project utilizes ArcGIS Story Maps to create a scrolling
        story which blends visual elements with a narrative discussion of the
        tension over water in the Indus River Valley. The project outlines the
        history of the Indus River Valley, the rise of dams globally, and in
        India before discussing the implications of the Indus Waters Treaty of
        1960. It provides a walk through for viewers to consider the history and
        modern presence of dams along side the tension over fresh water rivers
        which are relied on by millions of people in India and Pakistan as a
        source of water.{' '}
      </div>
    </div>
  );
}
