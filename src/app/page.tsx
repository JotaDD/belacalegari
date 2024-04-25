import Hero from '@/components/Hero'
import Header from '@/components/ui/Header'

export default function Home() {
  return (
    <main className=" flex min-h-screen w-full flex-col items-center">
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <Header />
      <Hero />
    </main>
  )
}
