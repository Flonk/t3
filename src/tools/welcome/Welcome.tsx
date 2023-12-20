import { useEffect } from "react";
import { PageContentList } from "../../ui/MainSections";
import { Page } from "../../ui/Page";
import { Body1, ExternalInlineLink, H1 } from "../../ui/Typography";

export const Welcome = () => {
  useEffect(() => {
    document.title = "T3 Interblag Real-Estate";
  }, []);

  return (
    <Page title="T3 Interblag Real-Estate" className="max-w-prose">
      <H1>T3 Interblag Real-Estate.</H1>
      <Body1>Ads have ruined the web.</Body1>
      <Body1>
        Whenever you google "JSON prettifier" or "QR code generator", you have
        to open about twenty sites, none of them work, and all of them are
        loaded with ads and cookie banners and popups.
      </Body1>
      <Body1>
        Somehow doing the simplest things turn into a 10 minute ordeal, when
        generating a QR code should be doable in around 20 milliseconds. The
        worst thing is when they hit you with loading bars... <em>nothing</em>{" "}
        is loading there! They just put in fake waiting times to show you more
        ads or sell you premium features or whatever.
      </Body1>
      <Body1>
        Well. Building a QR code generator in this day and age takes only around
        10 minutes aswell, so instead of complaining I decided to do just that,
        aswell as building lots of other tools. Here they are, for you and me to
        enjoy. :)
      </Body1>
      <Body1>
        All of the code runs on your device. No data is ever being sent to a
        server or collected or whatever. And you can trust me on this,
        pinky-promise; or you can{" "}
        <ExternalInlineLink to="https://github.com/Flonk/t3">
          check the source code yourself over at github
        </ExternalInlineLink>{" "}
        and convince yourself.
      </Body1>
      <PageContentList />
    </Page>
  );
};
