// alap komponens
import { Card } from "@mantine/core";

export default function CCard(props) {

    // kártya 3 szekcióval. az első legyen a rövidítés, a második a cím, a harmadik a leírás
    return (
        <Card shadow="sm" p="lg" className="custom-card">
            <Card.Section>
                <h1>{props.short.toUpperCase()}</h1>
                <i><h2>{props.title}</h2></i>
            </Card.Section>
            <Card.Section>
                <p>{props.desc}</p>
            </Card.Section>
        </Card>
    );
}