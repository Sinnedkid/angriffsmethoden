import Image from "next/image";
import './page.css'
import Link from "next/link";

export default function Home() {
  return (
      <div className="reset-box">
          <Image
              src="/dhbwlogo.png"
              alt="DHBW Logo"
              width={600}
              height={400}
          />

        <h2>Passwort zurücksetzen</h2>
        <p>
          Gib deine E-Mail und dein aktuelles Passwort ein, um dein Passwort zurückzusetzen.
        </p>

        <form>
          <input type="email" name="email" placeholder="E-Mail-Adresse" required />
          <input type="password" name="old-password" placeholder="Aktuelles Passwort" required />
          <Link href="/phished"><button type="submit">Zurücksetzen</button></Link>
        </form>

        <div className="footer">
          <a href="/">Zurück zur Startseite</a>
        </div>
      </div>
  );
}
