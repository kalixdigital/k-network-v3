'use client';

/**
 * Logout button — client component that invokes the logout server action.
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { logoutAction } from '@/app/auth/actions';

export function LogoutButton() {
  const [isPending, setIsPending] = useState(false);

  const handleLogout = async () => {
    setIsPending(true);
    try {
      await logoutAction();
    } catch {
      // logoutAction redirects, which throws on the client — expected
      setIsPending(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLogout}
      isLoading={isPending}
    >
      Sign out
    </Button>
  );
}
