import { useTranslation } from 'react-i18next'

import { useTheme } from '@/contexts'
import { Wrapper } from './styles'

const Header = () => {
  const theme = useTheme(state => state.theme)
  const setTheme = useTheme(state => state.setTheme)

  const { i18n } = useTranslation()
  const { t } = useTranslation()

  const checkLanguage = (value: string) => {
    if (value.includes('en')) {
      return 'en-US'
    } else if (value.includes('es')) {
      return 'es-ES'
    } else if (value.includes('fr')) {
      return 'fr-FR'
    } else if (value.includes('pt')) {
      return 'pt-PT'
    } else {
      return ''
    }
  }

  return (
    <Wrapper>
      <div className='leftSide'>
        <h1 className='leftSide__title'>{t('home.header.title')}</h1>
        <h2 className='leftSide__description'>{t('home.header.subtitle')}</h2>
      </div>

      <div className='rightSide'>
        <select
          name='theme'
          title={t('home.header.theme.title')}
          className='rightSide__select rightSide__select--theme'
          defaultValue={theme}
          onChange={e => setTheme(e.target.value)}
        >
          <option value='light'>{t('home.header.theme.light')}</option>
          <option value='dark'>{t('home.header.theme.dark')}</option>
        </select>

        <select
          name='language'
          title={t('home.header.language.title')}
          className='rightSide__select rightSide__select--languages'
          defaultValue={checkLanguage(i18n.language)}
          onChange={async e => await i18n.changeLanguage(e.target.value)}
        >
          <option value='en-US'>{t('home.header.language.english')}</option>
          <option value='es-ES'>{t('home.header.language.spanish')}</option>
          <option value='fr-FR'>{t('home.header.language.french')}</option>
          <option value='pt-PT'>{t('home.header.language.portuguese')}</option>
        </select>
      </div>
    </Wrapper>
  )
}

export default Header
