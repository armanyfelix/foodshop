export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      ingredients: {
        Row: {
          calories: number | null
          carbohydrates: number | null
          category: string | null
          created_at: string
          description: string | null
          fats: number | null
          id: number
          image: string | null
          name: string | null
          prices: Json | null
          proteins: number | null
          type: string | null
        }
        Insert: {
          calories?: number | null
          carbohydrates?: number | null
          category?: string | null
          created_at?: string
          description?: string | null
          fats?: number | null
          id?: number
          image?: string | null
          name?: string | null
          prices?: Json | null
          proteins?: number | null
          type?: string | null
        }
        Update: {
          calories?: number | null
          carbohydrates?: number | null
          category?: string | null
          created_at?: string
          description?: string | null
          fats?: number | null
          id?: number
          image?: string | null
          name?: string | null
          prices?: Json | null
          proteins?: number | null
          type?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          confirmed: boolean | null
          created_at: string
          description: string | null
          id: number
          image: string | null
          ingredients_id: number | null
          instructions: string | null
          items: Json | null
          name: string | null
          price: number | null
          recipe_id: number | null
          updated_at: string
          user_id: string | null
          voucher: Json | null
        }
        Insert: {
          confirmed?: boolean | null
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          ingredients_id?: number | null
          instructions?: string | null
          items?: Json | null
          name?: string | null
          price?: number | null
          recipe_id?: number | null
          updated_at?: string
          user_id?: string | null
          voucher?: Json | null
        }
        Update: {
          confirmed?: boolean | null
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          ingredients_id?: number | null
          instructions?: string | null
          items?: Json | null
          name?: string | null
          price?: number | null
          recipe_id?: number | null
          updated_at?: string
          user_id?: string | null
          voucher?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: 'orders_ingredients_id_fkey'
            columns: ['ingredients_id']
            referencedRelation: 'ingredients'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'orders_recipe_id_fkey'
            columns: ['recipe_id']
            referencedRelation: 'recipes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'orders_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: number
          order_id: number | null
          phone: number | null
          updated_at: string
          user_id: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: number
          order_id?: number | null
          phone?: number | null
          updated_at?: string
          user_id?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: number
          order_id?: number | null
          phone?: number | null
          updated_at?: string
          user_id?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_order_id_fkey'
            columns: ['order_id']
            referencedRelation: 'orders'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      recipes: {
        Row: {
          created_at: string
          id: number
          image: string | null
          ingredients: string | null
          instructions: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          ingredients?: string | null
          instructions?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          ingredients?: string | null
          instructions?: string | null
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_avatar: {
        Args: {
          avatar_url: string
        }
        Returns: Record<string, unknown>
      }
      delete_storage_object: {
        Args: {
          bucket: string
          object: string
        }
        Returns: Record<string, unknown>
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
