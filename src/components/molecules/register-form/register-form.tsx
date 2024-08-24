import EyeIcon from '@/components/atoms/eye-icon/eye-icon';
import EyeSlashIcon from '@/components/atoms/eye-slash-icon/eye-slash-icon';
import React, { useState } from 'react';
import Image from 'next/image';
import googleIcon from '../../../../public/google-icon.svg';
import LogoPandora from '../../../../public/SymbolText.svg';
import router from 'next/router';

interface IRegisterForm {
  disableEye: boolean;
}

const RegisterForm: React.FC<IRegisterForm> = ({ disableEye }) => {
  const [isEyeVisible, setIsEyeVisible] = useState(false);

  const showEye = () => {
    if (!disableEye) {
      setIsEyeVisible(!isEyeVisible);
    }
  };

  const handleforgotPassword = () => {
    return router.push('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#001726]">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-[#0D3451] p-8">
        <h1 className="text-center text-2xl font-semibold text-white">
          Criar conta
        </h1>
        <div className="flex justify-center">
          <Image
            className="h-12"
            src={LogoPandora}
            alt={'Google Register Icon'}
          />
        </div>
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="seu nome"
              className="w-full rounded-md border border-[#44B9FF] bg-[#0D3451] p-3 text-white"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Endereço de e-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="seuemail@forexample.com"
              className="w-full rounded-md border border-[#44B9FF] bg-[#0D3451] p-3 text-white"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-white"
            >
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={isEyeVisible ? 'text' : 'password'}
                placeholder="***************"
                className="w-full rounded-md border border-[#44B9FF] bg-[#0D3451] p-3 text-white"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#44B9FF]"
                onClick={showEye}
              >
                {isEyeVisible ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-white"
            >
              Confirme sua Senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={isEyeVisible ? 'text' : 'password'}
                placeholder="***************"
                className="w-full rounded-md border border-[#44B9FF] bg-[#0D3451] p-3 text-white"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#44B9FF]"
                onClick={showEye}
              >
                {isEyeVisible ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <button
            onClick={handleforgotPassword}
            type="button"
            className="w-full rounded-md bg-gradient-to-r from-[#40B6FC] to-[#0089DB] py-4 text-white"
          >
            CADASTRAR
          </button>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm text-gray-300">OU</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-center space-x-2 rounded-md border bg-white py-4"
            onClick={handleforgotPassword}
          >
            <Image
              className="h-5 w-5 text-black"
              src={googleIcon}
              alt={'Google Register Icon'}
            />
            <span className="text-black">Continuar com Google</span>
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <a href="/login" className="text-sm text-white">
            Já possui uma conta? <span className="text-[#44B9FF]">Entre</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
