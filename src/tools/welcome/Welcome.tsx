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
      <div className="w-full">
        <H1>T3 Interblag Real‑Estate.</H1>
        <Body1 className="mt-4">
          Free tools provided to you via the{" "}
          <ExternalInlineLink to="https://github.com/Flonk/t3">
            t3 project
          </ExternalInlineLink>
          .
        </Body1>
        <PageContentList />
      </div>
    </Page>
  );
};
