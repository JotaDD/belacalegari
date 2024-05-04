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
    <div className=" mb-8 flex h-full flex-col items-center justify-center  lg:order-2 lg:mb-0">
      <Image
        priority={true}
        src={profilePicture}
        width={173}
        height={173}
        sizes="auto"
        alt="profile picture of Isabela"
        className="min-w-[180px] md:w-[320px]"
      />
      <h2 className=" mt-2 w-[clamp(180px,75vw,230px)] text-center text-base text-ic-orange-900 md:w-[260px] md:text-lg">
        <b>{d.hero.title}</b>
        <p>{d.hero.subtitle}</p>
      </h2>
    </div>
  )
}
export default Profile
