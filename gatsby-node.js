const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = async ({ graphql, actions, reporter }) => {
  // // Destructure the createPage function from the actions object
  // const { createPage } = actions;

  // const result = await graphql(`
  //   query {
  //     allMdx(sort: { fields: frontmatter___date, order: DESC }) {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             date
  //             slug
  //             tags
  //             title
  //             eyecatch {
  //               publicURL
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // if (result.errors) {
  //   reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  // }

  // const posts = result.data.allMdx.edges;
  // const itemsPerPage = 12;
  // const numPages = Math.ceil(posts.length / itemsPerPage);

  // posts.forEach(({ node }, index) => {
  //   createPage({
  //     path: node.frontmatter.slug,
  //     component: path.resolve(`./src/templates/BlogTemplate.tsx`),
  //     context: { id: node.id },
  //   });
  // });

  // paginate({
  //   createPage,
  //   items: posts,
  //   itemsPerPage: itemsPerPage,
  //   pathPrefix: ({ pageNumber, numberOfPages }) =>
  //     pageNumber === 0 ? "/blogs" : "/blogs/page",
  //   component: path.resolve(`./src/templates/BlogsIndexTemplate.tsx`),
  // });

  // const resultForTag = await graphql(`
  //   query {
  //     allMdx {
  //       group(field: frontmatter___tags) {
  //         tag: fieldValue
  //         totalCount
  //         nodes {
  //           frontmatter {
  //             date
  //             slug
  //             tags
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const tagPosts = resultForTag.data.allMdx.group;
  // tagPosts.forEach(({ tag, totalCount, nodes }, index) => {
  //   createPage({
  //     path: `/tags/${tag}`,
  //     component: path.resolve(`./src/templates/TagTemplate.tsx`),
  //     context: { tag: tag },
  //   });
  // });
};

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, ""), "node_modules"],
      },
      module: {
        rules: [
          {
            test: /firebase(\/(.+))?/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
