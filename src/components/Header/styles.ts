import styled from 'styled-components/macro'

export const Container = styled.header`
  width: 100%;
  box-shadow: 0px 0px 3px #ccc;
  padding: 2rem 0;
`

export const Content = styled.div`
  width: 114rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 4rem 1rem;
  }
`

export const Logo = styled.h1``

export const Switch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.a`
  font-size: 1.6rem;
  font-weight: 600;

  margin-left: 1rem;

  cursor: pointer;
`
