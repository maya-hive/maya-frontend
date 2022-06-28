import { Fragment, useEffect, useRef, useState } from 'react';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

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
	const [formData, setFormData] = useState({});

	const formRef = useRef(null);

	const cursorHandlers = useCursorHandlers();

	const MySwal = withReactContent(Swal);

	const delay = 2_000;

	const handleInput = e => {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleCheckbox = e => {
		e.preventDefault();
		setFormData({
			...formData,
			services: formData.services
				? [...formData.services, e.target.name]
				: [e.target.name],
		});
	};

	const handleFormSubmit = e => {
		e.preventDefault();
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
			body: JSON.stringify({ ...formData }),
		})
			.then(res => res.json())
			.then(({ message, type }) => {
				setTimeout(() => {
					setIsLoading(false);
					MySwal.fire({
						title: <p>{message}</p>,
						icon: type,
						iconColor: primaryColor,
						showConfirmButton: false,
						timer: 3000,
					});
					if (type === 'success') {
						setFormData({});
						formRef.current.reset();
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
						MySwal.fire({
							title: data.errors ? data.errors[0] : 'Something Went Wrong',
							icon: data.type,
							iconColor: primaryColor,
							showConfirmButton: false,
							timer: 2000,
						});
					}, delay);
				}
			);
	};

	useEffect(() => {
		setColor(document.body.style.getPropertyValue('--primary-color'));
	}, [primaryColor]);

	return (
		<form className={`${styles.main} ${className || ''}`} ref={formRef}>
			<h2>{headline}</h2>
			<span className={styles.fieldGroup}>
				<label htmlFor={'name'}>
					{themeData.theme_general_form.name_label}
				</label>
				<input
					id={'name'}
					name={'name'}
					type={'text'}
					placeholder={themeData.theme_general_form.name_placeholder}
					onInput={e => handleInput(e)}
					required
				/>
			</span>
			<span className={styles.fieldGroup}>
				<label htmlFor={'email'}>
					{themeData.theme_general_form.email_label}
				</label>
				<input
					id={'email'}
					name={'email'}
					type={'email'}
					placeholder={themeData.theme_general_form.email_placeholder}
					onInput={e => handleInput(e)}
					required
				/>
			</span>
			<span className={styles.fieldGroup}>
				<label htmlFor={'phone'}>
					{themeData.theme_general_form.phone_label}
				</label>
				<input
					id={'phone'}
					type={'tel'}
					name={'phone'}
					pattern={null}
					placeholder={themeData.theme_general_form.phone_placeholder}
					onInput={e => handleInput(e)}
				/>
			</span>
			{toggleCompatiblities && (
				<span className={`${styles.fieldGroup} ${styles.compatibilities}`}>
					<label className={styles.mainLabel}>{labelCompatibilities}</label>
					<div className={styles.innerWrap}>
						{themeData.theme_general_form.services.map(({ service }, index) => (
							<Fragment key={index}>
								<input
									id={service.replace(/\s/g, '')}
									name={service}
									type={'checkbox'}
									pattern={null}
									onInput={e => handleCheckbox(e)}
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
					onInput={e => handleInput(e)}
				/>
			</span>
			<Submit
				className={styles.button}
				isLoading={isLoading}
				onClick={e => handleFormSubmit(e)}>
				{submitValue}
			</Submit>
		</form>
	);
};
