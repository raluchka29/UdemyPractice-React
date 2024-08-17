import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";
import type { PLace } from "./api/Place";
import { useState } from "react";

function App() {
const [place, setPlace] = useState<Place | null>(null);

    return <div className="h-screen w-screen grid grid-cols-12">
        {place?.name}
    <div className="col-span-3 p-2">
        <LocationSearch onPLaceClick={(p) => setPlace(p)} />
    </div>
    <div className="col-span-9">
        <Map place={place}/>
    </div>
    </div>
};

export default App;