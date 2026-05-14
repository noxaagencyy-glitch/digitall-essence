import logo from "@/assets/noxa-logo.png";

export function NoxaLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full blur-xl bg-gradient-noxa opacity-60" />
      <img src={logo} alt="NOXA Agency logo" className="relative h-full w-full rounded-full" />
    </div>
  );
}
