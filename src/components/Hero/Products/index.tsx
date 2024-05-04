import { products } from '@/lib/utils'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const Products = () => {
  const locale = useLocale()
  return (
    <section className="">
      <ul className="grid min-w-[254px] grid-cols-3 grid-rows-3 gap-3  font-semibold  ">
        {products.map((product, index) => (
          <li
            key={index}
            className={`flex max-w-[180px] flex-col items-start
            justify-end
            rounded-xl
            text-[clamp(0.5rem,2.5vw,0.8rem)] 
            transition-all 
            duration-500 ease-in-out  
            [aspect-ratio:1.2/1]  hover:bg-ic-orange-100 hover:text-ic-orange-800
            ${index === 4 ? 'bg-ic-red-500 text-ic-orange-50' : 'bg-ic-stone-200  text-ic-orange-900 '}
            `}
          >
            <span className="mb-2 ml-2 h-fit w-[min(80%,85px)]">
              <Link href={`#`}>
                {locale === 'pt-BR' ? (
                  <span>{product.name}</span>
                ) : (
                  <span>{product.nameUs}</span>
                )}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Products
