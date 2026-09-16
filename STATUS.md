# Luna Pool Co. Pages launch

GitHub Pages publishes the fresh app/dist artifact from GitHub Actions. Build with Bun 1.4.2 using the committed lockfile. Generated dist files are not source files and are not tracked.

Validation: app build includes UI checks, route generation and TypeScript checking. Run bun run test from app. Two existing full-repository lint errors remain in src/components/ui/carousel.tsx and src/hooks/use-mobile.ts (set-state-in-effect). The obsolete landing-content schema test was removed because the homepage no longer consumes that template; route and other template tests remain.

Pending owner input: verified business email and phone, real Formspree endpoint and inbox receipt test, and confirmation that public/assets/luna-logo.svg is the final approved artwork. The existing file is now displayed without altering its artwork.

Set public GitHub Actions repository variables VITE_CONTACT_EMAIL, VITE_CONTACT_PHONE, VITE_FORM_ENDPOINT, then rerun deployment. Blank contact values are hidden. The form stays hidden unless the endpoint is a Formspree form URL. Never put private API keys in VITE variables. Do not claim enquiry delivery until receipt is verified.

Local security finding: the legacy Higgsfield origin remote contains a plaintext credential. Owner should rotate it; deployment uses the github remote.
