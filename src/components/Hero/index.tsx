import Products from './Products'
import Profile from './Profile'

const Hero = () => {
  return (
    <div className="mt-8 flex w-[80%] max-w-[1200px] flex-col items-center justify-between lg:flex-row ">
      <Profile />
      <Products />
    </div>
  )
}
export default Hero
