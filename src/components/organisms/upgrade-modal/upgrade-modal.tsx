import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { X, Check } from 'lucide-react';

export default function UpgradeModal() {
  const [open, setOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
       <DialogTrigger asChild>
        <p className="bg-transparent hover:bg-transparent">Upgrade</p>
      </DialogTrigger>
      <DialogContent className="max-w-4xl border-none p-0 outline-none ring-0 focus:border-none focus:outline-none focus:ring-0 active:outline-none">
        <div className="max-h-[90vh] overflow-y-auto bg-[#0c1824] p-6 text-white">
          <h1 className="text-2xl font-bold">Seu plano</h1>
          <Button
            onClick={() => setOpen(false)}
            className="rounded-none bg-transparent hover:bg-transparent"
          >
            <X className="text-white" />
          </Button>
        </div>
        <div className="flex items-center justify-center space-x-2 py-4">
          <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Mensal</span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="from-[#40B6FC] to-[#0089DB] data-[state=checked]:bg-gradient-to-r"
          />
          <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Anual</span>
          <span className={`text-sm ${isAnnual ? 'text-[#40B6FC]' : 'text-gray-400'}`}> (33% OFF)</span>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 p-6">
          {['Plus+', 'Vip+'].map((plan, index) => (
            <div key={plan} className="rounded-lg bg-[#0D3451] p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {isAnnual ? 'Anual' : 'Mensal'} {plan}
                  </h3>
                  <p className="text-sm text-gray-400">Para quem está começando agora</p>
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
                </div>
              ))}
              <Button className="mt-3 bg-gradient-to-r from-[#40B6FC] to-[#0089DB] text-white transition hover:bg-[#3BA8D9] hover:opacity-90 active:scale-95 active:bg-gradient-to-r active:from-[#0089DB] active:to-[#40B6FC] w-full">
                SELECIONAR PLANO
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
