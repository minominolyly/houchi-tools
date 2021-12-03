import { graphql, useStaticQuery } from "gatsby";

export const useSiteDataQuery = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
            keywords
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `);
  return site;
}

export default useSiteDataQuery;
