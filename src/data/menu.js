import logo from "@/../public/assets/images/logo.jpeg";

const menuOneDataUser = {
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
      name: "MY WATCHLIST",
      href: "playlist",
    },
    {
      name: "Account",
      href: "#",
      subMenus: [
        {
          name: "Logout",
          href: "logout",
        },
      ],
    },
  ],
};

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

export { menuOneData, menuOneDataUser, menuTwoData };
