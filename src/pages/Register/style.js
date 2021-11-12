import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 100px;
    margin-left: 120px;
  }
`

export const Ul = styled.ul`
  background: #e6e6e6;
  width: 90%;
  height: 350px;
  padding-top: 50px;
  border-radius: 13px;
  list-style: none;
  margin-left: 17px;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 700px) {
    width: 100%;
    margin-left: -200px;
  }
`
export const Input = styled.input`
  height: 45px;
  width: 390px;
  border: 1px solid #a6a6a6;
  border-radius: 10px;
  background: #e6ffe6;
  font-size: 16px;
  padding-left: 15px;

  @media screen and (max-width: 700px) {
    width: 224px;
  }
`
export const H1 = styled.h1`
  @media screen and (max-width: 700px) {
    font-size: 24px;
    width: 400px;
    margin-left: 170px;
  }
`
