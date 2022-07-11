import React from 'react';
import styled from 'styled-components';

interface SearchRecentListInputProps {
  recentKeyword: string[];
}

const SearchRecentInputList = ({
  recentKeyword,
}: SearchRecentListInputProps) => {
  if (recentKeyword.length === 0) {
    return <RecentList>최근 검색된 기록이 없습니다.</RecentList>;
  }
  return (
    <>
      {recentKeyword.map((keyword: string, index: number) => (
        <RecentList key={index}>{keyword}</RecentList>
      ))}
    </>
  );
};

const RecentList = styled.li`
  padding: 6px;
`;

export default SearchRecentInputList;
