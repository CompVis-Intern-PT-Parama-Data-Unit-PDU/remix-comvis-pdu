// Base styles for media player and provider (~400B).
// import '@vidstack/react/player/styles/base.css';
// import { MediaPlayer, MediaProvider } from '@vidstack/react';
// import { Card, CardContent } from '../components/ui/card'
// import VerticalChart from '../components/ui/verticalChart';
// import AlertCard from '~/components/ui/alertCard';
import { useLoaderData } from '@remix-run/react';
import { ThemeToggle } from "~/components/mode-toggle"


type User = {
  id: number;
  name: string;
};

export const loader = async () => {
  const response = await fetch('http://localhost:3001/api/users');
  const users: User[] = await response.json();
  return users;
};

export default function _index() {
  const users = useLoaderData<User[]>();
  console.log(users);
  return (
    <>
        <h1 className="text-3xl mt-4">Landin Page</h1>
        <ThemeToggle />
        <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // Pastikan user memiliki property id dan name
        ))}
      </ul>
        <p className="text-lg mb-4">
            This is the landing page. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Provident, et soluta! Ducimus nesciunt, perspiciatis, <br />
            velit voluptatem iste, <br />
            asperiores sequi sed incidunt quibusdam est <br />
            distinctio error odit maxime exercitationem! <br />
            Explicabo, laborum.</p>
        {/* <div className="container grid grid-rows-3 grid-flow-col gap-4 mt-1">
            <div className="row-span-2 col-span-3">
                <Card>
                    <CardContent className="pt-4 bg-slate-500">
                    <MediaPlayer title="Sprite Fight" src="https://youtu.be/L0fb7IX024E?si=TKLITbPoh-PSR3Pl" autoPlay>
                        <MediaProvider />
                    </MediaPlayer>
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-3">
                <AlertCard />
            </div>
            <div className="row-span-3 bg-slate-500">
                <VerticalChart />
            </div>
        </div> */}
    </>
  )
}
