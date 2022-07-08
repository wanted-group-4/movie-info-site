import React, { useRef } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';

const Navigation = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      keyword: { value: string };
    };
    const keyword = target.keyword.value;
    navigate(`search/${keyword}`);
  };

  return (
    <NavWrapper>
      <div>
        <NavLink to="">
          <AiFillHome />
        </NavLink>
        <NavLink to="bookmark">즐겨찾기</NavLink>
      </div>
      {/* 컴포넌트 대체 */}
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          name="keyword"
          type="text"
          placeholder="영화 제목을 검색해보세요"
        />
        <AiOutlineSearch className="icon" />
      </form>
    </NavWrapper>
  );
};

export default Navigation;

const NavWrapper = styled.nav`
  position: relative;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  a {
    margin: 16px;
    padding: 12px;
    text-decoration: none;
    &.active {
      border-bottom: 4px solid ${({ theme }) => theme.color.secondary_01};
    }
  }
  form {
    margin: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      padding: 12px 24px;
      width: 280px;
      border-radius: 25px;
      border: 1px solid #fff;
      &::placeholder {
        color: #fff;
      }
    }
  }
  .icon {
    position: absolute;
    right: 48px;
    font-size: 20px;
    background-color: transparent;
  }
  @media screen and (max-width: 770px) {
    input {
      display: none;
    }
    .icon {
      right: 36px;
    }
  }
`;
