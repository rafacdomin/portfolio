import { colors } from 'styles/colors';
import menuSVGDark from 'assets/dark/menu.svg';
import logoSVGDark from 'assets/dark/logo.svg';
import profilePicDark from 'assets/dark/profile.png';
import deathStar from 'assets/dark/death_star.svg';
import trooper from 'assets/dark/trooper.svg';
import vader from 'assets/dark/vader.svg';
import empire from 'assets/dark/empire.svg';
import redSaber from 'assets/dark/red_saber.svg';
import linkedin from 'assets/dark/linkedin.svg';
import github from 'assets/dark/github.svg';
import dev from 'assets/dark/dev.svg';
import externalLink from 'assets/dark/external_link.svg';

const darkSide = {
  name: 'dark',
  colors: {
    primary: colors.red,
    secundary: colors.c3po,
    tertiary: colors.jabba,
    quaternary: colors.coruscant,
    highlight: colors.red,
    text: colors.stormtrooper,
    background: colors.vader,
    card: colors.dark,
    header: colors.dark,
    office: colors.c3po,
  },
  images: {
    menuSVG: menuSVGDark,
    logoSVG: logoSVGDark,
    profilePic: profilePicDark,
    techsSVG: deathStar,
    projectsSVG: trooper,
    postsSVG: vader,
    contactSVG: empire,
    saberLeft: redSaber,
    saberRight: redSaber,
    linkedinSVG: linkedin,
    githubSVG: github,
    devSVG: dev,
    externalLinkSVG: externalLink,
  },
};

export default darkSide;
