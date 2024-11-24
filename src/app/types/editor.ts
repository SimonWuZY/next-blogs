export interface ToolbarButton {
    icon: React.ReactNode
    label: string
    action: () => void
  }
  
  export interface EditorProps {
    initialValue?: string
    onChange?: (value: string) => void
  }
  
  export interface PreviewProps {
    markdown: string
  }
  
  