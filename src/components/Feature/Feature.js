import FeatureCard from "../Card/FeatureCard"

const Feature = () => {
    const features = [
        { icon: "/images/bag.png", bg: "/images/featurebg1.png" },
        { icon: "/images/seabottle.png", bg: "/images/featurebg2.png" },
        { icon: "/images/economy.png", bg: "/images/featurebg3.png" }
    ]
    return (
        <div className="my-24 grid  grid-cols-1 lg:grid-cols-2 justify-center gap-10">
        <img className="absolute w-2/6 md:w-1/6  -mt-10 rotateImage -left-[20vw] md:-left-[10vw]" src="/images/circle.png" />
            <div className="flex gap-10 flex-col order-2 lg:order-1">
                {
                    features.map((feature, idx) => (
                        <FeatureCard
                            icon={feature.icon}
                            bg={feature.bg}
                            key={idx}
                        />
                    ))
                }
            </div>
            <div className="p-10 rounded-lg overflow-hidden order-1">
                <p className="mt-5 text-4xl font-thin">What we are <span className="font-semibold">TRYING</span> to solve</p>
            </div>
        </div >
    )
}

export default Feature