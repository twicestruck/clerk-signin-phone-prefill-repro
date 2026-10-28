import { ClerkProvider, SignIn } from '@clerk/react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
    <SignIn
      routing='hash'
      initialValues={{ phoneNumber: '+15555550100' }}
    />
  </ClerkProvider>,
);
