import logo from "@/../public/assets/images/logo.png";

const menuOneData = {
  logo: logo,
  href: "/",
  btnText: "Login",
  registerText: "Register",
  logoutText: "Logout",
  menus: [
    {
      name: "Home",
      href: "/",

    },
    {
      name: "PLAYLIST",
      href: "playlist",
    },
    {
      name: "Account",
      href: "#",
      subMenus: [
        {
          name: "Login",
          href: "login",
        },
        {
          name: "Register",
          href: "register",
        },
      ],
    },
  ],
};

const menuTwoData = {
  primaryMenus: [
    { name: "Home", href: "/" },
    { name: "Search", href: "category" },
    { name: "Movies", href: "movie-list" },
    { name: "Add To Playlist", href: "playlist" },
    { name: "Tv Showes", href: "pagination-one" },
    { name: "Games", href: "pagination-two" },
    { name: "Sports", href: "pagination-one" },
  ],
};

export { menuOneData, menuTwoData };
