import { PageContentList } from "../../ui/MainSections";

export const Welcome = () => (
  <div className="flex flex-col items-center min-h-screen px-8 max-w-prose">
    <h1 className="text-3xl font-bold text-center mb-4 mt-8">
      T3 Interblag Real-Estate.
    </h1>
    <p>Ads have ruined the web.</p>
    <p className="mt-4">
      Whenever you google "JSON prettifier" or "QR code generator", you have to
      open about twenty sites, none of them work, and all of them are loaded
      with ads and cookie banners and popups.
    </p>
    <p className="mt-4">
      Got me thinking, with the amount of time I have spent googling tools,
      could I have just built and hosted them myself?
    </p>
    <p className="mt-4">
      The answer is, probably yes. So I'm building them! And since they're all
      online, you might as well use them too. :) Take a look, drop a bookmark,
      and enjoy!
    </p>
    <p className="mt-4">
      All of the code runs on your device, and no data is ever being sent to a
      server or collected or whatever. And you trust me on this, pinky-promise;
      alternatively you can{" "}
      <a href="https://github.com/Flonk/t3" target="_new">
        check the source code yourself over at github
      </a>
      .
    </p>
    <PageContentList />
  </div>
);
