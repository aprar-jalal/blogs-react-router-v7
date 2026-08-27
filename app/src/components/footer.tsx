import { Play, Mail, ShieldCheck } from "lucide-react";

const productLinks = [
  "Cancellation Flows",
  "Reactivation Campaigns",
  "Dunning Email Automation",
  "Churn Metrics",
  "AI Feedback Analysis",
  "Customer Portal",
  "Smart Retries",
  "MCP Server",
];

const featureLinks = [
  "A/B Experiments",
  "Customer Segmentation",
  "Exit Survey",
  "Session Recording",
  "Dynamic Offers",
  "Custom Branding",
  "Easy Setup",
  "Pause Wall",
  "Payment Wall",
];

const learnLinks = [
  "Get a demo",
  "Developer Docs",
  "Contact Us",
  "How it works",
  "Blogs",
];

const exploreLinks = ["Pricing", "ROI Calculator"];

const legalLinks = ["Terms of use", "Privacy policy", "Data Protection & GDPR"];

const caseStudyLinks = ["Healthcare", "EduTech", "Digital Marketplace"];

const socialIcons = [
  { label: "Facebook", Icon: Mail },
  { label: "Instagram", Icon: Play },
  { label: "LinkedIn", Icon: Mail },
  { label: "YouTube", Icon: Play },
  { label: "Email", Icon: Mail },
];

type FooterColumnProps = {
  title: string;
  links: string[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-amber-400">{title}</h3>

      <ul className="space-y-3">
        {links.map((label) => (
          <li key={label}>
            <span className="cursor-pointer text-sm text-slate-200 transition-colors hover:text-white">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0d0f2e] text-white ">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-amber-400" strokeWidth={2} />
              <span className="text-xl font-bold">Churn Solution</span>
            </div>
            <p className="mb-5 max-w-xs text-sm text-slate-300">
              Reduce Churn and Retain more subscribers.
            </p>
            <div className="inline-flex w-fit overflow-hidden rounded-md border border-slate-600">
              <span className="flex items-center bg-white px-3 py-2 text-sm font-bold text-[#635bff]">
                stripe
              </span>
              <span className="flex items-center px-3 py-2 text-sm text-white">
                Verified Partner
              </span>
            </div>
          </div>

          <FooterColumn title="Products" links={productLinks} />

          <FooterColumn title="Features" links={featureLinks} />

          <div className="space-y-8">
            <FooterColumn title="Learn" links={learnLinks} />
            <FooterColumn title="Explore" links={exploreLinks} />
          </div>
          <div className="space-y-8">
            <FooterColumn title="Legal" links={legalLinks} />

            <FooterColumn title="Case Studies" links={caseStudyLinks} />
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-3 text-sm">
              Our Stripe App tracks and reduces churn
            </p>

            <div className="mb-5 flex w-fit items-center gap-3 rounded-md bg-white px-4 py-3 text-slate-900">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-[#635bff] text-sm font-bold text-white">
                S
              </span>

              <span className="text-sm leading-tight">
                <span className="block text-xs text-slate-500">
                  Find it on the
                </span>

                <span className="block font-semibold text-[#635bff]">
                  Stripe App Marketplace
                </span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              {socialIcons.map(({ label, Icon }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 transition-colors hover:bg-amber-400"
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Churn Solution, LLC. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
