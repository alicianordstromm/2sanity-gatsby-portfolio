const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanitySampleProject(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
      allSanityCategory {
        nodes{
          title
          id
          }
        }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanitySampleProject || {}).edges || []

  const categoryEdges = (result.data.allSanityCategory.nodes || [])

  projectEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/project/${slug}/`

      createPage({
        path,
        component: require.resolve('./src/templates/project.js'),
        context: {id}
      })
    })

  categoryEdges
    .forEach(edge => {
      const path = `/${edge.title}/`

      createPage({
        path,
        component: require.resolve('./src/templates/category.js'),
        context: {edge}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createProjectPages(graphql, actions)
}
