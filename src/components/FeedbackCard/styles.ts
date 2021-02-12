import styled from 'styled-components'

export const Container = styled.div`
  background: #c3c3c3;
  padding: 1rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.8rem;

  .photo {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: #d6000d;
  }
  .info {
    width: 70%;
    .client {
      margin-top: 0.4rem;
      font-weight: bold;
      font-size: 1.2rem;
    }
    .company {
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
  @media screen and (min-width: 600px) {
    width: 40%;
    margin-right: 2rem;
  }
`
