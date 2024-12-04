import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, getTotal } = useCart();
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert('Order placed successfully! Thank you for shopping with BookZone.');
      navigate('/');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div className={`step ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
            1. Shipping
          </div>
          <div className={`step ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
            2. Payment
          </div>
          <div className={`step ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
            3. Review
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-4">Payment Information</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CVV</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-4">Order Review</h2>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center py-2">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center font-bold">
                  <span>Total:</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ml-auto"
            >
              {step === 3 ? 'Place Order' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};