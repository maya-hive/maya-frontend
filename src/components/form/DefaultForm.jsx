import { Fragment, useEffect, useRef, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
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
		name: z
			.string()
			.max(255, 'Name must contain at most 255 characters')
			.nonempty('Name is required'),
		email: z.string().email(),
		message: z
			.string('message')
			.max(512, 'Message must contain at most 512 characters')
			.nonempty('Message is required'),
		phone: z
			.string()
			.max(255, 'Phone must contain at most 255 characters')
			.nonempty('Phone is required'),
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
			<ErrorMessage
				errors={errors}
				name={'name'}
				render={({ message }) => <p>{message}</p>}
			/>
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
			<ErrorMessage
				errors={errors}
				name={'email'}
				render={({ message }) => <p>{message}</p>}
			/>
			<span className={styles.fieldGroup}>
				<label htmlFor={'phone'}>
					{themeData.theme_general_form.phone_label}
				</label>
				<input
					placeholder={themeData.theme_general_form.phone_placeholder}
					{...register('phone', { required: true })}
				/>
			</span>
			<ErrorMessage
				errors={errors}
				name={'phone'}
				render={({ message }) => <p>{message}</p>}
			/>
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
			<ErrorMessage
				errors={errors}
				name={'message'}
				render={({ message }) => <p>{message}</p>}
			/>
			<Submit className={styles.button} isLoading={isLoading}>
				{submitValue}
			</Submit>
		</form>
	);
};
