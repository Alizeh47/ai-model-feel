'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button/button';
import { motion } from 'framer-motion';

type ProfileFormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
};

export const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>();

  const onSubmit = async (data: ProfileFormData) => {
    // TODO: Implement profile update logic
    console.log(data);
    setIsEditing(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-canela">Profile Information</h2>
        <Button
          variant={isEditing ? "outline" : "default"}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <User className="w-4 h-4 mr-2" />
              Full Name
            </label>
            <input
              {...register('fullName', { required: true })}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-navy/20"
              defaultValue="John Doe"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </label>
            <input
              {...register('email', { required: true })}
              disabled={!isEditing}
              type="email"
              className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-navy/20"
              defaultValue="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Phone className="w-4 h-4 mr-2" />
              Phone
            </label>
            <input
              {...register('phone')}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-navy/20"
              defaultValue="+1 234 567 890"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <MapPin className="w-4 h-4 mr-2" />
              Address
            </label>
            <input
              {...register('address')}
              disabled={!isEditing}
              className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-navy/20"
              defaultValue="123 Street Name"
            />
          </div>
        </div>

        {isEditing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-end"
          >
            <Button type="submit">
              Save Changes
            </Button>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}; 