import './phishing.css'
import Image from "next/image";

export default function Phished () {
    return (
        <div className="warning">
            <h2>⚠️ Achtung: Sie haben auf einen Phishing-Link geklickt!</h2>
            <p>
                Diese Seite ist Teil eines internen Sicherheitstrainings. Ziel ist es, das Bewusstsein
                für Phishing-Angriffe zu schärfen.
            </p>

            <h3>Erhaltene Phishing-E-Mail:</h3>
            <Image
                src="/PhishingMail.png"
                alt="Phishing Mail"
                width={1200}
                height={1000}
            />

            <h3>Woran erkennt man Phishing?</h3>
            <ul>
                <li>1. Allgemeines Anschreiben</li>
                <li>2. Anfragen nach persönlichen Daten oder Passwörtern</li>
                <li>3. Links, die zu unbekannten oder gefälschten Seiten führen</li>
                <li>4. Mail scheinbar von zentraler Stelle</li>
            </ul>

            <h3>Zusätzliche Erkennungsmerkmale für Phishing:</h3>
            <ul>
                <li>Verdächtige oder ungewohnte Absenderadresse</li>
                <li>Dringlichkeitsdruck („Handeln Sie sofort!“)</li>
                <li>Ungewöhnliche oder fehlerhafte Sprache</li>
            </ul>

            <p>
                Wenn Sie unsicher sind: Kontaktieren Sie die IT-Abteilung, bevor Sie auf etwas klicken.
            </p>
        </div>
    );
}