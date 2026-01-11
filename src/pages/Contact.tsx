import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import UTCNHeader from "@/components/UTCNHeader";
import ProjectFooter from "@/components/ProjectFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t("validation.nameRequired");
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t("validation.emailInvalid");
    if (!formData.subject.trim()) newErrors.subject = t("validation.subjectRequired");
    if (formData.message.trim().length < 10) newErrors.message = t("validation.messageMin");
    
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({ title: t("contact.toastTitle"), description: t("contact.toastDesc") });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
        <UTCNHeader />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10 text-green-600" /></div>
            <h1 className="text-3xl font-bold text-[#2b2b2b] mb-4">{t("contact.successTitle")}</h1>
            <p className="text-[#666] mb-8">{t("contact.successDesc")}</p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">{t("contact.sendAnother")}</Button>
          </div>
        </main>
        <ProjectFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <UTCNHeader />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#BE1E2D]/5 via-white to-[#F5A623]/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BE1E2D]/10 border border-[#BE1E2D]/20 mb-6">
                <Mail className="w-4 h-4 text-[#BE1E2D]" />
                <span className="text-sm font-medium text-[#BE1E2D]">{t("contact.badge")}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2b2b] mb-6"><span className="text-[#BE1E2D]">{t("contact.title")}</span></h1>
              <p className="text-lg text-[#666] max-w-2xl mx-auto">{t("contact.subtitle")}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-2xl mx-auto">
                <div className="bg-[#f9f9f9] rounded-2xl p-8">
                  <h2 className="text-xl font-bold text-[#2b2b2b] mb-6">{t("contact.formTitle")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("contact.fullName")} *</label>
                        <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder={t("contact.namePlaceholder")} className={errors.name ? "border-red-500" : ""} />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("contact.emailAddress")} *</label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t("contact.emailPlaceholder")} className={errors.email ? "border-red-500" : ""} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("contact.subject")} *</label>
                      <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder={t("contact.subjectPlaceholder")} className={errors.subject ? "border-red-500" : ""} />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#2b2b2b] mb-2">{t("contact.message")} *</label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={t("contact.messagePlaceholder")} rows={6} className={errors.message ? "border-red-500" : ""} />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-[#BE1E2D] hover:bg-[#a01825] text-white">
                      {isSubmitting ? t("contact.submitting") : <><Send className="w-4 h-4 mr-2" />{t("contact.submit")}</>}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ProjectFooter />
    </div>
  );
};

export default Contact;
