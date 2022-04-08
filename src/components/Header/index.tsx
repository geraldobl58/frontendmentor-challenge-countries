import { ThemeContext } from 'hooks/theme'
import { useContext } from 'react'
import { FiMoon } from 'react-icons/fi'

import * as S from './styles'

export type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <S.Container>
      <S.Content>
        <S.Logo>{title}</S.Logo>
        <S.Switch>
          <FiMoon size={20} />
          <S.Title onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </S.Title>
        </S.Switch>
      </S.Content>
    </S.Container>
  )
}

export default Header
