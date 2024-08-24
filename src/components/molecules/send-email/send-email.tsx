import React from 'react';
import LogoPandora from '../../../../public/SymbolText.svg';
import Image from 'next/image';
import router from 'next/router';

export default function ForgotPassword() {
  const hadleSendEmail = () => {
    return router.push('/verification-code');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#001726]">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-[#0D3451] p-8">
        <div className="text-center">
          <Image className="h-12" src={LogoPandora} alt={'Google Login Icon'} />
        </div>
        <h2 className="text-center text-3xl font-semibold text-white">
          Redefina sua senha
        </h2>
        <p className="text-center text-gray-400">
          Insira seu e-mail ou nome de usuário pra enviarmos as instruções de
          redefinição de senha.
        </p>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Endereço de e-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="seuemail@forexample.com"
            className="mt-1 block w-full rounded-md border border-[#40B6FC] bg-transparent px-3 py-3 text-white focus:outline-none focus:ring focus:ring-[#40B6FC]"
          />
        </div>
        <button
          onClick={hadleSendEmail}
          className="w-full rounded-md bg-gradient-to-r from-[#40B6FC] to-[#0089DB] py-4 font-semibold text-white"
        >
          ENVIAR
        </button>
      </div>
    </div>
  );
}
