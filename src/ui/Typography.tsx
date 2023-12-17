// typography

import { ElementType, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { unsafeCast } from "../util/util";
import { Styleable } from "./Styleable";
import { TRANSITION_SM } from "./transitions";

export const TYPOGRAPHY_STYLES = {
  h1: "text-3xl font-bold my-6 leading-none",
  h2: "text-2xl font-bold my-6 leading-none",
  h3: "text-xl font-bold my-6 leading-none",
  h4: "text-lg font-bold my-6 leading-none",
  h5: "text-base font-bold my-6 leading-none",
  h6: "text-xs font-bold my-6 uppercase tracking-wide leading-none",
  body1: "text-base mb-6",
  body2: "text-sm mb-6",
  caption: "text-xs italic",
  overline: "text-xs tracking-widest uppercase text-gray-500",
  link: `text-lime-600 hover:text-lime-800 ${TRANSITION_SM}`,
  inlineLink: `text-lime-600 underline hover:text-lime-800 ${TRANSITION_SM}`,
  button:
    "text-xs font-bold uppercase leading-none flex items-center justify-center",
};

type TypographyProps = Styleable &
  PropsWithChildren & {
    // eslint-disable-next-line @typescript-eslint/ban-types
    as?: "header" | "div" | (string & {});
  };

export const H1 = ({ children, className, as }: TypographyProps) => {
  const Component = unsafeCast<ElementType>(as ?? "h1");
  return (
    <Component className={`${TYPOGRAPHY_STYLES.h1} ${className}`}>
      {children}
    </Component>
  );
};

export const H2 = ({ children, className, as }: TypographyProps) => {
  const Component = unsafeCast<ElementType>(as ?? "h2");
  return (
    <Component className={`${TYPOGRAPHY_STYLES.h2} ${className}`}>
      {children}
    </Component>
  );
};

export const H3 = ({ children, className, as }: TypographyProps) => {
  const Component = unsafeCast<ElementType>(as ?? "h3");
  return (
    <Component className={`${TYPOGRAPHY_STYLES.h3} ${className}`}>
      {children}
    </Component>
  );
};

export const H4 = ({ children, className, as }: TypographyProps) => {
  const Component = unsafeCast<ElementType>(as ?? "h4");
  return (
    <Component className={`${TYPOGRAPHY_STYLES.h4} ${className}`}>
      {children}
    </Component>
  );
};

export const H5 = ({ children, className, as }: TypographyProps) => {
  const Component = unsafeCast<ElementType>(as ?? "h5");
  return (
    <Component className={`${TYPOGRAPHY_STYLES.h5} ${className}`}>
      {children}
    </Component>
  );
};

export const H6 = ({ children, className, as }: TypographyProps) => {
  const Component = unsafeCast<ElementType>(as ?? "h6");
  return (
    <Component className={`${TYPOGRAPHY_STYLES.h6} ${className}`}>
      {children}
    </Component>
  );
};

export const Body1 = ({ children, className, as }: TypographyProps) => {
  const Component = unsafeCast<ElementType>(as ?? "div");
  return (
    <Component className={`${TYPOGRAPHY_STYLES.body1} ${className}`}>
      {children}
    </Component>
  );
};

export const Body2 = ({ children, className, as }: TypographyProps) => {
  const Component = unsafeCast<ElementType>(as ?? "div");
  return (
    <Component className={`${TYPOGRAPHY_STYLES.body2} ${className}`}>
      {children}
    </Component>
  );
};

export const Caption = ({ children, className, as }: TypographyProps) => {
  const Component = unsafeCast<ElementType>(as ?? "div");
  return (
    <Component className={`${TYPOGRAPHY_STYLES.caption} ${className}`}>
      {children}
    </Component>
  );
};

export const Overline = ({ children, className, as }: TypographyProps) => {
  const Component = unsafeCast<ElementType>(as ?? "div");
  return (
    <Component className={`${TYPOGRAPHY_STYLES.overline} ${className}`}>
      {children}
    </Component>
  );
};

type LinkProps = Styleable &
  PropsWithChildren & {
    to: string;
    title?: string;
    target?: string;
  };

export const InternalLink = ({
  children,
  className,
  to,
  title,
  target,
}: LinkProps) => (
  <Link
    className={`${TYPOGRAPHY_STYLES.link} ${className}`}
    to={to}
    title={title}
    target={target}
  >
    {children}
  </Link>
);

export const InlineLink = ({
  children,
  className,
  to,
  title,
  target,
}: LinkProps) => (
  <Link
    className={`${TYPOGRAPHY_STYLES.inlineLink} ${className}`}
    to={to}
    title={title}
    target={target}
  >
    {children}
  </Link>
);

export const ExternalLink = ({
  children,
  className,
  to,
  title,
  target,
}: LinkProps) => (
  <Link
    className={`${TYPOGRAPHY_STYLES.link} ${className}`}
    to={to}
    title={title}
    target={target}
  >
    {children}
  </Link>
);

export const ExternalInlineLink = ({
  children,
  className,
  to,
  title,
  target,
}: LinkProps) => (
  <Link
    className={`${TYPOGRAPHY_STYLES.inlineLink} ${className}`}
    to={to}
    title={title}
    target={target}
  >
    {children}
  </Link>
);
