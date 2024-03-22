export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      banners: {
        Row: {
          content: Json
          created_at: string
          from_date: string
          id: string
          to_date: string
          updated_at: string
        }
        Insert: {
          content: Json
          created_at?: string
          from_date: string
          id?: string
          to_date: string
          updated_at?: string
        }
        Update: {
          content?: Json
          created_at?: string
          from_date?: string
          id?: string
          to_date?: string
          updated_at?: string
        }
        Relationships: []
      }
      carts: {
        Row: {
          created_at: string
          id: string
          products: Json
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          products: Json
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          products?: Json
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "carts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      categories: {
        Row: {
          created_at: string
          icon: Json
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          icon: Json
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          icon?: Json
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          message: string
          phone: string
          postal_code: string
          status: Database["public"]["Enums"]["contacts_status"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          message: string
          phone: string
          postal_code: string
          status?: Database["public"]["Enums"]["contacts_status"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          message?: string
          phone?: string
          postal_code?: string
          status?: Database["public"]["Enums"]["contacts_status"]
          updated_at?: string
        }
        Relationships: []
      }
      installations: {
        Row: {
          created_at: string
          description: string
          id: string
          image: Json
          product_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          image: Json
          product_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          image?: Json
          product_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "installations_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      pages: {
        Row: {
          content: Json
          created_at: string
          id: string
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          content?: Json
          created_at?: string
          id?: string
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          content?: Json
          created_at?: string
          id?: string
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          category_id: string
          created_at: string
          description: string
          featured: boolean
          from_price: number | null
          id: string
          main_image: Json
          name: string
          price: number | null
          quantity: number
          shop_id: string
          slug: string
          updated_at: string
          variants: Json | null
          variants_images: Json | null
        }
        Insert: {
          category_id: string
          created_at?: string
          description: string
          featured?: boolean
          from_price?: number | null
          id?: string
          main_image: Json
          name: string
          price?: number | null
          quantity?: number
          shop_id: string
          slug: string
          updated_at?: string
          variants?: Json | null
          variants_images?: Json | null
        }
        Update: {
          category_id?: string
          created_at?: string
          description?: string
          featured?: boolean
          from_price?: number | null
          id?: string
          main_image?: Json
          name?: string
          price?: number | null
          quantity?: number
          shop_id?: string
          slug?: string
          updated_at?: string
          variants?: Json | null
          variants_images?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_shop_id_fkey"
            columns: ["shop_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          }
        ]
      }
      shops: {
        Row: {
          address: string
          city: string
          country: string
          created_at: string
          email: string
          google_maps_url: string
          icon: Json
          id: string
          open_hours: Json
          phone: string
          postal_code: string
          updated_at: string
        }
        Insert: {
          address: string
          city: string
          country: string
          created_at?: string
          email: string
          google_maps_url: string
          icon: Json
          id?: string
          open_hours: Json
          phone: string
          postal_code: string
          updated_at?: string
        }
        Update: {
          address?: string
          city?: string
          country?: string
          created_at?: string
          email?: string
          google_maps_url?: string
          icon?: Json
          id?: string
          open_hours?: Json
          phone?: string
          postal_code?: string
          updated_at?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin_authenticated_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_editor_authenticated_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_viewer_authenticated_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_visitor_authenticated_user: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      contacts_status: "NEW" | "IN_PROGRESS" | "CLOSED"
      user_role: "ADMIN" | "EDITOR" | "VIEWER" | "VISITOR"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

