import React, { useState, useEffect } from 'react';

 

const Header = (props) => {
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        " mejor"
    )
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
          setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
          }, 40)
        }
        else{setTimeout(() => {
            setFullText("")
            setText("")
            setIndex(0)
        },1000)}
      }, [index,text,fullText])

    return (
        <header className='holder' >
            
            <h2 >A Tamo junto no diabetes tem como objetivo a gestao de nossos pacientes diabéticos ser mais{text}</h2>
            
        </header>
    );
}
export default Header;