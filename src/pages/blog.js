import React from 'react';
import {graphql} from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/layout';
import Card from '../components/card';
import SEO from '../components/seo';

const BlogPage = (props) => {
	const posts = props.data.allMarkdownRemark.edges;

	return (
		<Layout>
			<SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />

			<Typography gutterBottom variant="h3" component="h1">Blog page</Typography>

			<Typography variant="body1" paragraph={true}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex saepe odio quidem culpa
				fugit nostrum sit dolorum velit fuga placeat quo, perferendis explicabo expedita dolores
				maiores eveniet.
			</Typography>

			<Grid container spacing={32}>
				{posts.map((post, index) => (
					<Grid item key={index}>
						<Card
							title={post.node.frontmatter.title}
							date={post.node.frontmatter.date}
							excerpt={post.node.excerpt}
							link={post.node.frontmatter.path}
							cover={post.node.frontmatter.cover.childImageSharp.fluid}
						/>
					</Grid>
				))}
			</Grid>
		</Layout>
	);
};

export default BlogPage;

export const pageQuery = graphql`
	query BlogQuery {
		site {
			siteMetadata {
				title
				author
			}
		}
	allMarkdownRemark(
		limit: 2000
		sort: { fields: [frontmatter___date], order: DESC }
	) {
		edges {
			node {
				id
				excerpt(pruneLength: 140)
				frontmatter {
					title
					date
					path
					cover {
						publicURL
						childImageSharp {
							fluid(
								maxWidth: 290
								srcSetBreakpoints: [
									290,
									330,
									380,
									435,
									495,
									570,
									610,
									660,
									725,
									780,
									825,
									880,
									950,
									1100,
									1160,
									1225,
									1320,
									1470,
									1560,
									1715,
									1830,
									1960,
									2135,
									2440
							]) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	}
}`;
