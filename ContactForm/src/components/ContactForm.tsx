import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import personImage from '../assets/IMG_8443WBG.png';
import Footer from './Footer';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface InputLabelProps {
  isActive: boolean;
}

const AlertOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const AlertBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: slideIn 0.3s ease-out;
  max-width: 90%;
  width: 400px;

  @keyframes slideIn {
    from {
      transform: translateY(-100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const AlertIcon = styled.div`
  width: 60px;
  height: 60px;
  background: #FAE8E0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;

  &::before {
    content: '✓';
    font-size: 2rem;
    color: #2A2A2A;
  }
`;

const AlertTitle = styled.h2`
  color: #2A2A2A;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const AlertMessage = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

const AlertButton = styled.button`
  background: #2A2A2A;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
`;

const floatImage = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-15px) rotate(2deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #FAE8E0;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContactFormContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 100vh;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 3rem;
  position: relative;
  z-index: 1;
  background: white;
  max-width: 1200px;
  margin: 2rem auto;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
  align-self: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    margin: 1rem;
    border-radius: 25px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    .tooltip {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -10px);
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 110%;
    height: 110%;
    background: #FAE8E0;
    border-radius: 50%;
    z-index: 0;
    animation: ${floatImage} 3s ease-in-out infinite;
  }

  img {
    position: relative;
    z-index: 1;
    width: 95%;
    height: 95%;
    object-fit: contain;
    animation: ${floatImage} 3s ease-in-out infinite;
    filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1));
    transition: transform 0.3s ease;

    &:hover {
      animation-play-state: paused;
      transform: scale(1.02) rotate(-2deg);
    }
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 4rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 2rem;
  }
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Title = styled.h1`
  color: #2A2A2A;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  letter-spacing: 2px;
  text-align: left;
  text-transform: uppercase;
  padding-left: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    padding-left: 0;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 450px;

  @media (max-width: 768px) {
    gap: 1.2rem;
    width: 100%;
    max-width: 100%;
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  background: #FAE8E0;
  font-size: 1rem;
  color: #2A2A2A;
  font-weight: 500;
  
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 0.9rem;
    font-size: 16px; /* Prevents zoom on iOS */
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  background: #FAE8E0;
  font-size: 1rem;
  min-height: 120px;
  resize: none;
  color: #2A2A2A;
  font-weight: 500;
  
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    min-height: 100px;
    padding: 0.9rem;
    font-size: 16px; /* Prevents zoom on iOS */
  }
`;

const InputLabel = styled.label<InputLabelProps>`
  position: absolute;
  left: 1rem;
  top: ${props => props.isActive ? '-0.7rem' : '1rem'};
  font-size: ${props => props.isActive ? '0.85rem' : '1rem'};
  color: #666;
  transition: all 0.2s ease;
  pointer-events: none;
  font-weight: 600;
  transform-origin: left;
  background: transparent;
  padding: 0 0.5rem;

  @media (max-width: 768px) {
    font-size: ${props => props.isActive ? '0.8rem' : '0.9rem'};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 50px;
  background: #2A2A2A;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 1rem;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.9rem;
    margin-top: 0.5rem;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background: rgba(42, 42, 42, 0.9);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 10;
  width: max-content;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(42, 42, 42, 0.9);
  }
`;

const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-top: 5px;
  position: absolute;
  bottom: -20px;
  left: 0;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    bottom: -18px;
  }
`;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [emailError, setEmailError] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear email error when user starts typing
    if (name === 'email') {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailValidationError = validateEmail(formData.email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setShowAlert(true);
        setFormData({ name: '', email: '', message: '' });
        setEmailError('');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <MainContainer>
        <ContentContainer>
          <ContactFormContainer>
            <ContentWrapper>
              <ImageSection>
                <ImageWrapper>
                  <img src={personImage} alt="Person working" />
                  <Tooltip className="tooltip">
                    Please submit the form to contact me
                  </Tooltip>
                </ImageWrapper>
              </ImageSection>
              <FormSection>
                <Title>CONTACT ME</Title>
                <StyledForm onSubmit={handleSubmit}>
                  <InputGroup>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <InputLabel isActive={formData.name.length > 0}>Name</InputLabel>
                  </InputGroup>
                  <InputGroup>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <InputLabel isActive={formData.email.length > 0}>Email</InputLabel>
                    {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
                  </InputGroup>
                  <InputGroup>
                    <TextArea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <InputLabel isActive={formData.message.length > 0}>Message</InputLabel>
                  </InputGroup>
                  <SubmitButton type="submit">SUBMIT</SubmitButton>
                </StyledForm>
              </FormSection>
            </ContentWrapper>
          </ContactFormContainer>
        </ContentContainer>
      </MainContainer>
      <Footer />
      <AlertOverlay show={showAlert}>
        <AlertBox>
          <AlertIcon />
          <AlertTitle>Message Sent!</AlertTitle>
          <AlertMessage>
            Thank you for reaching out. I'll get back to you as soon as possible.
          </AlertMessage>
          <AlertButton onClick={() => setShowAlert(false)}>
            Close
          </AlertButton>
        </AlertBox>
      </AlertOverlay>
    </>
  );
};

export default ContactForm; 