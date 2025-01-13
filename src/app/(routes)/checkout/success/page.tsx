import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button/button';

export default function OrderSuccessPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <div className="mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-gray-600 mb-8">
        Your order has been successfully placed. We'll send you an email confirmation with your order details shortly.
      </p>
      
      <div className="space-y-4">
        <Link href="/account/orders">
          <Button variant="outline" className="w-full sm:w-auto">
            View Order History
          </Button>
        </Link>
        <Link href="/products">
          <Button className="w-full sm:w-auto ml-0 sm:ml-4">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
} 