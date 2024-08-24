/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { X, Check } from 'lucide-react';

export default function UpgradeModal() {
  const [open, setOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <p
        onClick={() => setOpen(true)}
        className="bg-transparent hover:bg-transparent hover:text-[#40B6FC]"
      >
        Upgrade Plan
      </p>
      <DialogContent className="flex flex-col items-center justify-center border-none bg-[#052639] text-white sm:max-w-[600px] lg:max-w-[800px]">
        <DialogHeader className="flex justify-start">
          <DialogTitle className="text-2xl font-bold">Seu plano</DialogTitle>
          {/* <Button
            variant="ghost"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" onClick={() => setOpen(false)} />
          </Button> */}
        </DialogHeader>
        <div className="flex items-center justify-center space-x-2 py-4">
          <span
            className={`text-sm ${!isAnnual ? 'text-[##FFFFFF]' : 'text-gray-400'}`}
          >
            Mensal
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="from-[#40B6FC] to-[#0089DB] data-[state=checked]:bg-gradient-to-r"
          />
          <span
            className={`text-sm ${!isAnnual ? 'text-gray-400' : 'text-[#FFFFFF]'}`}
          >
            Anual
          </span>
          <span
            className={`text-sm ${isAnnual ? 'text-[#40B6FC]' : 'text-gray-400'}`}
          >
            (33% OFF)
          </span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 lg:w-9/12">
          {['Plus+', 'Vip+'].map((plan, index) => (
            <div key={plan} className="rounded-lg bg-[#0D3451] p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {isAnnual ? 'Anual' : 'Mensal'} {plan}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Para quem está começando agora
                  </p>
                </div>
                <div className="text-right">
                  <p className="bg-gradient-to-r from-[#40B6FC] to-[#0089DB] bg-clip-text text-3xl font-bold text-transparent">
                    {isAnnual ? '69,00' : '97,00'}
                  </p>
                  <p className="text-sm text-gray-400">por mês</p>
                </div>
              </div>
              <div className="my-4 border-t border-gray-500"></div>
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="mb-2 flex items-center space-x-2 text-sm"
                >
                  <Check className="h-5 w-5 text-[#40B6FC]" />
                  <span>Mensagens, interações e histórico ilimitados</span>
                  <Check className="h-5 w-5 text-[#40B6FC]" />
                  <span>Mensagens, interações e histórico ilimitados</span>
                </div>
              ))}
              <div className="flex items-center justify-center">
                <Button className="mt-3 bg-gradient-to-r from-[#40B6FC] to-[#0089DB] text-white transition hover:bg-[#3BA8D9] hover:opacity-90 active:scale-95 active:bg-gradient-to-r active:from-[#0089DB] active:to-[#40B6FC] lg:w-4/12">
                  SELECIONAR PLANO
                </Button>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
