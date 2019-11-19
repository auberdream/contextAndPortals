import styled from "styled-components";

export const Header = styled.header`
  background-color: #fff;
  box-shadow: grey;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 5px 5px 5px 200px;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

export const HeaderItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 30%;
  min-width: 40px;
`;

export const HeaderItemExpandable = styled(HeaderItem)`
  width: 100%;
`;

export const HeaderLogo = styled.img`
  height: 40px;
  width: 40px;
`;
