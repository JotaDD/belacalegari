import { useParams } from 'next/navigation'

const TranslateButton = () => {
  const { locale } = useParams()
  const handleLocaleChange = () => {
    if (locale === 'pt-BR') {
      window.location.href = '/en-US'
    } else {
      window.location.href = '/pt-BR'
    }
  }
  return (
    <button
      type="button"
      onClick={handleLocaleChange}
      className="w-auto  text-center text-sm font-semibold text-ic-red-500 "
    >
      PT-BR
    </button>
  )
}
export default TranslateButton
