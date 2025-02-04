import React, { FunctionComponent } from 'react';

export const IconExternalLink: FunctionComponent<React.SVGAttributes<SVGElement> | { className: string }> = props => {
	return (
		<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M1.33333 0C0.604625 0 0 0.604625 0 1.33333V10.6667C0 11.3954 0.604625 12 1.33333 12H10.6667C11.3954 12 12 11.3954 12 10.6667V6H10.6667V10.6667H1.33333V1.33333H6V0H1.33333ZM7.33333 0V1.33333H9.72396L3.52865 7.52865L4.47135 8.47135L10.6667 2.27604V4.66667H12V0H7.33333Z"
				fill="currentColor"
				fillOpacity="0.6"
			/>
		</svg>
	);
};
