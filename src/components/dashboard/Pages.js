const Pages = ({
  homeRef,
  snailLandRef,
  tokenomicsRef,
  roadmapRef,
  rarityRef,
}) => {
  const scrollIntoView = (ref) => {
    const el = ref?.current;
    if (!el) {
      return;
    }

    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fg-5 flex-column-center">
      <span
        className="page-part fs-150 mt-5 tc-white fw-bold"
        onClick={() => scrollIntoView(homeRef)}
      >
        Home
      </span>
      <span
        className="page-part fs-150 mt-5 tc-white fw-bold"
        onClick={() => scrollIntoView(snailLandRef)}
      >
        SnaiLand Academy
      </span>
      <span
        className="page-part fs-150 mt-5 tc-white fw-bold"
        onClick={() => scrollIntoView(tokenomicsRef)}
      >
        Tokenomics
      </span>
      <span
        className="page-part fs-150 mt-5 tc-white fw-bold"
        onClick={() => scrollIntoView(roadmapRef)}
      >
        Roadmap
      </span>
      <span
        className="page-part fs-150 mt-5 tc-white fw-bold"
        onClick={() => scrollIntoView(rarityRef)}
      >
        Why not Rarity?
      </span>
    </div>
  );
};

export default Pages;
