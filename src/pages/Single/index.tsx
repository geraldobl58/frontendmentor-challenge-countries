import { useState, useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import Header from 'components/Header'

import api from 'services/api'

import * as S from './styles'

export type CountriesProps = {
  flags: {
    png: string
  }
  name: {
    common: string
    nativeName: {
      [key: string]: {
        official: string
      }
    }
  }
  population: string
  region: string
  subregion: string
  capital: string[]
  tld: string[]
  borders: string[]
  currencies: {
    [key: string]: {
      name: string
    }
  }
  languages: {
    [key: string]: string
  }
}

export type RouteProps = {
  id: string
}

const Single = () => {
  const [countries, setCountries] = useState<CountriesProps[]>([])

  const { params } = useRouteMatch<RouteProps>()

  const history = useHistory()

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/name/${params.id}`)
      setCountries(response.data)
    }

    getData()
  }, [params.id])

  return (
    <>
      <Header title="Where in the world?" />
      <S.Container>
        <S.BackButton onClick={() => history.goBack()}>
          <HiOutlineArrowNarrowLeft />
          <S.BackTitle>Back</S.BackTitle>
        </S.BackButton>

        {countries.map((item) => {
          const native = Object.keys(item.name.nativeName)
          const language = Object.keys(item.languages)
          const usd = Object.keys(item.currencies)

          return (
            <S.Content key={item.name.common}>
              <S.Image>
                <img src={item.flags.png} alt={item.flags.png} />
              </S.Image>
              <S.Information>
                <S.Name>{item.name.common}</S.Name>
                <S.ContentInfo>
                  <S.LeftSidebar>
                    <S.InfoDetails>
                      <strong>Native Name:</strong>{' '}
                      {item.name.nativeName[native[0].toString()].official}
                    </S.InfoDetails>
                    <S.InfoDetails>
                      <strong>Population:</strong> {item.population}
                    </S.InfoDetails>
                    <S.InfoDetails>
                      <strong>Region:</strong> {item.region}
                    </S.InfoDetails>
                    <S.InfoDetails>
                      <strong>Sub Region:</strong> {item.subregion}
                    </S.InfoDetails>
                    <S.InfoDetails>
                      <strong>Capital:</strong> {item.capital}
                    </S.InfoDetails>
                  </S.LeftSidebar>
                  <S.RightSidebar>
                    <S.InfoDetails>
                      <strong>Top Level Domain:</strong> {item.tld}
                    </S.InfoDetails>
                    <S.InfoDetails>
                      <strong>Currecies:</strong>{' '}
                      {item.currencies[usd[0].toString()].name}
                    </S.InfoDetails>
                    <S.InfoDetails>
                      <strong>Languages:</strong>{' '}
                      {item.languages[language[0].toString()]}
                    </S.InfoDetails>
                  </S.RightSidebar>
                </S.ContentInfo>
                <S.FooterTags>
                  {item.borders && (
                    <>
                      <strong>Border Coutries:</strong>
                      {item.borders?.map((item, index) => (
                        <span key={`border-${index}`}>{item}</span>
                      ))}
                    </>
                  )}
                </S.FooterTags>
              </S.Information>
            </S.Content>
          )
        })}
      </S.Container>
    </>
  )
}

export default Single
