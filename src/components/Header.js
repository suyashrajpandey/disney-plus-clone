import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="/">
          <img src="/images/home-icon.svg"></img>
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg"></img>
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg"></img>
          <span>watchlist</span>
        </a>
        <a>
          <img src="/images/original-icon.svg"></img>
          <span>originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg"></img>
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg"></img>
          <span>series</span>
        </a>
      </NavMenu>
      <UserImg src="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: white;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
