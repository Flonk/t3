import { getBlogPostMetadata } from "../../../allBlogPosts";
import {
  Body1,
  Body2,
  Caption,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Overline,
  TYPOGRAPHY_STYLES,
} from "../../../ui/Typography";
import { Button, ButtonSmall } from "../../../ui/button/Button";

export const BlogPost_2_DesignDocument = () => {
  const data = getBlogPostMetadata(2);
  return (
    <>
      <div className="max-w-prose w-full">
        <H1 className="mb-0">{data.title}</H1>
        <Caption className="mb-8">{data.date}</Caption>
        <H2>Typography</H2>
        <div className="p-4 rounded-sm border border-gray-200 shadow-inner">
          <H1>Header 1</H1>
          <H2>Header 2</H2>
          <H3>Header 3</H3>
          <H4>Header 4</H4>
          <H5>Header 5</H5>
          <H6>Header 6</H6>
          <Body1>
            Body 1: Lorem ipsum dolor sit amet. Consectetur adipiscing elit sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur
          </Body1>
          <Body2>
            Body 2: Lorem ipsum dolor sit amet. Consectetur adipiscing elit sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur
          </Body2>
          <Caption>Caption</Caption>
          <Overline>Overline</Overline>
          <div className={TYPOGRAPHY_STYLES.button}>Button</div>
          <div className={TYPOGRAPHY_STYLES.link}>Link</div>
        </div>
        <H2>Buttons</H2>
        <div>
          <Button title="Button" onClick={() => {}} className="mb-1" />
          <ButtonSmall title="Button Small" onClick={() => {}} />
        </div>
      </div>
    </>
  );
};
