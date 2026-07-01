import type { CSSProperties, ReactNode } from "react"
import { useMemo, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  AccessibilityIcon,
  CheckIcon,
  CodeIcon,
  LayersIcon,
  LayoutGridIcon,
  MoreHorizontalIcon,
  PaletteIcon,
  RefreshCcwIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  TypeIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type ThemeMode = "light" | "dark"

type ColorTokenKey =
  | "background"
  | "foreground"
  | "card"
  | "cardForeground"
  | "popover"
  | "popoverForeground"
  | "primary"
  | "primaryForeground"
  | "secondary"
  | "secondaryForeground"
  | "muted"
  | "mutedForeground"
  | "accent"
  | "accentForeground"
  | "destructive"
  | "border"
  | "input"
  | "ring"
  | "chart1"
  | "chart2"
  | "chart3"
  | "chart4"
  | "chart5"
  | "sidebar"
  | "sidebarForeground"
  | "sidebarPrimary"
  | "sidebarPrimaryForeground"
  | "sidebarAccent"
  | "sidebarAccentForeground"
  | "sidebarBorder"
  | "sidebarRing"

type ColorTokenMap = Record<ColorTokenKey, string>

type CssVarStyle = CSSProperties & Record<`--${string}`, string>

type TokenField = {
  key: ColorTokenKey
  label: string
  cssVar: string
  role: string
}

type TokenGroup = {
  title: string
  description: string
  fields: TokenField[]
}

const meta = {
  title: "Theme",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const fluentSources = [
  {
    title: "Fluent 2 design principles",
    href: "https://fluent2.microsoft.design/design-principles",
  },
  {
    title: "Fluent 2 design tokens",
    href: "https://fluent2.microsoft.design/design-tokens",
  },
  {
    title: "Fluent 2 color",
    href: "https://fluent2.microsoft.design/color",
  },
  {
    title: "Fluent UI React theme designer",
    href: "https://storybooks.fluentui.dev/react/?path=/docs/theme-theme-designer--docs",
  },
  {
    title: "tweakcn theme editor",
    href: "https://tweakcn.com/editor/theme",
  },
]

const colorGroups = [
  {
    title: "Surface",
    description: "Page, card, and popover layers that set the reading surface.",
    tokens: [
      "--background",
      "--foreground",
      "--card",
      "--card-foreground",
      "--popover",
      "--popover-foreground",
    ],
  },
  {
    title: "Action",
    description: "Primary, secondary, and accent decisions for interactive UI.",
    tokens: [
      "--primary",
      "--primary-foreground",
      "--secondary",
      "--secondary-foreground",
      "--accent",
      "--accent-foreground",
    ],
  },
  {
    title: "State",
    description: "Muted content, destructive feedback, and focus indication.",
    tokens: ["--muted", "--muted-foreground", "--destructive", "--ring"],
  },
  {
    title: "Structure",
    description: "Borders and inputs that describe shape without adding noise.",
    tokens: ["--border", "--input"],
  },
  {
    title: "Chart",
    description: "Distinct colors reserved for data, status, and comparison.",
    tokens: ["--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5"],
  },
  {
    title: "Sidebar",
    description: "Navigation surface, action, accent, border, and focus tokens.",
    tokens: [
      "--sidebar",
      "--sidebar-foreground",
      "--sidebar-primary",
      "--sidebar-primary-foreground",
      "--sidebar-accent",
      "--sidebar-accent-foreground",
      "--sidebar-border",
      "--sidebar-ring",
    ],
  },
]

const radiusTokens = [
  { token: "--radius-sm", usage: "Small badges, compact controls" },
  { token: "--radius-md", usage: "Buttons, inputs, and menus" },
  { token: "--radius-lg", usage: "Cards and standard containers" },
  { token: "--radius-xl", usage: "Sheets, popovers, and larger panels" },
  { token: "--radius-2xl", usage: "Large preview shells and broad surfaces" },
]

const densityValues = [
  ["2", "8px", "Tight icon and label pairs"],
  ["3", "12px", "Compact component internals"],
  ["4", "16px", "Standard card and form spacing"],
  ["5", "20px", "Section-level breathing room"],
  ["6", "24px", "Panel and page rhythm"],
  ["8", "32px", "Large content separation"],
]

const webTypeRamp = [
  ["Caption 2", "Regular", "10px / 14px", "Rare metadata"],
  ["Caption 1", "Regular", "12px / 16px", "Timestamps and helper text"],
  ["Body 1", "Regular", "14px / 20px", "Default interface copy"],
  ["Body 1 Strong", "Semibold", "14px / 20px", "Inline emphasis"],
  ["Subtitle 2", "Semibold", "16px / 22px", "Panel titles"],
  ["Subtitle 1", "Semibold", "20px / 26px", "Section headers"],
  ["Title 3", "Semibold", "24px / 32px", "Page sections"],
  ["Title 2", "Semibold", "28px / 36px", "Focused views"],
  ["Title 1", "Semibold", "32px / 40px", "Page titles"],
  ["Large Title", "Semibold", "40px / 52px", "Major experiences"],
  ["Display", "Semibold", "68px / 92px", "Rare campaign-scale moments"],
]

const fluentPrinciples = [
  {
    title: "Natural on every platform",
    userNeed: "People should immediately understand what to do.",
    functional:
      "Adapt layout, control density, navigation patterns, and interaction affordances to the current device and host platform.",
    emotional:
      "Familiar platform behavior makes an experience feel expected, reliable, and trustworthy.",
    ecApplication: [
      "Keep the registry shell quiet and app-like instead of marketing-like.",
      "Use web-native forms, links, focus, and responsive grids so consumers can inspect registry data quickly.",
      "Map design tokens to shadcn CSS variables while preserving the Fluent mental model.",
    ],
  },
  {
    title: "Built for focus",
    userNeed: "People should stay in flow and move toward action.",
    functional:
      "Use hierarchy, progressive disclosure, clear controls, and predictable feedback so the interface communicates without getting in the way.",
    emotional:
      "Reducing clutter and noise helps people feel centered, calm, and confident.",
    ecApplication: [
      "Group components by job to be done, then expose exact JSON and Storybook links.",
      "Use compact cards and plain summaries so the component catalog remains scannable.",
      "Reserve vivid brand color for primary actions, focus, selected state, and essential emphasis.",
    ],
  },
  {
    title: "One for all, all for one",
    userNeed: "People should be included by default.",
    functional:
      "Design with a wide range of abilities, assistive technologies, input modes, contrast needs, and zoom settings in mind from the beginning.",
    emotional:
      "When the product accounts for difference, people feel like they belong.",
    ecApplication: [
      "Keep keyboard focus visible, preserve semantic headings, and test narrow breakpoints.",
      "Do not communicate status through color alone; pair state with text, shape, or iconography.",
      "Treat imported theme values as local editor input and show clear errors when they cannot be used.",
    ],
  },
  {
    title: "Unmistakably Microsoft",
    userNeed: "People should recognize the ecosystem they are in.",
    functional:
      "Use signature experiences such as Microsoft blue, Segoe, Fluent icons, neutral surfaces, and consistent tokens to connect products.",
    emotional:
      "Small moments of personality and familiarity help the product feel crafted instead of generic.",
    ecApplication: [
      "Use Fluent-inspired neutral layers with Microsoft blue as the default brand color.",
      "Use Segoe UI Variable where available and system fonts where platform familiarity matters.",
      "Keep elevation, radius, and motion restrained so the registry feels like a Microsoft work surface.",
    ],
  },
]

const foundationGuidance = [
  {
    title: "Color",
    icon: PaletteIcon,
    summary:
      "Use neutrals to ground surfaces and hierarchy, shared colors sparingly for recognition, brand color for identity and primary actions, and semantic colors only for meaningful state.",
    details: [
      "Neutral colors carry most of the interface: page backgrounds, cards, borders, text, and subtle component states.",
      "Brand colors should anchor a product experience without flooding large surfaces or flattening hierarchy.",
      "Interaction states should move predictably from rest to hover, active, selected, and focus.",
      "Focus indication should be distinct from hover and selection, using a visible stroke instead of relying only on fill changes.",
      "Accessible color requires sufficient text, icon, and non-text contrast and should never be the only signal.",
    ],
  },
  {
    title: "Typography",
    icon: TypeIcon,
    summary:
      "Use Segoe UI as the Microsoft signature on web, fall back to native system type, and rely on semantic scale instead of one-off font sizing.",
    details: [
      "The web type ramp moves from compact captions through body, subtitle, title, large title, and display roles.",
      "Use sentence case for readable product UI. Avoid all caps as an attention hack.",
      "Default to left alignment for left-to-right reading. Use centered or right-aligned text only for short, intentional cases.",
      "Use baseline rhythm, line height, and spacing together so dense work surfaces remain scannable.",
      "Text color participates in hierarchy: foreground for primary content, muted foreground for secondary content, and brand color for purposeful emphasis.",
    ],
  },
  {
    title: "Layout",
    icon: LayoutGridIcon,
    summary:
      "Use spacing, proximity, grids, alignment, and responsive behavior to show relationships and guide decisions on every screen size.",
    details: [
      "Close elements feel related; larger gaps separate groups and create hierarchy without extra lines.",
      "Fluent uses a four pixel spacing base, with 2, 6, and 10 pixel values available for icon and fine alignment.",
      "Column, modular, manuscript, and baseline grids each solve different composition problems.",
      "Margins, gutters, columns, and regions should adapt at breakpoints instead of forcing one desktop layout everywhere.",
      "Touch targets and zoom requirements must be considered when choosing density.",
    ],
  },
  {
    title: "Design tokens",
    icon: CodeIcon,
    summary:
      "Separate raw values from semantic use. Global values store colors, type, radius, stroke, spacing, and motion; aliases describe where to apply them.",
    details: [
      "Global tokens are context-agnostic values such as hex colors, spacing, radius, and animation primitives.",
      "Alias tokens add meaning so designers and developers can pick a token by role instead of by raw value.",
      "Theming must account for light, dark, high-contrast, and branded surfaces while preserving contrast.",
      "This registry maps Fluent intent onto shadcn CSS variables such as background, primary, ring, and sidebar.",
      "Generated themes should export source tokens clearly enough to paste into CSS and review in code.",
    ],
  },
  {
    title: "Elevation",
    icon: LayersIcon,
    summary:
      "Use depth sparingly to express hierarchy, focus, and surface relationships through shadow, light, and sometimes stroke.",
    details: [
      "Higher elevation should mean a stronger relationship change, not just decoration.",
      "Fluent combines sharper key shadows with softer ambient shadows to communicate distance.",
      "Low elevation suits cards, command bars, tooltips, and hover surfaces; high elevation suits sheets, panels, and dialogs.",
      "Windows can use strokes rather than key shadows to outline objects.",
      "Colored surfaces need adjusted shadow treatment so elevation appears consistent against brand color.",
    ],
  },
  {
    title: "Shape and stroke",
    icon: SparklesIcon,
    summary:
      "Use rectangles, circles, pills, and beaks deliberately, with radius and stroke chosen by component role and size.",
    details: [
      "Rectangles are the default form for buttons, textareas, menus, cards, images, and most containers.",
      "Circles represent people or round objects, such as avatars.",
      "Pills suit tracks, toggles, tags, keywords, and selected list items.",
      "Beaks identify floating surfaces attached to a specific trigger, such as callouts.",
      "Fluent radius defaults are compact: 2px for small elements, 4px for common controls, 8px to 12px for larger surfaces, and 50% for circles.",
    ],
  },
  {
    title: "Motion",
    icon: SlidersHorizontalIcon,
    summary:
      "Use motion to clarify relationships and state changes, not to decorate. It should be functional, natural, consistent, and appealing.",
    details: [
      "Motion should identify the next step, explain a UI change, or acknowledge completion.",
      "Natural easing, short duration, and movement proportional to distance help animation feel believable.",
      "Common transitions include enter and exit, elevation, top-level fade, and container transform.",
      "Choreography should direct attention through hierarchy and short staggering, especially for sets of items.",
      "Respect reduced-motion needs, avoid flashes, and communicate dynamic updates through non-motion alternatives where needed.",
    ],
  },
  {
    title: "Accessibility",
    icon: AccessibilityIcon,
    summary:
      "Design for diverse interaction patterns, assistive technologies, contrast needs, zoom, alternatives, plain language, and semantic code.",
    details: [
      "Use logical headings and structure so visual users and assistive technology users can navigate efficiently.",
      "Manage keyboard focus predictably, especially after dialogs, drawers, popovers, and other temporary UI closes.",
      "Standard text should meet 4.5:1 contrast, large text should meet 3:1, and meaningful icons or controls should meet 3:1 against adjacent colors.",
      "Layouts should reflow down to 320px and support text zoom without clipping.",
      "Provide useful alt text, captions, semantic HTML, WAI-ARIA patterns where appropriate, and design specs for focus order and screen reader annotations.",
    ],
  },
]

const tokenGroups: TokenGroup[] = [
  {
    title: "Primary",
    description: "Brand action and text on brand action.",
    fields: [
      {
        key: "primary",
        label: "Background",
        cssVar: "--primary",
        role: "Primary actions, selected states, and active emphasis.",
      },
      {
        key: "primaryForeground",
        label: "Foreground",
        cssVar: "--primary-foreground",
        role: "Text and icons placed on primary.",
      },
    ],
  },
  {
    title: "Secondary and Accent",
    description: "Supportive states and lower-emphasis actions.",
    fields: [
      {
        key: "secondary",
        label: "Secondary background",
        cssVar: "--secondary",
        role: "Secondary buttons and neutral selected surfaces.",
      },
      {
        key: "secondaryForeground",
        label: "Secondary foreground",
        cssVar: "--secondary-foreground",
        role: "Text on secondary backgrounds.",
      },
      {
        key: "accent",
        label: "Accent background",
        cssVar: "--accent",
        role: "Soft brand emphasis and hoverable regions.",
      },
      {
        key: "accentForeground",
        label: "Accent foreground",
        cssVar: "--accent-foreground",
        role: "Text on accent backgrounds.",
      },
    ],
  },
  {
    title: "Base",
    description: "Page, card, popover, and text surfaces.",
    fields: [
      {
        key: "background",
        label: "Background",
        cssVar: "--background",
        role: "Main page surface.",
      },
      {
        key: "foreground",
        label: "Foreground",
        cssVar: "--foreground",
        role: "Primary content on background.",
      },
      {
        key: "card",
        label: "Card",
        cssVar: "--card",
        role: "Card and panel background.",
      },
      {
        key: "cardForeground",
        label: "Card foreground",
        cssVar: "--card-foreground",
        role: "Primary content on cards.",
      },
      {
        key: "popover",
        label: "Popover",
        cssVar: "--popover",
        role: "Floating surface background.",
      },
      {
        key: "popoverForeground",
        label: "Popover foreground",
        cssVar: "--popover-foreground",
        role: "Text on floating surfaces.",
      },
    ],
  },
  {
    title: "Muted and Destructive",
    description: "Subtle content and critical state.",
    fields: [
      {
        key: "muted",
        label: "Muted",
        cssVar: "--muted",
        role: "Subtle fills, low emphasis groups, and skeleton surfaces.",
      },
      {
        key: "mutedForeground",
        label: "Muted foreground",
        cssVar: "--muted-foreground",
        role: "Secondary text and helper copy.",
      },
      {
        key: "destructive",
        label: "Destructive",
        cssVar: "--destructive",
        role: "Danger, error, and destructive actions.",
      },
    ],
  },
  {
    title: "Border, Input, and Ring",
    description: "Structure and focus indication.",
    fields: [
      {
        key: "border",
        label: "Border",
        cssVar: "--border",
        role: "Cards, separators, and low-emphasis outlines.",
      },
      {
        key: "input",
        label: "Input",
        cssVar: "--input",
        role: "Input control boundaries.",
      },
      {
        key: "ring",
        label: "Ring",
        cssVar: "--ring",
        role: "Visible keyboard focus and attention ring.",
      },
    ],
  },
  {
    title: "Chart",
    description: "Distinct data colors.",
    fields: [
      {
        key: "chart1",
        label: "Chart 1",
        cssVar: "--chart-1",
        role: "Primary data series.",
      },
      {
        key: "chart2",
        label: "Chart 2",
        cssVar: "--chart-2",
        role: "Positive or secondary data series.",
      },
      {
        key: "chart3",
        label: "Chart 3",
        cssVar: "--chart-3",
        role: "Tertiary comparison series.",
      },
      {
        key: "chart4",
        label: "Chart 4",
        cssVar: "--chart-4",
        role: "Risk or urgent series.",
      },
      {
        key: "chart5",
        label: "Chart 5",
        cssVar: "--chart-5",
        role: "Additional comparison series.",
      },
    ],
  },
  {
    title: "Sidebar",
    description: "Navigation shell tokens.",
    fields: [
      {
        key: "sidebar",
        label: "Background",
        cssVar: "--sidebar",
        role: "Sidebar surface.",
      },
      {
        key: "sidebarForeground",
        label: "Foreground",
        cssVar: "--sidebar-foreground",
        role: "Navigation text.",
      },
      {
        key: "sidebarPrimary",
        label: "Primary",
        cssVar: "--sidebar-primary",
        role: "Active navigation action.",
      },
      {
        key: "sidebarPrimaryForeground",
        label: "Primary foreground",
        cssVar: "--sidebar-primary-foreground",
        role: "Text on active navigation action.",
      },
      {
        key: "sidebarAccent",
        label: "Accent",
        cssVar: "--sidebar-accent",
        role: "Hover and selected navigation fills.",
      },
      {
        key: "sidebarAccentForeground",
        label: "Accent foreground",
        cssVar: "--sidebar-accent-foreground",
        role: "Text on sidebar accent.",
      },
      {
        key: "sidebarBorder",
        label: "Border",
        cssVar: "--sidebar-border",
        role: "Sidebar separators and boundaries.",
      },
      {
        key: "sidebarRing",
        label: "Ring",
        cssVar: "--sidebar-ring",
        role: "Sidebar focus state.",
      },
    ],
  },
]

const editableFields = tokenGroups.flatMap((group) => group.fields)
const editableFieldsByCssVar = new Map(
  editableFields.map((field) => [field.cssVar, field])
)

const defaultLightTokens: ColorTokenMap = {
  background: "#fafafa",
  foreground: "#242424",
  card: "#ffffff",
  cardForeground: "#242424",
  popover: "#ffffff",
  popoverForeground: "#242424",
  primary: "#0f6cbd",
  primaryForeground: "#ffffff",
  secondary: "#f5f5f5",
  secondaryForeground: "#242424",
  muted: "#f5f5f5",
  mutedForeground: "#616161",
  accent: "#ebf3fc",
  accentForeground: "#0f6cbd",
  destructive: "#c50f1f",
  border: "#d1d1d1",
  input: "#d1d1d1",
  ring: "#0f6cbd",
  chart1: "#0f6cbd",
  chart2: "#107c10",
  chart3: "#881798",
  chart4: "#c50f1f",
  chart5: "#ca5010",
  sidebar: "#f5f5f5",
  sidebarForeground: "#242424",
  sidebarPrimary: "#0f6cbd",
  sidebarPrimaryForeground: "#ffffff",
  sidebarAccent: "#ebf3fc",
  sidebarAccentForeground: "#0f6cbd",
  sidebarBorder: "#d1d1d1",
  sidebarRing: "#0f6cbd",
}

const defaultDarkTokens: ColorTokenMap = {
  background: "#1f1f1f",
  foreground: "#f5f5f5",
  card: "#292929",
  cardForeground: "#f5f5f5",
  popover: "#292929",
  popoverForeground: "#f5f5f5",
  primary: "#479ef5",
  primaryForeground: "#081724",
  secondary: "#333333",
  secondaryForeground: "#f5f5f5",
  muted: "#333333",
  mutedForeground: "#c7c7c7",
  accent: "#0f3057",
  accentForeground: "#d7e8fb",
  destructive: "#ff99a4",
  border: "#434343",
  input: "#525252",
  ring: "#479ef5",
  chart1: "#479ef5",
  chart2: "#54b054",
  chart3: "#c386e8",
  chart4: "#ff99a4",
  chart5: "#f4bfab",
  sidebar: "#242424",
  sidebarForeground: "#f5f5f5",
  sidebarPrimary: "#479ef5",
  sidebarPrimaryForeground: "#081724",
  sidebarAccent: "#0f3057",
  sidebarAccentForeground: "#d7e8fb",
  sidebarBorder: "#434343",
  sidebarRing: "#479ef5",
}

const brandPresets = [
  { name: "Dynamics blue", color: "#0f6cbd" },
  { name: "Teams purple", color: "#6264a7" },
  { name: "Excel green", color: "#107c41" },
  { name: "Power Apps violet", color: "#742774" },
  { name: "Planner green", color: "#31752f" },
  { name: "Word blue", color: "#185abd" },
]

const fontPresets = [
  {
    name: "Segoe UI Variable",
    value:
      '"Segoe UI Variable", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  {
    name: "System UI",
    value: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  {
    name: "Serif review",
    value: 'Georgia, "Times New Roman", serif',
  },
  {
    name: "Monospace",
    value: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
  },
]

function ThemeShell({
  children,
  className,
  mode,
}: {
  children: ReactNode
  className?: string
  mode?: "dark"
}) {
  return (
    <main className={mode}>
      <div className="min-h-svh bg-background p-6 text-foreground">
        <div className={cn("mx-auto flex max-w-7xl flex-col gap-6", className)}>
          {children}
        </div>
      </div>
    </main>
  )
}

function ThemeHeader({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <header className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto]">
      <div className="flex min-w-0 flex-col gap-2">
        <Badge className="w-fit" variant="secondary">
          Fluent 2 aligned
        </Badge>
        <h1 className="text-2xl font-semibold tracking-normal">{title}</h1>
        <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
      {children}
    </header>
  )
}

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section className="flex flex-col gap-3">
      <div className="space-y-1">
        <h2 className="text-base font-semibold tracking-normal">{title}</h2>
        {description ? (
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  )
}

function TokenSwatch({ token }: { token: string }) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-md border bg-card p-3">
      <div
        className="size-9 shrink-0 rounded border shadow-sm"
        style={{ backgroundColor: `var(${token})` }}
      />
      <div className="min-w-0">
        <code className="block truncate text-xs">{token}</code>
        <span className="text-xs text-muted-foreground">var({token})</span>
      </div>
    </div>
  )
}

function RadiusSwatch({ token, usage }: { token: string; usage: string }) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-md border bg-card p-3">
      <div
        className="size-10 shrink-0 border bg-accent"
        style={{ borderRadius: `var(${token})` }}
      />
      <div className="min-w-0">
        <code className="block truncate text-xs">{token}</code>
        <span className="text-xs text-muted-foreground">{usage}</span>
      </div>
    </div>
  )
}

function hexToRgb(hex: string) {
  const value = hex.replace("#", "")
  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((character) => character + character)
          .join("")
      : value

  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    return null
  }

  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  }
}

function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
  return `#${[r, g, b]
    .map((channel) =>
      Math.max(0, Math.min(255, Math.round(channel)))
        .toString(16)
        .padStart(2, "0")
    )
    .join("")}`
}

function mixHex(from: string, to: string, amount: number) {
  const fromRgb = hexToRgb(from)
  const toRgb = hexToRgb(to)

  if (!fromRgb || !toRgb) {
    return from
  }

  return rgbToHex({
    r: fromRgb.r + (toRgb.r - fromRgb.r) * amount,
    g: fromRgb.g + (toRgb.g - fromRgb.g) * amount,
    b: fromRgb.b + (toRgb.b - fromRgb.b) * amount,
  })
}

function getRelativeLuminance(hex: string) {
  const rgb = hexToRgb(hex)

  if (!rgb) {
    return null
  }

  const channels = [rgb.r, rgb.g, rgb.b].map((channel) => {
    const value = channel / 255

    return value <= 0.03928
      ? value / 12.92
      : ((value + 0.055) / 1.055) ** 2.4
  })

  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
}

function getContrastRatio(foreground: string, background: string) {
  const foregroundLuminance = getRelativeLuminance(foreground)
  const backgroundLuminance = getRelativeLuminance(background)

  if (foregroundLuminance == null || backgroundLuminance == null) {
    return null
  }

  const lighter = Math.max(foregroundLuminance, backgroundLuminance)
  const darker = Math.min(foregroundLuminance, backgroundLuminance)

  return (lighter + 0.05) / (darker + 0.05)
}

function getBestTextColor(background: string) {
  const whiteContrast = getContrastRatio("#ffffff", background) ?? 1
  const darkContrast = getContrastRatio("#242424", background) ?? 1

  return whiteContrast >= darkContrast ? "#ffffff" : "#242424"
}

function generateBrandRamp(baseColor: string) {
  const stops = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160]

  return stops.map((stop) => {
    if (stop === 80) {
      return [stop, baseColor] as const
    }

    if (stop < 80) {
      return [stop, mixHex(baseColor, "#000000", (80 - stop) / 88)] as const
    }

    return [stop, mixHex(baseColor, "#ffffff", (stop - 80) / 96)] as const
  })
}

function createTokensFromBrand(baseColor: string, mode: ThemeMode): ColorTokenMap {
  const ramp = Object.fromEntries(generateBrandRamp(baseColor))

  if (mode === "dark") {
    const primary = ramp[110]
    const accent = mixHex(baseColor, "#000000", 0.58)

    return {
      ...defaultDarkTokens,
      primary,
      primaryForeground: getBestTextColor(primary),
      accent,
      accentForeground: mixHex(baseColor, "#ffffff", 0.76),
      ring: primary,
      chart1: primary,
      sidebarPrimary: primary,
      sidebarPrimaryForeground: getBestTextColor(primary),
      sidebarAccent: accent,
      sidebarAccentForeground: mixHex(baseColor, "#ffffff", 0.76),
      sidebarRing: primary,
    }
  }

  const primary = ramp[80]
  const accent = mixHex(baseColor, "#ffffff", 0.88)

  return {
    ...defaultLightTokens,
    primary,
    primaryForeground: getBestTextColor(primary),
    accent,
    accentForeground: mixHex(baseColor, "#000000", 0.08),
    ring: primary,
    chart1: primary,
    sidebarPrimary: primary,
    sidebarPrimaryForeground: getBestTextColor(primary),
    sidebarAccent: accent,
    sidebarAccentForeground: mixHex(baseColor, "#000000", 0.08),
    sidebarRing: primary,
  }
}

function createThemeStyle({
  tokens,
  radius,
  fontFamily,
  fontScale,
}: {
  tokens: ColorTokenMap
  radius: number
  fontFamily: string
  fontScale: number
}) {
  const style = {
    "--radius": `${radius}rem`,
    "--font-sans": fontFamily,
    fontFamily,
    fontSize: `${fontScale}%`,
  } as CssVarStyle

  for (const field of editableFields) {
    style[field.cssVar as `--${string}`] = tokens[field.key]
  }

  return style
}

function formatTokenLine(field: TokenField, tokens: ColorTokenMap) {
  return `  ${field.cssVar}: ${tokens[field.key]};`
}

function createCssExport({
  lightTokens,
  darkTokens,
  radius,
  fontFamily,
}: {
  lightTokens: ColorTokenMap
  darkTokens: ColorTokenMap
  radius: number
  fontFamily: string
}) {
  return [
    ":root {",
    `  --font-sans: ${fontFamily};`,
    `  --radius: ${radius}rem;`,
    ...editableFields.map((field) => formatTokenLine(field, lightTokens)),
    "}",
    "",
    ".dark {",
    ...editableFields.map((field) => formatTokenLine(field, darkTokens)),
    "}",
  ].join("\n")
}

function parseCssVariables(source: string) {
  const parsed = new Map<TokenField, string>()
  const matches = source.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)

  for (const match of matches) {
    const field = editableFieldsByCssVar.get(match[1])
    const value = match[2].trim()

    if (!field) {
      continue
    }

    const supportsColor =
      typeof CSS === "undefined" ? /^#[0-9a-fA-F]{3,8}$/.test(value) : CSS.supports("color", value)

    if (!supportsColor) {
      throw new Error(`${field.cssVar} is not a supported CSS color value.`)
    }

    parsed.set(field, value)
  }

  if (parsed.size === 0) {
    throw new Error("Paste CSS variables such as --primary: #0f6cbd; before importing.")
  }

  return parsed
}

function updateToken(tokens: ColorTokenMap, key: ColorTokenKey, value: string) {
  return {
    ...tokens,
    [key]: value,
  }
}

function ColorReference({ mode }: { mode?: "dark" }) {
  return (
    <ThemeShell mode={mode}>
      <ThemeHeader
        title={mode === "dark" ? "Dark Color Tokens" : "Color Tokens"}
        description="The registry keeps the shadcn CSS variable contract while applying Fluent-style neutral layers, brand actions, semantic state, focus, charts, and sidebar surfaces."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {colorGroups.map((group) => (
          <Section key={group.title} description={group.description} title={group.title}>
            <div className="grid gap-2 sm:grid-cols-2">
              {group.tokens.map((token) => (
                <TokenSwatch key={token} token={token} />
              ))}
            </div>
          </Section>
        ))}
      </div>
    </ThemeShell>
  )
}

function ComponentThemePreview({
  mode,
  style,
}: {
  mode?: "dark"
  style?: CssVarStyle
}) {
  return (
    <div className={mode} style={style}>
      <div className="rounded-lg border bg-background p-4 text-foreground">
        <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-md border bg-sidebar p-3 text-sidebar-foreground">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold">Accounts</span>
              <Button size="icon-sm" variant="ghost" aria-label="More actions">
                <MoreHorizontalIcon />
              </Button>
            </div>
            <div className="flex flex-col gap-1">
              {["Active accounts", "My open cases", "Recently viewed"].map(
                (item, index) => (
                  <Button
                    key={item}
                    className="justify-start"
                    variant={index === 0 ? "secondary" : "ghost"}
                  >
                    {item}
                  </Button>
                )
              )}
            </div>
          </aside>

          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <CardTitle>Contoso Retail</CardTitle>
                  <CardDescription>
                    Account summary and follow-up queue
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <InputGroup>
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupInput placeholder="Search activities" />
              </InputGroup>

              <div className="grid gap-4 md:grid-cols-3">
                <Field orientation="horizontal">
                  <Checkbox id="theme-qualified" defaultChecked />
                  <div>
                    <FieldLabel htmlFor="theme-qualified">Qualified</FieldLabel>
                    <FieldDescription>Ready for next activity</FieldDescription>
                  </div>
                </Field>
                <Field orientation="horizontal">
                  <Switch id="theme-sync" defaultChecked />
                  <div>
                    <FieldLabel htmlFor="theme-sync">Sync enabled</FieldLabel>
                    <FieldDescription>Web resource integration</FieldDescription>
                  </div>
                </Field>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Healthy</Badge>
                  <Badge variant="outline">Dynamics</Badge>
                </div>
              </div>

              <Separator />

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Activity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Progress</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Opportunity review</TableCell>
                    <TableCell>
                      <Badge>
                        <CheckIcon />
                        Current
                      </Badge>
                    </TableCell>
                    <TableCell className="min-w-32">
                      <Progress value={74} />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Document request</TableCell>
                    <TableCell>
                      <Badge variant="outline">Waiting</Badge>
                    </TableCell>
                    <TableCell className="min-w-32">
                      <Progress value={38} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function BrandRamp({ brandColor }: { brandColor: string }) {
  const ramp = generateBrandRamp(brandColor)

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {ramp.map(([stop, color]) => (
        <div key={stop} className="grid gap-2 rounded-md border bg-card p-3">
          <div className="h-10 rounded border" style={{ backgroundColor: color }} />
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium">Brand {stop}</span>
            <code className="text-xs text-muted-foreground">{color}</code>
          </div>
        </div>
      ))}
    </div>
  )
}

function ColorInput({
  field,
  value,
  onChange,
}: {
  field: TokenField
  value: string
  onChange: (value: string) => void
}) {
  const canUseColorInput = /^#[0-9a-fA-F]{6}$/.test(value)

  return (
    <div className="grid gap-2 rounded-md border bg-card p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <FieldLabel className="text-sm">{field.label}</FieldLabel>
          <code className="mt-1 block truncate text-xs text-muted-foreground">
            {field.cssVar}
          </code>
        </div>
        <input
          aria-label={`${field.label} swatch`}
          className="size-8 shrink-0 rounded border bg-transparent"
          disabled={!canUseColorInput}
          type="color"
          value={canUseColorInput ? value : "#000000"}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
      <Input
        aria-label={field.cssVar}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <p className="text-xs leading-5 text-muted-foreground">{field.role}</p>
    </div>
  )
}

function ContrastCard({
  label,
  foreground,
  background,
}: {
  label: string
  foreground: string
  background: string
}) {
  const ratio = getContrastRatio(foreground, background)
  const ratioLabel = ratio == null ? "n/a" : ratio.toFixed(2)
  const passesBody = ratio != null && ratio >= 4.5
  const passesLarge = ratio != null && ratio >= 3

  return (
    <div className="grid gap-2 rounded-md border bg-card p-3">
      <div
        className="rounded-md border px-3 py-2 text-sm font-medium"
        style={{ backgroundColor: background, color: foreground }}
      >
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant={passesBody ? "secondary" : "outline"}>{ratioLabel}:1</Badge>
        <Badge variant={passesBody ? "secondary" : "outline"}>Body AA</Badge>
        <Badge variant={passesLarge ? "secondary" : "outline"}>Large AA</Badge>
      </div>
    </div>
  )
}

function ThemeDesignerExperience() {
  const [mode, setMode] = useState<ThemeMode>("light")
  const [brandColor, setBrandColor] = useState("#0f6cbd")
  const [lightTokens, setLightTokens] = useState(defaultLightTokens)
  const [darkTokens, setDarkTokens] = useState(defaultDarkTokens)
  const [radius, setRadius] = useState(0.375)
  const [density, setDensity] = useState(2)
  const [fontFamily, setFontFamily] = useState(fontPresets[0].value)
  const [fontScale, setFontScale] = useState(100)
  const [importText, setImportText] = useState("")
  const [importError, setImportError] = useState<string | null>(null)

  const activeTokens = mode === "light" ? lightTokens : darkTokens
  const setActiveTokens = mode === "light" ? setLightTokens : setDarkTokens

  const previewStyle = useMemo(
    () =>
      createThemeStyle({
        tokens: activeTokens,
        radius,
        fontFamily,
        fontScale,
      }),
    [activeTokens, fontFamily, fontScale, radius]
  )

  const cssExport = useMemo(
    () =>
      createCssExport({
        lightTokens,
        darkTokens,
        radius,
        fontFamily,
      }),
    [darkTokens, fontFamily, lightTokens, radius]
  )

  function generateFromBrand() {
    setLightTokens(createTokensFromBrand(brandColor, "light"))
    setDarkTokens(createTokensFromBrand(brandColor, "dark"))
    setImportError(null)
  }

  function resetTheme() {
    setBrandColor("#0f6cbd")
    setLightTokens(defaultLightTokens)
    setDarkTokens(defaultDarkTokens)
    setRadius(0.375)
    setDensity(2)
    setFontFamily(fontPresets[0].value)
    setFontScale(100)
    setImportText("")
    setImportError(null)
  }

  function importVariables() {
    try {
      const parsed = parseCssVariables(importText)
      setActiveTokens((tokens) => {
        let nextTokens = tokens

        for (const [field, value] of parsed) {
          nextTokens = updateToken(nextTokens, field.key, value)
        }

        return nextTokens
      })
      setImportError(null)
    } catch (error) {
      setImportError(error instanceof Error ? error.message : "Unable to import CSS variables.")
    }
  }

  return (
    <ThemeShell className="max-w-[1440px]">
      <ThemeHeader
        title="Theme Designer"
        description="Generate a Fluent-style brand ramp from one color, then edit the shadcn token contract directly like a tweakcn workflow. The preview uses the same CSS variables as the registry components."
      >
        <div className="flex flex-wrap gap-2">
          <Button onClick={generateFromBrand}>
            <SparklesIcon />
            Generate
          </Button>
          <Button onClick={resetTheme} variant="outline">
            <RefreshCcwIcon />
            Reset
          </Button>
        </div>
      </ThemeHeader>

      <div className="grid gap-4 xl:grid-cols-[360px_minmax(0,1fr)]">
        <aside className="grid content-start gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Brand Ramp</CardTitle>
              <CardDescription>
                Fluent UI React theming starts with a 16-stop brand ramp. This
                generator creates a local approximation from one base color.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Field>
                <FieldLabel htmlFor="brand-color">Base brand color</FieldLabel>
                <div className="grid grid-cols-[48px_1fr] gap-2">
                  <input
                    id="brand-color"
                    className="h-8 w-12 rounded border bg-transparent"
                    type="color"
                    value={brandColor}
                    onChange={(event) => setBrandColor(event.target.value)}
                  />
                  <Input
                    value={brandColor}
                    onChange={(event) => setBrandColor(event.target.value)}
                  />
                </div>
                <FieldDescription>
                  Pick a base color, then generate light and dark token sets.
                </FieldDescription>
              </Field>

              <div className="grid gap-2">
                <FieldLabel htmlFor="brand-preset">Presets</FieldLabel>
                <NativeSelect
                  id="brand-preset"
                  className="w-full"
                  value={brandColor}
                  onChange={(event) => setBrandColor(event.target.value)}
                >
                  {brandPresets.map((preset) => (
                    <NativeSelectOption key={preset.name} value={preset.color}>
                      {preset.name}
                    </NativeSelectOption>
                  ))}
                </NativeSelect>
              </div>

              <BrandRamp brandColor={brandColor} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mode and Shape</CardTitle>
              <CardDescription>
                Tune preview mode, radius, density, and typography.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <FieldLabel htmlFor="mode">Mode</FieldLabel>
                <NativeSelect
                  id="mode"
                  className="w-full"
                  value={mode}
                  onChange={(event) => setMode(event.target.value as ThemeMode)}
                >
                  <NativeSelectOption value="light">Light</NativeSelectOption>
                  <NativeSelectOption value="dark">Dark</NativeSelectOption>
                </NativeSelect>
              </div>

              <Field>
                <FieldLabel>Radius: {radius.toFixed(3)}rem</FieldLabel>
                <Slider
                  max={1}
                  min={0}
                  step={0.025}
                  value={[radius]}
                  onValueChange={(value) => setRadius(value[0])}
                />
                <FieldDescription>
                  Fluent defaults are compact. Increase radius only when the
                  experience needs softer, larger surfaces.
                </FieldDescription>
              </Field>

              <Field>
                <FieldLabel>Density: {density}</FieldLabel>
                <Slider
                  max={4}
                  min={0}
                  step={1}
                  value={[density]}
                  onValueChange={(value) => setDensity(value[0])}
                />
                <FieldDescription>
                  Density is shown in the export notes and preview rhythm.
                </FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="font-family">Typography</FieldLabel>
                <NativeSelect
                  id="font-family"
                  className="w-full"
                  value={fontFamily}
                  onChange={(event) => setFontFamily(event.target.value)}
                >
                  {fontPresets.map((font) => (
                    <NativeSelectOption key={font.name} value={font.value}>
                      {font.name}
                    </NativeSelectOption>
                  ))}
                </NativeSelect>
              </Field>

              <Field>
                <FieldLabel>Font scale: {fontScale}%</FieldLabel>
                <Slider
                  max={115}
                  min={90}
                  step={1}
                  value={[fontScale]}
                  onValueChange={(value) => setFontScale(value[0])}
                />
              </Field>
            </CardContent>
          </Card>
        </aside>

        <div className="grid min-w-0 gap-4">
          <Tabs defaultValue="colors">
            <TabsList className="flex-wrap">
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
              <TabsTrigger value="import">Import</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <TabsContent value="colors">
              <Card>
                <CardHeader>
                  <CardTitle>Direct Token Editing</CardTitle>
                  <CardDescription>
                    Edit the active {mode} theme token by token. Values can be
                    hex, rgb, hsl, or oklch in text inputs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-5">
                  {tokenGroups.map((group) => (
                    <section key={group.title} className="grid gap-3">
                      <div>
                        <h3 className="text-sm font-semibold">{group.title}</h3>
                        <p className="text-xs leading-5 text-muted-foreground">
                          {group.description}
                        </p>
                      </div>
                      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                        {group.fields.map((field) => (
                          <ColorInput
                            key={field.cssVar}
                            field={field}
                            value={activeTokens[field.key]}
                            onChange={(value) =>
                              setActiveTokens((tokens) =>
                                updateToken(tokens, field.key, value)
                              )
                            }
                          />
                        ))}
                      </div>
                    </section>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="typography">
              <Card>
                <CardHeader>
                  <CardTitle>Typography Preview</CardTitle>
                  <CardDescription>
                    Preview the web ramp against the selected font and scale.
                  </CardDescription>
                </CardHeader>
                <CardContent style={previewStyle}>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Role</TableHead>
                        <TableHead>Weight</TableHead>
                        <TableHead>Size / line-height</TableHead>
                        <TableHead>Use</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {webTypeRamp.map(([role, weight, size, usage]) => (
                        <TableRow key={role}>
                          <TableCell className="font-medium">{role}</TableCell>
                          <TableCell>{weight}</TableCell>
                          <TableCell>
                            <code>{size}</code>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {usage}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="other">
              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Contrast Checks</CardTitle>
                    <CardDescription>
                      Quick AA checks for important token pairs.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3">
                    <ContrastCard
                      background={activeTokens.background}
                      foreground={activeTokens.foreground}
                      label="Body on page"
                    />
                    <ContrastCard
                      background={activeTokens.primary}
                      foreground={activeTokens.primaryForeground}
                      label="Primary action"
                    />
                    <ContrastCard
                      background={activeTokens.card}
                      foreground={activeTokens.mutedForeground}
                      label="Secondary text"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Export Notes</CardTitle>
                    <CardDescription>
                      Non-color choices to preserve with the token export.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 text-sm">
                    <div className="rounded-md border bg-background p-3">
                      <span className="font-medium">Density</span>
                      <p className="mt-1 text-muted-foreground">
                        Level {density}. Use lower density for repeated work
                        surfaces and higher density for spacious review flows.
                      </p>
                    </div>
                    <div className="rounded-md border bg-background p-3">
                      <span className="font-medium">Radius</span>
                      <p className="mt-1 text-muted-foreground">
                        {radius.toFixed(3)}rem. Keep grouped controls visually
                        connected by avoiding unnecessary rounded gaps.
                      </p>
                    </div>
                    <div className="rounded-md border bg-background p-3">
                      <span className="font-medium">Motion</span>
                      <p className="mt-1 text-muted-foreground">
                        Prefer short fades, constrained transforms, and reduced
                        motion alternatives for state changes.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="import">
              <Card>
                <CardHeader>
                  <CardTitle>Import CSS Variables</CardTitle>
                  <CardDescription>
                    Paste a shadcn or tweakcn-style variable block. Matching
                    variables update the active {mode} token set.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <Textarea
                    className="min-h-64 font-mono text-xs"
                    placeholder=":root {&#10;  --primary: #0f6cbd;&#10;  --background: oklch(0.985 0 0);&#10;}"
                    value={importText}
                    onChange={(event) => setImportText(event.target.value)}
                  />
                  {importError ? (
                    <p className="text-sm text-destructive">{importError}</p>
                  ) : null}
                </CardContent>
                <CardFooter>
                  <Button onClick={importVariables}>Import into {mode}</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="code">
              <Card>
                <CardHeader>
                  <CardTitle>Theme CSS</CardTitle>
                  <CardDescription>
                    Paste this into the token section of the registry stylesheet
                    after review.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    readOnly
                    className="min-h-[520px] font-mono text-xs"
                    value={cssExport}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <CardDescription>
                Current {mode} token set rendered through registry components.
              </CardDescription>
              <CardAction>
                <Badge variant="secondary">{brandColor}</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <ComponentThemePreview
                mode={mode === "dark" ? "dark" : undefined}
                style={previewStyle}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </ThemeShell>
  )
}

export const Overview: Story = {
  render: () => (
    <ThemeShell>
      <ThemeHeader
        title="EC Theme"
        description="A Fluent 2 aligned shadcn theme for Dynamics web resources. The section now documents principles, foundations, tokens, density, and an editable theme designer."
      >
        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm">
            <a href="?path=/story/theme--theme-designer">Open designer</a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="?path=/story/theme--design-principles">Principles</a>
          </Button>
        </div>
      </ThemeHeader>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {fluentPrinciples.map((principle) => (
          <Card key={principle.title}>
            <CardHeader>
              <CardTitle>{principle.title}</CardTitle>
              <CardDescription>{principle.userNeed}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              {principle.functional}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Theme Contract</CardTitle>
            <CardDescription>
              The editable theme stays inside the existing CSS variable API.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 sm:grid-cols-2">
            {["--background", "--foreground", "--primary", "--ring", "--radius", "--sidebar"].map(
              (token) => (
                <code key={token} className="rounded bg-muted px-2 py-1 text-xs">
                  {token}
                </code>
              )
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Designer Modes</CardTitle>
            <CardDescription>
              Fluent ramp generation and tweakcn-style direct editing.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm">
            <div className="flex items-start gap-2">
              <SparklesIcon className="mt-0.5 size-4 text-primary" />
              <span>Generate light and dark tokens from one brand color.</span>
            </div>
            <div className="flex items-start gap-2">
              <PaletteIcon className="mt-0.5 size-4 text-primary" />
              <span>Edit every color variable directly, including imported CSS.</span>
            </div>
            <div className="flex items-start gap-2">
              <CodeIcon className="mt-0.5 size-4 text-primary" />
              <span>Export reviewed CSS variables for the registry stylesheet.</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <ComponentThemePreview />
    </ThemeShell>
  ),
}

export const DesignPrinciples: Story = {
  name: "Design Principles",
  render: () => (
    <ThemeShell className="max-w-[1440px]">
      <ThemeHeader
        title="Design Principles"
        description="Fluent principles translated into concrete review criteria for this registry: how a component or page should feel, how it should behave, and how it should be verified."
      />

      <Section
        title="Core Fluent Principles"
        description="These four principles guide the emotional and functional quality bar for the theme, pages, and component examples."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {fluentPrinciples.map((principle) => (
            <Card key={principle.title}>
              <CardHeader>
                <CardTitle>{principle.title}</CardTitle>
                <CardDescription>{principle.userNeed}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 text-sm leading-6">
                <div>
                  <h3 className="font-medium">Functional standard</h3>
                  <p className="text-muted-foreground">{principle.functional}</p>
                </div>
                <div>
                  <h3 className="font-medium">Emotional standard</h3>
                  <p className="text-muted-foreground">{principle.emotional}</p>
                </div>
                <div>
                  <h3 className="font-medium">EC Registry application</h3>
                  <ul className="mt-2 grid gap-2 text-muted-foreground">
                    {principle.ecApplication.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Foundation Deep Dive"
        description="Detailed implementation guidance for the visual language and interaction system."
      >
        <div className="grid gap-4 xl:grid-cols-2">
          {foundationGuidance.map((item) => {
            const Icon = item.icon

            return (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="size-4 text-primary" />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm leading-6 text-muted-foreground">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <CheckIcon className="mt-1 size-3.5 shrink-0 text-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      <Section
        title="Review Checklist"
        description="Use this as the acceptance gate for new pages, blocks, and component examples."
      >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Does the page adapt at 320px, tablet, and desktop without horizontal scrolling?",
            "Does the hierarchy still work if color is removed or reduced?",
            "Are focus order, tab stops, and visible focus states predictable?",
            "Are semantic states paired with text, icon, or shape, not color alone?",
            "Are spacing and grouping used before adding borders or decorative containers?",
            "Are radius, elevation, and motion tied to component role rather than decoration?",
            "Does text use sentence case, plain language, and a logical heading order?",
            "Can the theme support light, dark, and branded variants without breaking contrast?",
            "Does the code use existing tokens instead of hardcoded one-off values?",
          ].map((item) => (
            <div key={item} className="flex gap-2 rounded-md border bg-card p-3 text-sm">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Source References">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {fluentSources.map((source) => (
            <Card key={source.href} size="sm">
              <CardHeader>
                <CardTitle>{source.title}</CardTitle>
                <CardDescription>{source.href}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild size="sm" variant="outline">
                  <a href={source.href}>Open source</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
    </ThemeShell>
  ),
}

export const Colors: Story = {
  render: () => <ColorReference />,
}

export const Typography: Story = {
  render: () => (
    <ThemeShell>
      <ThemeHeader
        title="Typography"
        description="Segoe UI gives the theme its Microsoft voice, while native system fallbacks keep the experience familiar and accessible across platforms."
      />
      <Card>
        <CardHeader>
          <CardTitle>Web Type Ramp</CardTitle>
          <CardDescription>
            Use semantic roles instead of one-off sizing.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Size / line-height</TableHead>
                <TableHead>Registry use</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {webTypeRamp.map(([role, weight, size, usage]) => (
                <TableRow key={role}>
                  <TableCell className="font-medium">{role}</TableCell>
                  <TableCell>{weight}</TableCell>
                  <TableCell>
                    <code>{size}</code>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{usage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        {[
          {
            title: "Casing",
            description:
              "Use sentence case for labels, headings, descriptions, and actions. Avoid all caps for attention.",
          },
          {
            title: "Alignment",
            description:
              "Use left alignment for LTR body content. Center or right align only when the content is short and intentionally separated.",
          },
          {
            title: "Contrast",
            description:
              "Standard text needs 4.5:1 contrast. Large text needs 3:1. Muted text still needs to remain legible.",
          },
        ].map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </ThemeShell>
  ),
}

export const Density: Story = {
  render: () => (
    <ThemeShell>
      <ThemeHeader
        title="Density, Radius, and Shape"
        description="Compact corners, four-pixel spacing, and restrained stroke keep Dynamics-style work surfaces readable and efficient."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <Section
          title="Radius"
          description="Fluent shape guidance uses compact default corners and larger radii only for larger surfaces."
        >
          <div className="grid gap-2 sm:grid-cols-2">
            {radiusTokens.map((item) => (
              <RadiusSwatch key={item.token} token={item.token} usage={item.usage} />
            ))}
          </div>
        </Section>
        <Section
          title="Spacing"
          description="Use spacing to express relationship and hierarchy before adding additional borders or surfaces."
        >
          <div className="grid gap-2">
            {densityValues.map(([step, value, usage]) => (
              <div
                key={step}
                className="grid items-center gap-3 rounded-md border bg-card p-3 text-sm md:grid-cols-[80px_1fr_90px]"
              >
                <code className="text-xs">gap-{step}</code>
                <div className="h-3 rounded-sm bg-primary" style={{ width: value }} />
                <span className="text-xs text-muted-foreground">{usage}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </ThemeShell>
  ),
}

export const ThemeDesigner: Story = {
  name: "Theme Designer",
  render: () => <ThemeDesignerExperience />,
}

export const Components: Story = {
  render: () => (
    <ThemeShell>
      <ThemeHeader
        title="Component Preview"
        description="A Dynamics-style work surface showing common controls against the active registry token set."
      />
      <ComponentThemePreview />
    </ThemeShell>
  ),
}

export const Dark: Story = {
  render: () => (
    <Tabs defaultValue="colors">
      <main className="dark min-h-svh bg-background text-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 p-6">
          <TabsList>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
          </TabsList>
          <TabsContent value="colors">
            <ColorReference mode="dark" />
          </TabsContent>
          <TabsContent value="components">
            <ThemeShell mode="dark">
              <ComponentThemePreview mode="dark" />
            </ThemeShell>
          </TabsContent>
        </div>
      </main>
    </Tabs>
  ),
}
