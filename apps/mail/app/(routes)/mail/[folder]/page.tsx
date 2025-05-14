import { MailLayout } from '@/components/mail/mail';
import { authProxy } from '@/lib/auth-proxy';
import { useLoaderData } from 'react-router';
import type { Route } from './+types/page';

const ALLOWED_FOLDERS = ['inbox', 'draft', 'sent', 'spam', 'bin', 'archive'];

export async function loader({ params, request }: Route.LoaderArgs) {
  const session = await authProxy.api.getSession({ headers: request.headers });
  if (!session) return Response.redirect('/login');

  return {
    folder: params.folder,
  };
}

export default function MailPage() {
  const { folder } = useLoaderData<typeof loader>();
  if (!ALLOWED_FOLDERS.includes(folder)) return <div>Invalid folder</div>;
  return <MailLayout />;
}
