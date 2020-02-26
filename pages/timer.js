import {} from "react-intl";
import { FormattedMessage as Message, FormattedRelativeTime } from "react-intl";
import { selectUnit } from "@formatjs/intl-utils";
import Layout from "../components/Layout";

export default props => {
  const { value, unit } = selectUnit(Date.now());
  const getPlacement = () => Math.floor(Math.random() * 100);
  return (
    <Layout {...props}>
      <h2>
        <Message id="secondsAgo" defaultMessage="Seconds Ago Timer" />
      </h2>
      <h3>
        <FormattedRelativeTime
          numeric="auto"
          value={value}
          unit={unit}
          updateIntervalInSeconds={1}
        />
      </h3>
      <p>
        <Message
          id="secondsAgoDescription"
          defaultMessage={
            'Note how the text changes from "second" to "seconds" depending on the value.'
          }
        />
      </p>

      <hr />

      <h2>
        <Message id="ordinalSelectors" defaultMessage="Ordinal Selectors" />
      </h2>
      <p>
        <Message
          id="ordinalSelectorsDescription"
          defaultMessage="These convert ordinal values for things like placement. These are not
        translated yet to spanish since I don't know what those are exactly :D"
        />
      </p>
      <p>
        <Message
          id="refreshPage"
          defaultMessage="Refresh the page to see how different values behave"
        />
      </p>
      <p>
        <Message
          id="timer.ordinalNumbers"
          defaultMessage={`{name}, got {placement, selectordinal,  one {#st} two {#nd} few {#rd} other{#th} } place.`}
          values={{ name: "A", placement: getPlacement() }}
        />
      </p>

      <p>
        <Message
          id="timer.ordinalNumbers"
          defaultMessage={`{name}, got {placement, selectordinal,  one {#st} two {#nd} few {#rd} other{#th} } place.`}
          values={{ name: "B", placement: getPlacement() }}
        />
      </p>
    </Layout>
  );
};
