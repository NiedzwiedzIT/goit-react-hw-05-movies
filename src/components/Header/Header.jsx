import { HeaderStyled, NavLinkStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>

        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </nav>
    </HeaderStyled>
  );
};
