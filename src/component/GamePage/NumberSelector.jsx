import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = () => {
    const numArray = [1,2,3,4,5,6]

    const [selectNum, setSelectNum] = useState()


  return (
    <>
    <Num>
      {
        numArray.map( (value, i) => (
            <StyleButton 
                isSelected = {value === selectNum}
            key = {i} 
            onClick={ () => setSelectNum(value)}
             > {value}</StyleButton>
        )
           
        
        )
      }
    </Num>
    </>
  )
}

export default NumberSelector;

const Num = styled.div`
  display: flex;
  gap: 10px;
`;

const StyleButton = styled.button`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  font-size: 25px;
  font-weight: 600;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: gray;
    color: white;
  }
`;






