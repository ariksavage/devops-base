
/**
 * BLOCK: moxy-link-image
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const editor = wp.editor;
const components = wp.components;
const element = wp.element;
const el = wp.element.createElement;
const InspectorControls = wp.editor.InspectorControls;
const { RichText, MediaUpload, PlainText } = wp.editor;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'moxy/block-moxy-link-image', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Moxy Link Image' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'moxy-link-image — CGB Block' ),
		__( 'Moxy Link Image' ),
		__( 'create-guten-block' ),
	],

	attributes: {
		text: {
			source: 'text',
			selector: '.moxy-li-text'
		},
		url: {
			source: 'text',
			selector: '.moxy-li-link'
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function({ attributes, className, setAttributes }) {
		var onSelectImage = function( media ) {
			return setAttributes({
				mediaURL: media.url
			});
		};

		return (
			<div className="moxy-link-image-wrap">
				<div
					className="moxy-link-image"
					style={
						{
							backgroundImage: "url("+(attributes.mediaURL || 'https://via.placeholder.com/300x300')+")",
						}
					}
				>
					<PlainText
				    onChange={ content => setAttributes({ text: content }) }
				    value={ attributes.text }
				    placeholder="Link text"
				    className="moxy-li-text"
				  />
			  </div>
			  <PlainText
			    onChange={ content => setAttributes({ url: content }) }
			    value={ attributes.url }
			    placeholder="link URL"
			    className="moxy-li-link"
			  />
		  	<MediaUpload
					onSelect={onSelectImage}
					type='image'
					className='moxy-li-image edit'
					render={function( obj ){
						return el( components.Button, {
							    className: 'components-icon-button image-block-btn is-button is-default is-large',
							    onClick: obj.open
							},
							el( 'svg', { className: 'dashicon dashicons-edit', width: '20', height: '20' },
								el( 'path', { d: "M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z" } )
							),
							el( 'span', {},
							    'Select image'
							),
						);
					}}
				/>
			</div>
		)
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function({attributes}) {
		return (
			<a className="moxy-li-link" href={attributes.url}>
				<div
					className="moxy-link-image"
					style={{ backgroundImage: "url("+attributes.mediaURL+")" }}
				>
					<p className="moxy-li-text">{attributes.text}</p>
				</div>
			</a>
		);
	},
} );
