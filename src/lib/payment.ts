import api from './api';

interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    image?: string;
    order_id: string;
    handler: (response: any) => void;
    prefill: {
        name: string;
        email: string;
        contact: string;
    };
    theme: {
        color: string;
    };
}

declare global {
    interface Window {
        Razorpay: any;
    }
}

export const loadRazorpay = () => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

export const handlePayment = async (
    amount: number,
    user: { name: string; email: string },
    onSuccess: (response: any) => void,
    onError: (error: any) => void
) => {
    const res = await loadRazorpay();

    if (!res) {
        onError('Razorpay SDK failed to load. Are you online?');
        return;
    }

    try {
        // Create Order on Backend
        const orderData = await api.post('/payments/create-order', { amount });
        const { id: order_id, currency } = orderData.data;

        const options: RazorpayOptions = {
            key: 'YOUR_RAZORPAY_KEY_ID', // Replace with actual key or env var
            amount: amount * 100,
            currency: currency,
            name: 'KalaKriti',
            description: 'Purchase Artwork',
            order_id: order_id,
            handler: async function (response: any) {
                try {
                    const verifyRes = await api.post('/payments/verify-payment', {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    });
                    onSuccess(verifyRes.data);
                } catch (err) {
                    onError(err);
                }
            },
            prefill: {
                name: user.name,
                email: user.email,
                contact: '9999999999', // Placeholder
            },
            theme: {
                color: '#61dafb',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    } catch (err) {
        onError(err);
    }
};
