"use client";

import Link from "next/link";
import Image from "next/image";
import { menuOneData as data } from "@/data/menu";
import socials from "@/data/social";
import { useThemeContext } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";

export default function OffscreenMenu() {
  const {
    openSubMenuIndex,
    setOpenSubMenuIndex,
    toggleSubMenu,
    toggleMobileMenu,
  } = useThemeContext();
  const pathName = usePathname();
  const routePath = pathName == "/" ? pathName : pathName.replace(/^\/+/g, "");

  const checkActiveMenu = (menu) => {
    if (menu.href == "#" && menu.subMenus && menu.subMenus.length > 0) {
      return menu.subMenus.find((subMenu) => subMenu.href == routePath)
        ? "active"
        : "";
    }

    return routePath == menu.href ? "active" : "";
  };

  const hideMobileMenu = (index = null) => {
    toggleMobileMenu();
    setOpenSubMenuIndex(index);
  };

  return (
    <div id="sidebar-menu" className="popup_mobile_menu">
      <div className="c-backdrop" onClick={toggleMobileMenu}></div>
      <div className="menu">
        <div className="menu__top">
          <div className="menu_header d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link className="main-logo me-lg-5 me-4" href={data.href}>
                <Image src={data.logo} alt="img" />
              </Link>
            </div>
            <div
              className="close_button d-flex align-items-center justify-content-center"
              onClick={toggleMobileMenu}
            >
              <button className="close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="menu__content mobile_menu_nav">
          <div className="d-block">
            <div className="menu-main-menu-container">
              {data.menus && data.menus.length > 0 && (
                <ul id="menu-main-menu" className="menu_list">
                  {data.menus.map((menu, index) => (
                    <li
                      key={index}
                      className={`${
                        menu.subMenus && menu.subMenus.length > 0
                          ? "menu-item-has-children"
                          : ""
                      } ${
                        openSubMenuIndex === index ? "show" : ""
                      } nav-home menu-item`}
                    >
                      <Link
                        href={
                          menu.subMenus && menu.subMenus.length > 0
                            ? "#"
                            : menu.href
                        }
                        onClick={(event) =>
                          menu.subMenus && menu.subMenus.length > 0
                            ? toggleSubMenu(index, event)
                            : hideMobileMenu(null)
                        }
                        className={`${checkActiveMenu(menu)}`}
                      >
                        {menu.name}
                      </Link>
                      {menu.subMenus && menu.subMenus.length > 0 && (
                        <ul
                          className={`sub-menu ${
                            openSubMenuIndex === index ? "open" : ""
                          }`}
                        >
                          {menu.subMenus.map((subMenu, key) => (
                            <li
                              key={key}
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2315"
                            >
                              <Link
                                href={subMenu.href}
                                className={`${
                                  routePath == subMenu.href ? "current" : ""
                                }`}
                                onClick={() => hideMobileMenu(index)}
                              >
                                {subMenu.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* <!-- social sharea area --> */}
        <div className="social_share mt-auto">
          {socials && socials.length > 0 && (
            <ul className="social_share__list d-flex align-items-center m-0 p-0">
              {socials.map((social, index) => (
                <li
                  key={index}
                  className="facebook d-flex align-items-center justify-content-center"
                >
                  <Link href={social.href} className="social_share__list_link">
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
