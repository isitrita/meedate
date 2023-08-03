import NextAuth from 'next-auth';
import { authConfig } from '@/helpers/auth';

const handler = NextAuth(authConfig);