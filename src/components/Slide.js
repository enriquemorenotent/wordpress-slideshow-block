import { __ } from "@wordpress/i18n";
import { BlockIcon, MediaPlaceholder, RichText } from "@wordpress/block-editor";
import { FormFileUpload, Button, Placeholder } from "@wordpress/components";

const Slide = ({ data, onDelete, onUpdate, onMoveUp, onMoveDown }) => {
	const { title, content, image } = data;

	return (
		<div className="slide">
			<div className="left-side">
				<div className="slide__content">
					<RichText
						tagName="h4"
						value={title}
						onChange={(title) => onUpdate({ ...data, title })}
						placeholder={__("Slide title", "emt-slideshow")}
						size="small"
						allowedFormats={[]}
					/>

					<RichText
						value={content}
						onChange={(content) => onUpdate({ ...data, content })}
						placeholder={__("Slide content", "emt-slideshow")}
						allowedFormats={[
							"core/bold",
							"core/italic",
							"core/link",
							"core/strikethrough",
							"core/underline",
						]}
					/>
				</div>

				<div className="buttons p-20">
					<Button
						className="button-move-up"
						onClick={onMoveUp}
						isSecondary
						icon="arrow-up-alt2"
					/>

					<Button
						className="button-move-down"
						onClick={onMoveDown}
						isSecondary
						icon="arrow-down-alt2"
					/>

					<Button
						className="button-delete-slide"
						isDestructive
						onClick={onDelete}
						icon="trash"
					></Button>
				</div>
			</div>

			<div className="right-side">
				{!image ? (
					<MediaPlaceholder
						// icon={arrowDown}
						label="Image"
						icon={<BlockIcon icon="format-image" />}
						instructions="Select an image to remove this placeholder"
						accept="image/*"
						allowedTypes={["image"]}
						onSelect={(image) => onUpdate({ ...data, image })}
						style={{ boxShadow: "none" }}
					/>
				) : (
					<>
						<img className="slide__image" src={image.url} />
						<Button
							className="button-remove-image"
							isDestructive
							onClick={() => onUpdate({ ...data, image: undefined })}
						>
							{__("Remove image", "emt-slideshow")}
						</Button>
					</>
				)}
			</div>
		</div>
	);
};

export default Slide;
