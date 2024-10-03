import React, { useState } from 'react';
import * as S from './styles';

interface FormData {
  name: string;
  logo: string | null;
  titlesCount: string;
  isActive: boolean;
  conference: string;
}

const UploadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    logo: null,
    titlesCount: "",
    isActive: false,
    conference: "",
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prevState => ({
          ...prevState,
          logo: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:8080/api/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <S.container>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nome"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <input
        type="number"
        name="titlesCount"
        value={formData.titlesCount}
        onChange={handleChange}
        placeholder="Quantidade de Títulos"
      />
      <label>
        Ativo:
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleChange}
        />
      </label>
      <input
        type="text"
        name="conference"
        value={formData.conference}
        onChange={handleChange}
        placeholder="conferencia"
        />
      <button onClick={handleSubmit}>Enviar Formulário</button>
    </S.container>
  );
};

export default UploadForm;