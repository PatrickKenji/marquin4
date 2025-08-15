import type { ComponentType } from 'react'

// Tipos básicos para o projeto
export interface Lawyer {
  name: string
  oab: string
  specialty: string
  photo?: string
}

export interface Challenge {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

export interface ProcessStep {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

export interface Testimonial {
  name: string
  text: string
  photo?: string
  company?: string
}

export interface FAQ {
  question: string
  answer: string
}

// Configurações do ambiente
export interface EnvironmentConfig {
  whatsappNumber: string
  phoneNumber: string
  formEndpoint: string
  googleMapsAddress: string
}

