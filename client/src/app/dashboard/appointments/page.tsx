import * as React from 'react';
import type { Metadata } from 'next';
import AppointmentsShow from '@/components/dashboard/appointments/show';

import { config } from '@/config';

export const metadata = { title: `Users | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <AppointmentsShow/>
  );
}
