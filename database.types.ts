export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blogs: {
        Row: {
          content: string | null
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
      }
      news: {
        Row: {
          content: string | null
          created_at: string
          id: string
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          title?: string | null
        }
      }
      notes: {
        Row: {
          " title": string | null
          created_at: string
          id: string
        }
        Insert: {
          " title"?: string | null
          created_at?: string
          id?: string
        }
        Update: {
          " title"?: string | null
          created_at?: string
          id?: string
        }
      }
      todos: {
        Row: {
          completed: boolean
          created_at: string
          id: string
          title: string | null
          user_id: string | null
        }
        Insert: {
          completed?: boolean
          created_at?: string
          id?: string
          title?: string | null
          user_id?: string | null
        }
        Update: {
          completed?: boolean
          created_at?: string
          id?: string
          title?: string | null
          user_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
