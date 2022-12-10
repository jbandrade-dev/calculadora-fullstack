import { ButtonHTMLAttributes, ReactNode } from "react"
import { v4 as uuidv4 } from "uuid"

// ModulesContext

export const balance = 4
export const balanceDrawer = 26


// Design System

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

export interface TextProps {
  size?: "sm" | "md" | "lg"
  children: ReactNode
  asChild?: boolean
  className?: string
}

export interface HeadingProps {
  size?: "sm" | "md" | "lg"
  children: ReactNode
  asChild?: boolean
  className?: string
}

// Tabs Card

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export interface HeaderCardProps {
  name: string
  moduleToDeleteId: string
}

export interface CardProps {
  content: {
    id: string
    nameModule: string
    moduleType: string
    isDrawer: boolean
    hardwares: {
      id: string | null
      nameHardware: string
      icon: string
      measurements: string
    }[]
    parts: {
      id: string
      namePart: string
      icon: string
      measurements: {
        width: number
        height: number
      }
    }[]
    drawers: {
      id: string
      namePart: string
      icon: string
      measurements: {
        width: number
        height: number
      }
    }[]
  }
}

// Container

export interface ContainerProps {
  children: ReactNode
}

// NavBar

export interface SocialNetworksProps {
  tailwind: string
  size: number
}

export const menu = [
  { name: "Dicas de projeto", link: "/currículo" },
  { name: "Sobre", link: "/sobre" },
  { name: "Glossário", link: "/glossario" },
  { name: "Contato", link: "/contato" },

]

// Footer

export interface FooterDisclosureProps {
  content: {
    id: string
    title: string
    panel: {
      name: string
      link: string
    }[]
  }
}

export const buttons = [
  {
    id: uuidv4(),
    title: "Geral",
    panel: [
      {
        name: "Portfólio",
        link: "",
      },
      {
        name: "Curricúlo",
        link: "",
      },
      {
        name: "Sobre",
        link: "",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Últimos Projetos",
    panel: [
      {
        name: "Reimont",
        link: "",
      },
      {
        name: "Timer (estudo)",
        link: "",
      },
      {
        name: "Todo List (estudo)",
        link: "",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Contato",
    panel: [
      {
        name: "Telefone",
        link: "",
      },
      {
        name: "Email",
        link: "",
      },
      {
        name: "Briefing",
        link: "",
      },
    ],
  },
]