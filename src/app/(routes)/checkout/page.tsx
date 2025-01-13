'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from '@/lib/hooks/useCart';
import { Button } from '@/components/ui/button/button';
import { formatPrice } from '@/lib/utils/formatting';

type CheckoutFormData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

export default function CheckoutPage() {
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
  const { items, total, clearCart } = useCart();
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>();

  const onSubmit = async (data: CheckoutFormData) => {
    if (step === 'shipping') {
      setStep('payment');
      return;
    }

    try {
      // Here you would integrate with your payment processor
      // For example, using Stripe
      await processPayment(data);
      clearCart();
      // Redirect to success page
      window.location.href = '/checkout/success';
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {step === 'shipping' ? (
              <>
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      className="w-full border rounded-md p-2"
                    />
                    {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <input
                        {...register('firstName', { required: true })}
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <input
                        {...register('lastName', { required: true })}
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Address</label>
                    <input
                      {...register('address', { required: true })}
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">City</label>
                      <input
                        {...register('city', { required: true })}
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Postal Code</label>
                      <input
                        {...register('postalCode', { required: true })}
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Number</label>
                    <input
                      {...register('cardNumber', { required: true })}
                      className="w-full border rounded-md p-2"
                      placeholder="**** **** **** ****"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Expiry Date</label>
                      <input
                        {...register('expiryDate', { required: true })}
                        className="w-full border rounded-md p-2"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CVV</label>
                      <input
                        {...register('cvv', { required: true })}
                        type="password"
                        className="w-full border rounded-md p-2"
                        placeholder="***"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            
            <Button type="submit" className="w-full">
              {step === 'shipping' ? 'Continue to Payment' : 'Place Order'}
            </Button>
          </form>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// This is a placeholder function - replace with actual payment processing
async function processPayment(data: CheckoutFormData) {
  // Integrate with your payment processor here
  return new Promise((resolve) => setTimeout(resolve, 1000));
} 