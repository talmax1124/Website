import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/lib/language";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      telephone: String(data.get("telephone") ?? ""),
      message: String(data.get("message") ?? ""),
      _subject: "Obsessions Wheels website inquiry",
    };
    setStatus("sending");
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
      form.reset();
    } catch {
      const body = encodeURIComponent(
        `${payload.name}\n${payload.telephone}\n\n${payload.message}`,
      );
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(payload._subject)}&body=${body}`;
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-lg bg-elevated p-6 text-sm leading-relaxed text-fg">
        {t.contact.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">{t.contact.name}</Label>
        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder={t.contact.namePh}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t.contact.email}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t.contact.emailPh}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telephone">{t.contact.phone}</Label>
        <Input
          id="telephone"
          name="telephone"
          type="tel"
          required
          autoComplete="tel"
          placeholder={t.contact.phonePh}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t.contact.message}</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={t.contact.messagePh}
        />
      </div>
      {status === "error" ? (
        <p className="text-sm text-closed">{t.contact.error}</p>
      ) : null}
      <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
        {status === "sending" ? t.contact.sending : t.contact.submit}
      </Button>
    </form>
  );
}
