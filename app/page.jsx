import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Welcome to the AI Prompt Ideas Community!
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">The place where people can share and discuss AI prompt ideas</span>
        </h1>
        <p className="desc text-center">This app is deployed on Vercel and is using the </p>

        <Feed />
    </section>
  )
}

export default Home