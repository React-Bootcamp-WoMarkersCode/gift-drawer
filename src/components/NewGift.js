import React from 'react'
import Panel from './Panel/Panel';
import Title from './Title/Title';
import { Wrapper } from './Wrapper/Wrapper'
import { StyledButton } from './Button/Button';
import useForm from './useForm';
import validate from './ValidationForm';
import styled from 'styled-components';
import NewRegister from './NewRegister'

export const FormItem = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-right: 6%;
a{
  margin-right: 30px;
  color: #552B9A;
  font-size: 17px;
}
`

export default function NewGift(){
    const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(NewRegister, validate);


  return (
    <>
      <form onSubmit={handleSubmit} noValidate style={{ display:'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Panel width="520px" height="640px" left="420px" top="10px" />
        <Title text="Inserir Brinde" left="480px" top="50px" fontSize="32px" />
        
        <FormItem>
          <Wrapper
            textLabel='Título do brinde'
            type="text"
            name="brinde"
            placeholder="Digite o título do brinde"
            onChange={handleChange}
            value={values.brinde || ''}
            className={`input ${errors.brinde}`}
            required
          />
          {/* {errors.name && (
              <MsgError left="780px" top="280px" text={errors.name}  />
          )} */}
        </FormItem>

        <FormItem>
          <Wrapper
            textLabel='Foto do brinde'
            type="file"
            name="foto"
            placeholder="Selecionar arquivo"
            accept="image/*"
            onChange={handleChange}
            value={values.foto || ''}
            className={`input ${errors.foto}`}
            required
          />
          {/* {errors.email && (
              <MsgError left="780px" top="280px" text={errors.email}  />
          )} */}
        </FormItem>

        <FormItem>
          <Wrapper
            textLabel='Quantidade'
            type="quantidade"
            name="quantidade"
            placeholder="Digite a quantidade de brindes"
            onChange={handleChange}
            value={values.quantidade || ''}
            className={`input ${errors.quantidade}`}
            required
          />
          {/* {errors.password && (
              <MsgError left="780px" top="280px" text={errors.email}  />
          )} */}
        </FormItem>

        <FormItem>
          <Wrapper
            textLabel='Patrocinador'
            type="text"
            name="patrocinador"
            placeholder="Digite o nome do patrocinador"
            onChange={handleChange}
            value={values.patrocinador || ''}
            className={`input ${errors.patrocinador}`}
            required
          />
          {/* {errors.name && (
              <MsgError left="780px" top="280px" text={errors.name}  />
          )} */}
        </FormItem>

        <FormItem>
          <Wrapper
            textLabel='Logo do patrocinador'
            type="file"
            name="logo"
            accept="image/*"
            placeholder="Selecionar arquivo"
            onChange={handleChange}
            value={values.logo || ''}
            className={`input ${errors.logo}`}
            required
          />
          {/* {errors.email && (
              <MsgError left="780px" top="280px" text={errors.email}  />
          )} */}
        </FormItem>

        <StyledButton label="Cadastrar" />

        </form>
    </>
  )
}