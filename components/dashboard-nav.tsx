"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Users, Settings, BarChart3 } from "lucide-react"

const navItems = [
  {
    title: "ダッシュボード",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "サーベイ回答",
    href: "/survey",
    icon: FileText,
  },
  {
    title: "組織図",
    href: "/organization",
    icon: Users,
  },
  {
    title: "分析レポート",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "管理画面",
    href: "/admin",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:block w-64 border-r border-border bg-card min-h-[calc(100vh-73px)]">
      <div className="p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
