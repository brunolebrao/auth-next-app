"use client"

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  model?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
children,
model = "redirect",
asChild
}: LoginButtonProps) => {
const router = useRouter()
const onClick = () => {
 router.push("/auth/login")
}

if(model === 'modal'){
  return (
    <span>
      TODO: Implement modal
    </span>
  )
}
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )

}