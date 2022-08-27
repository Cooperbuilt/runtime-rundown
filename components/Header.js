import Image from 'next/image';
import styles from '../styles/Header.module.css';
import SpotifyLogo from '../public/spotify-logo.png';
import AppleLogo from '../public/apple-podcasts-logo.png';
import PocketLogo from '../public/pocket-casts-logo.png';
import GithubLogo from '../public/gh-logo.png';

const Header = () => {
  return (
    <nav className={styles.Header}>
      <ul className={styles.HeaderLinks}>
        <li className={styles.HeaderLink}>
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.HeaderLink}
            href="https://open.spotify.com/show/5mGILWYFVP2IueThL9HgVP?si=0f698b8ec82e4aba"
          >
            <Image
              src={SpotifyLogo}
              alt="Spotify Logo"
              width="31"
              height="31"
            />
          </a>
        </li>
        <li className={styles.HeaderLink}>
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.HeaderLink}
            href="https://podcasts.apple.com/us/podcast/runtime-rundown/id1635132420"
          >
            <Image
              src={AppleLogo}
              alt="Apple Podcasts Logo"
              width="28"
              height="28"
            />
          </a>
        </li>
        <li className={styles.HeaderLink}>
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.HeaderLink}
            href="https://pca.st/9ifdo34s"
          >
            <Image
              src={PocketLogo}
              alt="PocketCasts Logo"
              width="28"
              height="28"
            />
          </a>
        </li>
        <li className={styles.HeaderLink}>
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.HeaderLink}
            href="https://anchor.fm/s/a82ae100/podcast/rss"
          >
            <svg
              width="28"
              height="28"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
            >
              <g fill="none" fillRule="evenodd">
                <rect fill="#FE8A4C" width="28" height="28" rx="6"></rect>
                <path
                  d="M6.822 18.5361504c.74088889 0 1.36666667.2645781 1.87755556.7932873.51866666.5139607.77777777 1.1398755.77777777 1.877074 0 .7371984-.25911111 1.3666886-.77777777 1.888247-.51088889.5139608-1.13666667.7707177-1.87755556.7707177-.73355556 0-1.35555556-.2567569-1.86666667-.7707177-.51088889-.5215584-.76644444-1.1508251-.76644444-1.888247 0-.737422.25555555-1.3633368.76644444-1.877074.51133334-.5289327 1.13311111-.7932873 1.86666667-.7932873zm-2.54422222-6.9831622c.17022222-.1937408.38488889-.3054714.644-.3351918v-.011173h1.08888889c2.97044444 0 5.51133333 1.0576418 7.62244443 3.1731489 2.1111111 2.1003117 3.1775556 4.6441939 3.2 7.6309762v1.0614406h-.0113333c-.0222222.2382097-.1184445.4431236-.2891111.6145183-.1702223.1713947-.3775556.2719523-.622.3018961v.011173h-1.8555556c-.2595555-.0073742-.4853333-.0969821-.678-.2681534-.1926667-.1861432-.3037778-.4058055-.3333333-.6592105h-.0113334v-1.0614407h.0113334c-.0222222-1.9291404-.7148889-3.5791778-2.0777778-4.9494419-1.38533333-1.3633367-3.03733333-2.0446699-4.95577778-2.0446699h-.04355555v.0111731H4.92177778v-.0111731c-.23688889-.0299438-.44444445-.126479-.622-.2904995-.17066667-.1713947-.26311111-.379884-.27777778-.6256913H4v-1.8661244c.01466667-.2607792.10711111-.4880393.27777778-.6815567zM4 6.89382242v-1.877074c.01466667-.26077921.10711111-.48803924.27777778-.68155663.17022222-.19374086.38488889-.30547145.644-.33519179h1.08888889C10.9515556 4 15.1813333 5.75774572 18.6995556 9.27368409 22.2182222 12.7967732 23.9848889 17.0425358 24 22.0109719v1.0614407h-.0113333c-.0295556.2382096-.1257778.4431235-.2891111.6145183-.1702223.1713947-.3775556.2719522-.622.301896V24h-1.8553334c-.2595555-.0073742-.4853333-.0969822-.678-.2681534-.1926666-.1861432-.3037778-.4058056-.3333333-.6592105h-.0113333v-1.0614407h.0113333c-.0146667-3.918392-1.4108889-7.2627121-4.1886667-10.0336309-2.7704444-2.78589066-6.10755553-4.17872426-10.01133331-4.17872426h-.04422222v.01117306H4.92177778v-.01117306c-.23688889-.02256958-.44444445-.11910482-.622-.29049955-.17066667-.1716182-.26311111-.37630865-.27777778-.61451827H4z"
                  fill="#FFF"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
          </a>
        </li>
        <li className={styles.HeaderLink}>
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.HeaderLink}
            href="https://github.com/Cooperbuilt/runtime-rundown"
          >
            <Image
              src={GithubLogo}
              height="28"
              width="28"
              alt="Github Octocat logo"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
