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
            <span className='text--emphasis'>
              {`${t('home.informationPanel.ipv4')}:`}
            </span>&nbsp;
            <span>{FormatResponseData(data.ip)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.city')}:`}
            </span>&nbsp;
            <span>{FormatResponseData(data.city)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.state')}:`}
            </span>&nbsp;
            <span>{FormatResponseData(data.region)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.country')}:`}
            </span>&nbsp;
            <span>
              {FormatResponseData(`${data.country_name} ${data.emoji_flag}`)}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.continent')}:`}
            </span>&nbsp;
            <span>{FormatResponseData(data.continent_name)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.currentTime')}:`}
            </span>&nbsp;
            <span>{FormatResponseData(currentTime.toLocaleString())}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.latitude')}:`}
            </span>&nbsp;
            <span>{FormatResponseData(data.latitude.toFixed(6))}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.longitude')}:`}
            </span>&nbsp;
            <span>{FormatResponseData(data.longitude.toFixed(6))}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.language')}:`}
            </span>&nbsp;
            <span>
              {FormatResponseData(`${data.languages[0].name}
                (${String(data.languages[0].code).toUpperCase()})`)}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.currency')}:`}
            </span>&nbsp;
            <span>
              {FormatResponseData(
                `${data.currency.name} (${data.currency.code})`,
              )}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.ddd')}:`}
            </span>&nbsp;
            <span>+{FormatResponseData(data.calling_code)}</span>
          </p>
        </li>

        {/* <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
            {`${t('home.informationPanel.asn')}:`}
          </span>&nbsp;
            <span>{FormatResponseData(data.asn.name)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
            {`${t('home.informationPanel.asnDomain')}:`}
          </span>&nbsp;
            <span>{FormatResponseData(data.asn.domain)}</span>
          </p>
        </li> */}

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.tor')}:`}
            </span>&nbsp;
            <span>{FormatResponseData(data.threat.is_tor)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.proxy')}:`}
            </span>&nbsp;
            <span>{FormatResponseData(data.threat.is_proxy)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            <span className='text--emphasis'>
              {`${t('home.informationPanel.dataCenter')}:`}
            </span>&nbsp;
            <span>{FormatResponseData(data.threat.is_datacenter)}</span>
          </p>
        </li>
      </ul>
    </Wrapper>
  )
}

export default InformationPanel
