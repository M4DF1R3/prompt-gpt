import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompt GPT is an open-source AI propting tool for Chat GPT. It allows
        anyone to discover, create, and share prompts for creative prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
