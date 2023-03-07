import { __ } from "@wordpress/i18n";

const NoSlidesWarning = () => {
	return (
		<div className="no-slides">
			<p>{__("No slides found", "emt-slideshow")}</p>
		</div>
	);
};

export default NoSlidesWarning;
