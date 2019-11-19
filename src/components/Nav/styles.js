import styled from "styled-components";

export const Nav = styled.div`
  background-color: ${props => props.navColor};
  box-shadow: 1px 0px 7px -2px rgba(125, 125, 125, 1);
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 40px 20px 20px 20px;
  position: absolute;
  width: 190px;
  transition: background-color 500ms ease;
  z-index: 3;
`;

export const NavLink = styled.div`
  font-weight: 500;
  padding: 8px 0;
  text-transform: uppercase;
`;
