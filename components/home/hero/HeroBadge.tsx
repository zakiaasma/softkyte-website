import { ShieldCheck } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800">
      <ShieldCheck size={18} />
      Enterprise Digital Transformation Partner
    </div>
  );
}