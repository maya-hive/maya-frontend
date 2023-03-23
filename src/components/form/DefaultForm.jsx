import { Fragment, useEffect, useRef, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { z } from 'zod';

import styles from './DefaultForm.module.scss';
import { useCursorHandlers } from '@hooks';
import { enquiry } from '@services';
import { Submit } from '@components';

export const DefaultForm = ({
	themeData,
	headline,
	toggleCompatiblities,
	submitValue,
	className,
	labelCompatibilities,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [primaryColor, setColor] = useState('');

	const cursorHandlers = useCursorHandlers();

	const MySwal = withReactContent(Swal);

	const schema = z.object({
		name: z.string().min(2).max(255),
		email: z.string().email().min(2).max(255),
		message: z.string().min(2).max(255),
		phone: z.string().min(2).max(255),
		services: z.any(),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
		mode: 'onBlur',
	});

	const delay = 2_000;

	const onSubmit = data => {
		setIsLoading(true);
		MySwal.fire({
			imageUrl: themeData.theme_form_media.url,
			imageAlt: themeData.theme_form_media.alt,
			titleText: themeData.theme_form_title,
			showConfirmButton: false,
			allowEscapeKey: false,
			allowOutsideClick: false,
		});

		fetch(enquiry, {
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
			});
	};

	useEffect(() => {
		setColor(document.body.style.getPropertyValue('--primary-color'));
	}, [primaryColor]);

	return (
		<form
			className={`${styles.main} ${className || ''}`}
			onSubmit={handleSubmit(onSubmit)}>
			<h2>{headline}</h2>
			<span className={styles.fieldGroup}>
				<label htmlFor={'name'}>
					{themeData.theme_general_form.name_label}
				</label>
				<input
					type={'text'}
					placeholder={themeData.theme_general_form.name_placeholder}
					{...register('name', { required: true })}
				/>
			</span>
			{errors.name && <span className={styles.error}>Name is required</span>}
			<span className={styles.fieldGroup}>
				<label htmlFor={'email'}>
					{themeData.theme_general_form.email_label}
				</label>
				<input
					type={'email'}
					placeholder={themeData.theme_general_form.email_placeholder}
					{...register('email', { required: true })}
				/>
			</span>
			{errors.email && <span className={styles.error}>Email is required</span>}
			<span className={styles.fieldGroup}>
				<label htmlFor={'phone'}>
					{themeData.theme_general_form.phone_label}
				</label>
				<input
					placeholder={themeData.theme_general_form.phone_placeholder}
					{...register('phone', { required: true })}
				/>
			</span>
			{errors.phone && <span className={styles.error}>Phone is required</span>}
			{toggleCompatiblities && (
				<span className={`${styles.fieldGroup} ${styles.compatibilities}`}>
					<label className={styles.mainLabel}>{labelCompatibilities}</label>
					<div className={styles.innerWrap}>
						{themeData.theme_general_form.services.map(({ service }, index) => (
							<Fragment key={index}>
								<input
									id={service.replace(/\s/g, '')}
									type={'checkbox'}
									value={service}
									{...register(`services[${index}]`)}
								/>
								<label htmlFor={service.replace(/\s/g, '')} {...cursorHandlers}>
									{service}
								</label>
							</Fragment>
						))}
					</div>
				</span>
			)}
			<span className={styles.fieldGroup}>
				<label htmlFor={'message'}>
					{themeData.theme_general_form.message_label}
				</label>
				<textarea
					id={'message'}
					name={'message'}
					placeholder={themeData.theme_general_form.message_placeholder}
					rows={'4'}
					{...register('message', { required: true })}
				/>
			</span>
			{errors.message && (
				<span className={styles.error}>Message is required</span>
			)}
			<Submit className={styles.button} isLoading={isLoading}>
				{submitValue}
			</Submit>
		</form>
	);
};
