import React from 'react'
import { SearchBarContainer, Search } from './styles/SearchBar.styled'

function SearchBar({handleSearchChange}) {
        return (
            <SearchBarContainer>
                <Search input="text" placeholder="Search" onChange={handleSearchChange}/>
            </SearchBarContainer>
        )
}

export default SearchBar