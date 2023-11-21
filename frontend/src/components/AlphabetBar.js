import React from "react"
import { AlphabetContainer, Letter } from "./styles/AlphabetBar.styled"

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function AlphabetBar() {
    return (
        <AlphabetContainer>
            {alphabet.map((letter, i) => (
                <Letter key={i}>{letter}</Letter>
            ))}
        </AlphabetContainer>
    )
}

export default AlphabetBar