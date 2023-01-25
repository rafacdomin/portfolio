import { colors } from 'styles/colors';
import menuSVGBright from 'assets/bright/menu.svg';
import logoSVGBright from 'assets/bright/logo.svg';
import profilePicBright from 'assets/bright/profile.png';
import milleniumFalcon from 'assets/bright/millenium_falcon.svg';
import c3po from 'assets/bright/c3po.svg';
import chewie from 'assets/bright/chewie.svg';

const brightSide = {
  name: 'bright',
  colors: {
    primary: colors.blue,
    secundary: colors.rebels,
    highlight: colors.green,
    text: colors.black,
    background: colors.white,
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
  },
};

export default brightSide;
