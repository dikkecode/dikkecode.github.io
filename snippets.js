const snippets = [
    {
        filename: "koffie.py",
        lang: "python",
        code: `# Stap 1: koffie zetten
# Stap 2: code schrijven
# Stap 3: beseffen dat de koffie koud is

import time

class Programmeur:
    def __init__(self):
        self.koffie = 100
        self.motivatie = self.koffie

    def werk(self):
        while self.koffie > 0:
            self.koffie -= 1
            self.motivatie = self.koffie
        return "Ik ga naar huis"`,
        uitleg: `<strong>Herkenbaar?</strong> De motivatie van een programmeur is direct gekoppeld aan het koffieniveau. Zodra de koffie op is, is het tijd om naar huis te gaan.`
    },
    {
        filename: "todo.js",
        lang: "javascript",
        code: `// TODO: dit later fixen
// TODO: dit ook later fixen
// TODO: uitzoeken waarom alles kapot is

const todo = [
  "bugs fixen",
  "tests schrijven",
  "documentatie bijwerken",
  "Netflix kijken",
];

const watIkEchtDoe = todo.filter(
  (t) => t.includes("Netflix")
);

console.log(watIkEchtDoe);
// ["Netflix kijken"]`,
        uitleg: `<strong>Eerlijkheid duurt het langst.</strong> Je kunt een hele todo-lijst maken, maar we weten allemaal wat er echt gaat gebeuren vanavond.`
    },
    {
        filename: "vergadering.sql",
        lang: "sql",
        code: `-- Zoek alle vergaderingen die ook
-- een e-mail hadden kunnen zijn

SELECT *
FROM vergaderingen
WHERE duur > '30 minuten'
  AND nuttige_besluiten = 0
  AND iemand_zei = 'Kunnen we dit offline bespreken?'
ORDER BY frustratie DESC;

-- Resultaat: 847 rijen gevonden
-- Elapsed time: heel je carrière`,
        uitleg: `<strong>847 rijen!</strong> Als je vergaderingen kunt querien, dan weet je dat de meeste gewoon een Slack-berichtje hadden kunnen zijn.`
    },
    {
        filename: "stages_of_debugging.ts",
        lang: "typescript",
        code: `type Fase =
  | "Ontkenning"
  | "Woede"
  | "Onderhandelen"
  | "StackOverflow"
  | "Acceptatie";

function debug(bug: string): Fase {
  console.log("Dit kan niet kloppen...");
  console.log("WAAROM WERKT DIT NIET?!");
  console.log("Als ik dit fix, ga ik om 5 uur weg");
  console.log("Oh wacht, StackOverflow...");
  return "Acceptatie";
  // Het was een puntkomma.
}`,
        uitleg: `<strong>De 5 fases van debuggen.</strong> Na uren zoeken is het altijd iets stoms. Een puntkomma. Een typo. Een ontbrekende haakje. Altijd.`
    },
    {
        filename: "git_excuses.sh",
        lang: "bash",
        code: `#!/bin/bash
# Genereer een excuus voor je git commit

excuses=(
  "Werkte op mijn machine"
  "Oeps"
  "Fix van de fix van de fix"
  "Vrijdagmiddagcommit, YOLO"
  "Niet mijn schuld"
  "Ik snap niet waarom dit werkt"
  "Hier was ik niet trots op"
  "Aub niet reviewen"
)

random=$(( RANDOM % \${#excuses[@]} ))

git commit -m "\${excuses[$random]}"

echo "Commit bericht: \${excuses[$random]}"
echo "Geen zorgen, niemand leest commit messages toch"`,
        uitleg: `<strong>Eerlijke git commits.</strong> Vergeet "feat:" en "fix:" — dit zijn de commit-berichten die we echt willen schrijven.`
    },
    {
        filename: "schoonmaak.css",
        lang: "css",
        code: `/* Stap 1: Netjes beginnen */
.container {
  display: flex;
  justify-content: center;
}

/* Stap 2: Hmm, waarom werkt dit niet */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
}

/* Stap 3: PANIEK */
.container {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
}

/* Het werkt. Niet aanraken. */`,
        uitleg: `<strong>De 3 fases van CSS.</strong> Van netjes naar !important-chaos. En als het eenmaal werkt: niemand raakt het meer aan.`
    },
    {
        filename: "interview.java",
        lang: "java",
        code: `/**
 * Sollicitatiegesprek vs. Echt werk
 * @author Elke programmeur ooit
 */
public class Sollicitatie {

    // Wat ze vragen:
    public BinaryTree invertTree(BinaryTree root) {
        // Inverteer een binaire boom in O(n)
        // terwijl 3 mensen je aanstaren
        return magicComplexAlgorithm(root);
    }

    // Wat je echt doet op werk:
    public String echtWerk() {
        return "Jira-tickets verplaatsen";
    }
}`,
        uitleg: `<strong>Herkenbaar?</strong> In het sollicitatiegesprek moet je een binaire boom inverteren. Op werk verplaats je Jira-tickets van "To Do" naar "In Progress" naar "To Do".`
    },
    {
        filename: "hond.py",
        lang: "python",
        code: `class Hond:
    def __init__(self, naam):
        self.naam = naam
        self.is_brave_jongen = True  # altijd

    def blaf(self):
        return "WOEF! " * 3

    def haal_op(self, ding):
        if ding == "bal":
            return f"{self.naam} brengt de bal terug!"
        return f"{self.naam} kijkt je aan en gaat liggen"

max = Hond("Max")
print(max.blaf())
print(max.haal_op("bal"))
print(max.haal_op("afstandsbediening"))
print(f"Brave jongen? {max.is_brave_jongen}")`,
        uitleg: `<strong>max.is_brave_jongen = True</strong> — Dit is de enige boolean in je code die nooit verandert. Max haalt alleen ballen op, de rest negeert hij vrolijk.`
    },
    {
        filename: "wachtwoord.rb",
        lang: "ruby",
        code: `# Wachtwoordbeleid anno 2026

def valideer_wachtwoord(ww)
  eisen = [
    ww.length >= 12,
    ww.match?(/[A-Z]/),
    ww.match?(/[a-z]/),
    ww.match?(/[0-9]/),
    ww.match?(/[!@#$%^&*]/),
    ww.include?("een emoji"),
    ww.include?("naam van je eerste huisdier"),
    ww.include?("je favoriete kleur"),
    ww.include?("het antwoord op het leven"),
  ]

  if eisen.all?
    "Wachtwoord geaccepteerd! (dit vergeet je morgen)"
  else
    "Niet sterk genoeg. Probeer je hele levensgeschiedenis."
  end
end`,
        uitleg: `<strong>Wachtwoordbeleid in 2026.</strong> Je hebt 12 tekens, hoofdletters, cijfers, speciale tekens, een emoji, en je hele levensgeschiedenis nodig. En dan vergeet je het alsnog.`
    },
    {
        filename: "eten.go",
        lang: "go",
        code: `package main

import "fmt"

type Collega struct {
    Naam    string
    Honger  int
}

func watEtenWe(team []Collega) string {
    for _, c := range team {
        fmt.Printf("%s: Maakt mij niet uit\\n", c.Naam)
    }
    // 45 minuten later...
    return "Febo"
}

func main() {
    team := []Collega{
        {"Pieter", 8},
        {"Lisa", 9},
        {"Ahmed", 7},
    }
    fmt.Println(watEtenWe(team))
}`,
        uitleg: `<strong>Het dagelijkse lunch-dilemma.</strong> Iedereen zegt "maakt mij niet uit" en 45 minuten later sta je bij de Febo. Elke. Dag. Weer.`
    },
    {
        filename: "prod_deploy.yaml",
        lang: "yaml",
        code: `# deployment-plan.yaml
# "Het is maar een kleine aanpassing"

stappen:
  - naam: "Code pushen naar productie"
    wanneer: "vrijdag 16:55"
    reviewer: "niemand"
    tests: "die doen we maandag"

  - naam: "Paniek"
    wanneer: "vrijdag 17:01"
    actie: "git revert HEAD"

  - naam: "Ontkenning"
    wanneer: "vrijdag 17:05"
    actie: "laptop dichtklappen"

  - naam: "Maandagochtend"
    wanneer: "maandag 09:00"
    actie: "'Het lag aan de server'"`,
        uitleg: `<strong>Vrijdagmiddag-deploy.</strong> De beroemde laatste woorden: "Het is maar een kleine aanpassing." Spoiler: dat is het nooit.`
    },
    {
        filename: "ai_helper.py",
        lang: "python",
        code: `# Hoe programmeurs in 2026 code schrijven

def schrijf_code(probleem):
    # Stap 1: Vraag het aan AI
    antwoord = ai.vraag(probleem)

    # Stap 2: Kopieer het antwoord
    code = antwoord.kopieer()

    # Stap 3: Het werkt niet
    ai.vraag("Waarom werkt dit niet?")

    # Stap 4: Kopieer het nieuwe antwoord
    code = antwoord.kopieer()

    # Stap 5: Herhaal tot het werkt
    while not code.werkt():
        code = ai.vraag("Help alsjeblieft")

    return code  # Geen idee hoe het werkt`,
        uitleg: `<strong>Programmeren in 2026.</strong> Kopieer, plak, "waarom werkt dit niet?", herhaal. Het resultaat werkt, maar niemand weet waarom.`
    },
    {
        filename: "error_handling.rs",
        lang: "rust",
        code: `use std::error::Error;

// Hoe je errors MOET afhandelen:
fn netjes() -> Result<String, Box<dyn Error>> {
    let data = lees_bestand("config.toml")?;
    let config = parse(&data)?;
    Ok(config.naam)
}

// Hoe je errors ECHT afhandelt:
fn echt() -> String {
    lees_bestand("config.toml")
        .unwrap()  // gaat vast goed
        .parse()
        .unwrap()  // wat kan er misgaan?
        .naam
        .clone()  // geen idee waarom maar het werkt
}

// "Ik fix de error handling later"
// - Iedere programmeur, vlak voor productie`,
        uitleg: `<strong>.unwrap() gang!</strong> We weten allemaal dat we errors netjes moeten afhandelen. We doen het alleen nooit. "Het gaat vast goed" is ons mantra.`
    },
    {
        filename: "standup.kt",
        lang: "kotlin",
        code: `// De dagelijkse standup

data class StandupUpdate(
    val gisteren: String,
    val vandaag: String,
    val blocker: String
)

fun standupAntwoord(): StandupUpdate {
    return StandupUpdate(
        gisteren = "Bezig geweest met... dingen",
        vandaag  = "Ga verder met... die dingen",
        blocker  = "Geen blockers"
            // (behalve motivatie)
    )
}

// Duur standup: 15 minuten
// Waarvan nuttig: 2 minuten
// Waarvan "kan dit niet async?": 13 minuten`,
        uitleg: `<strong>De standup-formule.</strong> Gisteren: dingen. Vandaag: meer dingen. Blockers: alleen mijn eigen motivatie. Zelfde antwoord, elke dag.`
    },
    {
        filename: "darkmode.jsx",
        lang: "jsx",
        code: `import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [dark, setDark] = useState(true);
  // ^^^ standaard AAN want we zijn programmeurs

  useEffect(() => {
    if (!dark) {
      alert("MIJN OGEN! Wie gebruikt er light mode?!");
      setDark(true); // nee, terug naar dark
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? '\u{1F319}' : '\u{2600}\u{FE0F} (waarom?!)'}
    </button>
  );
}`,
        uitleg: `<strong>Dark mode is geen keuze, het is een levensstijl.</strong> Light mode? Dan moet je eerst door een alert heen. En dan gaat het vanzelf weer terug naar dark mode.`
    },
    {
        filename: "printer.c",
        lang: "c",
        code: `/* De kantoorprinter: een horrorverhaal in C */

#include <stdio.h>
#include <stdbool.h>

typedef struct {
    bool papier;
    bool inkt;
    bool online;
    bool zin_om_te_werken;
} Printer;

int print(Printer *p) {
    if (p->papier && p->inkt && p->online) {
        // Alle voorwaarden zijn goed?
        // Maakt niet uit.
        printf("PC LOAD LETTER\\n");
        return -1;  // faal toch maar
    }
    return -1;  // faal sowieso
}`,
        uitleg: `<strong>De kantoorprinter.</strong> Het maakt niet uit of er papier in zit, of er inkt is, of hij online is — hij gaat toch niet werken. return -1, altijd.`
    },
    // === NEW SNIPPETS ===
    {
        filename: "borrow_checker.rs",
        lang: "rust",
        code: `// De Rust borrow checker: je strenge moeder

fn main() {
    let mut koekje = String::from("stroopwafel");

    let referentie = &koekje;
    // koekje.push_str(" met slagroom");
    // ^^^ COMPILER ZEGT NEE

    println!("Ik wil alleen maar: {}", referentie);

    // De 5 fases van Rust:
    // 1. "Wat is een lifetime?"
    // 2. "Waarom mag dit niet?"
    // 3. ".clone() op alles"
    // 4. "Ohhh, ik snap het!"
    // 5. "Waarom mag DIT niet?"

    let _noodoplossing = koekje.clone(); // altijd werkt
}`,
        uitleg: `<strong>De Rust borrow checker is je strenge moeder.</strong> "Je mag niet twee keer lenen!" De noodoplossing? .clone() op alles. Performance? Dat is een probleem voor toekomstige-jij.`
    },
    {
        filename: "kubernetes.yaml",
        lang: "yaml",
        code: `# Het begon met 1 simpele website...

apiVersion: apps/v1
kind: Deployment
metadata:
  name: simpele-website
  labels:
    complexity: "waarom"
spec:
  replicas: 3  # je hebt 2 bezoekers
  selector:
    matchLabels:
      app: overkill
  template:
    spec:
      containers:
      - name: nginx
        image: nginx:latest  # "latest" is toch prima?
        resources:
          requests:
            memory: "128Mi"  # voor een HTML pagina
            cpu: "500m"       # het is maar wat CSS

# TODO: service mesh toevoegen
# TODO: istio configureren
# TODO: prometheus + grafana
# TODO: misschien gewoon Netlify gebruiken?`,
        uitleg: `<strong>Van HTML naar Kubernetes.</strong> Je wilde een simpele website hosten. Nu heb je 14 YAML-bestanden, een service mesh, en een cluster dat meer kost dan je huur.`
    },
    {
        filename: "regex.py",
        lang: "python",
        code: `import re

# "Ik weet het, ik gebruik een regex!"
# Nu heb je twee problemen.

def valideer_email(email):
    # Poging 1: simpel
    pattern = r".+@.+"

    # Poging 2: iets beter
    pattern = r"[\\w.-]+@[\\w.-]+\\.\\w+"

    # Poging 3: "correct" (gevonden op StackOverflow)
    pattern = (
        r"(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\."
        r"[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|\"(?:"
        r"[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21"
        r"\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-"
        r"\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@"
        # ... nog 200 regels
    )

    # Poging 4: acceptatie
    return "@" in email  # goed genoeg`,
        uitleg: `<strong>Nu heb je twee problemen.</strong> Elke programmeur doorloopt dezelfde regex-fases: simpel, beter, StackOverflow-monster, en uiteindelijk: "zit er een @ in? Goed genoeg."`
    }
];
