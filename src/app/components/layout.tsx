import { ComponentSidebar } from '@/components/ComponentSidebar';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 73px)' }}>
      <ComponentSidebar />
      <main style={{ flex: 1, overflow: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
