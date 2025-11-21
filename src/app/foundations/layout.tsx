import { FoundationSidebar } from '@/components/FoundationSidebar';

export default function FoundationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 73px)' }}>
      <FoundationSidebar />
      <main style={{ flex: 1, overflow: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
