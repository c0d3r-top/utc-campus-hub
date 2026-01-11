import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";
import { Shield, Users, Briefcase, UserCheck, FileText, Mail, ExternalLink, Scale, Lock, Eye, Trash2, AlertCircle, UserX, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GDPR = () => {
  const { t } = useLanguage();

  const rights = [
    { icon: Eye, titleKey: "gdpr.rightAccess", descKey: "gdpr.rightAccessDesc" },
    { icon: FileText, titleKey: "gdpr.rightRectification", descKey: "gdpr.rightRectificationDesc" },
    { icon: Trash2, titleKey: "gdpr.rightErasure", descKey: "gdpr.rightErasureDesc" },
    { icon: Lock, titleKey: "gdpr.rightRestriction", descKey: "gdpr.rightRestrictionDesc" },
    { icon: Download, titleKey: "gdpr.rightPortability", descKey: "gdpr.rightPortabilityDesc" },
    { icon: UserX, titleKey: "gdpr.rightObjection", descKey: "gdpr.rightObjectionDesc" },
    { icon: AlertCircle, titleKey: "gdpr.rightComplaint", descKey: "gdpr.rightComplaintDesc" },
  ];

  return (
    <>
      <Helmet>
        <title>{t("gdpr.pageTitle")} | IMPACT+UTCN</title>
        <meta name="description" content={t("gdpr.pageDesc")} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <UTCNHeader />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">{t("gdpr.badge")}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                {t("gdpr.title")}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("gdpr.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              
              {/* Data Controller Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Scale className="h-6 w-6 text-primary" />
                    {t("gdpr.controllerTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{t("gdpr.controllerDesc")}</p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                    <p><strong>{t("gdpr.controllerName")}:</strong> Universitatea Tehnică din Cluj-Napoca</p>
                    <p><strong>{t("gdpr.controllerAddress")}:</strong> Str. Memorandumului nr. 28, 400114, Cluj-Napoca, România</p>
                    <p><strong>{t("gdpr.dpoContact")}:</strong> <a href="mailto:date.personale@staff.utcluj.ro" className="text-primary hover:underline">date.personale@staff.utcluj.ro</a></p>
                  </div>
                </CardContent>
              </Card>

              {/* Categories of Data Subjects */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Users className="h-5 w-5 text-primary" />
                      {t("gdpr.studentsTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{t("gdpr.studentsDesc")}</p>
                    <a 
                      href="https://didatec.sharepoint.com/:b:/r/sites/UTCNSTAFFBIROULDATEPERSONALE-10_Documente_partajate_public/Shared%20Documents/10_Documente_partajate_public/01_Notificari_PUBLIC/01_Notificare_studenti_site.pdf?csf=1&web=1&e=Xx0Gwf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <FileText className="h-4 w-4" />
                      {t("gdpr.studentNotification")}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <br />
                    <a 
                      href="https://didatec.sharepoint.com/:b:/r/sites/UTCNSTAFFBIROULDATEPERSONALE-10_Documente_partajate_public/Shared%20Documents/10_Documente_partajate_public/01_Notificari_PUBLIC/02_AcordPrelucrarePersonalizata_studenti_site.pdf?csf=1&web=1&e=tMtvZX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <FileText className="h-4 w-4" />
                      {t("gdpr.studentAgreement")}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Briefcase className="h-5 w-5 text-secondary-foreground" />
                      {t("gdpr.employeesTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{t("gdpr.employeesDesc")}</p>
                    <a 
                      href="https://didatec.sharepoint.com/:b:/r/sites/UTCNSTAFFBIROULDATEPERSONALE-10_Documente_partajate_public/Shared%20Documents/10_Documente_partajate_public/01_Notificari_PUBLIC/03_Notificare_generala_angajati_site.pdf?csf=1&web=1&e=gxAK8z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <FileText className="h-4 w-4" />
                      {t("gdpr.employeeNotification")}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <UserCheck className="h-5 w-5 text-accent-foreground" />
                      {t("gdpr.othersTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{t("gdpr.othersDesc")}</p>
                    <a 
                      href="https://didatec.sharepoint.com/:b:/r/sites/UTCNSTAFFBIROULDATEPERSONALE-10_Documente_partajate_public/Shared%20Documents/10_Documente_partajate_public/01_Notificari_PUBLIC/04_Notificare_generala_alti_site.pdf?csf=1&web=1&e=mj8g63"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <FileText className="h-4 w-4" />
                      {t("gdpr.othersNotification")}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Your Rights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    {t("gdpr.rightsTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rights.map((right, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                        <right.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-sm">{t(right.titleKey)}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{t(right.descKey)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Regulations and Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    {t("gdpr.regulationsTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="general">
                      <AccordionTrigger>{t("gdpr.generalRegulation")}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground mb-3">{t("gdpr.generalRegulationDesc")}</p>
                        <a 
                          href="https://www.utcluj.ro/media/decisions/2022/05/27/Regulament_general_privind_protectia_datelor_cu_caracter_personal_in_UTCN.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                          <FileText className="h-4 w-4" />
                          {t("gdpr.viewDocument")}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="it">
                      <AccordionTrigger>{t("gdpr.itRegulation")}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground mb-3">{t("gdpr.itRegulationDesc")}</p>
                        <a 
                          href="https://www.utcluj.ro/media/decisions/2022/05/27/Regulament_Utiliz_Resurse_IT_UTCN.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                          <FileText className="h-4 w-4" />
                          {t("gdpr.viewDocument")}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ethics">
                      <AccordionTrigger>{t("gdpr.ethicsRegulation")}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground mb-3">{t("gdpr.ethicsRegulationDesc")}</p>
                        <a 
                          href="https://www.utcluj.ro/media/decisions/2022/02/14/ROF_Comisia_de_etica_universitara_Anexa.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                          <FileText className="h-4 w-4" />
                          {t("gdpr.viewDocument")}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="archive">
                      <AccordionTrigger>{t("gdpr.archiveRegulation")}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground mb-3">{t("gdpr.archiveRegulationDesc")}</p>
                        <a 
                          href="https://www.utcluj.ro/media/decisions/2018/04/24/Nomenclatorul_arhivistic_FmYw5wE.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                          <FileText className="h-4 w-4" />
                          {t("gdpr.viewDocument")}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="cloud">
                      <AccordionTrigger>{t("gdpr.cloudRegulation")}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground mb-3">{t("gdpr.cloudRegulationDesc")}</p>
                        <a 
                          href="https://www.utcluj.ro/media/decisions/2023/05/29/H.Senat_nr._1633_Regulament_modalitate_asigurare_acces_si_suport_cl_z2nyRTx.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:underline"
                        >
                          <FileText className="h-4 w-4" />
                          {t("gdpr.viewDocument")}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Contact DPO */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-xl font-semibold mb-2">{t("gdpr.contactTitle")}</h3>
                      <p className="text-muted-foreground mb-4">{t("gdpr.contactDesc")}</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href="mailto:date.personale@staff.utcluj.ro"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          {t("gdpr.contactDPO")}
                        </a>
                        <a 
                          href="https://www.dataprotection.ro/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t("gdpr.contactANSPDCP")}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        <ProjectFooter />
      </div>
    </>
  );
};

export default GDPR;
