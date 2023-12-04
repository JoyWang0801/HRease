import React from "react"
import { AlphaHeader } from "./styles/AlphabetBar.styled"

function AlphabetHeader( {letter} ) {
    return(
        <AlphaHeader>{ letter }</AlphaHeader>
    )
}

export default AlphabetHeader