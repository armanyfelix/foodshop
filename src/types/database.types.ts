export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      calories: {
        Row: {
          created_at: string
          id: number
          image: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
        }
        Relationships: []
      }
      drinks: {
        Row: {
          created_at: string
          id: number
          image: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
        }
        Relationships: []
      }
      fats: {
        Row: {
          created_at: string
          id: number
          image: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
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
          id: string | null
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
          id?: string | null
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
          id?: string | null
          phone?: number | null
          updated_at?: string
          user_id?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      proteins: {
        Row: {
          created_at: string
          id: number
          image: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
        }
        Relationships: []
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
      sauces: {
        Row: {
          created_at: string
          id: number
          image: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
        }
        Relationships: []
      }
      styles: {
        Row: {
          calorie_id: number | null
          description: string | null
          drink_id: number | null
          fat_id: number | null
          id: number
          image: string | null
          name: string | null
          prices: Json | null
          protein_id: number | null
          sauce_id: number | null
        }
        Insert: {
          calorie_id?: number | null
          description?: string | null
          drink_id?: number | null
          fat_id?: number | null
          id?: number
          image?: string | null
          name?: string | null
          prices?: Json | null
          protein_id?: number | null
          sauce_id?: number | null
        }
        Update: {
          calorie_id?: number | null
          description?: string | null
          drink_id?: number | null
          fat_id?: number | null
          id?: number
          image?: string | null
          name?: string | null
          prices?: Json | null
          protein_id?: number | null
          sauce_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'styles_calorie_id_fkey'
            columns: ['calorie_id']
            referencedRelation: 'calories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'styles_drink_id_fkey'
            columns: ['drink_id']
            referencedRelation: 'drinks'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'styles_fat_id_fkey'
            columns: ['fat_id']
            referencedRelation: 'fats'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'styles_protein_id_fkey'
            columns: ['protein_id']
            referencedRelation: 'proteins'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'styles_sauce_id_fkey'
            columns: ['sauce_id']
            referencedRelation: 'sauces'
            referencedColumns: ['id']
          },
        ]
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
