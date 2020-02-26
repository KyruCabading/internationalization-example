import App from "next/app";
import React from "react";
import { createIntl, createIntlCache, IntlProvider } from "react-intl";

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache();

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      locale: "en"
    };

    this.switchLocale = this.switchLocale.bind(this);
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx;
    const { locale } = req || window.__NEXT_DATA__.props;

    return { pageProps, locale };
  }

  // We need to load and expose the translations on the request for the user's
  // locale. These will only be used in production, in dev the `defaultMessage` in
  // each message description in the source code will be used.
  getMessages = locale => {
    return require(`../lang/${locale}.json`);
  };

  switchLocale = () => {
    this.setState(prevState => ({
      locale: prevState.locale === "en" ? "es" : "en"
    }));
  };

  render() {
    const { Component, pageProps } = this.props;
    const { locale } = this.state;
    const messages = this.getMessages(locale);

    return (
      <IntlProvider key={locale} locale={locale} messages={messages}>
        <Component
          {...pageProps}
          locale={locale}
          switchLocale={this.switchLocale}
        />
      </IntlProvider>
    );
  }
}
