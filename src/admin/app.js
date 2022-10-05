import AuthLogo from "./extensions/logo-grow.png";
import MenuLogo from "./extensions/logo-grow.png";
import HeadFavicon from "./extensions/logo-grow.ico";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    head: {
      favicon: HeadFavicon,
    },
    theme: {
      colors: {
        primary100: "#fff7ed",
        primary200: "#fed7aa",
        primary500: "#fb923c",
        primary600: "#f97316",
        primary700: "#ea580c",
        buttonPrimary500: "#fb923c",
        buttonPrimary600: "#f97316",
      },
    },
    tutorials: false,
    notifications: { release: false },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};
