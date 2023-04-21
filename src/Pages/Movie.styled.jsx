import styled from '@emotion/styled';
const FilmListEl = styled.ul`
  list-style: none;
  position: relative;
`;
const FilmItem = styled.li`
  a {
    text-decoration: none;
    color: black;
    @media screen and (min-width: 768px) {
      &:hover::after,
      &:focus::after {
        content: '';
        background-image: ${props => `url('${props.children.props.cover}')`};
        background-size: cover;
        width: 250px;
        height: 350px;

        display: block;
        border-radius: 4px;
        border: 1px solid rgba(43, 134, 197);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 150px;
        left: 500px;
        z-index: 1;
      }
    }
  }
`;

const FormEl = styled.form`
  margin-left: 20px;
`;
export { FilmListEl, FilmItem, FormEl };
