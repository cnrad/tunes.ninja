import styled from "styled-components";

export default function Home() {

  return (
    <Page>
        <Container>
            <GradientText>404</GradientText>
            <Text>Page not found :(</Text>
        </Container>
    </Page>
  )
}

const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #030815;
`

const Container = styled.div`
    width: 20rem;
    height: auto;

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 50%;
    left: 5rem;
    transform: translate(0, -50%);

`

const GradientText = styled.div`
    color: transparent;
    font-size: 8rem;
    font-weight: bold;
    letter-spacing: 0.8rem;
    background: linear-gradient(to right, #7303c0, #f64f59, #fdeff9);
    background-clip: text;
    width: 19rem;
    margin-bottom: 2rem;
`

const Text = styled.div`
    font-size: 1.75rem;
    color: #ccc;
`
