import { Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "API", "Changelog"],
  Company: ["About", "Blog", "Customers", "Careers", "Contact"],
  Resources: ["Help Center", "Docs", "Security", "Privacy", "Terms"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-card-foreground pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="InterviewAI" className="h-8 brightness-200" />
              <span className="text-lg font-bold text-card">InterviewAI</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              AI-powered interviews for modern teams
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-card transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-card transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-card transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-card mb-4">{heading}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-card transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-muted-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 InterviewAI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            SOC 2 Certified • GDPR Compliant
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
