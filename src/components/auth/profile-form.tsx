'use client';

/**
 * Profile edit form — allows updating display name and username.
 * Per UXDS-1 §6.3 Step 3: Profile Setup.
 */

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert } from '@/components/ui/alert';
import { updateProfileAction, type AuthActionResult } from '@/app/auth/actions';

export function ProfileForm({
  initialDisplayName,
  initialUsername,
}: {
  initialDisplayName: string;
  initialUsername: string | null;
}) {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<AuthActionResult>({});
  const [saved, setSaved] = useState(false);

  const handleSubmit = (formData: FormData) => {
    setResult({});
    setSaved(false);
    startTransition(async () => {
      const res = await updateProfileAction(formData);
      if (res && (res.error || res.fieldErrors)) {
        setResult(res);
      } else {
        setSaved(true);
      }
    });
  };

  return (
    <form action={handleSubmit} className="space-y-4" noValidate>
      {result.error && <Alert variant="danger">{result.error}</Alert>}
      {saved && <Alert variant="success">Profile updated successfully.</Alert>}

      <Input
        label="Display name"
        name="displayName"
        type="text"
        autoComplete="name"
        defaultValue={initialDisplayName}
        placeholder="Your display name"
        hasError={!!result.fieldErrors?.displayName}
        errorText={result.fieldErrors?.displayName}
        required
      />

      <Input
        label="Username"
        name="username"
        type="text"
        autoComplete="username"
        defaultValue={initialUsername ?? ''}
        placeholder="3–30 alphanumeric characters"
        helperText="Your username is permanent once assigned at Leadership tier (Level 7). Choose carefully."
        hasError={!!result.fieldErrors?.username}
        errorText={result.fieldErrors?.username}
      />

      <Button type="submit" isLoading={isPending}>
        Save changes
      </Button>
    </form>
  );
}
