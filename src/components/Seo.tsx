import Helmet from "react-helmet";
import MainVisualImage from "../images/mainvisual.png";
import React from "react";
import format from "date-fns/format";
import useSiteDataQuery from "../hooks/useSiteDataQuery";

export default function Seo(props: SeoProps): JSX.Element {
  const site = useSiteDataQuery();

  const title =
    props.title === site.siteMetadata.title
      ? site.siteMetadata.title
      : `${props.title} / ${site.siteMetadata.title}`;

  const metaDescription = props.description || site.siteMetadata.description;

  const index = props.noindex ? `noindex` : `index, follow`;

  const image = props.image
    ? `${site.siteMetadata.siteUrl}${props.image}`
    : `${site.siteMetadata.siteUrl}${MainVisualImage}`;

  const keywords = `${
    site.siteMetadata.keywords ? site.siteMetadata.keywords.join(", ") : ""
  }, ${props.keywords ? props.keywords.join(", ") : ""}`;

  const url = props.url
    ? props.url
    : `${site.siteMetadata.siteUrl}${props.slug ? props.slug : ""}`;

  const lang = props.lang ? props.lang : site.siteMetadata.lang;

  const ogType = props.ogType ? props.ogType : "website";

  const prefix: string[] = [];
  const ogp: JSX.Element[] = [];
  prefix.push(`og: http://ogp.me/ns#`);
  prefix.push(`fb: http://ogp.me/ns/fb#`);
  switch (ogType) {
    case "article":
      prefix.push(`article: http://ogp.me/ns/article#`);
      const addArticleTag = (keywords: string[]): void => {
        keywords.forEach(keyword => {
          if (ogp.find(el => el.props.content === keyword)) {
            return;
          }
          ogp.push(
            <meta
              key={`article:tag_${keyword}`}
              property="article:tag"
              content={keyword}
            />
          );
        });
      }
      if (site.siteMetadata.keywords) {
        addArticleTag(site.siteMetadata.keywords);
      }
      if (props.keywords) {
        addArticleTag(props.keywords);
      }
      if (props.publishedTime) {
        ogp.push(
          <meta
            key={`article:published_time`}
            property="article:published_time"
            content={format(props.publishedTime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}
          />
        );
      }
      if (props.modifiedTime) {
        ogp.push(
          <meta
            key={`article:modified_time`}
            property="article:modified_time"
            content={format(props.modifiedTime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}
          />
        );
      }

      break;
    case "book":
      prefix.push(`book: http://ogp.me/ns/book#`);
      break;
    case "profile":
      prefix.push(`profile: http://ogp.me/ns/profile#`);
      break;
    case "website":
      prefix.push(`profile: http://ogp.me/ns/website#`);
      break;
  }

  return (
    <Helmet
      htmlAttributes={{ lang: lang, prefix: prefix.join(" ") }}
      title={title}
      defer={false}
    >
      <meta name="image" content={image} />
      <meta name="robots" content={index} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
      />
      <link rel="canonical" href={url} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:image" content={image} />
      {ogp}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:creator"
        content={`@${site.siteMetadata.social.twitter}`}
      />
      <meta
        name="twitter:site"
        content={`@${site.siteMetadata.social.twitter}`}
      />
      <meta name="twitter:image" content={image} />
      {props.children}
    </Helmet>
  );
}

interface SeoProps {
  lang?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  keywords?: string[] | undefined;
  noindex?: boolean | undefined;
  children?: React.ReactNode | undefined;
  image?: string | undefined;
  url?: string | undefined;
  slug?: string | undefined;
  ogType?: "website" | "article" | "book" | "profile" | undefined;
  publishedTime?: Date | undefined;
  modifiedTime?: Date | undefined;
}
