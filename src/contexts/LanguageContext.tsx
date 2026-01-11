import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ro" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ro: {
    // Header
    "header.aboutUs": "Despre noi",
    "header.howToApply": "Cum aplic?",
    "header.login": "Autentificare",
    
    // Footer
    "footer.description": "Proiect finanțat prin Programul Educație și Ocupare (PEO) pentru sprijinirea studenților cu oportunități reduse în participarea la mobilități Erasmus+.",
    "footer.cofinanced": "Cofinanțat de Uniunea Europeană",
    "footer.usefulLinks": "Link-uri Utile",
    "footer.objectives": "Obiective",
    "footer.eligibility": "Eligibilitate",
    "footer.team": "Echipa",
    "footer.contact": "Contact",
    "footer.rights": "Toate drepturile rezervate.",
    
    // Hero
    "hero.badge": "Program Erasmus+",
    "hero.subtitle": "Sprijinirea studenților cu oportunități reduse ai Universității Tehnice din Cluj-Napoca în vederea participării la mobilități studențești de tip Erasmus+",
    "hero.financialSupport": "Suport Financiar",
    "hero.financialSupportDesc": "Sprijin financiar suplimentar pentru participarea la mobilități Erasmus+",
    "hero.socialInclusion": "Incluziune Socială",
    "hero.socialInclusionDesc": "Promovarea accesului egal la educație și învățarea pe tot parcursul vieții",
    "hero.internationalization": "Internaționalizare",
    "hero.internationalizationDesc": "Creșterea participării studenților la mobilități educaționale internaționale",
    
    // Project Description
    "projectDesc.title": "Despre Proiect",
    "projectDesc.p1": "Proiectul IMPACT+UTCN urmărește sprijinirea studenților cu oportunități reduse ai Universității Tehnice din Cluj-Napoca în vederea participării la mobilități studențești de tip Erasmus+, prin acordarea unui suport financiar suplimentar și prin implementarea unor activități de informare, promovare și valorificare a rezultatelor mobilităților.",
    "projectDesc.p2": "Prin măsurile propuse, proiectul contribuie la optimizarea sistemelor de educație și formare, astfel încât acestea să răspundă mai eficient cerințelor actuale ale pieței muncii, promovând totodată accesul egal la educație, incluziunea socială și învățarea pe tot parcursul vieții.",
    "projectDesc.p3": "Proiectul sprijină dezvoltarea unor programe educaționale de calitate, cu un accent puternic pe internaționalizare și pe creșterea participării studenților cu oportunități reduse la mobilități educaționale.",
    "projectDesc.benefitsTitle": "Beneficii pentru studenți:",
    "projectDesc.benefit1": "Sprijin financiar suplimentar pentru participarea la mobilități Erasmus+",
    "projectDesc.benefit2": "Activități complementare programului de studii",
    "projectDesc.benefit3": "Creșterea motivației și a ratei de finalizare a studiilor",
    "projectDesc.benefit4": "Îmbunătățirea capacității de integrare pe piața muncii",
    
    // Project Context
    "projectContext.title": "Contextul Proiectului",
    "projectContext.intro": "Proiectul se înscrie în cadrul Programului Educație și Ocupare (PEO) și contribuie la realizarea priorităților acestuia:",
    "projectContext.priority1": "Optimizarea educației și formării pentru a răspunde cerințelor pieței muncii",
    "projectContext.priority2": "Consolidarea funcționării eficiente a pieței muncii",
    "projectContext.priority3": "Facilitarea accesului egal și incluziv la ocupare de calitate și durabilă",
    "projectContext.europeTitle": "Obiective Europene - \"Europa în mișcare\"",
    "projectContext.europeDesc": "Proiectul răspunde Apelului PEO – Sprijin financiar suplimentar destinat studenților cu oportunități reduse care participă la mobilități studențești Erasmus+, contribuind direct la atingerea obiectivelor stabilite la nivel european prin Propunerea de Recomandare a Consiliului:",
    "projectContext.target23": "Până în anul 2030, cel puțin 23% dintre absolvenții de învățământ superior să aibă o experiență de mobilitate educațională",
    "projectContext.target20": "Cel puțin 20% dintre beneficiarii mobilităților educaționale să fie persoane cu oportunități reduse",
    "projectContext.nationalProgram": "Prin activitățile implementate, proiectul susține totodată Prioritatea 3.7 'Educație și competențe' din Programul Național de Reformă 2024, contribuind la incluziunea socială, internaționalizarea educației și creșterea calității formării profesionale.",
    
    // Objectives page
    "objectives.badge": "Obiectivele Proiectului",
    "objectives.title": "Obiective IMPACT+UTCN",
    "objectives.subtitle": "Descoperă obiectivele generale și specifice ale proiectului nostru pentru sprijinirea studenților.",
    "objectives.generalTitle": "Obiectiv General",
    "objectives.generalDesc": "Creșterea accesului și participării studenților cu oportunități reduse ai UTCN la mobilități educaționale Erasmus+, în vederea îmbunătățirii competențelor profesionale, a șanselor de integrare pe piața muncii și a adaptării la schimbările socio-economice viitoare.",
    "objectives.specificTitle": "Obiective Specifice",
    "objectives.specific1": "Sprijinirea participării a 91 de studenți cu oportunități reduse la mobilități studențești Erasmus+, prin acordarea unui suport financiar suplimentar.",
    "objectives.specific2": "Creșterea gradului de informare și conștientizare privind beneficiile mobilităților internaționale.",
    "objectives.specific3": "Promovarea incluziunii sociale și a egalității de șanse în educație.",
    "objectives.specific4": "Dezvoltarea competențelor cheie necesare integrării pe piața muncii:",
    "objectives.specific5": "Creșterea calității și relevanței educației prin internaționalizare și schimb de bune practici.",
    "objectives.specific6": "Susținerea finalizării studiilor și facilitarea tranziției absolvenților către piața muncii.",
    "objectives.competence1": "Competențe de comunicare într-o limbă străină și înțelegere interculturală",
    "objectives.competence2": "Competențe digitale și utilizarea responsabilă a tehnologiei",
    "objectives.competence3": "Competențe de învățare pe tot parcursul vieții",
    "objectives.competence4": "Competențe civice, sociale și interculturale",
    "objectives.competence5": "Spirit de inițiativă, antreprenoriat și gândire critică",
    "objectives.competence6": "Abilități interpersonale, emoționale și de lucru în echipă",
    
    // Eligibility page
    "eligibility.badge": "Criterii de Eligibilitate",
    "eligibility.title": "Criterii de Eligibilitate privind Acordarea Burselor pentru Mobilitatea Studenților",
    "eligibility.subtitle": "Verifică dacă îndeplinești condițiile necesare pentru a beneficia de burse pentru mobilitatea studențească Erasmus+.",
    "eligibility.intro": "Bursele pentru mobilitatea studenților se vor acorda studenților din grup țintă care îndeplinesc următoarele condiții:",
    "eligibility.condition1Title": "Vârstă și înmatriculare",
    "eligibility.condition1Desc": "Sunt studenți cu vârsta cuprinsă între 18 și 29 ani, înmatriculați într-un program de studii nivel ISCED 5-8, cu domiciliul / rezidența în cazul studenților străini într-una dintre regiunile mai puțin dezvoltate.",
    "eligibility.condition2Title": "Student cu oportunități reduse",
    "eligibility.condition2Desc": "Se încadrează în categoria \"student cu oportunități reduse\", conform definiției prezentului Ghid al Solicitantului Condiții Specifice, în cel puțin una dintre următoarele categorii:",
    "eligibility.categoryA": "Bursă socială",
    "eligibility.categoryADesc": "Beneficiază de o bursă socială sau care se califică/întrunește condițiile pentru a beneficia de o bursă socială acordată de instituția de învățământ superior la care acesta este înmatriculat, conform prevederilor art. 10, alin. (9) din Ordinul ME 6463/2023.",
    "eligibility.categoryB": "Primul student din familie",
    "eligibility.categoryBDesc": "Intră în categoria \"primului student din familie\" (însemnând că nu deține deja o diplomă de licență, părinții săi nu au obținut o diplomă de studii universitare, dar poate avea frați/surori care sunt deja studenți la universitate / au absolvit deja o universitate).",
    "eligibility.categoryC": "Unic părinte",
    "eligibility.categoryCDesc": "Are calitatea de unic părinte (care își crește singur copilul minor din motive de deces, dispariție, încarcerare a celuilalt părinte sau nerecunoaștere prin certificatul de naștere).",
    "eligibility.categoryD": "Migrant sau refugiat",
    "eligibility.categoryDDesc": "Are statut de migrant sau refugiat.",
    "eligibility.condition3Title": "Limitare unică",
    "eligibility.condition3Desc": "O persoană poate beneficia o singură dată de bursa de mobilitate acordată din FSE+ pentru a participa la o mobilitate Erasmus+ pentru studenți.",
    "eligibility.ctaTitle": "Îndeplinești criteriile?",
    "eligibility.ctaDesc": "Află cum poți aplica pentru bursa de mobilitate Erasmus+.",
    "eligibility.ctaButton": "Cum aplic?",
    
    // How to Apply page
    "howToApply.badge": "Proces de Aplicare",
    "howToApply.title": "Cum Aplic?",
    "howToApply.subtitle": "Descoperă condițiile obligatorii și documentele necesare pentru înscrierea în proiectul IMPACT+UTCN.",
    "howToApply.conditionsTitle": "Condiții Obligatorii pentru Acordarea Bursei",
    "howToApply.conditionsIntro": "Bursele pentru mobilitatea studenților se vor acorda numai studenților care:",
    "howToApply.condition1": "Se înscriu în grupul țintă al proiectului",
    "howToApply.condition2": "Participă la o mobilitate ERASMUS+",
    "howToApply.condition3": "Participă la cel puțin o activitate a proiectului",
    "howToApply.condition4": "A semnat contractul pentru acordarea bursei de mobilitate",
    "howToApply.contractNote": "În vederea acordării bursei pentru mobilitate, fiecare participant va semna un contract cu UTCN, în calitate de Beneficiar al proiectului prin care studentul își asumă respectarea condițiilor de acordare a bursei de mobilitate oferite prin proiect.",
    "howToApply.documentsTitle": "Documente pentru Înscrierea în Proiect",
    "howToApply.documentsIntro": "Pentru înscrierea în grupul țintă a proiectului studenții interesați vor depune următoarele documente:",
    "howToApply.doc1": "Cerere de înscriere în proiect – formular online",
    "howToApply.doc2": "Copie CI",
    "howToApply.doc3": "Adeverință student/masterand/doctorand",
    "howToApply.doc4": "Declarație privind evitarea dublei finanțări semnat în original de către student",
    "howToApply.doc5": "Declarație privind colectarea datelor cu caracter personal semnat în original de către student",
    "howToApply.doc6": "Formular de înregistrare grup țintă (offline/online) – semnat în original de către student și Responsabilul GȚ",
    "howToApply.doc7": "Dovadă că studentul intenționează să plece în mobilitate ERASMUS sau Learning Agreement",
    "howToApply.doc8": "Documente care dovedesc că se încadrează în categoria \"student cu oportunități reduse\"",
    "howToApply.reducedOpportunitiesTitle": "Documente pentru Categoria \"Student cu Oportunități Reduse\"",
    "howToApply.reducedOpportunitiesIntro": "Documente care dovedesc încadrarea în condițiile de acordare a burselor sociale stipulate în art. 10 alin. (9) lit. a) – c) din Ordinul ministrului educației nr. 6463/2023:",
    "howToApply.reducedDoc1": "Dosar medical sau documente medicale valide",
    "howToApply.reducedDoc2": "Certificat(e) de deces",
    "howToApply.reducedDoc3": "Documente care atestă apartenența la familie monoparentală (după caz, acte de stare civilă, dovadă de încarcerare, decizia instanței de menținere a stării de arest, raportul de anchetă socială în cazul părinților dispăruți etc.)",
    "howToApply.reducedDoc4": "Documente care atestă nivelul de venit (după caz, adeverință de venit pentru fiecare membru al familiei, raport de anchetă socială etc.)",
    "howToApply.reducedDoc5": "Declarație pe proprie răspundere a studentului care atestă faptul că membrul grupului țintă se încadrează în categoria persoanelor cu nivel educațional al părinților scăzut, însoțită de copie după actele de studii ale părinților",
    "howToApply.reducedDoc6": "Documente care atestă calitatea de unic părinte (după caz, certificat de naștere cu tată nedeterminat (natural), certificat de deces al celuilalt părinte, acte de stare civilă, dovadă de încarcerare, decizia instanței de menținere a stării de arest, raportul de anchetă socială în cazul părinților dispăruți etc.)",
    "howToApply.reducedDoc7": "Permis de ședere (sau alt document oficial eliberat de autoritățile competente) care atestă statutul de migrant sau refugiat",
    "howToApply.ctaTitle": "Ai întrebări?",
    "howToApply.ctaDesc": "Contactează-ne pentru mai multe informații despre procesul de aplicare.",
    "howToApply.ctaButton": "Contactează-ne",
    
    // Team page
    "team.badge": "Echipa Proiectului",
    "team.title": "ECHIPA IMPACT+UTCN",
    "team.subtitle": "Cunoaște echipa dedicată care coordonează și implementează proiectul pentru sprijinirea studenților cu oportunități reduse.",
    "team.aboutTitle": "Despre Echipa Noastră",
    "team.aboutP1": "Echipa proiectului IMPACT+UTCN este formată din cadre didactice și personal administrativ al Universității Tehnice din Cluj-Napoca, dedicați sprijinirii studenților cu oportunități reduse în accesarea mobilităților Erasmus+.",
    "team.aboutP2": "Fiecare membru al echipei are responsabilități specifice pentru a asigura implementarea eficientă a proiectului și pentru a oferi suport personalizat studenților eligibili.",
    "team.projectManager": "Manager de Proiect",
    
    // Contact page
    "contact.badge": "Contactează-ne",
    "contact.title": "Contact",
    "contact.subtitle": "Ai întrebări despre proiectul IMPACT+UTCN? Completează formularul de mai jos și te vom contacta în cel mai scurt timp.",
    "contact.infoTitle": "Informații de Contact",
    "contact.address": "Adresă",
    "contact.phone": "Telefon",
    "contact.email": "Email",
    "contact.schedule": "Program:",
    "contact.scheduleHours": "Luni - Vineri: 09:00 - 17:00",
    "contact.formTitle": "Trimite-ne un Mesaj",
    "contact.fullName": "Nume complet",
    "contact.emailAddress": "Adresă email",
    "contact.subject": "Subiect",
    "contact.message": "Mesaj",
    "contact.namePlaceholder": "Introdu numele tău",
    "contact.emailPlaceholder": "exemplu@email.com",
    "contact.subjectPlaceholder": "Subiectul mesajului",
    "contact.messagePlaceholder": "Scrie mesajul tău aici...",
    "contact.submit": "Trimite Mesajul",
    "contact.submitting": "Se trimite...",
    "contact.successTitle": "Mesaj Trimis!",
    "contact.successDesc": "Vă mulțumim pentru mesaj. Echipa noastră vă va răspunde în cel mai scurt timp posibil.",
    "contact.sendAnother": "Trimite alt mesaj",
    "contact.toastTitle": "Mesaj trimis!",
    "contact.toastDesc": "Vă mulțumim pentru mesaj. Vă vom răspunde în cel mai scurt timp.",
    
    // Validation
    "validation.nameRequired": "Numele este obligatoriu",
    "validation.nameMax": "Numele trebuie să aibă maxim 100 caractere",
    "validation.emailInvalid": "Adresa de email nu este validă",
    "validation.emailMax": "Email-ul trebuie să aibă maxim 255 caractere",
    "validation.subjectRequired": "Subiectul este obligatoriu",
    "validation.subjectMax": "Subiectul trebuie să aibă maxim 200 caractere",
    "validation.messageMin": "Mesajul trebuie să aibă minim 10 caractere",
    "validation.messageMax": "Mesajul trebuie să aibă maxim 2000 caractere",
  },
  en: {
    // Header
    "header.aboutUs": "About Us",
    "header.howToApply": "How to Apply?",
    "header.login": "Login",
    
    // Footer
    "footer.description": "Project funded through the Education and Employment Program (PEO) to support students with fewer opportunities in participating in Erasmus+ mobilities.",
    "footer.cofinanced": "Co-financed by the European Union",
    "footer.usefulLinks": "Useful Links",
    "footer.objectives": "Objectives",
    "footer.eligibility": "Eligibility",
    "footer.team": "Team",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    
    // Hero
    "hero.badge": "Erasmus+ Program",
    "hero.subtitle": "Supporting students with fewer opportunities from the Technical University of Cluj-Napoca to participate in Erasmus+ student mobilities",
    "hero.financialSupport": "Financial Support",
    "hero.financialSupportDesc": "Additional financial support for participation in Erasmus+ mobilities",
    "hero.socialInclusion": "Social Inclusion",
    "hero.socialInclusionDesc": "Promoting equal access to education and lifelong learning",
    "hero.internationalization": "Internationalization",
    "hero.internationalizationDesc": "Increasing student participation in international educational mobilities",
    
    // Project Description
    "projectDesc.title": "About the Project",
    "projectDesc.p1": "The IMPACT+UTCN project aims to support students with fewer opportunities from the Technical University of Cluj-Napoca in participating in Erasmus+ student mobilities, by providing additional financial support and implementing information, promotion, and mobility results valorization activities.",
    "projectDesc.p2": "Through the proposed measures, the project contributes to optimizing education and training systems to more effectively meet current labor market requirements, while promoting equal access to education, social inclusion, and lifelong learning.",
    "projectDesc.p3": "The project supports the development of quality educational programs, with a strong emphasis on internationalization and increasing the participation of students with fewer opportunities in educational mobilities.",
    "projectDesc.benefitsTitle": "Benefits for students:",
    "projectDesc.benefit1": "Additional financial support for participation in Erasmus+ mobilities",
    "projectDesc.benefit2": "Complementary activities to the study program",
    "projectDesc.benefit3": "Increased motivation and study completion rates",
    "projectDesc.benefit4": "Improved labor market integration capacity",
    
    // Project Context
    "projectContext.title": "Project Context",
    "projectContext.intro": "The project is part of the Education and Employment Program (PEO) and contributes to achieving its priorities:",
    "projectContext.priority1": "Optimizing education and training to meet labor market requirements",
    "projectContext.priority2": "Strengthening efficient labor market functioning",
    "projectContext.priority3": "Facilitating equal and inclusive access to quality and sustainable employment",
    "projectContext.europeTitle": "European Objectives - \"Europe on the Move\"",
    "projectContext.europeDesc": "The project responds to the PEO Call – Additional financial support for students with fewer opportunities participating in Erasmus+ student mobilities, directly contributing to achieving objectives set at European level through the Council Recommendation Proposal:",
    "projectContext.target23": "By 2030, at least 23% of higher education graduates should have an educational mobility experience",
    "projectContext.target20": "At least 20% of educational mobility beneficiaries should be people with fewer opportunities",
    "projectContext.nationalProgram": "Through the implemented activities, the project also supports Priority 3.7 \"Education and Skills\" from the 2024 National Reform Program, contributing to social inclusion, education internationalization, and increasing the quality of professional training.",
    
    // Objectives page
    "objectives.badge": "Project Objectives",
    "objectives.title": "IMPACT+UTCN Objectives",
    "objectives.subtitle": "Discover the general and specific objectives of our project to support students.",
    "objectives.generalTitle": "General Objective",
    "objectives.generalDesc": "Increasing access and participation of UTCN students with fewer opportunities in Erasmus+ educational mobilities, to improve professional skills, labor market integration chances, and adaptation to future socio-economic changes.",
    "objectives.specificTitle": "Specific Objectives",
    "objectives.specific1": "Supporting the participation of 91 students with fewer opportunities in Erasmus+ student mobilities, by providing additional financial support.",
    "objectives.specific2": "Increasing awareness and understanding of the benefits of international mobilities.",
    "objectives.specific3": "Promoting social inclusion and equal opportunities in education.",
    "objectives.specific4": "Developing key competencies needed for labor market integration:",
    "objectives.specific5": "Increasing the quality and relevance of education through internationalization and exchange of best practices.",
    "objectives.specific6": "Supporting study completion and facilitating graduates' transition to the labor market.",
    "objectives.competence1": "Foreign language communication and intercultural understanding skills",
    "objectives.competence2": "Digital skills and responsible use of technology",
    "objectives.competence3": "Lifelong learning skills",
    "objectives.competence4": "Civic, social, and intercultural competencies",
    "objectives.competence5": "Initiative, entrepreneurship, and critical thinking",
    "objectives.competence6": "Interpersonal, emotional, and teamwork skills",
    
    // Eligibility page
    "eligibility.badge": "Eligibility Criteria",
    "eligibility.title": "Eligibility Criteria for Student Mobility Scholarships",
    "eligibility.subtitle": "Check if you meet the necessary conditions to benefit from Erasmus+ student mobility scholarships.",
    "eligibility.intro": "Student mobility scholarships will be awarded to target group students who meet the following conditions:",
    "eligibility.condition1Title": "Age and Enrollment",
    "eligibility.condition1Desc": "Students aged between 18 and 29, enrolled in an ISCED level 5-8 study program, with residence in one of the less developed regions (for foreign students).",
    "eligibility.condition2Title": "Student with Fewer Opportunities",
    "eligibility.condition2Desc": "Falls into the category of \"student with fewer opportunities\", according to the definition in the Applicant Guide Specific Conditions, in at least one of the following categories:",
    "eligibility.categoryA": "Social Scholarship",
    "eligibility.categoryADesc": "Receives or qualifies for a social scholarship granted by the higher education institution where enrolled, according to art. 10, para. (9) of ME Order 6463/2023.",
    "eligibility.categoryB": "First-Generation Student",
    "eligibility.categoryBDesc": "Falls into the \"first student in the family\" category (meaning they do not already hold a bachelor's degree, their parents have not obtained a university degree, but may have siblings who are already university students or have already graduated).",
    "eligibility.categoryC": "Single Parent",
    "eligibility.categoryCDesc": "Has the status of single parent (raising their minor child alone due to death, disappearance, incarceration of the other parent, or non-recognition on the birth certificate).",
    "eligibility.categoryD": "Migrant or Refugee",
    "eligibility.categoryDDesc": "Has migrant or refugee status.",
    "eligibility.condition3Title": "One-Time Limitation",
    "eligibility.condition3Desc": "A person can benefit only once from the ESF+ mobility scholarship to participate in an Erasmus+ student mobility.",
    "eligibility.ctaTitle": "Do you meet the criteria?",
    "eligibility.ctaDesc": "Learn how to apply for the Erasmus+ mobility scholarship.",
    "eligibility.ctaButton": "How to Apply?",
    
    // How to Apply page
    "howToApply.badge": "Application Process",
    "howToApply.title": "How to Apply?",
    "howToApply.subtitle": "Discover the mandatory conditions and required documents for enrollment in the IMPACT+UTCN project.",
    "howToApply.conditionsTitle": "Mandatory Conditions for Scholarship Award",
    "howToApply.conditionsIntro": "Student mobility scholarships will be awarded only to students who:",
    "howToApply.condition1": "Register in the project's target group",
    "howToApply.condition2": "Participate in an ERASMUS+ mobility",
    "howToApply.condition3": "Participate in at least one project activity",
    "howToApply.condition4": "Have signed the mobility scholarship award contract",
    "howToApply.contractNote": "For the mobility scholarship award, each participant will sign a contract with UTCN, as the Project Beneficiary, whereby the student assumes compliance with the conditions for awarding the mobility scholarship offered through the project.",
    "howToApply.documentsTitle": "Documents for Project Enrollment",
    "howToApply.documentsIntro": "For registration in the project's target group, interested students will submit the following documents:",
    "howToApply.doc1": "Project registration application – online form",
    "howToApply.doc2": "ID card copy",
    "howToApply.doc3": "Student/Master's/Doctoral certificate",
    "howToApply.doc4": "Declaration regarding double financing avoidance, signed in original by the student",
    "howToApply.doc5": "Declaration regarding personal data collection, signed in original by the student",
    "howToApply.doc6": "Target group registration form (offline/online) – signed in original by the student and TG Responsible",
    "howToApply.doc7": "Proof that the student intends to go on ERASMUS mobility or Learning Agreement",
    "howToApply.doc8": "Documents proving eligibility for the \"student with fewer opportunities\" category",
    "howToApply.reducedOpportunitiesTitle": "Documents for \"Student with Fewer Opportunities\" Category",
    "howToApply.reducedOpportunitiesIntro": "Documents proving eligibility for social scholarships as stipulated in art. 10 para. (9) letters a) – c) of the Minister of Education Order no. 6463/2023:",
    "howToApply.reducedDoc1": "Medical file or valid medical documents",
    "howToApply.reducedDoc2": "Death certificate(s)",
    "howToApply.reducedDoc3": "Documents attesting single-parent family membership (as applicable: civil status documents, incarceration proof, court arrest decision, social investigation report for missing parents, etc.)",
    "howToApply.reducedDoc4": "Documents attesting income level (as applicable: income certificate for each family member, social investigation report, etc.)",
    "howToApply.reducedDoc5": "Student's sworn statement attesting that the target group member falls into the category of persons with low parental educational level, accompanied by copies of parents' education documents",
    "howToApply.reducedDoc6": "Documents attesting single parent status (as applicable: birth certificate with undetermined father, death certificate of the other parent, civil status documents, incarceration proof, court arrest decision, social investigation report for missing parents, etc.)",
    "howToApply.reducedDoc7": "Residence permit (or other official document issued by competent authorities) attesting migrant or refugee status",
    "howToApply.ctaTitle": "Have questions?",
    "howToApply.ctaDesc": "Contact us for more information about the application process.",
    "howToApply.ctaButton": "Contact Us",
    
    // Team page
    "team.badge": "Project Team",
    "team.title": "IMPACT+UTCN TEAM",
    "team.subtitle": "Meet the dedicated team coordinating and implementing the project to support students with fewer opportunities.",
    "team.aboutTitle": "About Our Team",
    "team.aboutP1": "The IMPACT+UTCN project team consists of faculty and administrative staff from the Technical University of Cluj-Napoca, dedicated to supporting students with fewer opportunities in accessing Erasmus+ mobilities.",
    "team.aboutP2": "Each team member has specific responsibilities to ensure efficient project implementation and provide personalized support to eligible students.",
    "team.projectManager": "Project Manager",
    
    // Contact page
    "contact.badge": "Contact Us",
    "contact.title": "Contact",
    "contact.subtitle": "Have questions about the IMPACT+UTCN project? Fill out the form below and we will contact you as soon as possible.",
    "contact.infoTitle": "Contact Information",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.schedule": "Schedule:",
    "contact.scheduleHours": "Monday - Friday: 09:00 - 17:00",
    "contact.formTitle": "Send Us a Message",
    "contact.fullName": "Full Name",
    "contact.emailAddress": "Email Address",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.namePlaceholder": "Enter your name",
    "contact.emailPlaceholder": "example@email.com",
    "contact.subjectPlaceholder": "Message subject",
    "contact.messagePlaceholder": "Write your message here...",
    "contact.submit": "Send Message",
    "contact.submitting": "Sending...",
    "contact.successTitle": "Message Sent!",
    "contact.successDesc": "Thank you for your message. Our team will respond to you as soon as possible.",
    "contact.sendAnother": "Send another message",
    "contact.toastTitle": "Message sent!",
    "contact.toastDesc": "Thank you for your message. We will respond as soon as possible.",
    
    // Validation
    "validation.nameRequired": "Name is required",
    "validation.nameMax": "Name must be maximum 100 characters",
    "validation.emailInvalid": "Email address is not valid",
    "validation.emailMax": "Email must be maximum 255 characters",
    "validation.subjectRequired": "Subject is required",
    "validation.subjectMax": "Subject must be maximum 200 characters",
    "validation.messageMin": "Message must be at least 10 characters",
    "validation.messageMax": "Message must be maximum 2000 characters",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
