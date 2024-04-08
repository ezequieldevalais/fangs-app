import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';

import { config } from '@/config';
import { UsersFilters } from '@/components/dashboard/user/users-filters';
import { UsersTable } from '@/components/dashboard/user/users-table';
import type { User } from '@/components/dashboard/user/users-table';
import { UsersTableUsable } from '@/components/dashboard/user/users-table-usable';

export const metadata = { title: `Users | Dashboard | ${config.site.name}` } satisfies Metadata;

const users = [
  {
    id: 'USR-010',
    name: 'Alcides Antonio',
    username: 'alcides.antonio',
    email: 'alcides.antonio@devias.io',
  },
  {
    id: 'USR-009',
    name: 'Marcus Finn',
    username: 'marcus.finn',
    email: 'marcus.finn@devias.io'
  },
  {
    id: 'USR-008',
    name: 'Jie Yan',
    username: 'jie.yan.song',
    email: 'jie.yan.song@devias.io'
  },
  {
    id: 'USR-007',
    name: 'Nasimiyu Danai',
    username: 'nasimiyu.danai',
    email: 'nasimiyu.danai@devias.io'
  },
  {
    id: 'USR-006',
    name: 'Iulia Albu',
    username: 'iulia.albu',
    email: 'iulia.albu@devias.io'
  },
  {
    id: 'USR-005',
    name: 'Fran Perez',
    username: 'fran.perez',
    email: 'fran.perez@devias.io'
  },
  {
    id: 'USR-004',
    name: 'Penjani Inyene',
    username: 'penjani.inyene',
    email: 'penjani.inyene@devias.io'
  },
  {
    id: 'USR-003',
    name: 'Carson Darrin',
    username: 'carson.darrin',
    email: 'carson.darrin@devias.io'
  },
  {
    id: 'USR-002',
    name: 'Siegbert Gottfried',
    username: 'siegbert.gottfried',
    email: 'siegbert.gottfried@devias.io'
  }
] satisfies User[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedUsers = users //applyPagination(users, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Users</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <UsersFilters />
      <UsersTable
        count={paginatedUsers.length}
        page={page}
        rows={paginatedUsers}
        rowsPerPage={rowsPerPage}
      />
      <UsersTableUsable/>
    </Stack>
  );
}

function applyPagination(rows: User[], page: number, rowsPerPage: number): User[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
