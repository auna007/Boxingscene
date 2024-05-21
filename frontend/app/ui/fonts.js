import { Inter, Roboto } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const roboto = Roboto(
    {
        weight: ['100', '300', '400', '500', '700', '900'],
        subsets: ['latin']
    }
)