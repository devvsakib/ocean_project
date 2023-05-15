import React from 'react'

const Partners = () => {
  const sponsoreLogo = [
    { brand: "Google", logo: "/images/Google.png" },
    { brand: "Webflow", logo: "/images/webflow.png" },
    { brand: "YouTube", logo: "/images/YouTube.png" },
    { brand: "Facebook", logo: "/images/Facebook.png" }
  ]
  return (

    <div className='my-36'>
      <div className='text-center text-transparent bg-gradient-to-t from-black/40 to-white bg-clip-text'>
        <h1 className='border-b-2 border-[#FFA500] text-7xl pb-3 font-semibold uppercase inline-block'>Our Partners</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 place-items-center items-center my-14 justify-between'>
        {
          sponsoreLogo.map((sponsore, idx) => (
            <img key={idx} src={sponsore.logo} alt={sponsore.brand} />
          ))
        }
      </div>
    </div>
  )
}

export default Partners