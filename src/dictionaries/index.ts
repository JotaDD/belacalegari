import { enUS } from '../../messages/en-US'
import { ptBR } from '../../messages/pt-BR'

export type DictionaryType = {
  [key: string]: unknown
}

export const dictionaries: DictionaryType = {
  'en-US': enUS,
  'pt-BR': ptBR,
}
