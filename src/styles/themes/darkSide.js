import { colors } from 'styles/colors';
import menuSVGDark from 'assets/dark/menu.svg';
import logoSVGDark from 'assets/dark/logo.svg';
import profilePicDark from 'assets/dark/profile.png';
import deathStar from 'assets/dark/death_star.svg';

const darkSide = {
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
  },
};

export default darkSide;
