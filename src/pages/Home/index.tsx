import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ClipLoader from 'react-spinners/ClipLoader'

import Header from 'components/Header'

import api from 'services/api'

import * as S from './styles'

export type CountriesProps = {
  flags: {
    png: string
  }
  name: {
    common: string
  }
  population: string
  region: string
  capital: string[]
}

const Home = () => {
  const [countries, setCountries] = useState<CountriesProps[]>([])
  const [countriesFilterd, setCountriesFiltered] = useState<CountriesProps[]>(
    []
  )
  const [loading, setLoading] = useState(true)
  const [searchCountries, setSearchCountries] = useState('')
  const [searchSelectCountries, setSearchSelectCountries] = useState('')

  useEffect(() => {
    async function getAllCountries() {
      try {
        const response = await api.get(`/all`)
        setCountries(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getAllCountries()
  }, [])

  useEffect(() => {
    setCountriesFiltered(
      countries
        .filter((countryFilter) => {
          return countryFilter.name.common
            .toLowerCase()
            .includes(searchCountries.toLocaleLowerCase())
        })
        .filter((countryFilter) => {
          return countryFilter.name.common
            .toLowerCase()
            .includes(searchSelectCountries.toLocaleLowerCase())
        })
    )
  }, [searchCountries, searchSelectCountries, countries])

  return (
    <>
      <Header title="Where in the world?" />
      <S.Container>
        <S.SearchFilter>
          <input
            type="text"
            placeholder="Search for a country"
            onChange={(e) => setSearchCountries(e.target.value)}
          />
          <select
            value={searchSelectCountries}
            onChange={(e) => setSearchSelectCountries(e.target.value)}
          >
            <option value="">Filter by Region</option>
            {countries.map((item, index) => (
              <option key={index} value={item.name.common}>
                {item.name.common}
              </option>
            ))}
          </select>
        </S.SearchFilter>

        {loading ? (
          <S.ContainerLoading>
            <ClipLoader loading={loading} size={50} />
          </S.ContainerLoading>
        ) : (
          <S.Card>
            {countriesFilterd.map((item, index) => (
              <S.CardContainer key={`single-${index}`}>
                <Link to={`/single/${item.name.common.toLowerCase()}`}>
                  <img src={`${item.flags.png}`} alt={item.name.common} />
                </Link>
                <S.CardContent>
                  <S.Name>{item.name.common}</S.Name>
                  <S.Info>
                    <S.Text>
                      <strong>Population:</strong> {item.population}
                    </S.Text>
                    <S.Text>
                      <strong>Region:</strong> {item.region}
                    </S.Text>
                    <S.Text>
                      <strong>Capital:</strong> {item.capital}
                    </S.Text>
                  </S.Info>
                </S.CardContent>
              </S.CardContainer>
            ))}
          </S.Card>
        )}
        <S.NotFound>
          {loading ? (
            <S.LoadingText>Loading...</S.LoadingText>
          ) : (
            countriesFilterd.length === 0 && (
              <h1>Whoops: country not found 😔</h1>
            )
          )}
        </S.NotFound>
      </S.Container>
    </>
  )
}

export default Home
