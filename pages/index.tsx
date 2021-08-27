import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head";
import { RecordPlayerIcon, SpotifyIcon, GearsIcon, PlaylistIcon, DownArrow } from "../src/Icons";

export default function Home() {

    const { scrollYProgress } = useViewportScroll()

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
        }
    };

//   const imageArr = ["/spotify.png", "/am.png"];

//   const [indexImg, setIndexImg] = useState(0);

//   setTimeout(() => {
//     setIndexImg(indexImg ? 0 : 1);
//   }, 5000);

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
          content="Supercharged Discord bot bridging the gap between music streaming services. Create synced playlists through Discord, get links to all platforms a song is on, and more."
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
          content="Supercharged Discord bot bridging the gap between music streaming services. Create synced playlists through Discord, get links to all platforms a song is on, and more."
        />
        <meta property="og:image" content="/meta.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tunes.ninja/" />
        <meta property="twitter:title" content="tunes.ninja" />
        <meta
          property="twitter:description"
          content="Supercharged Discord bot bridging the gap between music streaming services. Create synced playlists through Discord, get links to all platforms a song is on, and more."
        />
        <meta property="twitter:image" content="/meta.png" />
      </Head>

      <Page>
        <Top>
          <HeaderBox initial="init" animate="load" variants={pageLoad}>
            <Title variants={MainChildren}>
              tunes.<span style={{ filter: "drop-shadow(0 0 5px #fff)" }}>ninja</span>
            </Title>
            <Description variants={MainChildren}>
                A supercharged Discord bot bridging the gap between music streaming services. 
            </Description>

            <LinksBox>
                <Invite
                  href="https://tunes.ninja/invite"
                  variants={MainChildren}
                >
                  add to discord
                </Invite>

                <Invite
                  href="https://tunes.ninja/vote"
                  variants={MainChildren}
                >
                  vote on top.gg
                </Invite>
            </LinksBox>
          </HeaderBox>

          <ImageContainer id="example-images">
            <AnimatePresence>
              <ExampleImg
                // key={imageArr[indexImg]}
                src="https://cdn.discordapp.com/attachments/840639176361771071/879195553920061470/image.psd.png"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </ImageContainer>
        </Top>
        <ScrollDown>
            <DownArrow fill="#E6E6E6" style={{marginRight: "1rem"}} />
            Scroll Down
            <DownArrow fill="#E6E6E6" style={{marginLeft: "1rem"}} />
        </ScrollDown>

        <ContentSection>
            <FeatureGrid>
                <FeatureRow>
                    <FeatureBox>
                        <RecordPlayerIcon fill="#BE35FF" />
                        <FeatureText>Find the same song on many different streaming services.</FeatureText>
                    </FeatureBox>
                    <FeatureBox>
                        <SpotifyIcon fill="#1DB954" />
                        <FeatureText>Integrated with Spotify and Apple Music so you never miss a beat.</FeatureText>
                    </FeatureBox>
                </FeatureRow>
                <FeatureRow>
                    <FeatureBox>
                        <PlaylistIcon fill="#4478FF" />
                        <FeatureText>Create and customize playlists, directly from Discord.</FeatureText>
                    </FeatureBox>
                    <FeatureBox>
                        <GearsIcon fill="#FA00FF" />
                        <FeatureText>Missing something? It’s <motion.a href="https://github.com/jacc/tunes.ninja" 
                            style={{color: "#FB43FF", textDecoration: "none"}}
                            whileHover={{color: "#fff" }}
                            transition={{duration: 0.25, ease: "easeInOut"}}>
                                open source
                            </motion.a>, feel free to contribute.</FeatureText>
                    </FeatureBox>
                </FeatureRow>
            </FeatureGrid>
            <Stats>
                <p>
                    <motion.span 
                    initial={{opacity: 0}}
                    animate={{color: "#FB43FF", opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut"}}>
                        105
                    </motion.span> servers
                </p>
                <p>
                    <motion.span 
                    initial={{opacity: 0}}
                    animate={{color: "#8000FF", opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut"}}>
                        263
                    </motion.span> active users
                </p>
                <p>
                    <motion.span 
                    initial={{opacity: 0}}
                    animate={{color: "#FF00A8", opacity: 1}}
                    transition={{duration: 1, ease: "easeInOut"}}>
                        2685
                    </motion.span> songs searched
                </p>
            </Stats>

            <Footer>

            </Footer>
        </ContentSection>
      </Page>
    </>
  );
}

const Page = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: auto;

    background: url('https://cdn.discordapp.com/attachments/840639176361771071/879170608741621810/unknown.png');
    background-size: cover;
`;

const Top = styled.div`
    position: relative;
    inset: 0;
    width: 80%;
    height: 100vh;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    @media (max-width: 1500px) {
        width: 90%;
        height: auto;
    }
`;

const HeaderBox = styled(motion.div)`
    width: 30rem;
    height: auto;

    display: flex;
    flex-direction: column;

    @media (max-width: 1500px) {
        width: 100%;
        height: auto;
    }
`;

const Title = styled(motion.div)`
    color: #fff;
    font-size: 3.25rem;
    margin-bottom: 1.5rem;
    text-align: left;
    width: 100%;

    @media (max-width: 1500px) {
        text-align: center;
        font-size: 2.75rem;
    }
`;

const Description = styled(motion.div)`
    color: #fff;
    font-size: 1.15rem;
    text-align: left;
    width: 100%;
    margin-bottom: 3.5rem;

    @media (max-width: 1500px) {
        text-align: center;
    }
`;

const LinksBox = styled(motion.div)`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`

const Invite = styled(motion.a)`
    position: sticky;
    width: auto;
    text-decoration: none;
    color: #E0E0E0;
    user-select: none;
    padding: 0.25rem 0;
    text-align: center;
    margin-right: 2rem;
    transition: all 0.15s ease-in-out;

    &:hover {
        color: #fff;
        filter: drop-shadow(0 0 3px #fff);
    }

    &:before {
        content: "";
        position: absolute;
        border-radius: 5px;
        width: 0;
        height: 2px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: #FF3DEC;
        filter: drop-shadow(0 0 3px rgba(255, 60, 177, 0.5));
        visibility: hidden;
        transition: all 0.3s ease-in-out;
    }

    &:hover:before {
        visibility: visible;
        width: 100%;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 32rem;
    height: 18rem;

    @media (max-width: 1500px) {
        display: none;
    }
`;

const ExampleImg = styled(motion.img)`
    position: absolute;
    width: 35rem;
    height: auto;
    padding: 1rem;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    pointer-events: none;
`;

const ScrollDown = styled(motion.p)`
    position: absolute;
    top: 92vh;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    font-size: 0.85rem;
    color: #e6e6e6;
    margin-bottom: 2.25rem;
`
const ContentSection = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 50rem;
    background: #270035;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

const FeatureGrid = styled(motion.div)`
    margin-top: 5rem;
    width: auto;
    height: auto;
`

const FeatureRow = styled(motion.div)`
    margin-top: 2rem;
    width: 40rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    color: #fff;
`

const FeatureBox = styled(motion.div)`
    width: inherit;

    display: flex;
    flex-direction: row;

    padding: 0 3rem;
    color: inherit;
`

const FeatureText = styled.div`
    margin-left: 2rem;
    display: inline;
    width: 17rem;
    height: inhreit;
    font-size: 1.15rem;
    line-height: 1.25;
`

//change features to display grid later

const Stats = styled(motion.div)`
    padding: 5rem 0;
    color: #E6E6E6;
    width: auto;
    height: auto;
    line-height: 1.5rem; 
    font-size: 1.75rem;
    text-align: center;

    & > p {
        margin-top: 1.5rem;
    }
`

const Footer = styled(motion.div)`
    width: 100%;
    height: auto;
    padding: 5rem 0;
    background: #22002E;
`