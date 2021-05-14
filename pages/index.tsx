import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Arrow } from "../Icons";
import Head from "next/head";

export default function Home() {
  const pageLoad = {
    init: {
      opacity: 0,
    },
    load: {
      opacity: 1,

      transition: {
        duration: 0.25,
        ease: "easeIn",
        staggerChildren: 0.15,
      },
    },
  };

  const MainChildren = {
    init: {
      opacity: 0,
      x: -25,
    },
    load: {
      opacity: 1,
      x: 0,
    },
  };

  const imageArr = ["/Example01.png", "/Example02.png"];

  const [indexImg, setIndexImg] = useState(0);

  setTimeout(() => {
    setIndexImg(indexImg ? 0 : 1);
  }, 5000);

  useEffect(() => {
    const images = document.getElementById("example-images");
    const { x, y, width, height } = images.getBoundingClientRect();
    const centerPoint = { x: x + width / 2, y: y + height / 2 };

    window.addEventListener("mousemove", (e) => {
      const degreeX = (e.clientY - centerPoint.y) * -0.01;
      const degreeY = (e.clientX - centerPoint.x) * 0.01;

      images.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
    });
  }, []);

  return (
    <>
      <Head>
        <title>tunes.ninja</title>
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}

        <meta name="title" content="tunes.ninja" />
        <meta
          name="description"
          content="A Discord bot to find your favorite songs on any service."
        />
        <meta
          name="keywords"
          content="ninja, tunes, tunes.ninja, ninja.tunes, ninjatunes, tunesninja, tunes.ninja bot, invite, bot, discord bot"
        />
        <meta name="robots" content="index, follow" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tunes.ninja/" />
        <meta property="og:title" content="tunes.ninja" />
        <meta
          property="og:description"
          content="A Discord bot to find your favorite songs on any service."
        />
        <meta property="og:image" content="/meta.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tunes.ninja/" />
        <meta property="twitter:title" content="tunes.ninja" />
        <meta
          property="twitter:description"
          content="A Discord bot to find your favorite songs on any service."
        />
        <meta property="twitter:image" content="/meta.png" />
      </Head>

      <Page>
        <Main>
          <HeaderBox initial="init" animate="load" variants={pageLoad}>
            <Logo variants={MainChildren} src="/lilguy.png" />
            <Title variants={MainChildren}>
              tunes.<span style={{ color: "#972edd" }}>ninja</span>
            </Title>
            <Description variants={MainChildren}>
              Find your favorite songs on any service
            </Description>
            <Invite
              href="https://discord.com/oauth2/authorize?scope=bot%20applications.commands&client_id=840585628408217610&permissions=19456"
              whileHover={{
                color: "#030815",
                backgroundColor: "#fff",
                transition: { duration: 0.15, ease: [0, 0.25, 0.75, 1] },
              }}
              variants={MainChildren}
            >
              add to discord
              <Arrow />
            </Invite>
          </HeaderBox>
          <ImageContainer id="example-images">
            <AnimatePresence>
              <ExampleImg
                key={imageArr[indexImg]}
                src={imageArr[indexImg]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </ImageContainer>
        </Main>
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

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 70%;
  height: auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 1500px) {
    width: 90%;
    height: auto;
  }
`;

const HeaderBox = styled(motion.div)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  width: 25rem;
  height: auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 1500px) {
    width: 100%;
    height: auto;
  }
`;

const Logo = styled(motion.img)`
  width: 7rem;
  height: 7rem;
  margin-bottom: 1rem;

  @media (max-width: 1500px) {
    margin-left: calc(50% - 3.5rem);
  }
`;

const Title = styled(motion.div)`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;

  @media (max-width: 1500px) {
    text-align: center;
    font-size: 2.75rem;
  }
`;

const Description = styled(motion.div)`
  color: #d9d9d9;
  font-size: 1rem;
  text-align: left;
  width: 100%;
  margin-bottom: 2.5rem;

  @media (max-width: 1500px) {
    text-align: center;
  }
`;

const Invite = styled(motion.a)`
  text-decoration: none;
  color: #fff;
  user-select: none;
  width: 9rem;
  padding: 0.65rem 1.25rem 0.75rem 1.25rem;

  text-align: center;
  border: solid 1px #fff;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1500px) {
    margin-left: calc(50% - 6rem);
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: calc(50% - 9rem);
  left: calc(100% - 28rem);

  width: 32rem;
  height: 18rem;

  @media (max-width: 1500px) {
    display: none;
  }
`;

const ExampleImg = styled(motion.img)`
  position: absolute;

  width: 32rem;
  height: 18rem;

  border: solid 0.5px #313642;
  border-radius: 0.5rem;
  filter: contrast(110%) drop-shadow(5px 10px 0.75rem #000);
  pointer-events: none;
`;
