import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

import "./style.scss";
import "./editor.scss";

import NoSlidesWarning from "./components/NoSlidesWarning";
import Slide from "./components/Slide";

const createSlide = ({ title, content, image }) => ({
	title,
	content,
	image,
});

const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();
	const { slides } = attributes;

	const handleAddSlide = () =>
		setAttributes({
			slides: [
				...slides,
				createSlide({
					title: "New slide!",
					content: "Describe this slide",
					image: undefined,
				}),
			],
		});

	const handleDeleteSlide = (index) =>
		setAttributes({
			slides: slides.filter((slide, i) => i !== index),
		});

	const handleMoveUp = (index) => {
		if (index === 0) {
			return;
		}
		const newSlides = [...slides];
		const slide = newSlides[index];
		newSlides[index] = newSlides[index - 1];
		newSlides[index - 1] = slide;
		setAttributes({ slides: newSlides });
	};

	const handleMoveDown = (index) => {
		if (index === slides.length - 1) {
			return;
		}
		const newSlides = [...slides];
		const slide = newSlides[index];
		newSlides[index] = newSlides[index + 1];
		newSlides[index + 1] = slide;
		setAttributes({ slides: newSlides });
	};

	const handleUpdateSlide = (index, slide) =>
		setAttributes({
			slides: slides.map((s, i) => (i === index ? slide : s)),
		});

	return (
		<div {...blockProps}>
			<div className="emt-slideshow">
				<h3 className="block-name">Pill slideshow</h3>
				{slides.length === 0 && <NoSlidesWarning />}
				{slides.map((slide, index) => (
					<Slide
						key={index}
						data={slide}
						onDelete={() => handleDeleteSlide(index)}
						onUpdate={(slide) => handleUpdateSlide(index, slide)}
						onMoveUp={() => handleMoveUp(index)}
						onMoveDown={() => handleMoveDown(index)}
					/>
				))}

				<div className="buttons">
					<Button
						className="button-add-slide"
						isPrimary
						onClick={() => handleAddSlide({ title: "New slide" })}
					>
						{__("Add slide", "emt-slideshow")}
					</Button>

					{/* A button to destroy all slides */}
					<Button
						className="button-delete-slides"
						isDestructive
						onClick={() => setAttributes({ slides: [] })}
					>
						{__("Delete all slides", "emt-slideshow")}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Edit;
