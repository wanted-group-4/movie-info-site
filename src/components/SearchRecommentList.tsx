import React from 'react'
import styled from 'styled-components'

interface SearchReacommendListProps {
  searchInput: string
}

const SearchRecommendList = ({searchInput}: SearchReacommendListProps) => {
  const testArray = [1, 2, 3,];

  return (
    <SearchList>
      {testArray.map((keyword) => (
            <RecommendKeywordWrapper key={keyword}>
              <RecommendKeyword>{searchInput}</RecommendKeyword>
            </RecommendKeywordWrapper>
          ))}
    </SearchList>
  )
}

const SearchList = styled.div`
  width: 100%;
  margin: 0 auto;
  background: ${({theme}) => theme.color.gray_02};
  border-radius: 20px;
`;

const RecommendKeywordWrapper = styled.li`
  padding: 7px;
`;

const RecommendKeyword = styled.span`
  color: ${({theme}) => theme.color.secondary_02}
`;

export default SearchRecommendList
