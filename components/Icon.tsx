import {
  Award,
  Calendar,
  Clock,
  Gift,
  Inbox,
  Mail,
  MessagesSquare,
  Phone,
  Receipt,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
} from "kubai-icons-react";
import type { IconName } from "@/lib/site";

/* Every icon on the site comes from Kubai Icons (kubai-icons-react), one
   consistent set. They take the surrounding text colour and play their small
   hover motion when the parent card or link is hovered. */
const ICONS = {
  chat: MessagesSquare,
  cart: ShoppingCart,
  shield: ShieldCheck,
  spark: Sparkles,
  badge: Award,
  clock: Clock,
  gift: Gift,
  calendar: Calendar,
  inbox: Inbox,
  receipt: Receipt,
  mail: Mail,
  phone: Phone,
} as const;

export default function Icon({
  name,
  className,
  size = 32,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  const Cmp = ICONS[name];
  return <Cmp className={className} size={size} variant="soft" trigger="parent" />;
}
