import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarText,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from "reactstrap";

import { NewsContext, NewsContextType } from "providers/newsProvider";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import debounce from "lodash/debounce";
import style from "assets/styles/components/header.module.scss";

const Header = () => {
  const context = useContext(NewsContext);
  const { setSearchValue } = context as NewsContextType;

  const search = debounce(value => {
    setSearchValue(value);
  }, 500);

  return (
    <div className={style.header}>
      <Navbar>
        <NavbarBrand href="/">US News</NavbarBrand>
        <Nav className="mr-auto" navbar />
        <NavbarText>
          <InputGroup className={style.searchBar}>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <div>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </InputGroupText>
            </InputGroupAddon>
            <Input onChange={e => search(e.target.value)} />
          </InputGroup>
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default Header;
