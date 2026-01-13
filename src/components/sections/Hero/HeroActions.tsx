import { Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";

export default function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 z-10">
      <Button variant="primary" href="#projects">
        View Projects
      </Button>
      <Button
        variant="secondary"
        href={SITE_CONFIG.resumePath}
        download={true}
      >
        Download Resume
      </Button>
      {/* Alternative: Fetch from Strapi CMS
      <Button
        variant="secondary"
        href={process.env.NEXT_PUBLIC_STRAPI_URL + "/api/resume"}
        download={true}
      >
        Download Resume
      </Button>
      */}
    </div>
  );
}
