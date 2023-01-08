import React from 'react';
import ContentLoader from 'react-content-loader';


const SkeletonWeekActors = () => (
	<ContentLoader
		speed={2}
		width={266}
		height={330}
		style={{ marginTop: '58px' }}
		viewBox="0 0 266 330"
		backgroundColor={'#333'}
		foregroundColor={'#999'}
	>
		<circle cx="574" cy="485" r="91" />
		<rect x="27" y="4" rx="0" ry="0" width="200" height="300" />
		<rect x="238" y="222" rx="0" ry="0" width="2" height="0" />
		<rect x="70" y="319" rx="0" ry="0" width="141" height="30" />
	</ContentLoader>
)

export default SkeletonWeekActors