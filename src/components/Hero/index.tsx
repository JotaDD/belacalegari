import Image from 'next/image'
import profilePicture from '../../../public/images/card.png'

const Hero = () => {
  return (
    <div>
      <Image
        priority={true}
        src={profilePicture}
        width={173}
        height={170}
        alt="profile picture"
      />
    </div>
  )
}
export default Hero
