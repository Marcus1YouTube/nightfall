import { useEffect } from "react";
import { LinkStorage } from "../components/LinkStorage";

export default function Home() {
  useEffect(() => {
    document.title = "Nightfall RP - Főoldal";
  }, []);

  return (
    <div className="Home">
      <h1>Üdvözlünk a Nightfall RP szerver oldalán!</h1>
      <p><b>MÉG</b> itt nincs semmi, de hamarosan lesz. Addig nézd meg a többi oldalt a "Linktár megnyitása" gombbal!</p>
      <LinkStorage />
    </div>
  );
}
