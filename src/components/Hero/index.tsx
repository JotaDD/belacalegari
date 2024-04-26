import Image from 'next/image'
import profilePicture from '../../../public/images/card.png'
import { useLocale } from 'next-intl'
import { useDictionary } from '@/lib/utils'

const Hero = () => {
  const locale = useLocale()
  const d = useDictionary(locale) as { hero: { title: string } }
  return (
    <div>
      <Image
        priority={true}
        src={profilePicture}
        width={173}
        height={170}
        alt="profile picture"
      />
      <h1>{d.hero.title}</h1>
    </div>
  )
}
export default Hero
