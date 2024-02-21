import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import '../css/App.css';
import i18n from './language/i18n';

function App() {

  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const Lenguage = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' }
  ];

  useEffect(() => {
    localStorage.setItem('i18nextLng', selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage])

  const handleChangeLanguage = (value) => {
    setSelectedLanguage(value);
  };

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="form-group offset-md-10">
                    <label>{t('Language')}</label>
                    <select
                      class="form-control "
                      value={selectedLanguage}
                      onChange={(e) => handleChangeLanguage(e.target.value)}
                    >
                      {Lenguage.map((Lenguage) => (
                        <option key={Lenguage.value} value={Lenguage.value}>
                          {Lenguage.label}
                        </option>
                      ))
                      }
                    </select>
                  </div>
                  <div class="form-group">
                    <h1>{t('User Registration')}</h1>
                  </div>
                  <div class="form-group">
                    <label>{t('translation.Name')}</label>
                    <input
                      type='text'
                      name='name'
                      class="form-control"
                      {...register('name', {
                        required: {
                          value: true,
                          message: t('translation.NameRequired')
                        }
                      })}
                    />
                    {
                      errors.name && <span>{errors.name.message}</span>
                    }
                  </div>
                  <div class="form-group">
                    <label>{t('translation.LastName')}</label>
                    <input
                      type='text'
                      name='lastName'
                      class="form-control"
                      {...register('lastName', {
                        required: {
                          value: true,
                          message: t('translation.LastNameRequired')
                        }
                      })}
                    />
                    {
                      errors.lastName && <span>{errors.lastName.message}</span>
                    }
                  </div>
                  <div class="form-group">
                    <label>{t('translation.Phone')}</label>
                    <input
                      type='number'
                      name='phone'
                      class="form-control"
                      {...register('phone', {
                        required: {
                          value: true,
                          message: t('translation.Phone required')
                        }
                      })}
                    />
                    {
                      errors.phone && <span>{errors.phone.message}</span>
                    }
                  </div>
                  <div class="form-group">
                    <label>{t('translation.Address')}</label>
                    <input
                      type='text'
                      name='address'
                      class="form-control"
                      {...register('address', {
                        required: {
                          value: true,
                          message: t('translation.Address required')
                        }
                      })}
                    />
                    {
                      errors.address && <span>{errors.address.message}</span>
                    }
                  </div>
                  <button type='submit' class="btn btn-primary">{t('Send')}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
