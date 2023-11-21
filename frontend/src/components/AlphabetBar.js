import React, { useState } from "react"
import { AlphabetContainer, Letter } from "./styles/AlphabetBar.styled"

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function AlphabetBar({onLetterClick}) {

    const handleSelection= (letter) => {
        console.log(`Clicked ${letter}`);
        onLetterClick(letter);
    }

    return (
        <AlphabetContainer>
            {alphabet.map((letter, i) => (
                <Letter key={i} onClick={() => handleSelection(letter)}> {letter} </Letter>
            ))}
        </AlphabetContainer>
    )
}

export default AlphabetBar