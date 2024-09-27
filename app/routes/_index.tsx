// Base styles for media player and provider (~400B).
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { Card, CardContent } from '../components/ui/card'
import VerticalChart from '../components/ui/verticalChart';
import AlertCard from '~/components/ui/alertCard';

export default function _index() {
  return (
    <>
        <div className="container grid grid-rows-3 grid-flow-col gap-4 mt-1">
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
        </div>
    </>
  )
}
