import type { IntlMessages, Locale } from '@/i18n/config';
import type { Session } from '@/lib/auth-client';
import { QueryProvider } from './query-provider';
// import { AutumnProvider } from 'autumn-js/next';
import type { PropsWithChildren } from 'react';
import { IntlProvider } from 'use-intl';

export function ServerProviders({
  children,
  messages,
  locale,
  // session,
}: PropsWithChildren<{ messages: IntlMessages; locale: Locale; session: Session | null }>) {
  return (
    // <AutumnProvider
    //   customerData={session ? { name: session.user.name, email: session.user.email } : undefined}
    //   customerId={session ? session.user.id : undefined}
    // >
    <IntlProvider messages={messages} locale={locale} timeZone={'UTC'}>
      <QueryProvider>{children}</QueryProvider>
    </IntlProvider>
    // </AutumnProvider>
  );
}
