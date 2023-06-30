
import React from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
const CatchAllRoute: React.FC = () => {
	const isPreviewingInBuilder = useIsPreviewing();
	const [notFound, setNotFound] = React.useState(false);
	const [content, setContent] = React.useState();
	const [announcement, setAnnouncement] = React.useState(null);
	const [links, setLinks] = React.useState<any[] | []>([]);

	/**
   * Get the CMS data from Builder
   */
	React.useEffect(() => {
		async function fetchContent() {
			const links = await builder.getAll('nav-links', {
				// You can use options for queries, sorting, and targeting here
				// https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
			});
			setLinks(links);
		}
		fetchContent();
	}, []);

	/**
   * Get the announcement bar from Builder
   */
	React.useEffect(() => {
		builder
			.get('announcement-bar', {
				userAttributes: {
					// To allow targeting different announcements at different pages (URLs)
					urlPath: window.location.pathname
				}
			})
			.toPromise()
			.then((announcementBar) => setAnnouncement(announcementBar));
	}, []);

	/**
   * Get the page content from Builder
   */
	React.useEffect(() => {
		const fetchContent = async() => {
			const content = await builder
				.get('page', {
					url: window.location.pathname
				})
				.promise();

			setContent(content);
			setNotFound(!content);

			// if the page title is found, 
			// set the document title
			if(content?.data.title) {
				document.title = content.data.title;
			}
		};
    
		fetchContent();
	}, []);
  
	// If no page is found, return 
	// a 404 page 
	if(notFound && !isPreviewingInBuilder) {
		return (
			<div>
				404! Page not found
			</div>
		);
	}

	return (
		<ScContainer>
			<Header links={links} />
			{announcement && (
				<BuilderComponent
					model="announcement-bar"
					content={announcement}
				/>
			)}
			<BuilderComponent
				model="page"
				content={content}
			/>
			<Footer />
		</ScContainer>
			
	);
};

export default CatchAllRoute;

const ScContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;