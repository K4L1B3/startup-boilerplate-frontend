import React, { useState, useEffect } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface IUserProfile {
  srcUserProfile: string;
  userNameProfile: string;
}

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

// Simulated hook to fetch user data
const useUser = () => {
  return {
    name: 'Luiz Belispetre',
    email: 'luizhlimagomes28@gmail.com',
    profileImage: 'https://github.com/shadcn.png',
  };
};

const UserProfile: React.FC = () => {
  const user = useUser();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setUserName(user.name);
    setEmail(user.email);
    setProfileImage(user.profileImage);
  }, [user]);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const handleSaveChanges = () => {
    console.log('Saving changes...', { userName, email, password, phone });
  };

  const handleBilling = () => {
    console.log('Navigating to billing...');
  };

  const handleSignOut = () => {
    console.log('Signing out...');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer items-center justify-start gap-4 text-center font-semibold text-white transition-transform duration-300 hover:translate-x-1 active:translate-x-1">
          <Avatar>
            <AvatarImage src={profileImage} alt="User Profile Photo" />
            <AvatarFallback className="bg-slate-900">
              {getInitials(userName)}
            </AvatarFallback>
          </Avatar>
          <span>{userName}</span>
          <FontAwesomeIcon icon={faChevronRight} size="lg" color="white" />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#052639] text-white sm:max-w-[425px] border-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0 active:outline-none">
        <DialogHeader>
          <DialogTitle className="text-white">Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <InputField
            label="Name"
            id="name"
            value={userName}
            onChange={setUserName}
          />
          <InputField
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={setEmail}
          />
          <InputField
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <InputField
            label="Confirm"
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <InputField
            label="Phone"
            id="phone"
            type="tel"
            value={phone}
            onChange={setPhone}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Button
              onClick={handleBilling}
              className="mr-2 bg-[#3b82f6] text-white hover:bg-[#2563eb]"
            >
              Billing
            </Button>
            <Button
              onClick={handleSignOut}
              className="bg-[#ef4444] text-white hover:bg-[#dc2626]"
            >
              Sign Out
            </Button>
          </div>
          <Button
            onClick={handleSaveChanges}
            className="bg-[#3b82f6] text-white hover:bg-[#2563eb]"
          >
            Save changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
}) => (
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor={id} className="text-right text-white">
      {label}
    </Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="col-span-3 border-[#475569] bg-[#334155] text-white"
    />
  </div>
);

export default UserProfile;
