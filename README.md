# `<SignIn>` phone prefill repro

With email and phone sign-in enabled, `<SignIn initialValues={{ phoneNumber: '+15555550100' }} />` opens on the phone field. The first click on "Use email" switches back to the phone field. The second click works.

## Steps

1. `npm install`
2. `cp .env.example .env` and set `VITE_CLERK_PUBLISHABLE_KEY` to a development instance with email and phone sign-in enabled
3. `npm run dev` and open the printed URL
4. Click "Use email" once

**Expected:** the email field shows.

**Actual:** the form switches back to the phone field.
