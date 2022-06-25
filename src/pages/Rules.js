import { LinkStorage } from "../components/LinkStorage";
import { useEffect } from "react";

export function Rules() {
    useEffect(() => {
        document.title = "Nightfall RP - Szerver szabályok";
    }, []);
    return (
        <div className="Rules">
            
            <h1>Szerver szabályok</h1>
            <p>
                - Tilos a DB! <br />
                - Tilos a DM! <br />
                - Tilos a ForceRP! <br />
                - Tilos az MG! <br />
                - Tilos az SK! <br />
                - Tilos RP szituációt adminüggyel megszakítani! (Amennyiben szabálytalannak érzed a szituációt /report funkcióval jelezd az adminok felé, hogy spectateljenek és az RP szituáció végén rendezzétek a felmerülő problémákat) <br />
                - Tilos RP szituációban a /die paranccsal meghalni, valamint bármiféle ÖNGYILKOS RP! <br />
                - Tilos más játékosok OOC minősítése! <br />
                - Tilos az IC megszerezhető dolgokat OOC eladni! <br />
                - Tilos az OOC IC közben! <br />
                - Tilos bármilyen bug/glitch/exploit kihasználása! (Ha ilyet találsz akkor jelentsd a bug jelentések szobában, vagy egy adminnak privátban) <br />
                - A szerver NightFall jogszabályok szerint üzemel! <br />
                - Tilos a hangtorzító használata! (Kivétel ha normálisan tudja valaki használni, és színesíti az RP szituációkat) <br />
                - RP szituáció nélküli túlzott alpári RP tilos! Amennyiben köthető hozzá RP szál illetve úgy viselkedik az illető intézzék el IC a problémákat. Amennyiben lezárult a szituáció és újra ugyan azzal az emberrel elkezdi az alpári RP-t ok nélkül, szankciót von maga után! ( Anyázni továbbra is tilos! ) <br />
                - Minden NightFall szerveren történő élő közvetítésben semmilyen szexuális aktus és ennek permutációi nem mutathatóak sem kép sem hang formájában! <br />
                - (RDM) Random Death Match : Lövöldözés bármilyen emberrel illetve csapattal történetszál nélkül. <br />
                Ha a történtek miatt feszültség van két banda között nem feltétlen kellene mindig lövöldözés szituációt kezdeményezni. <br />
                Például: Egy történés miatt megölt az X banda Y bandából 3 embert akkor ez kezdeményezhet bandaháborút a két fél között. Amint megtörtént emiatt a bandaháború akkor ez a szál lezárult tehát TILOS még egyszer háborúzni új történetszál nélkül.A mai nappal a szerver szabályzata jelentős mennyiségű pontban módosult. @Listázott lh <br />

                -Túsztárgyalásnál az elkövetőknek és a túsztárgyalónak is a kulturált RP-re kell törekedni. (pl.: túsztárgyalás közben nem futkorásznak az elkövetők, nem hagyják ott a túszt, ha azt az RP nem követeli meg, stb.) <br />

                -Autókereskedésben tilos kirabolni, elrabolni egymást. <br />

                -Munkaügyi központ körül tilos kirabolni, elrabolni egymást. <br />

                -Tilos frakciókat kötelezni felhívásban való üzengetésre. <br />

                -Minden illegális frakciónak induláskor kötelező egy színt választani, ezt a színt a későbbiekben nem változtathatják meg. <br />

                -Az illegális frakciók ruháját csak nyomós indokkal, IC előzménnyel, illetve engedéllyel lehet cserélni, engedélyt ticket formájában egy Super Admintól lehet igényelni. <br />

                -Közmunka alatt tilos bármiféle kommunikáció IC (rádió, telefon, stb...) Ez IC-OOC keverésnek minősül és további szankcióval jár. <br />

                -Tilos a karakterednek híresség nevét megadni. <br />

                -Nagyszabású PD akciók (fegyver, pénz, piszkospénz szállítás) előtt 20 perccel tilos bármilyen rablást, túszdrámát elkezdeni. <br />

                -Rablások utáni rabszállítás előtt és alatt tilos rablást indítani, ez alól kivételt képez, ha az elkövetők bizonyítottan tudják, hogy a társukat szállítják, ekkor a túszdráma engedélyezett. <br />

                -Tilos a rendőröket, szerelőket, mentőket bármilyen módon arra kényszeríteni, hogy felvegyék a szolgálatot. <br />

                -Láblövéssel csak a script szerint engedélyezett futkorászni (ha nagyon sántítasz, folyamatosan elesel, akkor nem folytathatod az RP-t) <br />

                -Frakció leader korhatár: 13év. <br />

                -Tilos a frakció leader váltás, erre csak nagyon kirívó esetekben van lehetőség, akkor is engedélyt kell kérni egy Super Admintól. <br />

                -Szigorúan tilos "szellemtússzal", vagy egyéb megnevezésű, a rablás helyszínén nem megtalálható tússzal rabolni, a túsznak mindig ott kell lennie a rabláson. <br />

                -Tilos külső tússzal rabolni.- Nincs tényleges halál a szerveren csak ck-val, helyette amnézia van amivel ugyan úgy el kell felejtened az utolsó RP szituációt! <br />
                - Ha adminra/moderátorra van szükséged használd a /report parancsot!  /report a szöveg tartalmazza a problémádat és ne csak annyit írj, hogy "adminra van szükségem". <br />
                - A reportban OOC konkrét és normális megfogalmazás elvárt! (egyéb esetben nem reagálunk a reportra, vagy akár szankcionálhatjuk is amennyiben az teljes mértékben elfogadhatatlan!) <br />
                - Tilos az indokolatlan és ész nélküli lövöldözés! <br />
                - Amennyiben RP-vel kidobatnak veled bármit azt ténylegesen ki kell dobnod! <br />
                - Tilos önszántadból betölteni a túsz szerepet illetve pénzért túszokat venni! <br />
                - Ha olyan helyzetben tartasz fegyvert egy emberre ami nem feltétlen látható nem minősül pg-nek! (pl: autóból) <br />
                - Ember kirablása során tilos a számlájáról pénzt utaltatni a saját számládra illetve levetetni vele és elvenni tőle! <br />
                - Olyan járműben ahol nincs hátsó ablak vagy az nem belőhető, abban tilos hátrafele lőni. (pl.: Lambo) <br />
                - Tilos a hangfelismerés! <br />
                - Folyamatban lévő rablás más csapat által csak a rendőrségi felhívás elött támadható. <br />
                - Autós üldözés közben másik csapat csak akkor csatlakozhat, ha rendőr már nem üldözi az adott tagot. (Rendőrségi járművet nem zavarhatja) <br />
                - Tilos a felesleges admin ügyek generálása és a "csak megszeretném beszélni a szituációt"! Amennyiben úgy érzed biztosan szabálytalanság történ <br />
                - Jármű hintáztatása lövésnél szigorúan tilos. <br />

                - Tilos más autóval végezni a munkát, csak a munkajárművet lehet használni az adott munkához! <br />

                A rendvédelem tagjaitól tilos szolgálati fegyvereket eltulajdonítani. (Kivéve: Gumilövedékes Shotgun) <br />
                Szolgálati fegyverek elvétele egyetlen esetben engedélyezett: ha a rendőr/sheriff magánál tartja őket szolgálaton kívül és/vagy nincs rajta egyenruha. <br />

                -Szerelők védettségére és az illegális tevékenységükre vonatkozó szabályozást töröltük <br />
                -Szerelők információ kiadási titoktartására vonatkozó szabályokat ugyancsak töröltük <br />
                -Szerelőt ugyan úgy nem rabolhattok ki/el ha ti hívtátok ki esetre <br />
            </p>
            <LinkStorage />
            
        </div>
    );
}