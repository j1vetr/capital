import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Ad Soyad en az 2 karakter olmalı"),
  company: z.string().optional(),
  contact: z.string().min(3, "İletişim bilgisi zorunludur"),
  service: z.string().min(1, "Hizmet seçimi zorunludur"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalı"),
});

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

// Admin e-mail template (dark, professional)
function adminEmailHtml(data: z.infer<typeof contactSchema>): string {
  const serviceMap: Record<string, string> = {
    "gemi-proje-lashing": "Gemi & Proje Lashing",
    "konteyner-lashing": "Konteyner Lashing",
    "proje-kargo-lashing": "Proje Kargo Lashing",
    "tekne-yat-lashing": "Tekne & Yat Lashing",
    "flat-rack-lashing": "Flat Rack Lashing",
    "shrink-wrap": "Shrink Wrap",
    "brandalama": "Brandalama",
    "sandiklama": "Sandıklama",
    "unlashing-tahliye": "Unlashing & Tahliye",
    "other": "Diğer",
  };
  const serviceName = serviceMap[data.service] || data.service;

  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Yeni Teklif Talebi</title>
</head>
<body style="margin:0;padding:0;background:#0f172a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#38aae1,#1d6ea8);padding:40px 40px 32px;border-radius:16px 16px 0 0;text-align:center;">
              <img src="https://capitallashing.com/logo.webp" alt="Capital Lashing" style="height:48px;margin-bottom:16px;filter:brightness(0) invert(1);" />
              <div style="display:inline-block;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.2);border-radius:100px;padding:6px 18px;margin-bottom:16px;">
                <span style="color:rgba(255,255,255,0.9);font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Yeni Teklif Talebi</span>
              </div>
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:900;letter-spacing:-0.5px;">Teklif İsteği Alındı</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#1e293b;padding:36px 40px 28px;">
              
              <!-- Alert Box -->
              <div style="background:#38aae120;border-left:4px solid #38aae1;border-radius:8px;padding:16px 20px;margin-bottom:32px;">
                <p style="margin:0;color:#94a3b8;font-size:14px;">Bir potansiyel müşteri teklif formu doldurdu. Lütfen en kısa sürede iletişime geçiniz.</p>
              </div>

              <!-- Info Cards -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%" style="vertical-align:top;padding-right:8px;">
                    <div style="background:#0f172a;border:1px solid #334155;border-radius:12px;padding:20px;margin-bottom:16px;">
                      <div style="color:#64748b;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Ad Soyad</div>
                      <div style="color:#f1f5f9;font-size:16px;font-weight:600;">${data.name}</div>
                    </div>
                  </td>
                  <td width="48%" style="vertical-align:top;padding-left:8px;">
                    <div style="background:#0f172a;border:1px solid #334155;border-radius:12px;padding:20px;margin-bottom:16px;">
                      <div style="color:#64748b;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Firma</div>
                      <div style="color:#f1f5f9;font-size:16px;font-weight:600;">${data.company || "Belirtilmedi"}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="48%" style="vertical-align:top;padding-right:8px;">
                    <div style="background:#0f172a;border:1px solid #334155;border-radius:12px;padding:20px;margin-bottom:16px;">
                      <div style="color:#64748b;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">İletişim</div>
                      <div style="color:#38aae1;font-size:16px;font-weight:600;">${data.contact}</div>
                    </div>
                  </td>
                  <td width="48%" style="vertical-align:top;padding-left:8px;">
                    <div style="background:#0f172a;border:1px solid #334155;border-radius:12px;padding:20px;margin-bottom:16px;">
                      <div style="color:#64748b;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Talep Edilen Hizmet</div>
                      <div style="color:#f1f5f9;font-size:16px;font-weight:600;">${serviceName}</div>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="background:#0f172a;border:1px solid #334155;border-radius:12px;padding:24px;margin-bottom:32px;">
                <div style="color:#64748b;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">Mesaj / Yük Detayları</div>
                <div style="color:#cbd5e1;font-size:15px;line-height:1.7;">${data.message.replace(/\n/g, "<br>")}</div>
              </div>

              <!-- CTA Button -->
              <div style="text-align:center;margin-bottom:8px;">
                <a href="mailto:${data.contact}" style="display:inline-block;background:linear-gradient(135deg,#38aae1,#1d6ea8);color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:100px;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
                  Hemen Yanıtla
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f172a;padding:24px 40px;border-radius:0 0 16px 16px;text-align:center;border-top:1px solid #1e293b;">
              <p style="margin:0;color:#475569;font-size:12px;">Bu e-posta <strong style="color:#38aae1;">capitallashing.com</strong> üzerindeki iletişim formundan otomatik olarak gönderilmiştir.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Customer confirmation email (light theme)
function customerEmailHtml(name: string, serviceName: string): string {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Talebiniz Alındı</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#38aae1,#1d6ea8);padding:48px 40px 40px;border-radius:16px 16px 0 0;text-align:center;">
              <img src="https://capitallashing.com/logo.webp" alt="Capital Lashing" style="height:48px;margin-bottom:24px;filter:brightness(0) invert(1);" />
              <div style="width:64px;height:64px;background:rgba(255,255,255,0.15);border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;">
                <span style="font-size:28px;">✓</span>
              </div>
              <h1 style="margin:0 0 8px;color:#ffffff;font-size:26px;font-weight:900;">Talebiniz Alındı!</h1>
              <p style="margin:0;color:rgba(255,255,255,0.8);font-size:15px;">En kısa sürede sizinle iletişime geçeceğiz.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px;">

              <p style="margin:0 0 24px;color:#334155;font-size:16px;line-height:1.7;">
                Sayın <strong>${name}</strong>,
              </p>
              <p style="margin:0 0 24px;color:#64748b;font-size:15px;line-height:1.7;">
                <strong>${serviceName}</strong> hizmetimiz için teklif talebinizi aldık. Uzman ekibimiz talebinizi inceleyerek <strong style="color:#38aae1;">en geç 2 saat içinde</strong> sizinle iletişime geçecektir.
              </p>

              <!-- Info Box -->
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:24px;margin-bottom:32px;">
                <p style="margin:0 0 16px;color:#334155;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Bizi Doğrudan Arayabilirsiniz</p>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                      <span style="color:#64748b;font-size:14px;">📞 Telefon</span>
                      <span style="float:right;color:#38aae1;font-weight:700;font-size:14px;">+90 216 312 06 12</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">
                      <span style="color:#64748b;font-size:14px;">✉️ E-Posta</span>
                      <span style="float:right;color:#38aae1;font-weight:700;font-size:14px;">info@capitallashing.com</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;">
                      <span style="color:#64748b;font-size:14px;">🕐 Çalışma Saatleri</span>
                      <span style="float:right;color:#334155;font-weight:600;font-size:14px;">7/24 Operasyonel Destek</span>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- CTA -->
              <div style="text-align:center;margin-bottom:8px;">
                <a href="https://capitallashing.com" style="display:inline-block;background:linear-gradient(135deg,#38aae1,#1d6ea8);color:#ffffff;text-decoration:none;padding:14px 40px;border-radius:100px;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
                  Web Sitemizi Ziyaret Edin
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:24px 40px;border-radius:0 0 16px 16px;text-align:center;border-top:1px solid #e2e8f0;">
              <p style="margin:0 0 8px;color:#94a3b8;font-size:12px;">
                <strong style="color:#64748b;">Capital Lashing & Port Services</strong>
              </p>
              <p style="margin:0;color:#cbd5e1;font-size:11px;">
                Abdurrahmangazi Mah. Ebubekir Cad. No:26, Sancaktepe / İstanbul
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function registerRoutes(app: Express): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = contactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ 
          error: "Geçersiz form verisi", 
          details: parsed.error.errors 
        });
      }

      const data = parsed.data;

      const serviceMap: Record<string, string> = {
        "gemi-proje-lashing": "Gemi & Proje Lashing",
        "konteyner-lashing": "Konteyner Lashing",
        "proje-kargo-lashing": "Proje Kargo Lashing",
        "tekne-yat-lashing": "Tekne & Yat Lashing",
        "flat-rack-lashing": "Flat Rack Lashing",
        "shrink-wrap": "Shrink Wrap",
        "brandalama": "Brandalama",
        "sandiklama": "Sandıklama",
        "unlashing-tahliye": "Unlashing & Tahliye",
        "other": "Diğer",
      };
      const serviceName = serviceMap[data.service] || data.service;

      const transporter = createTransporter();

      // Send admin notification
      await transporter.sendMail({
        from: `"Capital Lashing Web" <${process.env.SMTP_FROM}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `🚢 Yeni Teklif Talebi – ${data.name} | ${serviceName}`,
        html: adminEmailHtml(data),
      });

      // Try to send customer confirmation (best effort – if contact is email)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(data.contact)) {
        await transporter.sendMail({
          from: `"Capital Lashing" <${process.env.SMTP_FROM}>`,
          to: data.contact,
          subject: "Teklif Talebiniz Alındı – Capital Lashing",
          html: customerEmailHtml(data.name, serviceName),
        });
      }

      return res.status(200).json({ success: true, message: "Talebiniz başarıyla iletildi." });
    } catch (err: any) {
      console.error("Mail gönderme hatası:", err);
      return res.status(500).json({ error: "Mail gönderilemedi. Lütfen tekrar deneyin." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
