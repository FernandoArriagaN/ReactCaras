import React, { useState } from "react";
import {  ButtonForm, ContainerForm, FormSection, ContSub, ImgContainer, InputEmail, InputName, SubscriptionContainer, TitleForm, LabelName, LabelEmail, SpanName, SpanEmail, SuccessMessage,  } from "./styles";


type FormState = {
  name?: string;
  email?: string;
};

const SubscriptionForm = () => {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '' });
  const [error, setError] = useState<FormState>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

  const validEmail = (email: string): boolean => {
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return check.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev,[name]: value,}));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors: FormState = {};
    setSuccessMessage('');

    if (!formData.name?.trim()) {
      formErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.email?.trim()) {
      formErrors.email = 'El correo es obligatorio';
    } else if (!validEmail(formData.email)) {
      formErrors.email = 'Correo no válido';
    }

    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      setTimeout(() => setError({}), 3000);
    } else {
      setError({});
      setSuccessMessage('Subscripción Exitosa');
      setTimeout(() => setSuccessMessage(''), 4000);
      setFormData({ name: '', email: '' });
    }
  };



  
  return (
    <ContSub>
      <SubscriptionContainer onSubmit={handleSubmit}>
        <FormSection>
          <TitleForm>Suscríbete</TitleForm>
          <ContainerForm id="subscriptionForm">
            <LabelName>Nombre:</LabelName>
            <InputName
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {error.name && <SpanName id="nameError">{error.name}</SpanName>}

            <LabelEmail>Correo Electrónico:</LabelEmail>
            <InputEmail
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <SpanEmail id="emailError">{error.email}</SpanEmail>}

            <ButtonForm type="submit">Suscribirse</ButtonForm>
            <SuccessMessage id="successMessage">{successMessage}</SuccessMessage>
          </ContainerForm>
        </FormSection>
        <ImgContainer />
      </SubscriptionContainer>
    </ContSub>
  );
};

export default SubscriptionForm;