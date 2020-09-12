import styled from 'styled-components';

export const ButtonStyled = styled.button`
    width: 30%;
    margin: auto;
    margin-top: 10px;
    background: white;
    border-radius: 5px;
    border: 5px solid white;
    color: black;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .2s;

    &:hover,
    &:focus {
    opacity: .6;
    }
`

export const Container = styled.div`
  text-align: center;
  margin-left: 400px;
  margin-right: 400px;
  padding: 10px;
  align-content: center;
`