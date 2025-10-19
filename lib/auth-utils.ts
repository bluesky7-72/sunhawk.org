export type UserRole = "admin" | "employee"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  department: string
}

// Mock user data - in production, this would come from a database
const mockUsers: Record<string, User> = {
  "admin@sunhawk.co.jp": {
    id: "1",
    name: "佐藤 恭太郎",
    email: "admin@sunhawk.co.jp",
    role: "admin",
    department: "経営",
  },
  "employee@sunhawk.co.jp": {
    id: "2",
    name: "山﨑 清志",
    email: "employee@sunhawk.co.jp",
    role: "employee",
    department: "輸送第一課",
  },
}

export function getUserByEmail(email: string): User | null {
  return mockUsers[email] || null
}

export function getUserRole(email: string): UserRole | null {
  const user = getUserByEmail(email)
  return user?.role || null
}

export function isAdmin(email: string): boolean {
  return getUserRole(email) === "admin"
}

export function isEmployee(email: string): boolean {
  return getUserRole(email) === "employee"
}
