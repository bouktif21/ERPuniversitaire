"""
Base de données universitaire complète.
Contient : étudiants, cours, professeurs, emplois du temps, notes.
"""

# ─────────────────────────────────────────────────────────────────────────────
# PROFESSEURS
# ─────────────────────────────────────────────────────────────────────────────
PROFESSORS = {
    "PROF-001": {
        "id": "PROF-001",
        "name": "Dr. Ahmed Hassan",
        "email": "a.hassan@univ.tn",
        "phone": "+216 71 234 567",
        "specialite": "Informatique – Intelligence Artificielle",
        "bureau": "Bâtiment A, Bureau 201",
        "cours": ["CS301", "CS401"],
        "heures_reception": "Lundi et Mercredi, 13h00 – 15h00",
        "grade": "Professeur titulaire",
    },
    "PROF-002": {
        "id": "PROF-002",
        "name": "Dr. Laila Mansour",
        "email": "l.mansour@univ.tn",
        "phone": "+216 71 234 568",
        "specialite": "Mathématiques – Algèbre",
        "bureau": "Bâtiment B, Bureau 105",
        "cours": ["MATH201", "MATH101"],
        "heures_reception": "Mardi et Jeudi, 10h00 – 12h00",
        "grade": "Maître de conférences",
    },
    "PROF-003": {
        "id": "PROF-003",
        "name": "Prof. Omar Zayani",
        "email": "o.zayani@univ.tn",
        "phone": "+216 71 234 569",
        "specialite": "Physique – Électronique",
        "bureau": "Bâtiment C, Bureau 310",
        "cours": ["PHYS101", "ELE201"],
        "heures_reception": "Mercredi, 14h00 – 16h00",
        "grade": "Professeur associé",
    },
    "PROF-004": {
        "id": "PROF-004",
        "name": "Dr. Nadia Gharbi",
        "email": "n.gharbi@univ.tn",
        "phone": "+216 71 234 570",
        "specialite": "Gestion – Comptabilité",
        "bureau": "Bâtiment D, Bureau 215",
        "cours": ["GES301", "ECO201"],
        "heures_reception": "Lundi, 09h00 – 11h00",
        "grade": "Professeur titulaire",
    },
    "PROF-005": {
        "id": "PROF-005",
        "name": "Prof. Sami Ben Amor",
        "email": "s.benamor@univ.tn",
        "phone": "+216 71 234 571",
        "specialite": "Électronique – Circuits",
        "bureau": "Bâtiment C, Bureau 120",
        "cours": ["ELE101", "ELE202"],
        "heures_reception": "Jeudi, 13h00 – 15h00",
        "grade": "Maître assistant",
    },
    "PROF-006": {
        "id": "PROF-006",
        "name": "Dr. Rim Bouaziz",
        "email": "r.bouaziz@univ.tn",
        "phone": "+216 71 234 572",
        "specialite": "Informatique – Bases de données",
        "bureau": "Bâtiment A, Bureau 305",
        "cours": ["CS302", "CS201"],
        "heures_reception": "Vendredi, 10h00 – 12h00",
        "grade": "Maître de conférences",
    },
    "PROF-007": {
        "id": "PROF-007",
        "name": "Dr. Khalil Ferchichi",
        "email": "k.ferchichi@univ.tn",
        "phone": "+216 71 234 573",
        "specialite": "Marketing – Management",
        "bureau": "Bâtiment D, Bureau 112",
        "cours": ["MKT101", "MGT201"],
        "heures_reception": "Mardi, 14h00 – 16h00",
        "grade": "Maître assistant",
    },
    "PROF-008": {
        "id": "PROF-008",
        "name": "Dr. Amina Dridi",
        "email": "a.dridi@univ.tn",
        "phone": "+216 71 234 574",
        "specialite": "Biochimie – Médecine",
        "bureau": "Bâtiment E, Bureau 401",
        "cours": ["BIO301", "MED401"],
        "heures_reception": "Lundi et Jeudi, 11h00 – 13h00",
        "grade": "Professeur titulaire",
    },
}

# ─────────────────────────────────────────────────────────────────────────────
# COURS
# ─────────────────────────────────────────────────────────────────────────────
COURSES = {
    "CS301": {
        "code": "CS301",
        "titre": "Algorithmes et Structures de Données",
        "description": "Algorithmes de tri, recherche, graphes et complexité.",
        "credits": 3,
        "professeur_id": "PROF-001",
        "semestre": "Printemps 2025",
        "salle": "Salle B101",
        "horaire": {
            "Lundi":    {"debut": "10:00", "fin": "11:30"},
            "Mercredi": {"debut": "10:00", "fin": "11:30"},
        },
        "capacite": 45,
        "inscrits": 42,
        "prerequis": ["CS201"],
    },
    "MATH201": {
        "code": "MATH201",
        "titre": "Algèbre Linéaire",
        "description": "Matrices, vecteurs, espaces vectoriels et transformations.",
        "credits": 3,
        "professeur_id": "PROF-002",
        "semestre": "Printemps 2025",
        "salle": "Salle A205",
        "horaire": {
            "Mardi":  {"debut": "14:00", "fin": "15:30"},
            "Jeudi":  {"debut": "14:00", "fin": "15:30"},
        },
        "capacite": 50,
        "inscrits": 48,
        "prerequis": ["MATH101"],
    },
    "CS302": {
        "code": "CS302",
        "titre": "Bases de Données",
        "description": "Modèle relationnel, SQL, transactions et optimisation.",
        "credits": 3,
        "professeur_id": "PROF-006",
        "semestre": "Printemps 2025",
        "salle": "Labo Info C203",
        "horaire": {
            "Mardi":    {"debut": "08:30", "fin": "10:00"},
            "Vendredi": {"debut": "08:30", "fin": "10:00"},
        },
        "capacite": 35,
        "inscrits": 35,
        "prerequis": ["CS201"],
    },
    "PHYS101": {
        "code": "PHYS101",
        "titre": "Physique Générale I",
        "description": "Mécanique classique, thermodynamique et optique.",
        "credits": 4,
        "professeur_id": "PROF-003",
        "semestre": "Printemps 2025",
        "salle": "Amphi D",
        "horaire": {
            "Lundi":    {"debut": "13:00", "fin": "14:30"},
            "Jeudi":    {"debut": "13:00", "fin": "14:30"},
        },
        "capacite": 80,
        "inscrits": 75,
        "prerequis": [],
    },
    "ELE101": {
        "code": "ELE101",
        "titre": "Circuits Électriques",
        "description": "Lois de Kirchhoff, théorèmes et circuits RC/RL.",
        "credits": 4,
        "professeur_id": "PROF-005",
        "semestre": "Printemps 2025",
        "salle": "Labo Élec E101",
        "horaire": {
            "Lundi":    {"debut": "08:30", "fin": "10:00"},
            "Mercredi": {"debut": "08:30", "fin": "10:00"},
        },
        "capacite": 30,
        "inscrits": 28,
        "prerequis": [],
    },
    "MATH101": {
        "code": "MATH101",
        "titre": "Calcul Différentiel et Intégral",
        "description": "Limites, dérivées, intégrales et séries.",
        "credits": 4,
        "professeur_id": "PROF-002",
        "semestre": "Printemps 2025",
        "salle": "Salle A101",
        "horaire": {
            "Mercredi": {"debut": "10:00", "fin": "11:30"},
            "Vendredi": {"debut": "10:00", "fin": "11:30"},
        },
        "capacite": 60,
        "inscrits": 58,
        "prerequis": [],
    },
    "GES301": {
        "code": "GES301",
        "titre": "Comptabilité Avancée",
        "description": "Comptabilité analytique, consolidation et reporting.",
        "credits": 3,
        "professeur_id": "PROF-004",
        "semestre": "Printemps 2025",
        "salle": "Salle D205",
        "horaire": {
            "Mardi":  {"debut": "10:00", "fin": "11:30"},
            "Jeudi":  {"debut": "10:00", "fin": "11:30"},
        },
        "capacite": 40,
        "inscrits": 38,
        "prerequis": ["GES201"],
    },
    "ECO201": {
        "code": "ECO201",
        "titre": "Macroéconomie",
        "description": "PIB, inflation, politiques monétaires et fiscales.",
        "credits": 3,
        "professeur_id": "PROF-004",
        "semestre": "Printemps 2025",
        "salle": "Amphi B",
        "horaire": {
            "Lundi":    {"debut": "14:00", "fin": "15:30"},
            "Mercredi": {"debut": "14:00", "fin": "15:30"},
        },
        "capacite": 70,
        "inscrits": 65,
        "prerequis": ["ECO101"],
    },
    "MKT101": {
        "code": "MKT101",
        "titre": "Marketing Fondamental",
        "description": "Marketing mix, segmentation, positionnement et digital.",
        "credits": 3,
        "professeur_id": "PROF-007",
        "semestre": "Printemps 2025",
        "salle": "Salle D110",
        "horaire": {
            "Vendredi": {"debut": "08:30", "fin": "10:00"},
        },
        "capacite": 50,
        "inscrits": 47,
        "prerequis": [],
    },
    "MED401": {
        "code": "MED401",
        "titre": "Anatomie Avancée",
        "description": "Systèmes organiques, neurologie et pathologies courantes.",
        "credits": 5,
        "professeur_id": "PROF-008",
        "semestre": "Printemps 2025",
        "salle": "Amphi Médecine",
        "horaire": {
            "Lundi":    {"debut": "08:00", "fin": "10:00"},
            "Mercredi": {"debut": "08:00", "fin": "10:00"},
            "Vendredi": {"debut": "08:00", "fin": "10:00"},
        },
        "capacite": 60,
        "inscrits": 55,
        "prerequis": ["MED301"],
    },
    "BIO301": {
        "code": "BIO301",
        "titre": "Biochimie",
        "description": "Métabolisme, enzymologie et biologie moléculaire.",
        "credits": 4,
        "professeur_id": "PROF-008",
        "semestre": "Printemps 2025",
        "salle": "Labo Bio F201",
        "horaire": {
            "Mardi":  {"debut": "13:00", "fin": "14:30"},
            "Jeudi":  {"debut": "13:00", "fin": "14:30"},
        },
        "capacite": 40,
        "inscrits": 38,
        "prerequis": ["BIO201"],
    },
    "CS401": {
        "code": "CS401",
        "titre": "Intelligence Artificielle",
        "description": "Machine learning, deep learning et traitement du langage.",
        "credits": 3,
        "professeur_id": "PROF-001",
        "semestre": "Printemps 2025",
        "salle": "Labo IA A205",
        "horaire": {
            "Jeudi":    {"debut": "10:00", "fin": "11:30"},
            "Vendredi": {"debut": "13:00", "fin": "14:30"},
        },
        "capacite": 30,
        "inscrits": 28,
        "prerequis": ["CS301", "MATH201"],
    },
}

# ─────────────────────────────────────────────────────────────────────────────
# ÉTUDIANTS
# ─────────────────────────────────────────────────────────────────────────────
STUDENTS = {
    "STU-2024-001": {
        "id": "STU-2024-001",
        "nom": "Ahmed Ben Ali",
        "initiales": "AB",
        "filiere": "Informatique",
        "annee": "2ème année",
        "gpa": 3.72,
        "date_inscription": "15 septembre 2023",
        "statut": "Actif",
        "email": "a.benali@univ.tn",
        "telephone": "+216 22 345 678",
        "credits_valides": 72,
        "credits_total": 120,
        "paiement": "À jour",
        "cours_inscrits": ["CS301", "MATH201", "CS302", "PHYS101"],
        "notes": {
            "CS301":   {"examen_mi_parcours": 16, "examen_final": 18, "tp": 17, "note_finale": 17.2, "grade": "A",  "semestre": "Printemps 2025"},
            "MATH201": {"examen_mi_parcours": 14, "examen_final": 15, "tp": 16, "note_finale": 15.0, "grade": "B+", "semestre": "Printemps 2025"},
            "CS302":   {"examen_mi_parcours": 16, "examen_final": 17, "tp": 18, "note_finale": 17.0, "grade": "A-", "semestre": "Printemps 2025"},
            "PHYS101": {"examen_mi_parcours": 13, "examen_final": 14, "tp": 15, "note_finale": 14.0, "grade": "B",  "semestre": "Printemps 2025"},
            # Semestre passé
            "CS201":   {"examen_mi_parcours": 15, "examen_final": 17, "tp": 16, "note_finale": 16.2, "grade": "A-", "semestre": "Automne 2024"},
            "MATH101": {"examen_mi_parcours": 13, "examen_final": 15, "tp": 14, "note_finale": 14.2, "grade": "B",  "semestre": "Automne 2024"},
        },
        "historique_gpa": [
            {"semestre": "Automne 2023", "gpa": 3.40},
            {"semestre": "Printemps 2024", "gpa": 3.55},
            {"semestre": "Automne 2024", "gpa": 3.65},
            {"semestre": "Printemps 2025", "gpa": 3.72},
        ],
    },
    "STU-2023-047": {
        "id": "STU-2023-047",
        "nom": "Fatima Benali",
        "initiales": "FB",
        "filiere": "Gestion",
        "annee": "3ème année",
        "gpa": 3.85,
        "date_inscription": "10 septembre 2022",
        "statut": "Actif",
        "email": "f.benali@univ.tn",
        "telephone": "+216 25 678 901",
        "credits_valides": 95,
        "credits_total": 120,
        "paiement": "À jour",
        "cours_inscrits": ["GES301", "ECO201", "MKT101"],
        "notes": {
            "GES301": {"examen_mi_parcours": 18, "examen_final": 19, "tp": 19, "note_finale": 18.8, "grade": "A",  "semestre": "Printemps 2025"},
            "ECO201": {"examen_mi_parcours": 16, "examen_final": 17, "tp": 17, "note_finale": 16.8, "grade": "A-", "semestre": "Printemps 2025"},
            "MKT101": {"examen_mi_parcours": 14, "examen_final": 16, "tp": 15, "note_finale": 15.2, "grade": "B+", "semestre": "Printemps 2025"},
            # Semestre passé
            "GES201": {"examen_mi_parcours": 17, "examen_final": 18, "tp": 18, "note_finale": 17.8, "grade": "A",  "semestre": "Automne 2024"},
            "ECO101": {"examen_mi_parcours": 15, "examen_final": 16, "tp": 16, "note_finale": 15.8, "grade": "A-", "semestre": "Automne 2024"},
        },
        "historique_gpa": [
            {"semestre": "Automne 2022", "gpa": 3.60},
            {"semestre": "Printemps 2023", "gpa": 3.70},
            {"semestre": "Automne 2024", "gpa": 3.80},
            {"semestre": "Printemps 2025", "gpa": 3.85},
        ],
    },
    "STU-2024-089": {
        "id": "STU-2024-089",
        "nom": "Mohamed Trabelsi",
        "initiales": "MT",
        "filiere": "Électronique",
        "annee": "1ère année",
        "gpa": 3.20,
        "date_inscription": "05 octobre 2024",
        "statut": "Actif",
        "email": "m.trabelsi@univ.tn",
        "telephone": "+216 27 111 222",
        "credits_valides": 28,
        "credits_total": 120,
        "paiement": "En attente",
        "cours_inscrits": ["ELE101", "MATH101", "PHYS101"],
        "notes": {
            "ELE101":  {"examen_mi_parcours": 14, "examen_final": 15, "tp": 16, "note_finale": 15.0, "grade": "B+", "semestre": "Printemps 2025"},
            "MATH101": {"examen_mi_parcours": 12, "examen_final": 13, "tp": 14, "note_finale": 13.0, "grade": "B",  "semestre": "Printemps 2025"},
            "PHYS101": {"examen_mi_parcours": 15, "examen_final": 16, "tp": 16, "note_finale": 15.8, "grade": "A-", "semestre": "Printemps 2025"},
        },
        "historique_gpa": [
            {"semestre": "Automne 2024", "gpa": 3.10},
            {"semestre": "Printemps 2025", "gpa": 3.20},
        ],
    },
    "STU-2022-015": {
        "id": "STU-2022-015",
        "nom": "Sonia Mejri",
        "initiales": "SM",
        "filiere": "Médecine",
        "annee": "4ème année",
        "gpa": 3.95,
        "date_inscription": "01 septembre 2021",
        "statut": "Actif",
        "email": "s.mejri@univ.tn",
        "telephone": "+216 29 333 444",
        "credits_valides": 110,
        "credits_total": 180,
        "paiement": "À jour",
        "cours_inscrits": ["MED401", "BIO301"],
        "notes": {
            "MED401": {"examen_mi_parcours": 18, "examen_final": 19, "tp": 19, "note_finale": 18.8, "grade": "A",  "semestre": "Printemps 2025"},
            "BIO301": {"examen_mi_parcours": 17, "examen_final": 17, "tp": 18, "note_finale": 17.4, "grade": "A-", "semestre": "Printemps 2025"},
            # Passé
            "MED301": {"examen_mi_parcours": 17, "examen_final": 18, "tp": 18, "note_finale": 17.8, "grade": "A",  "semestre": "Automne 2024"},
            "BIO201": {"examen_mi_parcours": 16, "examen_final": 17, "tp": 17, "note_finale": 16.8, "grade": "A-", "semestre": "Automne 2024"},
        },
        "historique_gpa": [
            {"semestre": "Automne 2021", "gpa": 3.75},
            {"semestre": "Printemps 2022", "gpa": 3.80},
            {"semestre": "Automne 2024", "gpa": 3.90},
            {"semestre": "Printemps 2025", "gpa": 3.95},
        ],
    },
    "STU-2023-102": {
        "id": "STU-2023-102",
        "nom": "Karim Slimani",
        "initiales": "KS",
        "filiere": "Informatique",
        "annee": "3ème année",
        "gpa": 3.45,
        "date_inscription": "12 septembre 2022",
        "statut": "Actif",
        "email": "k.slimani@univ.tn",
        "telephone": "+216 23 456 789",
        "credits_valides": 88,
        "credits_total": 120,
        "paiement": "À jour",
        "cours_inscrits": ["CS301", "CS302", "CS401", "MATH201"],
        "notes": {
            "CS301":   {"examen_mi_parcours": 15, "examen_final": 16, "tp": 16, "note_finale": 15.8, "grade": "A-", "semestre": "Printemps 2025"},
            "CS302":   {"examen_mi_parcours": 14, "examen_final": 15, "tp": 15, "note_finale": 14.8, "grade": "B+", "semestre": "Printemps 2025"},
            "CS401":   {"examen_mi_parcours": 16, "examen_final": 17, "tp": 17, "note_finale": 16.8, "grade": "A-", "semestre": "Printemps 2025"},
            "MATH201": {"examen_mi_parcours": 13, "examen_final": 14, "tp": 13, "note_finale": 13.6, "grade": "B",  "semestre": "Printemps 2025"},
            "CS201":   {"examen_mi_parcours": 14, "examen_final": 15, "tp": 14, "note_finale": 14.6, "grade": "B+", "semestre": "Automne 2024"},
        },
        "historique_gpa": [
            {"semestre": "Automne 2022", "gpa": 3.20},
            {"semestre": "Printemps 2023", "gpa": 3.30},
            {"semestre": "Automne 2024", "gpa": 3.40},
            {"semestre": "Printemps 2025", "gpa": 3.45},
        ],
    },
}

# ─────────────────────────────────────────────────────────────────────────────
# FONCTIONS UTILITAIRES
# ─────────────────────────────────────────────────────────────────────────────

def get_student(student_id: str) -> dict | None:
    return STUDENTS.get(student_id)


def find_student_by_name(name: str) -> list[dict]:
    name_lower = name.lower()
    return [s for s in STUDENTS.values() if name_lower in s["nom"].lower()]


def get_course(code: str) -> dict | None:
    return COURSES.get(code.upper())


def get_professor(prof_id: str) -> dict | None:
    return PROFESSORS.get(prof_id)


def get_professor_by_course(code: str) -> dict | None:
    course = get_course(code)
    if course:
        return get_professor(course["professeur_id"])
    return None


def get_student_schedule(student_id: str) -> dict:
    """Construit l'emploi du temps hebdomadaire d'un étudiant."""
    student = get_student(student_id)
    if not student:
        return {}

    jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
    schedule: dict[str, list] = {jour: [] for jour in jours}

    for code in student["cours_inscrits"]:
        course = get_course(code)
        if not course:
            continue
        prof = get_professor(course["professeur_id"])
        for jour, horaire in course["horaire"].items():
            schedule[jour].append({
                "code": code,
                "titre": course["titre"],
                "debut": horaire["debut"],
                "fin": horaire["fin"],
                "salle": course["salle"],
                "professeur": prof["name"] if prof else "—",
            })

    # Tri par heure de début
    for jour in jours:
        schedule[jour].sort(key=lambda x: x["debut"])

    return schedule


def get_student_grades_summary(student_id: str) -> dict:
    """Retourne un résumé des notes d'un étudiant."""
    student = get_student(student_id)
    if not student:
        return {}

    notes_actuelles = []
    notes_passees = []
    semestre_actuel = "Printemps 2025"

    for code, note in student["notes"].items():
        course = get_course(code)
        entry = {
            "code": code,
            "titre": course["titre"] if course else code,
            "note_finale": note["note_finale"],
            "grade": note["grade"],
            "semestre": note["semestre"],
        }
        if note["semestre"] == semestre_actuel:
            notes_actuelles.append(entry)
        else:
            notes_passees.append(entry)

    return {
        "gpa": student["gpa"],
        "credits": f"{student['credits_valides']}/{student['credits_total']}",
        "notes_actuelles": notes_actuelles,
        "notes_passees": notes_passees,
        "historique_gpa": student["historique_gpa"],
    }


def build_context_for_student(student_id: str) -> str:
    """Construit le contexte complet d'un étudiant pour le prompt IA."""
    student = get_student(student_id)
    if not student:
        return ""

    lines = [
        f"=== PROFIL ÉTUDIANT ===",
        f"Nom : {student['nom']}",
        f"ID  : {student['id']}",
        f"Filière : {student['filiere']} — {student['annee']}",
        f"GPA : {student['gpa']}  |  Crédits : {student['credits_valides']}/{student['credits_total']}",
        f"Statut : {student['statut']}  |  Paiement : {student['paiement']}",
        f"Email : {student['email']}  |  Tél : {student['telephone']}",
        "",
        "=== NOTES DU SEMESTRE (Printemps 2025) ===",
    ]

    semestre_actuel = "Printemps 2025"
    for code, note in student["notes"].items():
        if note["semestre"] == semestre_actuel:
            course = get_course(code)
            prof = get_professor_by_course(code)
            titre = course["titre"] if course else code
            prof_name = prof["name"] if prof else "—"
            lines.append(
                f"  • {code} – {titre} : {note['note_finale']}/20 "
                f"(grade {note['grade']}) | Prof: {prof_name}"
            )

    lines += ["", "=== EMPLOI DU TEMPS ==="]
    schedule = get_student_schedule(student_id)
    for jour, cours in schedule.items():
        if cours:
            lines.append(f"  {jour} :")
            for c in cours:
                lines.append(f"    {c['debut']}–{c['fin']} | {c['code']} {c['titre']} | {c['salle']} | {c['professeur']}")

    lines += ["", "=== COURS INSCRITS ==="]
    for code in student["cours_inscrits"]:
        course = get_course(code)
        prof = get_professor_by_course(code)
        if course and prof:
            lines.append(
                f"  • {code} – {course['titre']} | {course['credits']} crédits "
                f"| Prof: {prof['name']} | {course['salle']}"
            )

    return "\n".join(lines)
