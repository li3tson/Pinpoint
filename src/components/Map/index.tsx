import * as L from 'leaflet'
import { useEffect } from 'react'

import PlaceMarkerIcon from '@/assets/icons/place_marker.png'
import { Wrapper } from './styles'

type PropType = {
  lat: number
  lng: number
  ip: string
}

const ZOOM = 12
const MIN_ZOOM = 2
const MAX_ZOOM = 17
const MAP_CENTER = [0, 20] as L.LatLngExpression
const ANIMATION_DURATION = 3

const Map = ({ lat, lng, ip }: PropType) => {
  useEffect(() => {
    const map = L.map('map', {
      keyboard: true,
      zoomControl: true,
      doubleClickZoom: false,
      zoom: MIN_ZOOM,
      minZoom: MIN_ZOOM,
      maxZoom: MAX_ZOOM,
      center: MAP_CENTER,
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    map.flyTo([lat, lng], ZOOM, {
      animate: true,
      duration: ANIMATION_DURATION,
      easeLinearity: 0.5,
    })

    const markerIcon = L.icon({
      iconUrl: `${PlaceMarkerIcon}`,
      iconSize: [40, 40],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    })

    L.marker([lat, lng], { icon: markerIcon })
      .addTo(map)
      .on('click', () => {
        map.flyTo([lat, lng], ZOOM, {
          animate: true,
          duration: ANIMATION_DURATION,
        })
      })
      .bindPopup(ip)
      .openPopup()

    return () => {
      map.remove()
    }
  }, [ip])

  return (
    <Wrapper>
      <div id='map' />
    </Wrapper>
  )
}

export default Map
