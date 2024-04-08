'use client';

import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import { getAllUsers } from "@/services/users";


export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
}

export function UsersTableUsable() {
    const [users, setUsers]= useState([]);
    
    const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', minWidth: 100},
    { field: 'name', headerName: 'Name', minWidth: 125 },
    { field: 'username', headerName: 'User', minWidth: 125 },
    { field: 'email', headerName: 'Email', minWidth: 200},
  ];
  
  useEffect(() => {
    getData();
    
    async function getData() {
      const users = await getAllUsers();
      setUsers(users);
    }
  }, []);

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      </Box>
    </Card>
  );
}
