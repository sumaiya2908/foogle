import React, { useState } from "react";
import {
  Home,
  Logo,
  LogoText,
  SearchInput,
  SearchBar,
  CopyRight,
  SearchIcon,
  Search,
  Bg1,
  Bg2,
} from "./HomePage.element";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Home>
        <Bg1 />
        <Bg2 />
        <Search>
          <LogoText>
            Let's &nbsp;
            <Link to="/"><Logo home>Foogle</Logo></Link>
          </LogoText>
          <SearchBar home>
            <SearchInput
              home
              placeholder="Search here..."
              type="text"
              onChange={(e) => {setQuery(e.target.value)}}
              required
            />
            <Link to={`/search/${query}`}>
              <SearchIcon>
                <BiSearchAlt />
              </SearchIcon>
            </Link>
          </SearchBar>
        </Search>

        <CopyRight>Copyright ©2021 Foogle .All rights Reserved.</CopyRight>
      </Home>
    </div>
  );
}

export default HomePage;
