import Image from 'next/image'
import profilePicture from '../../../../public/images/card.png'
import { useLocale } from 'next-intl'
import { useDictionary } from '@/lib/utils'

const Profile = () => {
  const locale = useLocale()
  const d = useDictionary(locale) as {
    hero: { title: string; subtitle: string }
  }

  return (
    <div className="mb-8 flex h-full min-w-[215px] flex-col items-center justify-center lg:order-2">
      <Image
        priority={true}
        src={profilePicture}
        width={173}
        height={173}
        sizes="auto"
        alt="profile picture of Isabela"
        className="min-w-[180px] rounded-full md:w-[320px]"
      />
      <h2 className="w-[clamp(226px,40vw,350px)] text-center text-base text-ic-orange-900 md:text-2xl">
        <b>{d.hero.title}</b>
        <span>{d.hero.subtitle}</span>
      </h2>
    </div>
  )
}
export default Profile
