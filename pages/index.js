import { FormattedMessage, defineMessages, useIntl } from "react-intl";
import Layout from "../components/Layout";

const { switchLocale, all, images, books, news } = defineMessages({
  switchLocale: {
    id: "switchLocale",
    defaultMessage: "Switch Locale"
  },
  all: {
    id: "all",
    defaultMessage: "All"
  },
  images: {
    id: "images",
    defaultMessage: "Images"
  },
  books: {
    id: "books",
    defaultMessage: "Books"
  },
  news: {
    id: "news",
    defaultMessage: "News"
  }
});

export default props => {
  const intl = useIntl();

  return (
    <Layout>
      <div>
        <h1>Current Locale: {props.locale}</h1>
        <div>
          <button onClick={props.switchLocale}>
            <FormattedMessage {...switchLocale} />
          </button>
        </div>
      </div>
      <p>
        <FormattedMessage {...all} />
      </p>
      <p>
        <FormattedMessage {...images} />
      </p>
      <p>
        <FormattedMessage {...books} />
      </p>
      <p>
        <FormattedMessage {...news} />
      </p>
    </Layout>
  );
};
