"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const ingredients = [
  { id: "1", ingredient: "Arborio-Reis", amount: "320g" },
  { id: "2", ingredient: "Zwiebel", amount: "1 mittelgroß" },
  { id: "3", ingredient: "Knoblauch", amount: "2 Zehen" },
  { id: "4", ingredient: "Butter", amount: "50g" },
  { id: "5", ingredient: "Olivenöl", amount: "2 EL" },
  { id: "6", ingredient: "Weißwein", amount: "120ml" },
  { id: "7", ingredient: "Hühner- oder Gemüsebrühe", amount: "1,2 Liter" },
  { id: "8", ingredient: "Parmesan", amount: "80g" },
  { id: "9", ingredient: "Salz und Pfeffer", amount: "Nach Geschmack" },
];

const Anleitung = [
  {
    schritt: 1,
    zutaten: ["Arboria-Reis"],
    anleitung:
      "Bringe die Brühe zum Kochen und halte sie dann auf niedriger Stufe warm.",
  },
  {
    schritt: 2,
    zutaten: ["Zwiebel", "Knoblauch", "Butter", "Olivenöl"],
    anleitung:
      "In einem Topf die Zwiebeln und den Knoblauch in der Butter und dem Olivenöl anbraten, bis sie glasig sind. Dann den Reis hinzufügen und unter ständigem Rühren anbraten, bis er glasig ist.",
  },
  {
    schritt: 3,
    zutaten: ["Weißwein"],
    anleitung:
      "Den Weißwein hinzufügen und unter Rühren einkochen lassen, bis er vollständig vom Reis aufgenommen wurde.",
  },
  {
    schritt: 4,
    zutaten: ["Hühner- oder Gemüsebrühe"],
    anleitung:
      "Etwa eine Kelle Brühe zum Reis hinzufügen und unter Rühren köcheln lassen, bis die Flüssigkeit vollständig vom Reis aufgenommen wurde. Dann die nächste Kelle Brühe hinzufügen und so weiter, bis der Reis gar ist und eine cremige Konsistenz hat.",
  },
  {
    schritt: 5,
    zutaten: ["Parmesan", "Salz und Pfeffer"],
    anleitung:
      "Den Parmesan unter das Risotto rühren und mit Salz und Pfeffer abschmecken. Serviere das Risotto sofort, garniert mit frischen Kräutern und zusätzlichem Parmesan, falls gewünscht.",
  },
];

export default function RisottoRezept() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button onClick={() => router.push("/")} className={styles.backButton}>
        Zurück zur Startseite
      </button>
      <h1 className={styles.title}>Risotto Rezept für 4 Personen</h1>

      <h2 className={styles.subtitle}>Zutaten</h2>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Zutat</th>
            <th>Menge</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {ingredients.map((item, idx) => (
            <tr key={idx}>
              <td>{item.ingredient}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className={styles.subtitle}>Kochanleitung</h2>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Schritt</th>
            <th>Zutaten</th>
            <th>Anleitung</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {Anleitung.map((item, idx) => (
            <tr key={idx}>
              <td>{item.schritt}</td>
              <td>{item.zutaten.join(", ")}</td>
              <td>{item.anleitung}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
