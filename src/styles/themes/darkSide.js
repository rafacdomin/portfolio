import { colors } from 'styles/colors';
import menuSVGDark from 'assets/dark/menu.svg';
import logoSVGDark from 'assets/dark/logo.svg';
import profilePicDark from 'assets/dark/profile.png';
import deathStar from 'assets/dark/death_star.svg';
import trooper from 'assets/dark/trooper.svg';
import vader from 'assets/dark/vader.svg';
import empire from 'assets/dark/empire.svg';

const darkSide = {
  name: 'dark',
  colors: {
    primary: colors.red,
    secundary: colors.c3po,
    highlight: colors.red,
    text: colors.stormtrooper,
    background: colors.vader,
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
  },
};

export default darkSide;
