import { colors } from 'styles/colors';
import menuSVGBright from 'assets/bright/menu.svg';
import logoSVGBright from 'assets/bright/logo.svg';
import profilePicBright from 'assets/bright/profile.png';
import milleniumFalcon from 'assets/bright/millenium_falcon.svg';
import c3po from 'assets/bright/c3po.svg';
import chewie from 'assets/bright/chewie.svg';
import rebels from 'assets/bright/rebels.svg';
import blueSaber from 'assets/bright/blue_saber.svg';
import greenSaber from 'assets/bright/green_saber.svg';
import linkedin from 'assets/bright/linkedin.svg';
import github from 'assets/bright/github.svg';
import dev from 'assets/bright/dev.svg';
import externalLink from 'assets/bright/external_link.svg';

const brightSide = {
  name: 'bright',
  colors: {
    primary: colors.blue,
    secundary: colors.rebels,
    tertiary: colors.green,
    quaternary: colors.windu,
    highlight: colors.green,
    text: colors.black,
    background: colors.background,
    card: colors.white,
    header: colors.white,
    office: colors.white,
  },
  images: {
    menuSVG: menuSVGBright,
    logoSVG: logoSVGBright,
    profilePic: profilePicBright,
    techsSVG: milleniumFalcon,
    projectsSVG: c3po,
    postsSVG: chewie,
    contactSVG: rebels,
    saberLeft: blueSaber,
    saberRight: greenSaber,
    linkedinSVG: linkedin,
    githubSVG: github,
    devSVG: dev,
    externalLinkSVG: externalLink,
  },
};

export default brightSide;
