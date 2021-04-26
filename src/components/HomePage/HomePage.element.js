import styled from "styled-components";

export const Home = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10vh;
`;

export const LogoText = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
export const Search = styled.div`
  margin-top: 5rem;
  width: 100%;
  text-align: center;
`;
export const Logo = styled.span`
  font-family: "Sacramento", cursive;
  background: -webkit-linear-gradient(#ff5e78, #aa2ee6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: 600;

  /* @media only screen and (max-width: 600px){
     font-size: ${({home}) => (home? null: '2rem')};
  } */
`;

export const SearchBar = styled.div`
  display: flex;
  width: ${({home}) => (home? '100%': '50%')};
  justify-content: ${({home}) => (home? 'center': null)};
  margin-bottom: ${({home}) => (home? '6rem': null)};
  margin: ${({home}) => (home? null: '1rem 0 0 1rem')}
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  width: ${({home}) => (home? '40%': '100%')};
  font-size: 1rem;
  height:  ${({home}) => (home? null : 'fit-content')};

  @media only screen and (max-width: 600px){
     width: ${({home}) => (home? '80%': '100%')};
  }
`;

export const SearchIcon = styled.button`
  padding: 0.5rem 0.5rem 0.2rem;
  height: fit-content;
  font-size: 1.4rem;
  background: #aa2ee6;
  color: #fff;
  border: 0;
`;

export const CopyRight = styled.div`
  font-size: 1rem;
  color: grey;
  flex-basis: -180px;
`;

export const Bg1 = styled.div`
  position: absolute;
  width: 380.08px;
  height: 350px;
  left: -200.62px;
  top: -100px;
  border-radius: 50%;
  background: rgba(170, 46, 230, 0.8);
  transform: rotate(10deg);
  opacity: 0.8;

  @media only screen and (max-width: 600px){
    width: 230px;
    height: 200px;
    left: -90px;
    top: -80px;
  }
`;

export const Bg2 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  right: -180px;
  top: 150px;
  border-radius: 50%;
  background: #ff5e78;
  opacity: 0.9;

  @media only screen and (max-width: 600px){
    width: 220px;
    height: 180px;
    top: 280px;
    right: -150px;
  }
`;
