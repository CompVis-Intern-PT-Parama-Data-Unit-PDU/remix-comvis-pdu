import type { LoaderFunctionArgs } from "@remix-run/node";


export const Camloader = async ({ request }: LoaderFunctionArgs) => {
  return null;
};

export const Chartloader = async ({ request }: LoaderFunctionArgs) => {
    return null;
  };

export default function DetailCam() {
  return (
    <div>
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
    </div>
  )
}
