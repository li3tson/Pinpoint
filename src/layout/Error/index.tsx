import { Wrapper } from './styles'
import { useTranslation } from 'react-i18next'

import Illustration from '@/assets/illustrations/error_illustration.png'

const Error = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <img src={Illustration} alt="Ilustração" />

      <h1>{t('home.error.text')}</h1>

      <button
        type="button"
        onClick={() => window.location.reload()}
      >
        {t('home.error.btnText')}
      </button>
    </Wrapper>
  )
}

export default Error
