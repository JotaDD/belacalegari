import Image from 'next/image'
import profilePicture from '../../../public/images/card.png'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('Index')
  return (
    <div>
      <Image
        priority={true}
        src={profilePicture}
        width={173}
        height={170}
        alt="profile picture"
      />
      <h1>{t('title')}</h1>
    </div>
  )
}
export default Hero
