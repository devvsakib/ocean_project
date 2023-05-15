import Button from "../Common/Button"

const Banner = () => {
  const data = [
    { numbers: "2.5B", desc: "Solid waste" },
    { numbers: "275M", desc: "Plastic waste" },
    { numbers: "700+", desc: "Species might extinct" },
    { numbers: "1500%", desc: "Increased polution" }
  ]
  return (
    <div className="h-auto grid items-center gap-2">
      <div className="relative flex flex-col gap-5 mt-36">
        <div>
          <div className="absolute h-32 -left-8 w-2 bg-white"></div>
          <div className="no-select"><img src="/images/bannertext.png" /></div>
          {/* <h2 className="text-6xl font-bold">Creating a sustainable</h2>
        <h2 className="text-6xl font-bold">FUTURE FOR OUR OCEANS</h2> */}
        </div>
        <div className="mt-3">
          <p>Oceans & Us creates circular economies for river and ocean clean-ups, promoting<br /> sustainability, education, and empowerment for a better future</p>
          <div className="mt-5">
            <Button content={"Discover our cause"} />
          </div>
        </div>
      </div>
      <div className="lg:flex lg:gap-2 justify-between my-20">
        <p className="font-thin text-2xl lg:w-1/2">Our vision is to promote sustainable scalable solutions and a balanced approach to <span className="text-tertiary font-semibold">Planet</span></p>
        <div className="capitalize grid grid-cols-1 md:grid-cols-2 justify-between flex-1 gap-y-10 mt-10 md:mt-10 lg:mt-0">
          {
            data.map((item, idx) => (
              <div key={idx} className="text-center">
                <h2 className="text-4xl font-extrabold">{item.numbers}</h2>
                <p className="text-lg font-thin">{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Banner