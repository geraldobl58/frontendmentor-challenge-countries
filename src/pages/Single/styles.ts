import styled from 'styled-components/macro'

export const Container = styled.main`
  width: 114rem;
  margin: 0 auto;

  margin-top: 5rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
  }
`

export const BackButton = styled.button`
  border: none;
  padding: 1rem 3rem;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #ccc;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Poppins', sans-serif;
`

export const BackTitle = styled.p`
  margin-left: 1rem;
`

export const Content = styled.div`
  margin-top: 5rem;

  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    display: block;
  }
`

export const Image = styled.div`
  img {
    width: 100%;
  }
`

export const Information = styled.div`
  padding: 5rem;
`

export const Name = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
`

export const ContentInfo = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`

export const InfoDetails = styled.div`
  line-height: 3rem;

  font-size: 14px;

  strong {
    font-size: 14px;
    font-weight: 600;
    margin-right: 0.1rem;
  }
`

export const LeftSidebar = styled.div``

export const RightSidebar = styled.div``

export const FooterTags = styled.div`
  margin-top: 5rem;

  font-size: 14px;

  strong {
    font-size: 14px;
    font-weight: 600;
    margin-right: 0.1rem;
  }

  span {
    padding: 0.5rem 3rem;
    border-radius: 3px;
    box-shadow: 0px 0px 5px #ccc;
    margin-left: 2rem;
  }
`
