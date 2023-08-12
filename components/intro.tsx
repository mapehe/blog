import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold leading-tight md:pr-8">
        mapehe's short fiction.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 caslon">
        My name is Matias Heikkilä and this is my personal website. In August
        2023, I decided to start writing one short piece of fiction every week
        and publish the stories here on Sundays. In case you want to reach out,
        drop me a message at <b>mapehe@iki.fi</b>
      </h4>
    </section>
  );
};

export default Intro;
