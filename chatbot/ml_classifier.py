"""
Classificateur d'intentions basé sur Machine Learning (scikit-learn).
Utilise TF-IDF + Régression Logistique pour détecter l'intention d'une
question posée par un étudiant.

Catégories :
  - grades        : notes, résultats, GPA, moyenne
  - courses       : cours, matières, modules, programme
  - professors    : professeurs, enseignants, contacts prof
  - schedule      : emploi du temps, horaires, salles, jours
  - student_info  : profil, crédits, paiement, statut
  - payment       : paiement, frais, scolarité, facture
  - exam          : examens, contrôle, révision, date d'examen
  - general       : questions générales, aide, salutations
"""

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
import numpy as np

# ─────────────────────────────────────────────────────────────────────────────
# Données d'entraînement étendues (français + variantes arabes translittérées)
# ─────────────────────────────────────────────────────────────────────────────
TRAINING_DATA = [
    # ── grades ──────────────────────────────────────────────────────────────
    ("quelle est ma note", "grades"),
    ("quelles sont mes notes", "grades"),
    ("mon résultat", "grades"),
    ("mes résultats", "grades"),
    ("quel est mon GPA", "grades"),
    ("ma moyenne générale", "grades"),
    ("ma moyenne", "grades"),
    ("mon score", "grades"),
    ("résultats académiques", "grades"),
    ("note en mathématiques", "grades"),
    ("note en informatique", "grades"),
    ("résultat examen", "grades"),
    ("bilan académique", "grades"),
    ("mes performances académiques", "grades"),
    ("grade obtenu", "grades"),
    ("notes du semestre", "grades"),
    ("note finale", "grades"),
    ("examen mi-parcours", "grades"),
    ("ai-je réussi", "grades"),
    ("suis-je en échec", "grades"),
    ("ma note de physique", "grades"),
    ("note en bases de données", "grades"),
    ("note en algorithmes", "grades"),
    ("mes résultats du trimestre", "grades"),
    ("quel est mon rang", "grades"),
    ("coefficient", "grades"),
    ("mention", "grades"),
    ("classement", "grades"),
    ("ma note de CS301", "grades"),
    ("note en algèbre", "grades"),
    ("note en circuits", "grades"),
    ("mes notes actuelles", "grades"),
    ("notes du printemps", "grades"),
    ("notes automne", "grades"),
    ("note de biochimie", "grades"),
    ("note en anatomie", "grades"),
    ("note en marketing", "grades"),
    ("résultats semestriels", "grades"),
    ("quelle est ma moyenne en", "grades"),
    ("ai-je validé ce cours", "grades"),
    ("mes points forts", "grades"),
    ("mes points faibles académiques", "grades"),
    ("progression de mon GPA", "grades"),
    ("historique de mes notes", "grades"),
    ("évolution académique", "grades"),

    # ── courses ──────────────────────────────────────────────────────────────
    ("quels sont mes cours", "courses"),
    ("mes matières inscrites", "courses"),
    ("cours ce semestre", "courses"),
    ("liste des cours", "courses"),
    ("modules inscrits", "courses"),
    ("informations sur le cours", "courses"),
    ("description du cours", "courses"),
    ("cours disponibles", "courses"),
    ("mes matières", "courses"),
    ("programme académique", "courses"),
    ("dans quels cours suis-je inscrit", "courses"),
    ("combien de cours", "courses"),
    ("crédits du cours", "courses"),
    ("prérequis du cours", "courses"),
    ("contenu du cours", "courses"),
    ("cours obligatoires", "courses"),
    ("unités d'enseignement", "courses"),
    ("semestre actuel cours", "courses"),
    ("syllabus", "courses"),
    ("programme de la matière", "courses"),
    ("quelles matières ce semestre", "courses"),
    ("cours d'informatique", "courses"),
    ("cours de mathématiques", "courses"),
    ("cours de physique", "courses"),
    ("cours de gestion", "courses"),
    ("cours de médecine", "courses"),
    ("cours d'électronique", "courses"),
    ("capacité du cours", "courses"),
    ("combien d'étudiants inscrits", "courses"),
    ("salle du cours", "courses"),
    ("code du cours", "courses"),
    ("cours CS301", "courses"),
    ("cours MATH201", "courses"),
    ("module de bases de données", "courses"),
    ("inscription à un cours", "courses"),
    ("ajouter un cours", "courses"),

    # ── professors ───────────────────────────────────────────────────────────
    ("qui est mon professeur", "professors"),
    ("nom du professeur", "professors"),
    ("nom du prof", "professors"),
    ("enseignant de ce cours", "professors"),
    ("professeur de mathématiques", "professors"),
    ("prof d'informatique", "professors"),
    ("contact professeur", "professors"),
    ("coordonnées de l'enseignant", "professors"),
    ("qui enseigne ce cours", "professors"),
    ("mon professeur de physique", "professors"),
    ("email du professeur", "professors"),
    ("bureau du professeur", "professors"),
    ("heures de réception", "professors"),
    ("spécialité du professeur", "professors"),
    ("grade académique du prof", "professors"),
    ("qui donne le cours", "professors"),
    ("l'enseignant responsable", "professors"),
    ("prof de bases de données", "professors"),
    ("professeur d'algorithmes", "professors"),
    ("comment contacter le prof", "professors"),
    ("professeur de CS301", "professors"),
    ("prof de MATH201", "professors"),
    ("téléphone du professeur", "professors"),
    ("professeur d'IA", "professors"),
    ("qui enseigne l'intelligence artificielle", "professors"),
    ("prof de biochimie", "professors"),
    ("professeur d'anatomie", "professors"),
    ("enseignant de circuits électriques", "professors"),
    ("prof d'algèbre linéaire", "professors"),
    ("liste des professeurs", "professors"),
    ("tous mes enseignants", "professors"),
    ("rendez-vous avec le prof", "professors"),
    ("office hours professeur", "professors"),
    ("permanence enseignant", "professors"),

    # ── schedule ─────────────────────────────────────────────────────────────
    ("emploi du temps", "schedule"),
    ("mon emploi du temps", "schedule"),
    ("horaire des cours", "schedule"),
    ("quand est mon cours", "schedule"),
    ("à quelle heure", "schedule"),
    ("planning de la semaine", "schedule"),
    ("timetable", "schedule"),
    ("quelle salle", "schedule"),
    ("salle de cours", "schedule"),
    ("cours lundi", "schedule"),
    ("cours mardi", "schedule"),
    ("cours mercredi", "schedule"),
    ("cours jeudi", "schedule"),
    ("cours vendredi", "schedule"),
    ("programme de cette semaine", "schedule"),
    ("heure de début du cours", "schedule"),
    ("heure de fin du cours", "schedule"),
    ("quel jour ai-je cours", "schedule"),
    ("horaire de la matière", "schedule"),
    ("où se déroule le cours", "schedule"),
    ("quelle salle pour", "schedule"),
    ("cours ce matin", "schedule"),
    ("cours cet après-midi", "schedule"),
    ("planning journalier", "schedule"),
    ("agenda de la semaine", "schedule"),
    ("mes cours du lundi", "schedule"),
    ("occupation de la salle", "schedule"),
    ("bâtiment du cours", "schedule"),
    ("laboratoire informatique", "schedule"),
    ("amphi", "schedule"),
    ("premier cours de la journée", "schedule"),
    ("dernier cours de la semaine", "schedule"),
    ("pause entre les cours", "schedule"),

    # ── student_info ─────────────────────────────────────────────────────────
    ("mes informations personnelles", "student_info"),
    ("mon profil étudiant", "student_info"),
    ("mon statut académique", "student_info"),
    ("mes crédits validés", "student_info"),
    ("date d'inscription", "student_info"),
    ("mon identifiant étudiant", "student_info"),
    ("informations sur mon compte", "student_info"),
    ("mon email universitaire", "student_info"),
    ("mon numéro étudiant", "student_info"),
    ("ma filière", "student_info"),
    ("ma spécialité", "student_info"),
    ("combien de crédits", "student_info"),
    ("année d'étude", "student_info"),
    ("suis-je actif", "student_info"),
    ("mon téléphone enregistré", "student_info"),
    ("mon numéro d'étudiant", "student_info"),
    ("ma carte étudiante", "student_info"),
    ("mon ID", "student_info"),
    ("quelle est ma filière", "student_info"),
    ("en quelle année suis-je", "student_info"),
    ("date de ma première inscription", "student_info"),
    ("crédits restants", "student_info"),
    ("progression dans le diplôme", "student_info"),
    ("combien de crédits il me reste", "student_info"),
    ("suis-je en règle", "student_info"),

    # ── payment ──────────────────────────────────────────────────────────────
    ("statut de paiement", "payment"),
    ("frais de scolarité", "payment"),
    ("paiement en attente", "payment"),
    ("payer mes frais", "payment"),
    ("ma facture", "payment"),
    ("montant à payer", "payment"),
    ("frais universitaires", "payment"),
    ("paiement des droits d'inscription", "payment"),
    ("reçu de paiement", "payment"),
    ("quittance", "payment"),
    ("ai-je des impayés", "payment"),
    ("mon compte est bloqué", "payment"),
    ("droits d'inscription", "payment"),
    ("scolarité à payer", "payment"),
    ("modalités de paiement", "payment"),
    ("paiement en retard", "payment"),
    ("date limite de paiement", "payment"),
    ("payer en ligne", "payment"),
    ("paiement par virement", "payment"),
    ("attestation de paiement", "payment"),

    # ── exam ─────────────────────────────────────────────────────────────────
    ("date des examens", "exam"),
    ("calendrier des examens", "exam"),
    ("quand est mon examen", "exam"),
    ("session d'examen", "exam"),
    ("examen final", "exam"),
    ("contrôle continu", "exam"),
    ("révision pour l'examen", "exam"),
    ("salle d'examen", "exam"),
    ("convocation d'examen", "exam"),
    ("rattrapage", "exam"),
    ("examen de rattrapage", "exam"),
    ("session de rattrapage", "exam"),
    ("planning des examens", "exam"),
    ("semaine d'examen", "exam"),
    ("période d'examens", "exam"),
    ("inscription aux examens", "exam"),
    ("résultats d'examen", "exam"),
    ("annulation d'examen", "exam"),
    ("report d'examen", "exam"),

    # ── general ──────────────────────────────────────────────────────────────
    ("bonjour", "general"),
    ("bonsoir", "general"),
    ("salut", "general"),
    ("comment ça va", "general"),
    ("aide-moi", "general"),
    ("merci", "general"),
    ("au revoir", "general"),
    ("comment fonctionne cet assistant", "general"),
    ("que peux-tu faire", "general"),
    ("quelles sont tes capacités", "general"),
    ("aide", "general"),
    ("tu peux m'aider", "general"),
    ("je ne comprends pas", "general"),
    ("explique-moi", "general"),
    ("qu'est-ce que", "general"),
    ("qui es-tu", "general"),
    ("comment tu t'appelles", "general"),
    ("que sais-tu faire", "general"),
    ("c'est quoi cet assistant", "general"),
    ("ça marche comment", "general"),
    ("quelles informations peux-tu me donner", "general"),
    ("à bientôt", "general"),
    ("bonne journée", "general"),
    ("je veux de l'aide", "general"),
    ("assistance", "general"),
]

# ─────────────────────────────────────────────────────────────────────────────
# Classe du classificateur
# ─────────────────────────────────────────────────────────────────────────────

class IntentClassifier:
    """
    Classificateur d'intentions basé sur TF-IDF + Régression Logistique.
    Entraîné directement en mémoire au démarrage du serveur.
    """

    LABELS = ["grades", "courses", "professors", "schedule", "student_info", "payment", "exam", "general"]

    def __init__(self):
        self.pipeline = Pipeline([
            ("tfidf", TfidfVectorizer(
                ngram_range=(1, 3),      # unigrammes + bigrammes + trigrammes
                analyzer="word",
                lowercase=True,
                strip_accents="unicode",
                min_df=1,
                max_features=5000,
                sublinear_tf=True,       # atténue les termes très fréquents
            )),
            ("clf", LogisticRegression(
                max_iter=500,
                random_state=42,
                C=2.0,
                solver="lbfgs",
                multi_class="auto",
                class_weight="balanced", # meilleure gestion des classes déséquilibrées
            )),
        ])
        self._train()

    def _train(self):
        texts  = [item[0] for item in TRAINING_DATA]
        labels = [item[1] for item in TRAINING_DATA]
        self.pipeline.fit(texts, labels)

    def predict(self, text: str) -> str:
        """Retourne l'intention la plus probable."""
        return self.pipeline.predict([text.lower()])[0]

    def predict_with_confidence(self, text: str) -> dict:
        """Retourne l'intention + toutes les probabilités."""
        classes = self.pipeline.classes_
        probs   = self.pipeline.predict_proba([text.lower()])[0]
        sorted_probs = sorted(
            zip(classes, probs.tolist()),
            key=lambda x: x[1],
            reverse=True,
        )
        top_intent    = sorted_probs[0][0]
        top_confidence = sorted_probs[0][1]

        # Si la confiance est trop faible, retomber sur "general"
        if top_confidence < 0.25:
            top_intent = "general"

        return {
            "intent":     top_intent,
            "confidence": round(top_confidence, 3),
            "all_scores": {k: round(v, 3) for k, v in sorted_probs},
        }


# Singleton instancié une seule fois au démarrage
classifier = IntentClassifier()
