import uiRegistryRaw from "@/components/ui/registry.json?raw"
import hooksRegistryRaw from "@/hooks/registry.json?raw"
import libRegistryRaw from "@/lib/registry.json?raw"
import themeRegistryRaw from "@/theme/registry.json?raw"

export type RegistryFile = {
  path: string
  target?: string
  type: string
}

export type RegistryItem = {
  name: string
  type: string
  title: string
  description: string
  files?: RegistryFile[]
  dependencies?: string[]
  registryDependencies?: string[]
}

type Registry = {
  items: RegistryItem[]
}

type ComponentGroup = {
  title: string
  description: string
  names: string[]
}

export type ComponentCatalogGroup = Omit<ComponentGroup, "names"> & {
  items: RegistryItem[]
}

const uiRegistry = JSON.parse(uiRegistryRaw) as Registry
const hooksRegistry = JSON.parse(hooksRegistryRaw) as Registry
const libRegistry = JSON.parse(libRegistryRaw) as Registry
const themeRegistry = JSON.parse(themeRegistryRaw) as Registry

export const componentItems = uiRegistry.items
export const supportItems = [
  ...libRegistry.items,
  ...hooksRegistry.items,
  ...themeRegistry.items,
]
export const registryItems = [...componentItems, ...supportItems]
export const componentNames = componentItems.map((item) => item.name)

const componentByName = new Map(
  componentItems.map((item) => [item.name, item])
)

const componentGroups: ComponentGroup[] = [
  {
    title: "Actions and Commands",
    description: "Buttons, command palettes, menus, toggles, and grouped actions.",
    names: [
      "button",
      "button-group",
      "toggle",
      "toggle-group",
      "command",
      "dropdown-menu",
      "context-menu",
      "menubar",
    ],
  },
  {
    title: "Inputs and Forms",
    description: "Fields, labels, selection controls, pickers, and text entry.",
    names: [
      "input",
      "textarea",
      "input-group",
      "input-otp",
      "field",
      "label",
      "checkbox",
      "radio-group",
      "switch",
      "slider",
      "select",
      "native-select",
      "combobox",
      "calendar",
    ],
  },
  {
    title: "Navigation and Layout",
    description: "Page structure, responsive shells, tabs, pagination, and scrollable regions.",
    names: [
      "breadcrumb",
      "navigation-menu",
      "pagination",
      "tabs",
      "accordion",
      "collapsible",
      "separator",
      "aspect-ratio",
      "resizable",
      "scroll-area",
      "carousel",
      "sidebar",
      "direction",
    ],
  },
  {
    title: "Overlays",
    description: "Dialogs, sheets, drawers, popovers, hover cards, and tooltips.",
    names: [
      "alert-dialog",
      "dialog",
      "drawer",
      "sheet",
      "popover",
      "hover-card",
      "tooltip",
    ],
  },
  {
    title: "Feedback and Status",
    description: "Alerts, badges, empty states, progress, loading, and notifications.",
    names: [
      "alert",
      "badge",
      "empty",
      "marker",
      "progress",
      "skeleton",
      "spinner",
      "sonner",
    ],
  },
  {
    title: "Data and Content",
    description: "Tables, charts, attachments, messages, avatars, and content primitives.",
    names: [
      "attachment",
      "avatar",
      "bubble",
      "card",
      "chart",
      "item",
      "kbd",
      "message",
      "message-scroller",
      "table",
    ],
  },
]

const groupedComponentNames = new Set(
  componentGroups.flatMap((group) => group.names)
)

export const catalogGroups: ComponentCatalogGroup[] = [
  ...componentGroups.map((group) => ({
    ...group,
    items: group.names
      .map((name) => componentByName.get(name))
      .filter((item): item is RegistryItem => Boolean(item)),
  })),
  {
    title: "Other Components",
    description: "Additional published registry components.",
    items: componentItems.filter((item) => !groupedComponentNames.has(item.name)),
  },
].filter((group) => group.items.length > 0)

export const packageDependencies = Array.from(
  new Set(componentItems.flatMap((item) => item.dependencies ?? []))
).sort()

export function getComponentStoryHref(item: RegistryItem) {
  return `?path=/story/components--${item.name}-story`
}

export function getStorybookManagerHref(item: RegistryItem) {
  return `./index.html${getComponentStoryHref(item)}`
}

export function getPublishedStorybookHref(item: RegistryItem) {
  return `/storybook-static/index.html${getComponentStoryHref(item)}`
}

export function getComponentItemByStoryName(storyName: string) {
  const name = storyName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

  return componentByName.get(name)
}

export function getFileTarget(item: RegistryItem) {
  const file = item.files?.[0]

  return file?.target ?? file?.path ?? "No file target"
}

export function getDependencyCount(item: RegistryItem) {
  return (
    (item.dependencies?.length ?? 0) +
    (item.registryDependencies?.length ?? 0)
  )
}
