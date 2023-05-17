import BlogCard from '@/components/Blog/BlogCard'
import Feature from '@/components/Feature/Feature'
import Partners from '@/components/Partners/Partners'

const Home = () => {
  return (
    <div>
      <Feature />
      <div className='relative'>
        <div className="absolute -z-10 top-32 right-0 w-full"><img className="w-full h-auto" src="/images/threemain.png" alt="" /></div>
        <Partners />
        <BlogCard />
      </div>
    </div>
  )
}

export default Home