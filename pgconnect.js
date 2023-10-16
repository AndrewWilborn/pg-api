import pg from 'pg';
const { Client } = pg;

import connectionString from './creds.js'

export const client = new Client({
  connectionString,
})
