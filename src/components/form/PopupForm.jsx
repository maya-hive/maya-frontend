import withReactContent from 'sweetalert2-react-content';
import { CloseButton, Modal } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

import styles from './PopupForm.module.scss';
import { api, compatibilitiesApplication } from '@services';
import { Submit } from '@components';

export const PopupForm = ({
	headline,
	fileInput,
	isPoppedData,
	setIsPoppedData,
	themeData: {
		theme_form_popup: popupData,
		theme_form_media,
		theme_form_title,
	},
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [primaryColor, setColor] = useState('');
	const [formData, setFormData] = useState({});

	const formRef = useRef(null);
	const fileLabelRef = useRef(null);
	const fileInputRef = useRef(null);

	const MySwal = withReactContent(Swal);

	const delay = 2_000;

	const handleInput = e => {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
			context: headline,
		});
	};

	const handleFileInput = e => {
		e.preventDefault();

		let file = e.target.files[0];
		let fileReader = new FileReader();

		if (file) {
			fileReader.readAsDataURL(file);

			if (file.name) fileLabelRef.current.innerText = `File Name: ${file.name}`;

			if (file.type !== 'application/pdf') {
				fileLabelRef.current.innerText = `Only .pdf files are allowed`;
			}
		}

		fileReader.onload = event => {
			setFormData({
				...formData,
				[e.target.name]: event.target.result,
			});
		};
	};

	const handleButtonOnHide = e => {
		setIsPoppedData({});
		setIsActive(false);
	};

	const handleFormSubmit = e => {
		e.preventDefault();
		setIsLoading(true);

		MySwal.fire({
			imageUrl: theme_form_media.url,
			imageAlt: theme_form_media.alt,
			titleText: theme_form_title,
			showConfirmButton: false,
			allowEscapeKey: false,
			allowOutsideClick: false,
		});

		api
			.post(compatibilitiesApplication, { ...formData })
			.then(({ data }) => {
				setTimeout(() => {
					setIsLoading(false);
					MySwal.fire({
						title: <p>{data.message}</p>,
						icon: data.type,
						iconColor: primaryColor,
						showConfirmButton: false,
						timer: 3000,
					});
					if (data.type === 'success') {
						setFormData({});
						setIsActive(false);
						setIsPoppedData({});
					}
				}, delay);
			})
			.catch(
				({
					response: {
						data: { data },
					},
				}) => {
					setTimeout(() => {
						setIsLoading(false);
						setFormData({});
						MySwal.fire({
							title: data.errors ? data.errors[0] : 'Something Went Wrong',
							icon: data.type,
							iconColor: primaryColor,
							showConfirmButton: false,
							timer: 2000,
						});
					}, delay);
					setTimeout(() => setIsActive(true), delay + 2000);
				}
			);
	};

	useEffect(() => {
		setColor(document.body.style.getPropertyValue('--primary-color'));
	}, [primaryColor]);

	useEffect(() => {
		headline.replace(/\s/g, '') === Object.keys(isPoppedData)[0] &&
			setIsActive(true);
	}, [headline, isPoppedData]);

	return (
		<Modal centered show={isActive} onHide={handleButtonOnHide}>
			<form ref={formRef} className={styles.main}>
				<CloseButton
					className={styles.closeBtn}
					variant={'white'}
					onClick={handleButtonOnHide}
				/>
				<h2>{headline}</h2>
				<span className={styles.fieldGroup}>
					<label htmlFor={'name'}>{popupData.name_label}</label>
					<input
						required
						id={'name'}
						name={'name'}
						type={'text'}
						placeholder={popupData.name_placeholder}
						onInput={e => handleInput(e)}
					/>
				</span>
				<span className={styles.fieldGroup}>
					<label htmlFor={'email'}>{popupData.email_label}</label>
					<input
						required
						id={'email'}
						name={'email'}
						type={'email'}
						placeholder={popupData.email_placeholder}
						onInput={e => handleInput(e)}
					/>
				</span>
				<span className={styles.fieldGroup}>
					<label htmlFor={'phone'}>{popupData.phone_label}</label>
					<input
						id={'phone'}
						type={'tel'}
						name={'phone'}
						pattern={null}
						placeholder={'0700 600 500'}
						onInput={e => handleInput(e)}
					/>
				</span>
				{fileInput && (
					<span className={`${styles.fieldGroup} ${styles.file}`}>
						<label htmlFor={'file'} ref={fileLabelRef}>
							{popupData.file_label}
						</label>
						<input
							required
							id={'file'}
							type={'file'}
							name={'file'}
							ref={fileInputRef}
							accept={'application/pdf'}
							onInput={e => handleFileInput(e)}
						/>
					</span>
				)}
				<span className={styles.fieldGroup}>
					<label htmlFor={'message'}>{popupData.message_label}</label>
					<textarea
						id={'message'}
						name={'message'}
						placeholder={popupData.message_placeholder}
						rows={'4'}
						onInput={e => handleInput(e)}
					/>
				</span>
				<Submit
					className={styles.button}
					isLoading={isLoading}
					onClick={e => handleFormSubmit(e)}>
					{popupData.submit}
				</Submit>
			</form>
		</Modal>
	);
};
