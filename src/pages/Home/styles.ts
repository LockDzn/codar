import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`
export const Header = styled.header`
  h1 {
    font-size: 54px;
    color: #d6000d;
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
    font-style: italic;
    span {
      color: #000;
      font-style: normal;
    }
  }
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    padding: 0 4rem;
    font-weight: bold;
    a {
      text-decoration: none;
      color: #000;
    }
    .login {
      display: none;
    }
  }
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    margin-top: 2rem;
    width: 100vw;
    h1 {
      font-size: 40px;
      margin-top: 0;
    }
    .menu {
      font-size: 20px;
      font-weight: normal;
      padding: 0;
      li {
        margin-right: 2rem;
      }
      .login {
        margin-right: 0;
        display: block;
        a {
          background: #d6000d;
          padding: 0.6rem 2.8rem;
          border-radius: 0.8rem;
          color: #fff;
        }
      }
    }
  }
`
export const Main = styled.main`
  font-weight: normal;
`

export const Presentation = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .videocall {
    width: 230px;
    margin-bottom: 1rem;
  }
  p {
    font-weight: bold;
    font-size: 1rem;
  }
  h2 {
    font-size: 2.4rem;
    color: #d6000d;
  }
  button {
    padding: 1rem 2.4rem;
    font-size: 1.1rem;
    color: #fff;
    background: #d6000d;
    border: none;
    border-radius: 0.4rem;
    margin-top: 1rem;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    .videocall {
      width: 290px;
    }
    p {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 3rem;
    }
    button {
      font-weight: bold;
    }
  }
`

export const Information = styled.section`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .coding {
    width: 180px;
    margin-bottom: 2rem;
  }
  ul {
    font-size: 1.1rem;
    /* list-style: url(); */
    li {
      margin-bottom: 0.8rem;
    }
  }

  .contact {
    font-size: 1.2rem;
    font-weight: bold;

    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      input {
        padding: 0.8rem 1.2rem;
        font-size: 1.2rem;
        background: #bdbdbd;
        border: none;
        border-radius: 0.4rem;
        margin: 1rem 0;
      }
      button {
        padding: 1rem 2.4rem;
        font-size: 1.1rem;
        font-weight: bold;
        color: #fff;
        background: #d6000d;
        border: none;
        border-radius: 0.4rem;
      }
    }
  }
  @media screen and (min-width: 600px) {
    .header {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      width: 100%;
      padding: 0 5rem;
      img {
        width: 320px;
      }
      ul {
        margin-top: 2rem;
      }
    }
    .contact {
      p {
        text-align: left;
        align-self: flex-start;
      }
      .form {
        width: 40rem;
        flex-direction: row;
        justify-content: flex-start;
        input {
          width: 30%;
          margin-right: 1rem;
        }
        button {
          width: 32%;
          padding: 1rem 1rem;
        }
      }
    }
  }
`

export const Feedbacks = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const Footer = styled.footer`
  background: #000;
  color: #fff;
  padding: 1rem 3rem;
  .header {
    text-align: center;
    margin-bottom: 2rem;
    h1 {
      font-style: italic;
      span {
        font-style: normal;
      }
    }
  }
  ul {
    list-style: none;
    li {
      margin-bottom: 1rem;
      h2 {
        margin-bottom: 0.4rem;
      }
      p {
        font-size: 0.9rem;
        color: #bbbaba;
      }
      .email {
        text-decoration: underline;
      }
      img {
        width: 28px;
        margin-right: 1rem;
      }
    }
  }
`
