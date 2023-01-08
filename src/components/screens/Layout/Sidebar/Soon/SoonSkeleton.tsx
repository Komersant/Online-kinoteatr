import React from 'react'
import ContentLoader from 'react-content-loader'

const SoonLoader = () => (
	<ContentLoader
		speed={2}
		width={289}
		height={110}
		viewBox="0 0 289 110"
		backgroundColor={'#333'}
		foregroundColor={'#999'}
	>
		<circle cx="574" cy="485" r="91" />
		<rect x="13" y="19" rx="0" ry="0" width="71" height="101" />
		<rect x="238" y="222" rx="0" ry="0" width="2" height="0" />
		<rect x="97" y="27" rx="0" ry="0" width="280" height="22" />
		<rect x="97" y="60" rx="0" ry="0" width="250" height="22" />
	</ContentLoader>
)

export default SoonLoader
