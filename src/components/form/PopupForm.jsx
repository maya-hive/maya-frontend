import withReactContent from 'sweetalert2-react-content';
import { CloseButton, Modal } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { z } from 'zod';

import styles from './PopupForm.module.scss';
import { Submit } from '@components';

export const PopupForm = ({
	headline,
	fileInput,
	endpoint,
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

	const fileLabelRef = useRef(null);
	const fileInputRef = useRef(null);

	const MySwal = withReactContent(Swal);

	const delay = 2_000;

	const schema = z.object({
		name: z.string().min(2).max(255),
		email: z.string().email().min(2).max(255),
		message: z.string().min(2).max(255),
		phone: z.string().min(2).max(255),
		context: z.string().min(2).max(255),
		file: fileInput ? z.string() : z.any(),
	});

	const {
		reset,
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		mode: 'onBlur',
	});

	const handleButtonOnHide = e => {
		setIsPoppedData({});
		setIsActive(false);
	};

	const handleFileOnChange = event => {
		const fileReader = new FileReader();
		let file = event.target.files[0];

		if (file) {
			fileReader.readAsDataURL(file);

			if (file.name) fileLabelRef.current.innerText = `File Name: ${file.name}`;

			if (file.type !== 'application/pdf') {
				fileLabelRef.current.innerText = `Only .pdf files are allowed`;
			}
		}

		fileReader.onload = event => {
			setValue('file', event.target.result, { shouldValidate: true });
		};
	};

	const onSubmit = data => {
		setIsLoading(true);

		MySwal.fire({
			imageUrl: theme_form_media.url,
			imageAlt: theme_form_media.alt,
			titleText: theme_form_title,
			showConfirmButton: false,
			allowEscapeKey: false,
			allowOutsideClick: false,
		});

		fetch(endpoint, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...data }),
		})
			.then(res => res.json())
			.then(res => {
				setTimeout(() => {
					setIsLoading(false);
					MySwal.fire({
						title: <p>{res.data ? res.data.message : res.message}</p>,
						icon: res.type,
						iconColor: primaryColor,
						showConfirmButton: false,
						timer: 3000,
					});
					if (res.type === 'success') {
						reset();
						setIsActive(false);
						setIsPoppedData({});
					}
				}, delay);
			})
			.catch(({ errors, type }) => {
				setTimeout(() => {
					setIsLoading(false);
					MySwal.fire({
						title: errors ? errors[0] : 'Something Went Wrong',
						icon: type,
						iconColor: primaryColor,
						showConfirmButton: false,
						timer: 2000,
					});
				}, delay);
				setTimeout(() => setIsActive(true), delay + 2000);
			});
	};

	useEffect(() => {
		setColor(document.body.style.getPropertyValue('--primary-color'));
	}, [primaryColor]);

	useEffect(() => {
		setValue('context', headline);
		headline.replace(/\s/g, '') === Object.keys(isPoppedData)[0] &&
			setIsActive(true);
	}, [headline, isPoppedData, setValue]);

	return (
		<Modal centered show={isActive} onHide={handleButtonOnHide}>
			<form className={styles.main} onSubmit={handleSubmit(onSubmit)}>
				<CloseButton
					className={styles.closeBtn}
					variant={'white'}
					onClick={handleButtonOnHide}
				/>
				<h2>{headline}</h2>
				<span className={styles.fieldGroup}>
					<label htmlFor={'name'}>{popupData.name_label}</label>
					<input
						type={'text'}
						placeholder={popupData.name_placeholder}
						{...register('name', { required: true })}
					/>
					{errors.name && (
						<span className={styles.error}>Name is required</span>
					)}
				</span>
				<span className={styles.fieldGroup}>
					<label htmlFor={'email'}>{popupData.email_label}</label>
					<input
						required
						type={'email'}
						placeholder={popupData.email_placeholder}
						{...register('email', { required: true })}
					/>
					{errors.email && (
						<span className={styles.error}>Email is required</span>
					)}
				</span>
				<span className={styles.fieldGroup}>
					<label htmlFor={'phone'}>{popupData.phone_label}</label>
					<input
						type={'tel'}
						pattern={null}
						placeholder={popupData.phone_placeholder}
						{...register('phone', { required: true })}
					/>
					{errors.phone && (
						<span className={styles.error}>Phone is required</span>
					)}
				</span>
				{fileInput && (
					<span className={`${styles.fieldGroup} ${styles.file}`}>
						<label
							htmlFor={'file'}
							{...register('file', { required: true })}
							ref={fileLabelRef}
							onClick={() => fileInputRef.current.click()}>
							{popupData.file_label}
						</label>
						<input
							type={'file'}
							accept={'application/pdf'}
							onChange={handleFileOnChange}
							ref={fileInputRef}
						/>
						{errors.file && (
							<span className={styles.error}>CV is required</span>
						)}
					</span>
				)}
				<span className={styles.fieldGroup}>
					<label htmlFor={'message'}>{popupData.message_label}</label>
					<textarea
						placeholder={popupData.message_placeholder}
						rows={'4'}
						{...register('message', { required: true })}
					/>
					{errors.message && (
						<span className={styles.error}>Message is required</span>
					)}
				</span>
				<Submit className={styles.button} isLoading={isLoading}>
					{popupData.submit}
				</Submit>
			</form>
		</Modal>
	);
};
