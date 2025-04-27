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
      name: "Blog",
      href: "#",
      subMenus: [
        {
          name: "Blog Sidebar",
          href: "#",
          subMenus: [
            {
              name: "Right Sidebar",
              href: "blog",
            },
            {
              name: "Left Sidebar",
              href: "blog-left-sidebar",
            },
          ],
        },
        {
          name: "Blog Layout",
          href: "#",
          subMenus: [
            {
              name: "1 Column",
              href: "blog-one-column",
            },
            {
              name: "2 Column",
              href: "blog-two-column",
            },
            {
              name: "3 Column",
              href: "blog-three-column",
            },
            {
              name: "4 Column",
              href: "blog-four-column",
            },
          ],
        },
        {
          name: "Blog Details",
          href: "#",
          subMenus: [
            {
              name: "Right Sidebar",
              href: "blog-details",
            },
            {
              name: "Left Sidebar",
              href: "blog-details-left-sidebar",
            },
            {
              name: "Without Sidebar",
              href: "blog-details-without-sidebar",
            },
          ],
        },
      ],
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
