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

// Simulated hook to fetch user data
const useUser = () => {
  // Replace this with your actual user data fetching logic
  return {
    name: 'Luiz Belispetre',
    email: 'luizhlimagomes28@gmail.com',
    profileImage: 'https://github.com/shadcn.png',
  };
};

const UserProfile: React.FC<IUserProfile> = ({
  srcUserProfile,
  userNameProfile,
}) => {
  const altUserProfile = 'User Profile Photo';

  const getInitials = (name: string) => {
    const nameArray = name.trim().split(' ');
    const initials = nameArray.map((word) => word[0]).join('');
    return initials.toUpperCase();
  };

  return (
    <div className="flex cursor-pointer items-center justify-start gap-4 text-center font-semibold text-white transition-transform duration-300 hover:translate-x-1 active:translate-x-1">
      <Avatar>
        <AvatarImage src={srcUserProfile} alt={altUserProfile} />
        <AvatarFallback className="bg-slate-900">
          {getInitials(userNameProfile)}
        </AvatarFallback>
      </Avatar>
      <span>{userNameProfile}</span>
      <FontAwesomeIcon
        icon={faChevronRight}
        className=""
        size="lg"
        color="white"
      />
    </div>
  );
};

export default function Component() {
  const user = useUser();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Update state with user data when it's fetched
    setUserName(user.name);
    setEmail(user.email);
    setProfileImage(user.profileImage);
  }, [user]);

  const handleSaveChanges = () => {
    // Implement save changes logic here
    console.log('Saving changes...', { userName, email, password, phone });
  };

  const handleBilling = () => {
    // Implement billing logic here
    console.log('Navigating to billing...');
  };

  const handleSignOut = () => {
    // Implement sign out logic here
    console.log('Signing out...');
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-fit">
            <UserProfile
              srcUserProfile={profileImage}
              userNameProfile={userName}
            />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-[#052639] text-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-white">Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right text-white">
                Name
              </Label>
              <Input
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="col-span-3 border-[#475569] bg-[#334155] text-white"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3 border-[#475569] bg-[#334155] text-white"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right text-white">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="col-span-3 border-[#475569] bg-[#334155] text-white"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="confirmPassword"
                className="text-right text-white"
              >
                Confirm
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="col-span-3 border-[#475569] bg-[#334155] text-white"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right text-white">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-3 border-[#475569] bg-[#334155] text-white"
              />
            </div>
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
    </div>
  );
}
