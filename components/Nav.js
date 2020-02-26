import { defineMessages } from "react-intl";
import { FormattedMessage } from "react-intl";
import Link from "next/link";

const { home, timer } = defineMessages({
  home: {
    id: "nav.home",
    defaultMessage: "Home"
  },
  timer: {
    id: "nav.other",
    defaultMessage: "Timers and Ordinals"
  }
});

export default () => (
  <nav>
    <li>
      <Link href="/">
        <a>
          <FormattedMessage {...home} />
        </a>
      </Link>
    </li>
    <li>
      <Link href="/timer">
        <a>
          <FormattedMessage {...timer} />
        </a>
      </Link>
    </li>

    <style jsx>{`
      nav {
        display: flex;
      }
      li {
        list-style: none;
        margin-right: 1rem;
      }
    `}</style>
  </nav>
);
