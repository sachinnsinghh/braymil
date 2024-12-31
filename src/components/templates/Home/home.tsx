import Hero from "@/components/organisms/home-hero";
import Main from "@/components/organisms/home-main";
import Test from "@/components/organisms/home-test";
const Home = () => {
    return (
            <div className="page_container">
                <Hero/>
                <Test/>
                <Main/>
            </div>

    )
}

export default Home