import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Clients() {
  // The client data is hardcoded based on our database query
  const clients = [
    { id: 1, name: "pre-existing-client" },
    { id: 2, name: "test_client" },
    { id: 3, name: "test_client_2-modified" }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Client Management
        </p>
      </div>

      <div className="mb-32 w-full max-w-5xl text-center lg:mb-0">
        <h1 className="text-4xl font-bold mb-8">Clients</h1>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 dark:bg-zinc-800 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-200 dark:bg-zinc-700">
                <th className="py-3 px-6 text-left font-semibold border-b dark:border-gray-600">ID</th>
                <th className="py-3 px-6 text-left font-semibold border-b dark:border-gray-600">Name</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-100 dark:hover:bg-zinc-700">
                  <td className="py-3 px-6 border-b dark:border-gray-600">{client.id}</td>
                  <td className="py-3 px-6 border-b dark:border-gray-600">{client.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
} 