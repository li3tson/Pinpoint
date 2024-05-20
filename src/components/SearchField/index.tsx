import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { Warning, Wrapper } from './styles'

const schemaValidation = z.object({
  search: z
    .string()
    .regex(
      /^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/,
      'Invalid IP address',
    ),
})

type schemaType = z.infer<typeof schemaValidation>

type PropType = {
  get: string
  set: React.Dispatch<React.SetStateAction<string>>
}

const SearchField = ({ get, set }: PropType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaType>({ resolver: zodResolver(schemaValidation) })

  const { t } = useTranslation()

  const handleSearchAnIP = (data: schemaType) => {
    set(String(data.search))
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleSearchAnIP)}>
        <input
          type='text'
          id='search'
          placeholder={get}
          className='searchField'
          {...register('search')}
        />

        <button
          type='submit'
          className='btn'
          title={t('home.searchField.title')}
        >
          <MagnifyingGlass size={32} className='btn__icon' />
        </button>
      </form>

      {errors.search != null && (
        <Warning>
          <p className='warning__text'>{errors.search?.message}</p>
        </Warning>
      )}
    </Wrapper>
  )
}

export default SearchField
