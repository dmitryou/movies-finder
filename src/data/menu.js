import logo from "@/../public/assets/images/logo.svg";

const menuOneData = {
  logo: logo,
  href: "/",
  btnText: "Subscribe Now",
  menus: [
    {
      name: "Home",
      href: "#",
      subMenus: [
        {
          name: "Home One",
          href: "/",
        },
        {
          name: "Home Two",
          href: "home-two",
        },
      ],
    },
    {
      name: "Movies",
      href: "#",
      subMenus: [
        {
          name: "Movie List",
          href: "movie-list",
        },
        {
          name: "Movie Details",
          href: "movie-details",
        },
        {
          name: "Movie Download",
          href: "movie-download",
        },
        {
          name: "Playlist",
          href: "playlist",
        },
        {
          name: "Category",
          href: "#",
          subMenus: [
            {
              name: "Category",
              href: "category",
            },
            {
              name: "Category Grid",
              href: "category-grid",
            },
            {
              name: "Category List",
              href: "category-list",
            },
          ],
        },
        {
          name: "Pagination",
          href: "#",
          subMenus: [
            {
              name: "Pagination",
              href: "pagination-one",
            },
            {
              name: "Load More",
              href: "pagination-two",
            },
          ],
        },
        {
          name: "Creative Genres",
          href: "creative-genres",
        },
        {
          name: "Tags",
          href: "tags",
        },
      ],
    },
    {
      name: "Pages",
      href: "#",
      subMenus: [
        {
          name: "About Us",
          href: "about",
        },
        {
          name: "Artist",
          href: "artist",
        },
        {
          name: "Privacy Policy",
          href: "privacy-policy",
        },
        {
          name: "Pricing",
          href: "pricing",
        },
        {
          name: "404",
          href: "not-found",
        },
        {
          name: "Coming Soon",
          href: "coming-soon",
        },
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
      name: "FAQ",
      href: "faq",
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
