import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px;

  &::after {
    content: '';
    position: fixed;
    top: 0px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100vh + 10px);
    background-image: ${props => {
      // console.log(props);
      return `url(${props.children[0].props.src})`;
    }};
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(5px);
    z-index: -1;
    opacity: 0.35;
  }

  img {
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 10px;
    align-self: flex-start;
  }
`;

const LinkContainer = styled.div`
  font-size: 20px;
  display: flex;
  gap: 30px;
  padding-left: 20px;
  margin-bottom: 20px;
  a {
    text-decoration: none;
    color: black;
    display: inline-block;
    margin-top: 15px;
    text-decoration: none;
    color: black;
    outline: 1px solid teal;
    background-color: #09cfe1;
    padding: 10px;
    border-radius: 10px;
  }
`;

const LinkEl = styled(Link)`
  margin-left: 15px;
  display: inline-block;
  margin-top: 15px;
  text-decoration: none;
  color: black;
  outline: 1px solid teal;
  background-color: #09cfe1;
  padding: 10px;
  border-radius: 10px;
`;

export { Container, LinkContainer, LinkEl };
