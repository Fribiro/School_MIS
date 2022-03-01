//import { Badge } from "@material-ui/core";
//import { Callicon, ShoppingCartOutlined } from "@material-ui/icons";
//import CallIcon from '@mui/icons-material/Call';
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;





const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color:#2c3e50;
 
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor:pointer;
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            
          {/* <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Logo>akeo Group Of Schools</Logo>
        </Center>
        <Right>
          <Link class="nav-link" to="/login" >
            <MenuItem >SIGN IN</MenuItem>
          </Link>
          <MenuItem>ADMISSION</MenuItem>
          <MenuItem>
         
            {/* <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge> */}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;