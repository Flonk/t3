import { useEffect } from "react";
import { PageContentList } from "../../ui/MainSections";
import { Body1, ExternalInlineLink, H1 } from "../../ui/Typography";

export const Welcome = () => {
  useEffect(() => {
    document.title = "T3 Interblag Real-Estate";
  }, []);

  return (
    <div className="flex flex-col min-h-screen px-8 max-w-prose">
      <H1>T3 Interblag Real-Estate.</H1>
      <Body1>Ads have ruined the web.</Body1>
      <Body1>
        Whenever you google "JSON prettifier" or "QR code generator", you have
        to open about twenty sites, none of them work, and all of them are
        loaded with ads and cookie banners and popups.
      </Body1>
      <Body1>
        Got me thinking, with the amount of time I have spent googling tools,
        could I have just built and hosted them myself?
      </Body1>
      <Body1>
        Well, probably yes. So I'm building them! And since they're all online,
        you might as well use them too. :) Take a look, drop a bookmark, and
        enjoy.
      </Body1>
      <Body1>
        All of the code runs on your device, client-side. No data is ever being
        sent to a server or collected or whatever. And you can trust me on this,
        pinky-promise; or you can{" "}
        <ExternalInlineLink to="https://github.com/Flonk/t3">
          check the source code yourself over at github
        </ExternalInlineLink>{" "}
        and convince yourself.
      </Body1>
      <PageContentList />
    </div>
  );
};
