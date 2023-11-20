import React from 'react'
import { SearchBarContainer, Search } from './styles/SearchBar.styled'

function SearchBar() {
        return (
            <SearchBarContainer>
                <Search input="text" placeholder="Search" />
            </SearchBarContainer>
        )
}

export default SearchBar