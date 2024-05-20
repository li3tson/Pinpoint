import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'

import {
  InformationPanel,
  Map,
  SearchField,
  Window
} from '@/components'
import { Header, Error, Loading } from '@/layout'
import { API } from '@/services/baseURL'
import { Container, Wrapper } from './styles'

const Home = () => {
  const [ipAddress, setIpAddress] = useState('0.0.0.0')

  const { t } = useTranslation()

  const apiEndPoint = () => {
    if (ipAddress === '0.0.0.0') {
      return `?api-key=${import.meta.env.VITE_IPDATA_API_KEY}`
    } else {
      return `/${ipAddress}?api-key=${import.meta.env.VITE_IPDATA_API_KEY}`
    }
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ['ipInformation', ipAddress],
    queryFn: async () => {
      const { data } = await API.get(apiEndPoint())

      return data
    }
  })

  if (isError && !isLoading) {
    return <Error />
  }

  if (data === undefined || isLoading) {
    return <Loading />
  }

  return (
    <Wrapper>
      <Header />

      <Container>
        <div className='leftSide__wrapper'>
          <Window title={t('home.window.title.information')}>
            <InformationPanel data={data} />
          </Window>

          <SearchField get={ipAddress} set={setIpAddress} />
        </div>

        <Window title={t('home.window.title.map')}>
          <Map
            lat={data.latitude.toFixed(6)}
            lng={data.longitude.toFixed(6)}
            ip={data.ip}
          />
        </Window>
      </Container>
    </Wrapper>
  )
}

export default Home
