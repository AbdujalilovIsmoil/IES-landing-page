import {
  HeaderDown,
  HeaderLogo,
  HeaderPhone,
  HeaderGlasses,
} from "../../assets/images/svg";
import {
  HeaderTwitter,
  HeaderFacebook,
  HeaderTelegram,
  HeaderInstagram,
} from "../../assets/images/svg/header";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="header-top__box">
            <img
              alt="IES"
              width="75"
              height="60"
              src={HeaderLogo}
              className="header-top__box-intro"
            />
            <h2 className="header-top__box-title">
              Акционерное обшество Тепловые электро станции
            </h2>
          </div>
          <div className="header-top__box">
            <div className="header-top__item">
              <img
                alt="glasses-icon"
                src={HeaderGlasses}
                className="header-top__item-glasess"
              />
              <h3 className="header-top__item-about">Для слабовидящих</h3>
            </div>
            <div className="header-top__item">
              <h3 className="header-top__item-about">Русский</h3>
              <img
                alt="down-icon"
                src={HeaderDown}
                className="header-top__item-glasess"
              />
            </div>
            <a className="header-top__item" href="tel:+998712002900">
              <img
                alt="phone-icon"
                src={HeaderPhone}
                className="header-top__item-glasess"
              />
              <div className="header-top__phone">
                <h2 className="header-top__phone-heading">Телефон доверия</h2>
                <h3 className="header-top__item-about">+998 71 200 29 00</h3>
              </div>
            </a>
            <ul className="header-top__list">
              <li className="header-top__item">
                <a
                  target="_blank"
                  href="https://twitter.com/IESResearch?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                >
                  <img
                    width="38.4"
                    height="38.4"
                    alt="twitter-logo"
                    src={HeaderTwitter}
                  />
                </a>
              </li>
              <li className="header-top__item">
                <a href="https://www.facebook.com/IESVE" target="_blank">
                  <img
                    width="38.4"
                    height="38.4"
                    alt="facebook-logo"
                    src={HeaderFacebook}
                  />
                </a>
              </li>
              <li className="header-top__item">
                <a
                  target="_blank"
                  href="https://www.instagram.com/iesbusinessschool"
                >
                  <img
                    width="38.4"
                    height="38.4"
                    alt="instagram-logo"
                    src={HeaderInstagram}
                  />
                </a>
              </li>
              <li className="header-top__item">
                <a target="_blank" href="https://t.me/toshkenties">
                  <img
                    width="38.4"
                    height="38.4"
                    alt="telegram-logo"
                    src={HeaderTelegram}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
