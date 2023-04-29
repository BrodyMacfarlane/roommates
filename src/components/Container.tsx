export function PageContainer({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-12`}
    >
      {children}
    </main>
  )
}