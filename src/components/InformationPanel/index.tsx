import { useTranslation } from 'react-i18next'

import { FormatResponseData } from '@/utils'
import { Wrapper } from './styles'

type PropType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const InformationPanel = ({ data }: PropType) => {
  const { t } = useTranslation()

  const currentTime = new Date(String(data.time_zone.current_time))

  return (
    <Wrapper>
      <ul className='list'>
        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.ipv4')}:`}&nbsp;
            <span>{FormatResponseData(data.ip)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.city')}:`}&nbsp;
            <span>{FormatResponseData(data.city)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.state')}:`}&nbsp;
            <span>{FormatResponseData(data.region)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.country')}:`}&nbsp;
            <span>
              {FormatResponseData(`${data.country_name} ${data.emoji_flag}`)}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.continent')}:`}&nbsp;
            <span>{FormatResponseData(data.continent_name)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.currentTime')}:`}&nbsp;
            <span>{FormatResponseData(currentTime.toLocaleString())}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.latitude')}:`}&nbsp;
            <span>{FormatResponseData(data.latitude.toFixed(6))}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.longitude')}:`}&nbsp;
            <span>{FormatResponseData(data.longitude.toFixed(6))}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.language')}:`}&nbsp;
            <span>
              {FormatResponseData(`${data.languages[0].name}
                (${String(data.languages[0].code).toUpperCase()})`)}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.currency')}:`}&nbsp;
            <span>
              {FormatResponseData(
                `${data.currency.name} (${data.currency.code})`,
              )}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.ddd')}:`}&nbsp;
            <span>+{FormatResponseData(data.calling_code)}</span>
          </p>
        </li>

        {/* <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.asn')}:`}&nbsp;
            <span>{FormatResponseData(data.asn.name)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.asnDomain')}:`}&nbsp;
            <span>{FormatResponseData(data.asn.domain)}</span>
          </p>
        </li> */}

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.tor')}:`}&nbsp;
            <span>{FormatResponseData(data.threat.is_tor)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.proxy')}:`}&nbsp;
            <span>{FormatResponseData(data.threat.is_proxy)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            {`${t('home.informationPanel.dataCenter')}:`}&nbsp;
            <span>{FormatResponseData(data.threat.is_datacenter)}</span>
          </p>
        </li>
      </ul>
    </Wrapper>
  )
}

export default InformationPanel
