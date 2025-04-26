import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const HomePage: NextPage = () => {
  const [data, setData] = React.useState({
    name: 'Enter Name',
  } as { name: string });
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-14">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Input
          type="text"
          className="flex w-2xs"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key == 'Enter') {
              e.preventDefault();
              const inputValue = e.currentTarget.value;
              if (inputValue) {
                fetch('/api/hello', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ name: inputValue }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    setData(data);
                  })
                  .catch((error) => {
                    console.error('Error fetching data:', error);
                  });
              }
              setName('');
            }
          }}
        />
        <Button>Outline</Button>
        {data && (
          <div className="text-2xl font-bold">
            <Link href={'/chatbot'}>{data.name}</Link>
          </div>
        )}
      </div>
    </>
  );
};
export default HomePage;
