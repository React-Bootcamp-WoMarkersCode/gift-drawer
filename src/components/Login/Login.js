import React from 'react';
import useForm from '../useForm';
import validate from '../ValidationForm';
import Logo from '../Logo/Logo';
import { StyledButton } from '../Button/Button';
import MsgError from '../MsgError/MsgError'
import Link from '../Link/Link';
import Panel from '../Panel/Panel';
import Label from '../Label/Label';
import Title from '../Title/Title';
import { Wrapper } from '../Wrapper/Wrapper'
import styled from 'styled-components';

export const Div = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`

export default function Login() {
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(Login, validate);

	return (
		<Div>
			<Logo />

			<form onSubmit={handleSubmit} noValidate>
			<Panel width="500px" height="600px" left="720px" top="30px" />
			<Title text="Entrar" left="780px" top="130px" fontSize="35px" />
			<FormItem>
				<Wrapper
					textLabel='E-mail'
					type="email"
					name="email"
					placeholder="nome@email.com"
					onChange={handleChange}
					value={values.email || ''}
					className={`input ${errors.email}`}
					required
				/>
				{errors.email && (
						<MsgError left="780px" top="280px" text={errors.email} />
				)}
			</FormItem>

			<FormItem>
				<Wrapper
					textLabel='Senha'
					type="password"
					name="password"
					placeholder="••••••••••"
					onChange={handleChange}
					value={values.password || ''}
					className={`input ${errors.password}`}
					required
				/>
				{errors.password && (
					<MsgError left="780px" top="380px" text={errors.password} />
				)}
			</FormItem>

				<Link
					left="780px" top="430px"
					href="/reset-password"
					text="Recuperar senha"
					fontSize="15px"
				/>

				<StyledButton label="Entrar" type="red" />
						
				<Label label="Ainda não tem uma conta?"
						left="825px" top="540px" fontSize="15px" />
				<Link
					left="1035px"
					top="540px"
					href="/login/new-register"
					text="Cadastrar"
					fontSize="15px" />
			</form>
		</Div>
	)
}