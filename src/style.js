import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 85%;
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
