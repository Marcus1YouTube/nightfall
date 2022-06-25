import { LinkStorage } from "../components/LinkStorage";
import { useEffect } from "react";
import CCard from "../components/CCard";

export default function Concepts() {
    useEffect(() => {
        document.title = "Nightfall RP - RP Fogalmak";
    }, []);
    return (
        <div className="Concepts">
        <h1>RP Fogalmak</h1>
        <p>Itt találhatók azok a Roleplay fogalmak, amelyek fontosak az RP-hez.</p>
        <div className="card-grid">
            <CCard short="rp" title="Roleplay" desc="Szerepjáték" />
            <CCard short="nonrp" title="Nem szerepjáték" desc="Szabálytalanul játszott szerepjáték" />
            <CCard short="irl" title="In Real Life" desc="A való életben" />
            <CCard short="ic" title="In Character" desc="Karakteren belüli cselekedetek/történések" />
            <CCard short="ooc" title="Out Of Character" desc="Karakteren kívüli cselekedetek/történések" />
            <CCard short="mg" title="Meta Gaming" desc="OOC adatok felhasználása IC" />
            <CCard short="pg" title="Power Gaming" desc="Hősködés" />
            <CCard short="rk" title="Revenge Kill" desc="Bosszúból való ölés" />
            <CCard short="dm" title="Death Match" desc="Indíték nélküli gyilkolászás" />
            <CCard short="db" title="Drive By" desc="Járművel való gyilkolás" />
            <CCard short="tk" title="Team Kill" desc="Csapattárs meggyilkolása" />
            <CCard short="sk" title="Spawn Kill" desc="A játékba épp csak belépett, vagy valahonnan ki-belépő játékos megölése" />
            <CCard short="nrk" title="Nem Reális Közlekedés" desc="Az rp keretein kívül eső közlekedési forma. PL.: sportautó terepen való használata" />
            <CCard short="hq" title="HeadQuarter" desc="Egy frakció föhadiszállása, kizárólag OOC használható" />
            <CCard short="fail rp" title="Szereptévesztés" desc="Olyan cselekedeted, ami nem egyeztethető össze az RP-zett karakterrel" />
            <CCard short="force rp" title="Kényszerített RP" desc="Saját RP ráeröltetése a másik játékosra" />
        </div>
        <LinkStorage />
        </div>
    );
}