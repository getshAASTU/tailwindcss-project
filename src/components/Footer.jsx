import React from "react";
import { logo } from "../assets";
import styles from "../styles";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="flex flex-col ss:flex-row py-16 justify-between border-b border-b-white">
        <div className="max-w-[370px] py">
          <img src={logo} alt="logo" />
          <p className={`${styles.paragraph}`}>
            A new way to make the payments easy, reliable, and secure.
          </p>
        </div>
        {footerLinks.map((footerLink) => (
          <div className="flex flex-col flex-1 py-6 justify-center border-white">
            <h4
              key={footerLink.title}
              className={`text-white font-normal font-poppins text-[18px] xs:leading-[56.8px] leading-[46.8px]`}
            >
              {footerLink.title}
            </h4>
            <ul className="style-none">
              {footerLink.links.map((link) => (
                <li
                  className={`font-poppins font-normal text-dimWhite text-[14px] leading-[30.8px] hover:text-dodgersBlue`}
                  key={link.link}
                >
                  <a href={link.link} target="_blank">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between py-5 items-center">
        <p className={`${styles.paragraph}`}>
          CopyRight &#169; 2021 HooBank. All Rights Reserved{" "}
        </p>
        <div
          className={`${styles.flexCenter} flex-row items-center justify-end `}
        >
          {socialMedia.map(({ id, icon, link }) => (
            <a key={id} href={link} className="px-3">
              <img src={icon} alt={id} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
