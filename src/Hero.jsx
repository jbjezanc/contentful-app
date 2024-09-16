import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Subway tile yr williamsburg iceland mixtape taiyaki 8-bit
            literally quinoa banjo Brooklyn man braid gorpcore
            authentic blog. Raw denim portland unicorn, irony cloud
            bread food truck banh mi affogato roof party farm-to-table
            schlitz kickstarter kitsch af.
          </p>
        </div>
        <div className="img-container">
          <img
            src={heroImg}
            alt="woman and the browser"
            className="img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
