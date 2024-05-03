import { products } from '@/lib/utils'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const Products = () => {
  const locale = useLocale()
  return (
    <section className="">
      <ul className="grid min-w-[254px] grid-cols-3 grid-rows-3 gap-3  font-bold  ">
        {products.map((product, index) => (
          <li
            key={index}
            className="hover:bg-ic-orange-100 flex aspect-square max-w-[160px]
            flex-col
            items-start
            justify-end
            rounded-xl bg-ic-stone-200 
            text-[clamp(0.5rem,2.5vw,0.8rem)] 
            text-ic-orange-900 transition-all  
            duration-500  ease-in-out hover:text-ic-orange-800"
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
