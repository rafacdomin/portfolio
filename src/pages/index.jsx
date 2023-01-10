import { useTheme } from "styled-components";
import Image from "next/image";

import { Header } from "components";
import { Main } from "styles/pages/home";

export default function Home() {
  const { images: { profilePic } } = useTheme();

  return (
    <>
      <Header/>
      <Main>
        <span>
          <p>
            Hello There. <br />
            {"I'm Rafael,"} <br />
            FrontEnd Developer
          </p>
        </span>
        <Image src={profilePic} alt="profile" priority/>
      </Main>
    </>
  );
}
