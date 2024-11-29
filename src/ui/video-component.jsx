export default async function VideoComponent() {
  const getVideoSrc = await fetch("https://www.youtube.com");

  return (
    <>
      <div>
        <iframe
          width="100%"
          height="535"
          src="https://www.youtube.com/embed/MPbUaIZAaeA?si=btqz7KqxTPrtmxGu"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="text-blue-300 font-bold">
          Monster by Shawn Mendes ft Justin Bieber
        </h2>
      </div>
      <br></br>
      <div>
        <iframe
          width="100%"
          height="535"
          src="https://www.youtube.com/embed/pZ1NdE69VTs?si=CA3io-CEI1HjsjRd"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="text-blue-300 font-bold">Number One Girl by ROSÉ</h2>
      </div>
      <br></br>
      <div>
        <iframe
          width="100%"
          height="535"
          src="https://www.youtube.com/embed/ekr2nIex040?si=4lR1M0VMb4BER022"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="text-blue-300 font-bold">APT. by Bruno Mars ft ROSÉ</h2>
      </div>
      <br></br>
      <div>
        <iframe
          width="100%"
          height="535"
          src="https://www.youtube.com/embed/Zp-Jhuhq0bQ?si=ZY0acp6HUyMK6Gbv"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="text-blue-300 font-bold">DRIP by BABYMONSTER</h2>
      </div>
      <br></br>
      <div>
        <iframe
          width="100%"
          height="535"
          src="https://www.youtube.com/embed/bjjC1-G6Fxo?si=Nw4DrcoFsuuFQUS-"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h2 className="text-blue-300 font-bold">A thousand years by James Arthur</h2>
      </div>
    </>
  );
}
