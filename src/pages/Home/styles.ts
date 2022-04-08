import styled from 'styled-components/macro'

export const Container = styled.section`
  width: 114rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 4rem 1rem;
  }
`

export const SearchFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 5rem;

  input {
    width: 45rem;
    padding: 1.5rem 2rem;
    border: none;
    box-shadow: 0px 0px 3px #ccc;

    font-family: 'Poppins', sans-serif;
  }

  select {
    width: 20rem;
    padding: 1.5rem 2rem;
    border: none;
    box-shadow: 0px 0px 3px #ccc;

    font-family: 'Poppins', sans-serif;

    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 0;

    display: block;

    input {
      width: 100%;
      margin-bottom: 3rem;
    }
  }
`

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;
`

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`

export const CardContainer = styled.div`
  margin-top: 5rem;
  box-shadow: 0px 0px 3px #ccc;

  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  img {
    width: 250px;
    height: 150px;

    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    @media (max-width: 768px) {
      width: 100%;
      height: 240px;
    }
  }
`

export const CardContent = styled.div`
  padding: 1rem;
`

export const Name = styled.h1`
  font-size: 16px;
`

export const Info = styled.div`
  margin-top: 2rem;
`

export const Text = styled.p`
  font-size: 14px;

  strong {
    font-size: 14px;
    font-weight: 600;
    margin-right: 0.1rem;
  }
`

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;
`

export const LoadingText = styled.h1``
