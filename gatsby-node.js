/* eslint-disable no-undef */
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === 'Mdx') {

	}
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions

	const result = await graphql(`
		query MyQuery {
			allContentfulPage {
				edges {
					node {
						slug
						id
					}
				}
			}
		}
`)

	if (result.errors) {
		reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
	}

	const pages = result.data.allContentfulPage.edges;

	pages.forEach(({ node }, index) => {
		createPage({
			path: node.slug,
			component: path.resolve('./src/components/TextPage.tsx'),
			context: { id: node.id }
		})
	})

}