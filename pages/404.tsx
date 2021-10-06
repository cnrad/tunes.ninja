import styled from 'styled-components';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <Page>
                <Container>
                    <GradientText>404</GradientText>
                    <Text>Page not found :(</Text>
                    <HomeLink href="/">Return home?</HomeLink>
                </Container>
            </Page>
        </>
    );
}

const Page = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #030815;
`;

const Container = styled.div`
    width: 20rem;
    height: auto;

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 50%;
    left: 5rem;
    transform: translate(0, -50%);
`;

const GradientText = styled.div`
    color: transparent;
    font-size: 6rem;
    font-weight: bold;
    background: linear-gradient(to right, #7303c0, #f64f59, #fdeff9);
    background-clip: text;
    -webkit-background-clip: text;
    width: 19rem;
    margin-bottom: 1rem;
`;

const Text = styled.div`
    font-size: 1rem;
    color: #e6e6e6;
    margin-bottom: 0.5rem;
`;

const HomeLink = styled.a`
    color: #fff;
    text-decoration: none;
`;